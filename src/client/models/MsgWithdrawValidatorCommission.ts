import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosDistributionV1beta1MsgWithdrawValidatorCommission as ProtoMsgWithdrawValidatorCommission } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgWithdrawValidatorCommission>>;

export class MsgWithdrawValidatorCommission implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgWithdrawValidatorCommission(this.data);
  }

  public toAmino() {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: {
        validator_address: this.data.validatorAddress,
      },
    };
  }
}