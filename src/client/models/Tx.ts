import {
  CosmosTxV1beta1AuthInfo as ProtoAuthInfo,
  CosmosTxV1beta1Fee as ProtoFee,
  CosmosTxSigningV1beta1SignMode as ProtoSignMode,
  CosmosTxV1beta1TxBody as ProtoTxBody,
  CosmosTxV1beta1TxRaw as ProtoTxRaw,
} from "cosmes/protobufs";
import { StdSignDoc } from "cosmes/registry";

import { toAny } from "../utils/toAny";
import { Adapter } from "./Adapter";

type Data = {
  pubKey: Adapter;
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

export type ToStdSignDocParams = {
  chainId: string;
  accountNumber: bigint;
  sequence: bigint;
  fee: ProtoFee;
  memo?: string | undefined;
};

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
        signerInfos: [
          {
            publicKey: toAny(this.data.pubKey.toProto()),
            sequence: sequence,
            modeInfo: {
              sum: {
                case: "single",
                value: {
                  mode: signMode,
                },
              },
            },
          },
        ],
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
   * Returns an amino encoded tx ready to be signed by a wallet.
   */
  public toStdSignDoc({
    chainId,
    accountNumber,
    sequence,
    fee,
    memo,
  }: ToStdSignDocParams): StdSignDoc {
    return {
      chain_id: chainId,
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
}
