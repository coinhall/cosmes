import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgUndelegate as ProtoMsgUndelegate } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgUndelegate>>;

export class MsgUndelegate implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgUndelegate(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgUndelegate",
      value: {
        delegator_address: this.data.delegatorAddress,
        validator_address: this.data.validatorAddress,
        amount: this.data.amount,
        },
    };
  }
}