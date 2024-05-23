// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/estaking/query.proto (package elys.estaking, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message elys.estaking.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message elys.estaking.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: elys.estaking.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message elys.estaking.QueryRewardsRequest
 */
export class QueryRewardsRequest extends Message<QueryRewardsRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryRewardsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.QueryRewardsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRewardsRequest {
    return new QueryRewardsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRewardsRequest {
    return new QueryRewardsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRewardsRequest {
    return new QueryRewardsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRewardsRequest | PlainMessage<QueryRewardsRequest> | undefined, b: QueryRewardsRequest | PlainMessage<QueryRewardsRequest> | undefined): boolean {
    return proto3.util.equals(QueryRewardsRequest, a, b);
  }
}

/**
 * @generated from message elys.estaking.DelegationDelegatorReward
 */
export class DelegationDelegatorReward extends Message<DelegationDelegatorReward> {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin reward = 2;
   */
  reward: Coin[] = [];

  constructor(data?: PartialMessage<DelegationDelegatorReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.DelegationDelegatorReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reward", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegationDelegatorReward {
    return new DelegationDelegatorReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegationDelegatorReward {
    return new DelegationDelegatorReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegationDelegatorReward {
    return new DelegationDelegatorReward().fromJsonString(jsonString, options);
  }

  static equals(a: DelegationDelegatorReward | PlainMessage<DelegationDelegatorReward> | undefined, b: DelegationDelegatorReward | PlainMessage<DelegationDelegatorReward> | undefined): boolean {
    return proto3.util.equals(DelegationDelegatorReward, a, b);
  }
}

/**
 * @generated from message elys.estaking.QueryRewardsResponse
 */
export class QueryRewardsResponse extends Message<QueryRewardsResponse> {
  /**
   * rewards defines all the rewards accrued by a delegator.
   *
   * @generated from field: repeated elys.estaking.DelegationDelegatorReward rewards = 1;
   */
  rewards: DelegationDelegatorReward[] = [];

  /**
   * total defines the sum of all the rewards.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin total = 2;
   */
  total: Coin[] = [];

  constructor(data?: PartialMessage<QueryRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.QueryRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: DelegationDelegatorReward, repeated: true },
    { no: 2, name: "total", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRewardsResponse {
    return new QueryRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRewardsResponse {
    return new QueryRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRewardsResponse {
    return new QueryRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRewardsResponse | PlainMessage<QueryRewardsResponse> | undefined, b: QueryRewardsResponse | PlainMessage<QueryRewardsResponse> | undefined): boolean {
    return proto3.util.equals(QueryRewardsResponse, a, b);
  }
}

