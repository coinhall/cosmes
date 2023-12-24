import { PlainMessage } from "@bufbuild/protobuf";
import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgExecuteContractCompat>, "msg">> & {
    msg: T;
  }
>;

/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * Metamask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export class MsgExecuteContractInjective<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgExecuteContractCompat({
      ...this.data,
      msg: JSON.stringify(this.data.msg),
    });
  }

  public toAmino() {
    return {
      type: "wasmx/MsgExecuteContractCompat",
      value: this.data,
    };
  }
}
