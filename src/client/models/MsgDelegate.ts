import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgDelegate as ProtoMsgDelegate } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgDelegate>>;

export class MsgDelegate implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgDelegate(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgDelegate",
      value: {
        delegator_address: this.data.delegatorAddress,
        validator_address: this.data.validatorAddress,
        amount: this.data.amount,
        },
    };
  }
}