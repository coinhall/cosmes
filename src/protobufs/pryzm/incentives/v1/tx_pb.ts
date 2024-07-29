// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/incentives/v1/tx.proto (package pryzm.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Bond } from "./bond_pb.js";
import { Unbonding } from "./unbonding_pb.js";

/**
 * @generated from message pryzm.incentives.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: pryzm.incentives.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.WeightedRewardToken
 */
export class WeightedRewardToken extends Message<WeightedRewardToken> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * weight is used for reward portion for each pool, when a reward is
   * accrued from dist module, it will be distributed to each pool according to the weights
   *
   * @generated from field: string weight = 2;
   */
  weight = "";

  constructor(data?: PartialMessage<WeightedRewardToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.WeightedRewardToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedRewardToken {
    return new WeightedRewardToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedRewardToken {
    return new WeightedRewardToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedRewardToken {
    return new WeightedRewardToken().fromJsonString(jsonString, options);
  }

  static equals(a: WeightedRewardToken | PlainMessage<WeightedRewardToken> | undefined, b: WeightedRewardToken | PlainMessage<WeightedRewardToken> | undefined): boolean {
    return proto3.util.equals(WeightedRewardToken, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgCreatePool
 */
export class MsgCreatePool extends Message<MsgCreatePool> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: repeated pryzm.incentives.v1.WeightedRewardToken reward_tokens = 3;
   */
  rewardTokens: WeightedRewardToken[] = [];

  constructor(data?: PartialMessage<MsgCreatePool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgCreatePool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reward_tokens", kind: "message", T: WeightedRewardToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePool {
    return new MsgCreatePool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePool {
    return new MsgCreatePool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePool {
    return new MsgCreatePool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePool | PlainMessage<MsgCreatePool> | undefined, b: MsgCreatePool | PlainMessage<MsgCreatePool> | undefined): boolean {
    return proto3.util.equals(MsgCreatePool, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgCreatePoolResponse
 */
export class MsgCreatePoolResponse extends Message<MsgCreatePoolResponse> {
  constructor(data?: PartialMessage<MsgCreatePoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgCreatePoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreatePoolResponse {
    return new MsgCreatePoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreatePoolResponse {
    return new MsgCreatePoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreatePoolResponse {
    return new MsgCreatePoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreatePoolResponse | PlainMessage<MsgCreatePoolResponse> | undefined, b: MsgCreatePoolResponse | PlainMessage<MsgCreatePoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreatePoolResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgUpdateRewardTokenWeight
 */
export class MsgUpdateRewardTokenWeight extends Message<MsgUpdateRewardTokenWeight> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: pryzm.incentives.v1.WeightedRewardToken reward_token = 3;
   */
  rewardToken?: WeightedRewardToken;

  constructor(data?: PartialMessage<MsgUpdateRewardTokenWeight>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUpdateRewardTokenWeight";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reward_token", kind: "message", T: WeightedRewardToken },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateRewardTokenWeight {
    return new MsgUpdateRewardTokenWeight().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateRewardTokenWeight {
    return new MsgUpdateRewardTokenWeight().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateRewardTokenWeight {
    return new MsgUpdateRewardTokenWeight().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateRewardTokenWeight | PlainMessage<MsgUpdateRewardTokenWeight> | undefined, b: MsgUpdateRewardTokenWeight | PlainMessage<MsgUpdateRewardTokenWeight> | undefined): boolean {
    return proto3.util.equals(MsgUpdateRewardTokenWeight, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse
 */
export class MsgUpdateRewardTokenWeightResponse extends Message<MsgUpdateRewardTokenWeightResponse> {
  constructor(data?: PartialMessage<MsgUpdateRewardTokenWeightResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateRewardTokenWeightResponse {
    return new MsgUpdateRewardTokenWeightResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateRewardTokenWeightResponse {
    return new MsgUpdateRewardTokenWeightResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateRewardTokenWeightResponse {
    return new MsgUpdateRewardTokenWeightResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateRewardTokenWeightResponse | PlainMessage<MsgUpdateRewardTokenWeightResponse> | undefined, b: MsgUpdateRewardTokenWeightResponse | PlainMessage<MsgUpdateRewardTokenWeightResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateRewardTokenWeightResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgAddRewardTokenToPool
 */
export class MsgAddRewardTokenToPool extends Message<MsgAddRewardTokenToPool> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: pryzm.incentives.v1.WeightedRewardToken reward_token = 3;
   */
  rewardToken?: WeightedRewardToken;

  constructor(data?: PartialMessage<MsgAddRewardTokenToPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgAddRewardTokenToPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reward_token", kind: "message", T: WeightedRewardToken },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddRewardTokenToPool {
    return new MsgAddRewardTokenToPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddRewardTokenToPool {
    return new MsgAddRewardTokenToPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddRewardTokenToPool {
    return new MsgAddRewardTokenToPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddRewardTokenToPool | PlainMessage<MsgAddRewardTokenToPool> | undefined, b: MsgAddRewardTokenToPool | PlainMessage<MsgAddRewardTokenToPool> | undefined): boolean {
    return proto3.util.equals(MsgAddRewardTokenToPool, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse
 */
export class MsgAddRewardTokenToPoolResponse extends Message<MsgAddRewardTokenToPoolResponse> {
  constructor(data?: PartialMessage<MsgAddRewardTokenToPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddRewardTokenToPoolResponse {
    return new MsgAddRewardTokenToPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddRewardTokenToPoolResponse {
    return new MsgAddRewardTokenToPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddRewardTokenToPoolResponse {
    return new MsgAddRewardTokenToPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAddRewardTokenToPoolResponse | PlainMessage<MsgAddRewardTokenToPoolResponse> | undefined, b: MsgAddRewardTokenToPoolResponse | PlainMessage<MsgAddRewardTokenToPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgAddRewardTokenToPoolResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgBond
 */
export class MsgBond extends Message<MsgBond> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgBond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgBond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBond {
    return new MsgBond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBond {
    return new MsgBond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBond {
    return new MsgBond().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBond | PlainMessage<MsgBond> | undefined, b: MsgBond | PlainMessage<MsgBond> | undefined): boolean {
    return proto3.util.equals(MsgBond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgBondResponse
 */
export class MsgBondResponse extends Message<MsgBondResponse> {
  /**
   * @generated from field: pryzm.incentives.v1.Bond bond = 1;
   */
  bond?: Bond;

  constructor(data?: PartialMessage<MsgBondResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgBondResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bond", kind: "message", T: Bond },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBondResponse {
    return new MsgBondResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBondResponse {
    return new MsgBondResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBondResponse {
    return new MsgBondResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgBondResponse | PlainMessage<MsgBondResponse> | undefined, b: MsgBondResponse | PlainMessage<MsgBondResponse> | undefined): boolean {
    return proto3.util.equals(MsgBondResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgUnbond
 */
export class MsgUnbond extends Message<MsgUnbond> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: string unbond_treasury = 3;
   */
  unbondTreasury = "";

  /**
   * @generated from field: string reward_treasury = 4;
   */
  rewardTreasury = "";

  /**
   * @generated from field: bool auto_claim = 5;
   */
  autoClaim = false;

  constructor(data?: PartialMessage<MsgUnbond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUnbond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "unbond_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reward_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "auto_claim", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnbond {
    return new MsgUnbond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnbond {
    return new MsgUnbond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnbond {
    return new MsgUnbond().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnbond | PlainMessage<MsgUnbond> | undefined, b: MsgUnbond | PlainMessage<MsgUnbond> | undefined): boolean {
    return proto3.util.equals(MsgUnbond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgUnbondResponse
 */
export class MsgUnbondResponse extends Message<MsgUnbondResponse> {
  /**
   * @generated from field: pryzm.incentives.v1.Unbonding unbonding = 1;
   */
  unbonding?: Unbonding;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 2;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgUnbondResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgUnbondResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unbonding", kind: "message", T: Unbonding },
    { no: 2, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnbondResponse {
    return new MsgUnbondResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnbondResponse {
    return new MsgUnbondResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnbondResponse {
    return new MsgUnbondResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUnbondResponse | PlainMessage<MsgUnbondResponse> | undefined, b: MsgUnbondResponse | PlainMessage<MsgUnbondResponse> | undefined): boolean {
    return proto3.util.equals(MsgUnbondResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgClaimReward
 */
export class MsgClaimReward extends Message<MsgClaimReward> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: string treasury = 3;
   */
  treasury = "";

  constructor(data?: PartialMessage<MsgClaimReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgClaimReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimReward {
    return new MsgClaimReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimReward {
    return new MsgClaimReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimReward {
    return new MsgClaimReward().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimReward | PlainMessage<MsgClaimReward> | undefined, b: MsgClaimReward | PlainMessage<MsgClaimReward> | undefined): boolean {
    return proto3.util.equals(MsgClaimReward, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgClaimRewardResponse
 */
export class MsgClaimRewardResponse extends Message<MsgClaimRewardResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 1;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<MsgClaimRewardResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgClaimRewardResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimRewardResponse {
    return new MsgClaimRewardResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimRewardResponse {
    return new MsgClaimRewardResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimRewardResponse {
    return new MsgClaimRewardResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimRewardResponse | PlainMessage<MsgClaimRewardResponse> | undefined, b: MsgClaimRewardResponse | PlainMessage<MsgClaimRewardResponse> | undefined): boolean {
    return proto3.util.equals(MsgClaimRewardResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgClaimUnbonding
 */
export class MsgClaimUnbonding extends Message<MsgClaimUnbonding> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 unbonding_id = 2;
   */
  unbondingId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgClaimUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgClaimUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unbonding_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimUnbonding {
    return new MsgClaimUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimUnbonding {
    return new MsgClaimUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimUnbonding {
    return new MsgClaimUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimUnbonding | PlainMessage<MsgClaimUnbonding> | undefined, b: MsgClaimUnbonding | PlainMessage<MsgClaimUnbonding> | undefined): boolean {
    return proto3.util.equals(MsgClaimUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgClaimUnbondingResponse
 */
export class MsgClaimUnbondingResponse extends Message<MsgClaimUnbondingResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgClaimUnbondingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgClaimUnbondingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimUnbondingResponse {
    return new MsgClaimUnbondingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimUnbondingResponse {
    return new MsgClaimUnbondingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimUnbondingResponse {
    return new MsgClaimUnbondingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClaimUnbondingResponse | PlainMessage<MsgClaimUnbondingResponse> | undefined, b: MsgClaimUnbondingResponse | PlainMessage<MsgClaimUnbondingResponse> | undefined): boolean {
    return proto3.util.equals(MsgClaimUnbondingResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgCancelUnbonding
 */
export class MsgCancelUnbonding extends Message<MsgCancelUnbonding> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 unbonding_id = 2;
   */
  unbondingId = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgCancelUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgCancelUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unbonding_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUnbonding {
    return new MsgCancelUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUnbonding {
    return new MsgCancelUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUnbonding {
    return new MsgCancelUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelUnbonding | PlainMessage<MsgCancelUnbonding> | undefined, b: MsgCancelUnbonding | PlainMessage<MsgCancelUnbonding> | undefined): boolean {
    return proto3.util.equals(MsgCancelUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgCancelUnbondingResponse
 */
export class MsgCancelUnbondingResponse extends Message<MsgCancelUnbondingResponse> {
  /**
   * @generated from field: pryzm.incentives.v1.Bond bond = 1;
   */
  bond?: Bond;

  constructor(data?: PartialMessage<MsgCancelUnbondingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgCancelUnbondingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bond", kind: "message", T: Bond },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUnbondingResponse {
    return new MsgCancelUnbondingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUnbondingResponse {
    return new MsgCancelUnbondingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUnbondingResponse {
    return new MsgCancelUnbondingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelUnbondingResponse | PlainMessage<MsgCancelUnbondingResponse> | undefined, b: MsgCancelUnbondingResponse | PlainMessage<MsgCancelUnbondingResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelUnbondingResponse, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgIncentivizePool
 */
export class MsgIncentivizePool extends Message<MsgIncentivizePool> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgIncentivizePool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgIncentivizePool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncentivizePool {
    return new MsgIncentivizePool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncentivizePool {
    return new MsgIncentivizePool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncentivizePool {
    return new MsgIncentivizePool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIncentivizePool | PlainMessage<MsgIncentivizePool> | undefined, b: MsgIncentivizePool | PlainMessage<MsgIncentivizePool> | undefined): boolean {
    return proto3.util.equals(MsgIncentivizePool, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.MsgIncentivizePoolResponse
 */
export class MsgIncentivizePoolResponse extends Message<MsgIncentivizePoolResponse> {
  constructor(data?: PartialMessage<MsgIncentivizePoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.MsgIncentivizePoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncentivizePoolResponse {
    return new MsgIncentivizePoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncentivizePoolResponse {
    return new MsgIncentivizePoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncentivizePoolResponse {
    return new MsgIncentivizePoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgIncentivizePoolResponse | PlainMessage<MsgIncentivizePoolResponse> | undefined, b: MsgIncentivizePoolResponse | PlainMessage<MsgIncentivizePoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgIncentivizePoolResponse, a, b);
  }
}

