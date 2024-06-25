import { RpcClient, Secp256k1PubKey, ToSignDocParams, ToStdSignDocParams, Tx } from "cosmes/client";
import {
  base64,
  resolveBech32Address,
  resolveKeyPair,
  signAmino,
  signDirect,
  utf8,
} from "cosmes/codec";
import { CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";
import { StdSignDoc } from "cosmes/registry";

import { Prettify } from "../../../typeutils/prettify";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { ChainInfo } from "../WalletController";
import { TxRaw } from "cosmes/protobufs/cosmos/tx/v1beta1/tx_pb";

export type ConnectMnemonicWalletOptions = Prettify<
  {
    /**
     * Also known as the 12-24 words seed phrase. **Warning: keep this safe!**
     */
    mnemonic: string;
    /**
     * The address prefix for the chain (eg. "osmo").
     */
    bech32Prefix: string;
    /**
     * Coin type number for HD derivation (default: `118`). For Terra chains, change
     * this to `330`.
     */
    coinType?: number | undefined;
    /**
     * Address index number for HD derivation (default: `0`).
     */
    index?: number | undefined;

    algo?: "secp256k1" | "ethsecp256k1" | undefined;
  } & ChainInfo<string>
>;

/**
 * This wallet accepts a mnemonic (aka seed phrase) and is able to directly sign
 * and broadcast transactions to the chain without relying on an external wallet
 * like Keplr or Station. Use this if you want to programmatically broadcast
 * transactions. Unlike the other wallets, there is no Controller class and this
 * object must be instantiated directly.
 *
 * ```ts
 * // Example usage for Osmosis chain
 * const wallet = new MnemonicWallet({
 *   mnemonic: "REPLACE WITH 12-24 WORDS SEED PHRASE", // TODO
 *   bech32Prefix: "osmo",
 *   chainId: "osmosis-1",
 *   rpc: "https://rpc.osmosis.zone",
 *   gasPrice: {
 *     amount: "0.0025",
 *     denom: "uosmo",
 *   },
 *   coinType: 118, // optional (default: 118)
 *   index: 0, // optional (default: 0)
 * });
 * console.log("Address:", wallet.address); // prints the bech32 address
 *
 * // Sign an arbitrary message
 * const { signature } = await wallet.signArbitrary("Hello from CosmES!");
 * console.log("Signature:", signature);
 *
 * // Sign and broadcast a tx
 * const res = await wallet.broadcastTxSync( ... ); // TODO
 * console.log("Tx result:", res);
 * ```
 */
export class MnemonicWallet extends ConnectedWallet {
  public readonly publicKey: string;
  public readonly privateKey: Uint8Array;
  public readonly keyType: "secp256k1" | "ethsecp256k1";
  public readonly algo: string | undefined;
  private readonly useAmino: boolean;

  constructor({
    mnemonic,
    bech32Prefix,
    coinType,
    index,
    algo,
    chainId,
    gasPrice,
    rpc,
  }: ConnectMnemonicWalletOptions,useAmino: boolean) {
    const { publicKey, privateKey } = resolveKeyPair(mnemonic, {
      coinType,
      index,
    });

    const keyType =
      algo ? algo :
      chainId.startsWith("injective") || chainId.startsWith("dymension") || chainId.startsWith("planq") 
        ? "ethsecp256k1"
        : "secp256k1"


    const address = resolveBech32Address(publicKey, bech32Prefix, keyType);
    
    super(
      // We typecast here instead of adding "mnemonic" to `WalletName` and
      // `WalletType` as this wallet is considered a special wallet that is
      // unlikely to be used by most consumers of CosmES.
      "mnemonic" as WalletName,
      "mnemonic" as WalletType,
      chainId,
      new Secp256k1PubKey({
        chainId,
        algo,
        key: publicKey,
      }),
      address,
      rpc,
      gasPrice,
     
    );
    this.publicKey = base64.encode(publicKey);
    this.privateKey = privateKey;
    this.algo = algo
    this.keyType = keyType;
    this.useAmino = useAmino;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    // This sign doc follows ADR 036 specs.
    // See: https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md
    const doc: StdSignDoc = {
      chain_id: "",
      account_number: "0",
      sequence: "0",
      fee: {
        gas: "0",
        amount: [],
      },
      msgs: [
        {
          type: "sign/MsgSignData",
          value: {
            signer: this.address,
            data: base64.encode(utf8.decode(data)),
          },
        },
      ],
      memo: "",
    };
    const signature = signAmino(doc, this.privateKey, this.keyType);
    return {
      data,
      pubKey: this.publicKey,
      signature: base64.encode(signature),
    };
  }

  public async signAndBroadcastTx(
    { msgs, memo, timeoutHeight }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
      const tx = new Tx({
        chainId: this.chainId,
        pubKey: this.pubKey,
        msgs: msgs,
      });
      const params: ToStdSignDocParams | ToSignDocParams = {
        accountNumber,
        sequence,
        fee,
        memo,
        timeoutHeight,
      };

      let txRaw: TxRaw;
      if (this.useAmino) {
        const signature = signAmino(tx.toStdSignDoc(params), this.privateKey, this.keyType)
        txRaw = tx.toSignedAmino(tx.toStdSignDoc(params), signature);
      } 
      else {
        const signature = signDirect(tx.toSignDoc(params), this.privateKey, this.keyType)
        txRaw = tx.toSignedDirect(tx.toSignDoc(params), signature);
      }
      return RpcClient.broadcastTx(this.rpc, txRaw);
  }

}
