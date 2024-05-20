import { PlainMessage } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgMigrateContract as ProtoMsgMigrateContract } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgMigrateContract>, "msg">> & {
    msg: T;
  }
>;

export class MsgMigrateContract<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgMigrateContract({
      ...this.data,
      msg: utf8.decode(JSON.stringify(this.data.msg)),
    });
  }

  public toAmino() {
    return {
      type: "wasm/MsgMigrateContract",
      value: {
        sender: this.data.sender,
        code_id: this.data.codeId,
        contract: this.data.contract,
        msg: this.data.msg,
      }
    };
  }
}
