import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosDistributionV1beta1MsgWithdrawDelegatorReward as ProtoMsgWithdrawDelegatorRewards } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgWithdrawDelegatorRewards>>;

export class MsgWithdrawDelegatorRewards implements Adapter {
  private readonly data: Data;
  private readonly isLegacy: boolean;

  constructor(data: Data, isLegacy = false) {
    this.data = data;
    this.isLegacy = isLegacy;
  }

  public toProto() {
    return new ProtoMsgWithdrawDelegatorRewards(this.data);
  }

  public toAmino() {
    return {
      type: this.isLegacy ? "distribution/MsgWithdrawDelegationReward" : "cosmos-sdk/MsgWithdrawDelegationReward",
      value: {
        validator_address: this.data.validatorAddress,
        delegator_address: this.data.delegatorAddress,
        },
    };
  }
}