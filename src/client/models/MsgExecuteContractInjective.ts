import { PlainMessage } from "@bufbuild/protobuf";
import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "cosmes/protobufs";

import { Adapter } from "./Adapter";
import type { MsgExecuteContract } from "./MsgExecuteContract";

// Take in the same type as `MsgExecuteContract` to simplify consumer code
type Data<T> = ConstructorParameters<typeof MsgExecuteContract<T>>[0];

/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * Metamask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export class MsgExecuteContractInjective<T> implements Adapter {
  private readonly data: PlainMessage<ProtoMsgExecuteContractCompat>;

  constructor(data: Data<T>) {
    this.data = {
      ...data,
      msg: JSON.stringify(data.msg),
      funds: data.funds
        .map(({ amount, denom }) => `${amount}${denom}`)
        .join(","),
    };
  }

  public toProto() {
    return new ProtoMsgExecuteContractCompat(this.data);
  }

  public toAmino() {
    return {
      type: "wasmx/MsgExecuteContractCompat",
      value: this.data,
    };
  }
}
