import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosBankV1beta1MsgSend as ProtoMsgSend } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgSend>>;

export class MsgSend implements Adapter {
  private readonly data: Data;
  private readonly legacy: boolean;

  constructor(data: Data, legacy = false) {
    this.data = data;
    this.legacy = legacy;
  }

  public toProto() {
    return new ProtoMsgSend(this.data);
  }

  public toAmino() {
    return {
      type: this.legacy ? "bank/MsgSend" : "cosmos-sdk/MsgSend",
      value: {
        from_address: this.data.fromAddress,
        to_address: this.data.toAddress,
        amount: this.data.amount,
      },
    };
  }
}
