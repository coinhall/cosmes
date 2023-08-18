import { PlainMessage } from "@bufbuild/protobuf";
import { IbcApplicationsTransferV1MsgTransfer as ProtoMsgIbcTransfer } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgIbcTransfer>>;

export class MsgIbcTransfer implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgIbcTransfer(this.data);
  }

  public toAmino() {
    return {
      type: "ibc/MsgTransfer",
      value: this.data,
    };
  }
}
