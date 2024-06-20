// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/bep3/v1beta1/query.proto (package kava.bep3.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params, SwapDirection, SwapStatus } from "./bep3_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryParamsRequest defines the request type for querying x/bep3 parameters.
 *
 * @generated from message kava.bep3.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryParamsRequest";
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
 * QueryParamsResponse defines the response type for querying x/bep3 parameters.
 *
 * @generated from message kava.bep3.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params represents the parameters of the module
   *
   * @generated from field: kava.bep3.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryParamsResponse";
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
 * QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAssetSupplyRequest
 */
export class QueryAssetSupplyRequest extends Message<QueryAssetSupplyRequest> {
  /**
   * denom filters the asset response for the specified denom
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryAssetSupplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAssetSupplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetSupplyRequest {
    return new QueryAssetSupplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetSupplyRequest {
    return new QueryAssetSupplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetSupplyRequest {
    return new QueryAssetSupplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetSupplyRequest | PlainMessage<QueryAssetSupplyRequest> | undefined, b: QueryAssetSupplyRequest | PlainMessage<QueryAssetSupplyRequest> | undefined): boolean {
    return proto3.util.equals(QueryAssetSupplyRequest, a, b);
  }
}

/**
 * AssetSupplyResponse defines information about an asset's supply.
 *
 * @generated from message kava.bep3.v1beta1.AssetSupplyResponse
 */
export class AssetSupplyResponse extends Message<AssetSupplyResponse> {
  /**
   * incoming_supply represents the incoming supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin incoming_supply = 1;
   */
  incomingSupply?: Coin;

  /**
   * outgoing_supply represents the outgoing supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin outgoing_supply = 2;
   */
  outgoingSupply?: Coin;

  /**
   * current_supply represents the current on-chain supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin current_supply = 3;
   */
  currentSupply?: Coin;

  /**
   * time_limited_current_supply represents the time limited current supply of an asset
   *
   * @generated from field: cosmos.base.v1beta1.Coin time_limited_current_supply = 4;
   */
  timeLimitedCurrentSupply?: Coin;

  /**
   * time_elapsed represents the time elapsed
   *
   * @generated from field: google.protobuf.Duration time_elapsed = 5;
   */
  timeElapsed?: Duration;

  constructor(data?: PartialMessage<AssetSupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.AssetSupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "incoming_supply", kind: "message", T: Coin },
    { no: 2, name: "outgoing_supply", kind: "message", T: Coin },
    { no: 3, name: "current_supply", kind: "message", T: Coin },
    { no: 4, name: "time_limited_current_supply", kind: "message", T: Coin },
    { no: 5, name: "time_elapsed", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetSupplyResponse {
    return new AssetSupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetSupplyResponse {
    return new AssetSupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetSupplyResponse {
    return new AssetSupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AssetSupplyResponse | PlainMessage<AssetSupplyResponse> | undefined, b: AssetSupplyResponse | PlainMessage<AssetSupplyResponse> | undefined): boolean {
    return proto3.util.equals(AssetSupplyResponse, a, b);
  }
}

/**
 * QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAssetSupplyResponse
 */
export class QueryAssetSupplyResponse extends Message<QueryAssetSupplyResponse> {
  /**
   * asset_supply represents the supply of the asset
   *
   * @generated from field: kava.bep3.v1beta1.AssetSupplyResponse asset_supply = 1;
   */
  assetSupply?: AssetSupplyResponse;

  constructor(data?: PartialMessage<QueryAssetSupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAssetSupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_supply", kind: "message", T: AssetSupplyResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetSupplyResponse {
    return new QueryAssetSupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetSupplyResponse {
    return new QueryAssetSupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetSupplyResponse {
    return new QueryAssetSupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetSupplyResponse | PlainMessage<QueryAssetSupplyResponse> | undefined, b: QueryAssetSupplyResponse | PlainMessage<QueryAssetSupplyResponse> | undefined): boolean {
    return proto3.util.equals(QueryAssetSupplyResponse, a, b);
  }
}

/**
 * QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAssetSuppliesRequest
 */
export class QueryAssetSuppliesRequest extends Message<QueryAssetSuppliesRequest> {
  constructor(data?: PartialMessage<QueryAssetSuppliesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAssetSuppliesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetSuppliesRequest {
    return new QueryAssetSuppliesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetSuppliesRequest {
    return new QueryAssetSuppliesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetSuppliesRequest {
    return new QueryAssetSuppliesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetSuppliesRequest | PlainMessage<QueryAssetSuppliesRequest> | undefined, b: QueryAssetSuppliesRequest | PlainMessage<QueryAssetSuppliesRequest> | undefined): boolean {
    return proto3.util.equals(QueryAssetSuppliesRequest, a, b);
  }
}

/**
 * QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAssetSuppliesResponse
 */
export class QueryAssetSuppliesResponse extends Message<QueryAssetSuppliesResponse> {
  /**
   * asset_supplies represents the supplies of returned assets
   *
   * @generated from field: repeated kava.bep3.v1beta1.AssetSupplyResponse asset_supplies = 1;
   */
  assetSupplies: AssetSupplyResponse[] = [];

  constructor(data?: PartialMessage<QueryAssetSuppliesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAssetSuppliesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_supplies", kind: "message", T: AssetSupplyResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAssetSuppliesResponse {
    return new QueryAssetSuppliesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAssetSuppliesResponse {
    return new QueryAssetSuppliesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAssetSuppliesResponse {
    return new QueryAssetSuppliesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAssetSuppliesResponse | PlainMessage<QueryAssetSuppliesResponse> | undefined, b: QueryAssetSuppliesResponse | PlainMessage<QueryAssetSuppliesResponse> | undefined): boolean {
    return proto3.util.equals(QueryAssetSuppliesResponse, a, b);
  }
}

/**
 * QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAtomicSwapRequest
 */
export class QueryAtomicSwapRequest extends Message<QueryAtomicSwapRequest> {
  /**
   * swap_id represents the id of the swap to query
   *
   * @generated from field: string swap_id = 1;
   */
  swapId = "";

  constructor(data?: PartialMessage<QueryAtomicSwapRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAtomicSwapRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "swap_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAtomicSwapRequest {
    return new QueryAtomicSwapRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAtomicSwapRequest {
    return new QueryAtomicSwapRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAtomicSwapRequest {
    return new QueryAtomicSwapRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAtomicSwapRequest | PlainMessage<QueryAtomicSwapRequest> | undefined, b: QueryAtomicSwapRequest | PlainMessage<QueryAtomicSwapRequest> | undefined): boolean {
    return proto3.util.equals(QueryAtomicSwapRequest, a, b);
  }
}

/**
 * QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAtomicSwapResponse
 */
export class QueryAtomicSwapResponse extends Message<QueryAtomicSwapResponse> {
  /**
   * @generated from field: kava.bep3.v1beta1.AtomicSwapResponse atomic_swap = 2;
   */
  atomicSwap?: AtomicSwapResponse;

  constructor(data?: PartialMessage<QueryAtomicSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAtomicSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "atomic_swap", kind: "message", T: AtomicSwapResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAtomicSwapResponse {
    return new QueryAtomicSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAtomicSwapResponse {
    return new QueryAtomicSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAtomicSwapResponse {
    return new QueryAtomicSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAtomicSwapResponse | PlainMessage<QueryAtomicSwapResponse> | undefined, b: QueryAtomicSwapResponse | PlainMessage<QueryAtomicSwapResponse> | undefined): boolean {
    return proto3.util.equals(QueryAtomicSwapResponse, a, b);
  }
}

/**
 * AtomicSwapResponse represents the returned atomic swap properties
 *
 * @generated from message kava.bep3.v1beta1.AtomicSwapResponse
 */
export class AtomicSwapResponse extends Message<AtomicSwapResponse> {
  /**
   * id represents the id of the atomic swap
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * amount represents the amount being swapped
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  /**
   * random_number_hash represents the hash of the random number
   *
   * @generated from field: string random_number_hash = 3;
   */
  randomNumberHash = "";

  /**
   * expire_height represents the height when the swap expires
   *
   * @generated from field: uint64 expire_height = 4;
   */
  expireHeight = protoInt64.zero;

  /**
   * timestamp represents the timestamp of the swap
   *
   * @generated from field: int64 timestamp = 5;
   */
  timestamp = protoInt64.zero;

  /**
   * sender is the kava chain sender of the swap
   *
   * @generated from field: string sender = 6;
   */
  sender = "";

  /**
   * recipient is the kava chain recipient of the swap
   *
   * @generated from field: string recipient = 7;
   */
  recipient = "";

  /**
   * sender_other_chain is the sender on the other chain
   *
   * @generated from field: string sender_other_chain = 8;
   */
  senderOtherChain = "";

  /**
   * recipient_other_chain is the recipient on the other chain
   *
   * @generated from field: string recipient_other_chain = 9;
   */
  recipientOtherChain = "";

  /**
   * closed_block is the block when the swap is closed
   *
   * @generated from field: int64 closed_block = 10;
   */
  closedBlock = protoInt64.zero;

  /**
   * status represents the current status of the swap
   *
   * @generated from field: kava.bep3.v1beta1.SwapStatus status = 11;
   */
  status = SwapStatus.UNSPECIFIED;

  /**
   * cross_chain identifies whether the atomic swap is cross chain
   *
   * @generated from field: bool cross_chain = 12;
   */
  crossChain = false;

  /**
   * direction identifies if the swap is incoming or outgoing
   *
   * @generated from field: kava.bep3.v1beta1.SwapDirection direction = 13;
   */
  direction = SwapDirection.UNSPECIFIED;

  constructor(data?: PartialMessage<AtomicSwapResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.AtomicSwapResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "random_number_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expire_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "sender_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "recipient_other_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "closed_block", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "status", kind: "enum", T: proto3.getEnumType(SwapStatus) },
    { no: 12, name: "cross_chain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "direction", kind: "enum", T: proto3.getEnumType(SwapDirection) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AtomicSwapResponse {
    return new AtomicSwapResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AtomicSwapResponse {
    return new AtomicSwapResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AtomicSwapResponse {
    return new AtomicSwapResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AtomicSwapResponse | PlainMessage<AtomicSwapResponse> | undefined, b: AtomicSwapResponse | PlainMessage<AtomicSwapResponse> | undefined): boolean {
    return proto3.util.equals(AtomicSwapResponse, a, b);
  }
}

/**
 * QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAtomicSwapsRequest
 */
export class QueryAtomicSwapsRequest extends Message<QueryAtomicSwapsRequest> {
  /**
   * involve filters by address
   *
   * @generated from field: string involve = 1;
   */
  involve = "";

  /**
   * expiration filters by expiration block height
   *
   * @generated from field: uint64 expiration = 2;
   */
  expiration = protoInt64.zero;

  /**
   * status filters by swap status
   *
   * @generated from field: kava.bep3.v1beta1.SwapStatus status = 3;
   */
  status = SwapStatus.UNSPECIFIED;

  /**
   * direction fitlers by swap direction
   *
   * @generated from field: kava.bep3.v1beta1.SwapDirection direction = 4;
   */
  direction = SwapDirection.UNSPECIFIED;

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 5;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAtomicSwapsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAtomicSwapsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "involve", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiration", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(SwapStatus) },
    { no: 4, name: "direction", kind: "enum", T: proto3.getEnumType(SwapDirection) },
    { no: 5, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAtomicSwapsRequest {
    return new QueryAtomicSwapsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAtomicSwapsRequest {
    return new QueryAtomicSwapsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAtomicSwapsRequest {
    return new QueryAtomicSwapsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAtomicSwapsRequest | PlainMessage<QueryAtomicSwapsRequest> | undefined, b: QueryAtomicSwapsRequest | PlainMessage<QueryAtomicSwapsRequest> | undefined): boolean {
    return proto3.util.equals(QueryAtomicSwapsRequest, a, b);
  }
}

/**
 * QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method.
 *
 * @generated from message kava.bep3.v1beta1.QueryAtomicSwapsResponse
 */
export class QueryAtomicSwapsResponse extends Message<QueryAtomicSwapsResponse> {
  /**
   * atomic_swap represents the returned atomic swaps for the request
   *
   * @generated from field: repeated kava.bep3.v1beta1.AtomicSwapResponse atomic_swaps = 1;
   */
  atomicSwaps: AtomicSwapResponse[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAtomicSwapsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.bep3.v1beta1.QueryAtomicSwapsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "atomic_swaps", kind: "message", T: AtomicSwapResponse, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAtomicSwapsResponse {
    return new QueryAtomicSwapsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAtomicSwapsResponse {
    return new QueryAtomicSwapsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAtomicSwapsResponse {
    return new QueryAtomicSwapsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAtomicSwapsResponse | PlainMessage<QueryAtomicSwapsResponse> | undefined, b: QueryAtomicSwapsResponse | PlainMessage<QueryAtomicSwapsResponse> | undefined): boolean {
    return proto3.util.equals(QueryAtomicSwapsResponse, a, b);
  }
}

