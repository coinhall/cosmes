import type { StdSignDoc } from "@keplr-wallet/types";
import { Secp256k1PubKey, broadcastTx } from "cosmes/client";
import {
  base64,
  resolveBech32Address,
  resolveKeyPair,
  signAmino,
  utf8,
} from "cosmes/codec";
import { CosmosTxSigningV1beta1SignMode as SignMode } from "cosmes/protobufs";

import { Prettify } from "../../../typeutils/prettify";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { ChainInfo } from "../WalletController";

export type ConnectMnemonicWalletOptions = Prettify<
  {
    mnemonic: string;
    bech32Prefix: string;
    coinType?: number | undefined;
    index?: number | undefined;
  } & ChainInfo<string>
>;

export class MnemonicWallet extends ConnectedWallet {
  private readonly publicKey: string;
  private readonly privateKey: Uint8Array;

  constructor({
    mnemonic,
    bech32Prefix,
    coinType,
    index,
    chainId,
    gasPrice,
    rpc,
  }: ConnectMnemonicWalletOptions) {
    const { publicKey, privateKey } = resolveKeyPair(mnemonic, {
      coinType,
      index,
    });
    const address = resolveBech32Address(publicKey, bech32Prefix);
    super(
      // We typecast here instead of adding "mnemonic" as actual names/types
      // to prevent confusing users who are likely never going to use this.
      "mnemonic" as WalletName,
      "mnemonic" as WalletType,
      chainId,
      new Secp256k1PubKey({ key: publicKey }),
      address,
      rpc,
      gasPrice
    );
    this.publicKey = base64.encode(publicKey);
    this.privateKey = privateKey;
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
    const signature = signAmino(doc, this.privateKey);
    return {
      data,
      pubKey: this.publicKey,
      signature: base64.encode(signature),
    };
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    const { tx, sequence, accountNumber, fee } = await this.prepBroadcastTx(
      unsignedTx,
      opts
    );
    const { memo } = unsignedTx;
    const doc = tx.toStdSignDoc({
      chainId: this.chainId,
      accountNumber,
      sequence,
      fee,
      memo,
    });
    const signature = signAmino(doc, this.privateKey);
    return broadcastTx(this.rpc, {
      tx,
      sequence,
      fee,
      // TODO: use SignMode.DIRECT
      signMode: SignMode.LEGACY_AMINO_JSON,
      signature,
      memo,
    });
  }
}
