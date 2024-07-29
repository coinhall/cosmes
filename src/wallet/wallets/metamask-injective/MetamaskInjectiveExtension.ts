import { PlainMessage } from "@bufbuild/protobuf";
import { RpcClient, Secp256k1PubKey, Tx } from "cosmes/client";
import { base16, base64, ethhex, utf8 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxSigningV1beta1SignMode as SignMode,
  InjectiveTypesV1beta1ExtensionOptionsWeb3Tx as Web3Tx,
} from "cosmes/protobufs";
import type { StdSignDoc } from "cosmes/registry";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { WalletError } from "../WalletError";
import { Ethereum } from "./types";

export class MetamaskInjectiveExtension extends ConnectedWallet {
  private readonly ext: Ethereum;
  private readonly ethAddress: string;

  constructor(
    walletName: WalletName,
    label: string | undefined,
    ext: Ethereum,
    chainId: string,
    pubKey: Secp256k1PubKey,
    ethAddress: string,
    bech32Address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      walletName,
      WalletType.EXTENSION,
      label,
      chainId,
      pubKey,
      bech32Address,
      rpc,
      gasPrice
    );
    this.ext = ext;
    this.ethAddress = ethAddress;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const signature = await WalletError.wrap(
      this.ext.request<string>({
        method: "personal_sign",
        params: [base16.encode(utf8.decode(data)), this.ethAddress],
      })
    );
    if (!signature) {
      throw new Error("Failed to sign arbitrary message");
    }
    const signatureBuffer = ethhex.decode(signature);
    return {
      data,
      pubKey: this.pubKey.toAmino().value.key,
      signature: base64.encode(signatureBuffer),
    };
  }

  protected async signAndBroadcastTx(
    { msgs, memo = "", timeoutHeight = 1_000_000_000_000_000n }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      chainId: this.chainId,
      pubKey: this.pubKey,
      msgs: msgs,
    });
    const stdSignDoc = tx.toStdSignDoc({
      accountNumber,
      sequence,
      fee,
      memo,
      timeoutHeight,
    });
    const typedData = this.getTypedData(stdSignDoc);

    const signature = await WalletError.wrap(
      this.ext.request<string>({
        method: "eth_signTypedData_v4",
        params: [this.ethAddress, JSON.stringify(typedData)],
      })
    );
    if (!signature) {
      throw new Error("Failed to sign transaction");
    }

    const txRaw = tx.toSignedProto({
      fee,
      sequence,
      signMode: SignMode.LEGACY_AMINO_JSON,
      signature: ethhex.decode(signature),
      memo,
      timeoutHeight,
      extensionOptions: [new Web3Tx({ typedDataChainID: 1n })],
    });
    return RpcClient.broadcastTx(this.rpc, txRaw);
  }

  /**
   * Returns the TypedData to be signed by MetaMask's `eth_signTypedData_v4` method.
   *
   * @see https://github.com/InjectiveLabs/injective-ts/blob/cd1e67f7fd039c93dd4c5134d2d8dbfe5d009d79/packages/sdk-ts/src/core/modules/tx/eip712/eip712.ts#L14
   */
  private getTypedData(stdSignDoc: StdSignDoc) {
    // https://github.com/InjectiveLabs/injective-ts/blob/cd1e67f7fd039c93dd4c5134d2d8dbfe5d009d79/packages/sdk-ts/src/core/modules/tx/eip712/utils.ts#L9
    const domain = {
      name: "Injective Web3",
      version: "1.0.0",
      chainId: "0x1", // hardcoded to mainnet
      salt: "0",
      verifyingContract: "cosmos",
    };

    // https://github.com/InjectiveLabs/injective-ts/blob/cd1e67f7fd039c93dd4c5134d2d8dbfe5d009d79/packages/sdk-ts/src/core/modules/tx/eip712/utils.ts#L21
    const types: Record<string, { name: string; type: string }[]> = {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "string" },
        { name: "salt", type: "string" },
      ],
      Tx: [
        { name: "account_number", type: "string" },
        { name: "chain_id", type: "string" },
        { name: "fee", type: "Fee" },
        { name: "memo", type: "string" },
        { name: "msgs", type: "Msg[]" },
        { name: "sequence", type: "string" },
        { name: "timeout_height", type: "string" },
      ],
      Fee: [
        { name: "amount", type: "Coin[]" },
        { name: "gas", type: "string" },
      ],
      Coin: [
        { name: "denom", type: "string" },
        { name: "amount", type: "string" },
      ],
      Msg: [
        { name: "type", type: "string" },
        { name: "value", type: "MsgValue" },
      ],
    };

    // Only adding types for the first message likely means txs with different
    // messages cannot be executed, but this is similar to Injective's behaviour.
    // See: https://github.com/InjectiveLabs/injective-ts/blob/cd1e67f7fd039c93dd4c5134d2d8dbfe5d009d79/packages/sdk-ts/src/core/modules/tx/eip712/eip712.ts#L27
    const { type, value } = stdSignDoc.msgs[0];
    switch (type) {
      case "cosmos-sdk/MsgSend":
        types.MsgValue = [
          { name: "from_address", type: "string" },
          { name: "to_address", type: "string" },
          { name: "amount", type: "TypeAmount[]" },
        ];
        types.TypeAmount = [
          { name: "denom", type: "string" },
          { name: "amount", type: "string" },
        ];
        break;
      case "wasmx/MsgExecuteContractCompat":
        types.MsgValue = [
          { name: "sender", type: "string" },
          { name: "contract", type: "string" },
          { name: "msg", type: "string" },
        ];
        // Bug in Injective where `funds` must be removed if it is "empty"
        if ("funds" in value) {
          types.MsgValue.push({ name: "funds", type: "string" });
        }
        break;
      default:
        // TODO: support other amino types
        throw new Error("Unsupported message type");
    }

    return {
      primaryType: "Tx",
      domain,
      types,
      message: stdSignDoc,
    };
  }
}
