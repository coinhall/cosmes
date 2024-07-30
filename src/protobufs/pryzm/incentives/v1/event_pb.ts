// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/incentives/v1/event.proto (package pryzm.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Bond } from "./bond_pb.js";
import { Pool } from "./pool_pb.js";
import { Unbonding } from "./unbonding_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message pryzm.incentives.v1.EventSetParams
 */
export class EventSetParams extends Message<EventSetParams> {
  /**
   * @generated from field: pryzm.incentives.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<EventSetParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventSetParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetParams {
    return new EventSetParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetParams | PlainMessage<EventSetParams> | undefined, b: EventSetParams | PlainMessage<EventSetParams> | undefined): boolean {
    return proto3.util.equals(EventSetParams, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventSetBond
 */
export class EventSetBond extends Message<EventSetBond> {
  /**
   * @generated from field: pryzm.incentives.v1.Bond bond = 1;
   */
  bond?: Bond;

  constructor(data?: PartialMessage<EventSetBond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventSetBond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bond", kind: "message", T: Bond },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetBond {
    return new EventSetBond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetBond {
    return new EventSetBond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetBond {
    return new EventSetBond().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetBond | PlainMessage<EventSetBond> | undefined, b: EventSetBond | PlainMessage<EventSetBond> | undefined): boolean {
    return proto3.util.equals(EventSetBond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventRemoveBond
 */
export class EventRemoveBond extends Message<EventRemoveBond> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<EventRemoveBond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventRemoveBond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRemoveBond {
    return new EventRemoveBond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRemoveBond {
    return new EventRemoveBond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRemoveBond {
    return new EventRemoveBond().fromJsonString(jsonString, options);
  }

  static equals(a: EventRemoveBond | PlainMessage<EventRemoveBond> | undefined, b: EventRemoveBond | PlainMessage<EventRemoveBond> | undefined): boolean {
    return proto3.util.equals(EventRemoveBond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventSetPool
 */
export class EventSetPool extends Message<EventSetPool> {
  /**
   * @generated from field: pryzm.incentives.v1.Pool pool = 1;
   */
  pool?: Pool;

  constructor(data?: PartialMessage<EventSetPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventSetPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Pool },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetPool {
    return new EventSetPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetPool {
    return new EventSetPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetPool {
    return new EventSetPool().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetPool | PlainMessage<EventSetPool> | undefined, b: EventSetPool | PlainMessage<EventSetPool> | undefined): boolean {
    return proto3.util.equals(EventSetPool, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventSetUnbonding
 */
export class EventSetUnbonding extends Message<EventSetUnbonding> {
  /**
   * @generated from field: pryzm.incentives.v1.Unbonding unbonding = 1;
   */
  unbonding?: Unbonding;

  constructor(data?: PartialMessage<EventSetUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventSetUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "unbonding", kind: "message", T: Unbonding },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetUnbonding {
    return new EventSetUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetUnbonding {
    return new EventSetUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetUnbonding {
    return new EventSetUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetUnbonding | PlainMessage<EventSetUnbonding> | undefined, b: EventSetUnbonding | PlainMessage<EventSetUnbonding> | undefined): boolean {
    return proto3.util.equals(EventSetUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventRemoveUnbonding
 */
export class EventRemoveUnbonding extends Message<EventRemoveUnbonding> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<EventRemoveUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventRemoveUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRemoveUnbonding {
    return new EventRemoveUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRemoveUnbonding {
    return new EventRemoveUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRemoveUnbonding {
    return new EventRemoveUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: EventRemoveUnbonding | PlainMessage<EventRemoveUnbonding> | undefined, b: EventRemoveUnbonding | PlainMessage<EventRemoveUnbonding> | undefined): boolean {
    return proto3.util.equals(EventRemoveUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventClaimReward
 */
export class EventClaimReward extends Message<EventClaimReward> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string bond_denom = 2;
   */
  bondDenom = "";

  /**
   * @generated from field: string treasury = 3;
   */
  treasury = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 4;
   */
  rewards: Coin[] = [];

  constructor(data?: PartialMessage<EventClaimReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventClaimReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "rewards", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventClaimReward {
    return new EventClaimReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventClaimReward {
    return new EventClaimReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventClaimReward {
    return new EventClaimReward().fromJsonString(jsonString, options);
  }

  static equals(a: EventClaimReward | PlainMessage<EventClaimReward> | undefined, b: EventClaimReward | PlainMessage<EventClaimReward> | undefined): boolean {
    return proto3.util.equals(EventClaimReward, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventBond
 */
export class EventBond extends Message<EventBond> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventBond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventBond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBond {
    return new EventBond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBond {
    return new EventBond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBond {
    return new EventBond().fromJsonString(jsonString, options);
  }

  static equals(a: EventBond | PlainMessage<EventBond> | undefined, b: EventBond | PlainMessage<EventBond> | undefined): boolean {
    return proto3.util.equals(EventBond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventUnbond
 */
export class EventUnbond extends Message<EventUnbond> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 3;
   */
  rewards: Coin[] = [];

  /**
   * @generated from field: pryzm.incentives.v1.Unbonding unbonding = 4;
   */
  unbonding?: Unbonding;

  /**
   * @generated from field: string reward_treasury = 5;
   */
  rewardTreasury = "";

  /**
   * @generated from field: string unbond_treasury = 6;
   */
  unbondTreasury = "";

  constructor(data?: PartialMessage<EventUnbond>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventUnbond";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "rewards", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "unbonding", kind: "message", T: Unbonding },
    { no: 5, name: "reward_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "unbond_treasury", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnbond {
    return new EventUnbond().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnbond {
    return new EventUnbond().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnbond {
    return new EventUnbond().fromJsonString(jsonString, options);
  }

  static equals(a: EventUnbond | PlainMessage<EventUnbond> | undefined, b: EventUnbond | PlainMessage<EventUnbond> | undefined): boolean {
    return proto3.util.equals(EventUnbond, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventClaimUnbonding
 */
export class EventClaimUnbonding extends Message<EventClaimUnbonding> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<EventClaimUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventClaimUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventClaimUnbonding {
    return new EventClaimUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventClaimUnbonding {
    return new EventClaimUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventClaimUnbonding {
    return new EventClaimUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: EventClaimUnbonding | PlainMessage<EventClaimUnbonding> | undefined, b: EventClaimUnbonding | PlainMessage<EventClaimUnbonding> | undefined): boolean {
    return proto3.util.equals(EventClaimUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventCancelUnbonding
 */
export class EventCancelUnbonding extends Message<EventCancelUnbonding> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<EventCancelUnbonding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventCancelUnbonding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCancelUnbonding {
    return new EventCancelUnbonding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCancelUnbonding {
    return new EventCancelUnbonding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCancelUnbonding {
    return new EventCancelUnbonding().fromJsonString(jsonString, options);
  }

  static equals(a: EventCancelUnbonding | PlainMessage<EventCancelUnbonding> | undefined, b: EventCancelUnbonding | PlainMessage<EventCancelUnbonding> | undefined): boolean {
    return proto3.util.equals(EventCancelUnbonding, a, b);
  }
}

/**
 * @generated from message pryzm.incentives.v1.EventIncentivizePool
 */
export class EventIncentivizePool extends Message<EventIncentivizePool> {
  /**
   * @generated from field: string bond_denom = 1;
   */
  bondDenom = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<EventIncentivizePool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.incentives.v1.EventIncentivizePool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bond_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventIncentivizePool {
    return new EventIncentivizePool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventIncentivizePool {
    return new EventIncentivizePool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventIncentivizePool {
    return new EventIncentivizePool().fromJsonString(jsonString, options);
  }

  static equals(a: EventIncentivizePool | PlainMessage<EventIncentivizePool> | undefined, b: EventIncentivizePool | PlainMessage<EventIncentivizePool> | undefined): boolean {
    return proto3.util.equals(EventIncentivizePool, a, b);
  }
}
