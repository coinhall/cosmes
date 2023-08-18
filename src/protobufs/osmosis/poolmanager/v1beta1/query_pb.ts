// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/query.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * =============================== Params
 *
 * @generated from message osmosis.poolmanager.v1beta1.ParamsRequest
 */
export class ParamsRequest extends Message<ParamsRequest> {
  constructor(data?: PartialMessage<ParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.ParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest {
    return new ParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean {
    return proto3.util.equals(ParamsRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.ParamsResponse
 */
export class ParamsResponse extends Message<ParamsResponse> {
  /**
   * @generated from field: osmosis.poolmanager.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<ParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.ParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse {
    return new ParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean {
    return proto3.util.equals(ParamsResponse, a, b);
  }
}

/**
 * =============================== EstimateSwapExactAmountIn
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export class EstimateSwapExactAmountInRequest extends Message<EstimateSwapExactAmountInRequest> {
  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_in = 3;
   */
  tokenIn = "";

  /**
   * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInRoute routes = 4;
   */
  routes: SwapAmountInRoute[] = [];

  constructor(data?: PartialMessage<EstimateSwapExactAmountInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "routes", kind: "message", T: SwapAmountInRoute, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInRequest {
    return new EstimateSwapExactAmountInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInRequest {
    return new EstimateSwapExactAmountInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInRequest {
    return new EstimateSwapExactAmountInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountInRequest | PlainMessage<EstimateSwapExactAmountInRequest> | undefined, b: EstimateSwapExactAmountInRequest | PlainMessage<EstimateSwapExactAmountInRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountInRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export class EstimateSwapExactAmountInWithPrimitiveTypesRequest extends Message<EstimateSwapExactAmountInWithPrimitiveTypesRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_in = 2;
   */
  tokenIn = "";

  /**
   * @generated from field: repeated uint64 routes_pool_id = 3;
   */
  routesPoolId: bigint[] = [];

  /**
   * @generated from field: repeated string routes_token_out_denom = 4;
   */
  routesTokenOutDenom: string[] = [];

  constructor(data?: PartialMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "routes_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "routes_token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountInWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest> | undefined, b: EstimateSwapExactAmountInWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountInWithPrimitiveTypesRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountInWithPrimitiveTypesRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export class EstimateSinglePoolSwapExactAmountInRequest extends Message<EstimateSinglePoolSwapExactAmountInRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_in = 2;
   */
  tokenIn = "";

  /**
   * @generated from field: string token_out_denom = 3;
   */
  tokenOutDenom = "";

  constructor(data?: PartialMessage<EstimateSinglePoolSwapExactAmountInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSinglePoolSwapExactAmountInRequest {
    return new EstimateSinglePoolSwapExactAmountInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountInRequest {
    return new EstimateSinglePoolSwapExactAmountInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountInRequest {
    return new EstimateSinglePoolSwapExactAmountInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSinglePoolSwapExactAmountInRequest | PlainMessage<EstimateSinglePoolSwapExactAmountInRequest> | undefined, b: EstimateSinglePoolSwapExactAmountInRequest | PlainMessage<EstimateSinglePoolSwapExactAmountInRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSinglePoolSwapExactAmountInRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export class EstimateSwapExactAmountInResponse extends Message<EstimateSwapExactAmountInResponse> {
  /**
   * @generated from field: string token_out_amount = 1;
   */
  tokenOutAmount = "";

  constructor(data?: PartialMessage<EstimateSwapExactAmountInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountInResponse {
    return new EstimateSwapExactAmountInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInResponse {
    return new EstimateSwapExactAmountInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountInResponse {
    return new EstimateSwapExactAmountInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountInResponse | PlainMessage<EstimateSwapExactAmountInResponse> | undefined, b: EstimateSwapExactAmountInResponse | PlainMessage<EstimateSwapExactAmountInResponse> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountInResponse, a, b);
  }
}

/**
 * =============================== EstimateSwapExactAmountOut
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export class EstimateSwapExactAmountOutRequest extends Message<EstimateSwapExactAmountOutRequest> {
  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutRoute routes = 3;
   */
  routes: SwapAmountOutRoute[] = [];

  /**
   * @generated from field: string token_out = 4;
   */
  tokenOut = "";

  constructor(data?: PartialMessage<EstimateSwapExactAmountOutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "routes", kind: "message", T: SwapAmountOutRoute, repeated: true },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutRequest {
    return new EstimateSwapExactAmountOutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutRequest {
    return new EstimateSwapExactAmountOutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutRequest {
    return new EstimateSwapExactAmountOutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountOutRequest | PlainMessage<EstimateSwapExactAmountOutRequest> | undefined, b: EstimateSwapExactAmountOutRequest | PlainMessage<EstimateSwapExactAmountOutRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountOutRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export class EstimateSwapExactAmountOutWithPrimitiveTypesRequest extends Message<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated uint64 routes_pool_id = 2;
   */
  routesPoolId: bigint[] = [];

  /**
   * @generated from field: repeated string routes_token_in_denom = 3;
   */
  routesTokenInDenom: string[] = [];

  /**
   * @generated from field: string token_out = 4;
   */
  tokenOut = "";

  constructor(data?: PartialMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "routes_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 3, name: "routes_token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutWithPrimitiveTypesRequest {
    return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountOutWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> | undefined, b: EstimateSwapExactAmountOutWithPrimitiveTypesRequest | PlainMessage<EstimateSwapExactAmountOutWithPrimitiveTypesRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountOutWithPrimitiveTypesRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export class EstimateSinglePoolSwapExactAmountOutRequest extends Message<EstimateSinglePoolSwapExactAmountOutRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string token_in_denom = 2;
   */
  tokenInDenom = "";

  /**
   * @generated from field: string token_out = 3;
   */
  tokenOut = "";

  constructor(data?: PartialMessage<EstimateSinglePoolSwapExactAmountOutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest {
    return new EstimateSinglePoolSwapExactAmountOutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest {
    return new EstimateSinglePoolSwapExactAmountOutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSinglePoolSwapExactAmountOutRequest {
    return new EstimateSinglePoolSwapExactAmountOutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSinglePoolSwapExactAmountOutRequest | PlainMessage<EstimateSinglePoolSwapExactAmountOutRequest> | undefined, b: EstimateSinglePoolSwapExactAmountOutRequest | PlainMessage<EstimateSinglePoolSwapExactAmountOutRequest> | undefined): boolean {
    return proto3.util.equals(EstimateSinglePoolSwapExactAmountOutRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export class EstimateSwapExactAmountOutResponse extends Message<EstimateSwapExactAmountOutResponse> {
  /**
   * @generated from field: string token_in_amount = 1;
   */
  tokenInAmount = "";

  constructor(data?: PartialMessage<EstimateSwapExactAmountOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSwapExactAmountOutResponse {
    return new EstimateSwapExactAmountOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutResponse {
    return new EstimateSwapExactAmountOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSwapExactAmountOutResponse {
    return new EstimateSwapExactAmountOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: EstimateSwapExactAmountOutResponse | PlainMessage<EstimateSwapExactAmountOutResponse> | undefined, b: EstimateSwapExactAmountOutResponse | PlainMessage<EstimateSwapExactAmountOutResponse> | undefined): boolean {
    return proto3.util.equals(EstimateSwapExactAmountOutResponse, a, b);
  }
}

/**
 * =============================== NumPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsRequest
 */
export class NumPoolsRequest extends Message<NumPoolsRequest> {
  constructor(data?: PartialMessage<NumPoolsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.NumPoolsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolsRequest {
    return new NumPoolsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolsRequest {
    return new NumPoolsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolsRequest {
    return new NumPoolsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: NumPoolsRequest | PlainMessage<NumPoolsRequest> | undefined, b: NumPoolsRequest | PlainMessage<NumPoolsRequest> | undefined): boolean {
    return proto3.util.equals(NumPoolsRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsResponse
 */
export class NumPoolsResponse extends Message<NumPoolsResponse> {
  /**
   * @generated from field: uint64 num_pools = 1;
   */
  numPools = protoInt64.zero;

  constructor(data?: PartialMessage<NumPoolsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.NumPoolsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "num_pools", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolsResponse {
    return new NumPoolsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolsResponse {
    return new NumPoolsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolsResponse {
    return new NumPoolsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: NumPoolsResponse | PlainMessage<NumPoolsResponse> | undefined, b: NumPoolsResponse | PlainMessage<NumPoolsResponse> | undefined): boolean {
    return proto3.util.equals(NumPoolsResponse, a, b);
  }
}

/**
 * =============================== Pool
 *
 * @generated from message osmosis.poolmanager.v1beta1.PoolRequest
 */
export class PoolRequest extends Message<PoolRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<PoolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.PoolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRequest {
    return new PoolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRequest {
    return new PoolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRequest {
    return new PoolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PoolRequest | PlainMessage<PoolRequest> | undefined, b: PoolRequest | PlainMessage<PoolRequest> | undefined): boolean {
    return proto3.util.equals(PoolRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.PoolResponse
 */
export class PoolResponse extends Message<PoolResponse> {
  /**
   * @generated from field: google.protobuf.Any pool = 1;
   */
  pool?: Any;

  constructor(data?: PartialMessage<PoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.PoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolResponse {
    return new PoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolResponse {
    return new PoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolResponse {
    return new PoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PoolResponse | PlainMessage<PoolResponse> | undefined, b: PoolResponse | PlainMessage<PoolResponse> | undefined): boolean {
    return proto3.util.equals(PoolResponse, a, b);
  }
}

/**
 * =============================== AllPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsRequest
 */
export class AllPoolsRequest extends Message<AllPoolsRequest> {
  constructor(data?: PartialMessage<AllPoolsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.AllPoolsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllPoolsRequest {
    return new AllPoolsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllPoolsRequest {
    return new AllPoolsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllPoolsRequest {
    return new AllPoolsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AllPoolsRequest | PlainMessage<AllPoolsRequest> | undefined, b: AllPoolsRequest | PlainMessage<AllPoolsRequest> | undefined): boolean {
    return proto3.util.equals(AllPoolsRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsResponse
 */
export class AllPoolsResponse extends Message<AllPoolsResponse> {
  /**
   * @generated from field: repeated google.protobuf.Any pools = 1;
   */
  pools: Any[] = [];

  constructor(data?: PartialMessage<AllPoolsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.AllPoolsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllPoolsResponse {
    return new AllPoolsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllPoolsResponse {
    return new AllPoolsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllPoolsResponse {
    return new AllPoolsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AllPoolsResponse | PlainMessage<AllPoolsResponse> | undefined, b: AllPoolsResponse | PlainMessage<AllPoolsResponse> | undefined): boolean {
    return proto3.util.equals(AllPoolsResponse, a, b);
  }
}

/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceRequest
 */
export class SpotPriceRequest extends Message<SpotPriceRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string base_asset_denom = 2;
   */
  baseAssetDenom = "";

  /**
   * @generated from field: string quote_asset_denom = 3;
   */
  quoteAssetDenom = "";

  constructor(data?: PartialMessage<SpotPriceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.SpotPriceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceRequest {
    return new SpotPriceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceRequest {
    return new SpotPriceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceRequest {
    return new SpotPriceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined, b: SpotPriceRequest | PlainMessage<SpotPriceRequest> | undefined): boolean {
    return proto3.util.equals(SpotPriceRequest, a, b);
  }
}

/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceResponse
 */
export class SpotPriceResponse extends Message<SpotPriceResponse> {
  /**
   * String of the Dec. Ex) 10.203uatom
   *
   * @generated from field: string spot_price = 1;
   */
  spotPrice = "";

  constructor(data?: PartialMessage<SpotPriceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.SpotPriceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotPriceResponse {
    return new SpotPriceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotPriceResponse {
    return new SpotPriceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotPriceResponse {
    return new SpotPriceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined, b: SpotPriceResponse | PlainMessage<SpotPriceResponse> | undefined): boolean {
    return proto3.util.equals(SpotPriceResponse, a, b);
  }
}

/**
 * =============================== TotalPoolLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export class TotalPoolLiquidityRequest extends Message<TotalPoolLiquidityRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<TotalPoolLiquidityRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalPoolLiquidityRequest {
    return new TotalPoolLiquidityRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalPoolLiquidityRequest {
    return new TotalPoolLiquidityRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalPoolLiquidityRequest {
    return new TotalPoolLiquidityRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TotalPoolLiquidityRequest | PlainMessage<TotalPoolLiquidityRequest> | undefined, b: TotalPoolLiquidityRequest | PlainMessage<TotalPoolLiquidityRequest> | undefined): boolean {
    return proto3.util.equals(TotalPoolLiquidityRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export class TotalPoolLiquidityResponse extends Message<TotalPoolLiquidityResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
   */
  liquidity: Coin[] = [];

  constructor(data?: PartialMessage<TotalPoolLiquidityResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "liquidity", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalPoolLiquidityResponse {
    return new TotalPoolLiquidityResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalPoolLiquidityResponse {
    return new TotalPoolLiquidityResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalPoolLiquidityResponse {
    return new TotalPoolLiquidityResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TotalPoolLiquidityResponse | PlainMessage<TotalPoolLiquidityResponse> | undefined, b: TotalPoolLiquidityResponse | PlainMessage<TotalPoolLiquidityResponse> | undefined): boolean {
    return proto3.util.equals(TotalPoolLiquidityResponse, a, b);
  }
}

/**
 * =============================== TotalLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityRequest
 */
export class TotalLiquidityRequest extends Message<TotalLiquidityRequest> {
  constructor(data?: PartialMessage<TotalLiquidityRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalLiquidityRequest {
    return new TotalLiquidityRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalLiquidityRequest {
    return new TotalLiquidityRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalLiquidityRequest {
    return new TotalLiquidityRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TotalLiquidityRequest | PlainMessage<TotalLiquidityRequest> | undefined, b: TotalLiquidityRequest | PlainMessage<TotalLiquidityRequest> | undefined): boolean {
    return proto3.util.equals(TotalLiquidityRequest, a, b);
  }
}

/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityResponse
 */
export class TotalLiquidityResponse extends Message<TotalLiquidityResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
   */
  liquidity: Coin[] = [];

  constructor(data?: PartialMessage<TotalLiquidityResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "liquidity", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalLiquidityResponse {
    return new TotalLiquidityResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalLiquidityResponse {
    return new TotalLiquidityResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalLiquidityResponse {
    return new TotalLiquidityResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TotalLiquidityResponse | PlainMessage<TotalLiquidityResponse> | undefined, b: TotalLiquidityResponse | PlainMessage<TotalLiquidityResponse> | undefined): boolean {
    return proto3.util.equals(TotalLiquidityResponse, a, b);
  }
}

