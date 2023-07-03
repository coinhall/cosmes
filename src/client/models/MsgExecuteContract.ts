import { PlainMessage } from "@bufbuild/protobuf";
import { fromStringToUint8Array } from "cosmes/codec";
import { CosmwasmWasmV1MsgExecuteContract as ProtoMsgExecuteContract } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgExecuteContract>, "msg">> & {
    msg: T;
  }
>;

export class MsgExecuteContract<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgExecuteContract({
      ...this.data,
      msg: fromStringToUint8Array(JSON.stringify(this.data.msg)),
    });
  }

  public toAmino() {
    return {
      type: "wasm/MsgExecuteContract",
      value: this.data,
    };
  }
}
