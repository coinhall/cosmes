import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgBeginRedelegate as ProtoMsgBeginRedelegate } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgBeginRedelegate>>;

export class MsgBeginRedelegate implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgBeginRedelegate(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgBeginRedelegate",
      value: {
        delegator_address: this.data.delegatorAddress,
        validator_src_address: this.data.validatorSrcAddress,
        validator_dst_address: this.data.validatorDstAddress,
        amount: this.data.amount,
        },
    };
  }
}