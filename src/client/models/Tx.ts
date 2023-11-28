import { PlainMessage } from "@bufbuild/protobuf";
import {
  CosmosTxV1beta1AuthInfo as ProtoAuthInfo,
  CosmosTxV1beta1Fee as ProtoFee,
  CosmosTxSigningV1beta1SignMode as ProtoSignMode,
  CosmosTxV1beta1SignerInfo as ProtoSignerInfo,
  CosmosTxV1beta1TxBody as ProtoTxBody,
  CosmosTxV1beta1TxRaw as ProtoTxRaw,
  CosmosTxV1beta1SignDoc as SignDoc,
} from "cosmes/protobufs";
import { StdSignDoc } from "cosmes/registry";

import { toAny } from "../utils/toAny";
import { Adapter } from "./Adapter";
import { Secp256k1PubKey } from "./Secp256k1PubKey";

type Data = {
  chainId: string;
  pubKey: Secp256k1PubKey;
  msgs: Adapter[];
};

export type ToSignedProtoParams = {
  sequence: bigint;
  fee: ProtoFee;
  signMode: ProtoSignMode;
  signature: Uint8Array;
  memo?: string | undefined;
};

export type ToUnsignedProtoParams = Pick<
  ToSignedProtoParams,
  "sequence" | "memo"
>;

export type ToSignDocParams = {
  accountNumber: bigint;
  sequence: bigint;
  fee: ProtoFee;
  memo?: string | undefined;
};

export type ToStdSignDocParams = ToSignDocParams;

export class Tx {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  /**
   * Returns the signed, proto encoded tx ready to be broadcasted. To create an
   * unsigned tx for the purpose of simulating it, use {@link toUnsignedProto}.
   */
  public toSignedProto({
    fee,
    sequence,
    signMode,
    signature,
    memo,
  }: ToSignedProtoParams): ProtoTxRaw {
    return new ProtoTxRaw({
      authInfoBytes: new ProtoAuthInfo({
        fee: fee,
        signerInfos: [this.getSignerInfo(sequence, signMode)],
      }).toBinary(),
      bodyBytes: new ProtoTxBody({
        messages: this.data.msgs.map((m) => toAny(m.toProto())),
        memo: memo,
      }).toBinary(),
      signatures: [signature],
    });
  }

  /**
   * Returns the proto encoded tx with the sign mode set to UNSPECIFIED, useful
   * for simulating the tx. To create a signed tx, use {@link toSignedProto}.
   */
  public toUnsignedProto(info: ToUnsignedProtoParams): ProtoTxRaw {
    return this.toSignedProto({
      ...info,
      fee: new ProtoFee(),
      signMode: ProtoSignMode.UNSPECIFIED,
      signature: new Uint8Array(),
    });
  }

  /**
   * Returns the unsigned, proto encoded tx ready to be signed by a wallet.
   */
  public toSignDoc({
    accountNumber,
    sequence,
    fee,
    memo,
  }: ToSignDocParams): SignDoc {
    return new SignDoc({
      chainId: this.data.chainId,
      accountNumber: accountNumber,
      authInfoBytes: new ProtoAuthInfo({
        fee: fee,
        signerInfos: [this.getSignerInfo(sequence, ProtoSignMode.DIRECT)],
      }).toBinary(),
      bodyBytes: new ProtoTxBody({
        messages: this.data.msgs.map((m) => toAny(m.toProto())),
        memo: memo,
      }).toBinary(),
    });
  }

  /**
   * Returns the unsigned, amino encoded tx ready to be signed by a wallet.
   */
  public toStdSignDoc({
    accountNumber,
    sequence,
    fee,
    memo,
  }: ToStdSignDocParams): StdSignDoc {
    return {
      chain_id: this.data.chainId,
      account_number: accountNumber.toString(),
      sequence: sequence.toString(),
      fee: {
        amount: fee.amount,
        gas: fee.gasLimit.toString(),
      },
      msgs: this.data.msgs.map((m) => m.toAmino()),
      memo: memo ?? "",
    };
  }

  /**
   * Returns the signer info. The chain ID is used to determine if the public key
   * should be encoded using Injective's custom protobuf.
   *
   * **Warning**: Injective's chain ID might change, causing potential issues here.
   */
  private getSignerInfo(
    sequence: bigint,
    mode: ProtoSignMode
  ): PlainMessage<ProtoSignerInfo> {
    return {
      publicKey: toAny(
        // TODO: Injective's chain ID might change in the future
        this.data.pubKey.toProto(this.data.chainId.startsWith("injective-"))
      ),
      sequence: sequence,
      modeInfo: {
        sum: {
          case: "single",
          value: {
            mode: mode,
          },
        },
      },
    };
  }
}
