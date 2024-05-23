// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/estaking/params.proto (package elys.estaking, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IncentiveInfo } from "./incentive_pb.js";
import { DexRewardsTracker } from "./dex_rewards_tracker_pb.js";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message elys.estaking.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: elys.estaking.IncentiveInfo stake_incentives = 1;
   */
  stakeIncentives?: IncentiveInfo;

  /**
   * @generated from field: string eden_commit_val = 2;
   */
  edenCommitVal = "";

  /**
   * @generated from field: string edenb_commit_val = 3;
   */
  edenbCommitVal = "";

  /**
   * Maximum eden reward apr for stakers - [0 - 0.3]
   *
   * @generated from field: string max_eden_reward_apr_stakers = 5;
   */
  maxEdenRewardAprStakers = "";

  /**
   * @generated from field: string eden_boost_apr = 6;
   */
  edenBoostApr = "";

  /**
   * Tracking dex rewards given to stakers
   *
   * @generated from field: elys.estaking.DexRewardsTracker dex_rewards_stakers = 7;
   */
  dexRewardsStakers?: DexRewardsTracker;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stake_incentives", kind: "message", T: IncentiveInfo },
    { no: 2, name: "eden_commit_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "edenb_commit_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "max_eden_reward_apr_stakers", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "eden_boost_apr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "dex_rewards_stakers", kind: "message", T: DexRewardsTracker },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

