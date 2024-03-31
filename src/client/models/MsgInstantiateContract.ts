import { PlainMessage } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgInstantiateContract as ProtoMsgInstantiateContract } from "cosmes/protobufs";

import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data<T> = Prettify<
  DeepPrettify<Omit<PlainMessage<ProtoMsgInstantiateContract>, "msg">> & {
    msg: T;
  }
>;

export class MsgInstantiateContract<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgInstantiateContract({
      ...this.data,
      msg: utf8.decode(JSON.stringify(this.data.msg)),
    });
  }

  public toAmino() {
    return {
      type: "wasm/MsgInstantiateContract",
      value: {
        sender: this.data.sender,
        admin: this.data.admin,
        code_id: this.data.codeId,
        label: this.data.label,
        msg: this.data.msg,
        funds: this.data.funds,
      }
    };
  }
}
