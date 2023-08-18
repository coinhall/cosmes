import { PlainMessage } from "@bufbuild/protobuf";
import { IbcApplicationsTransferV1MsgTransfer as ProtoMsgTransfer } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgTransfer>>;

export class MsgTransfer implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgTransfer(this.data);
  }

  public toAmino() {
    return {
      type: "ibc/MsgTransfer",
      value: this.data,
    };
  }
}
