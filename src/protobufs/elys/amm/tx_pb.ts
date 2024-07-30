// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/amm/tx.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PoolParams } from "./pool_params_pb.js";
import { PoolAsset } from "./pool_asset_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route_pb.js";
import { Params } from "./params_pb.js";

/**
 * @generated from message elys.amm.MsgCreatePool
 */
export class MsgCreatePool extends Message<MsgCreatePool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: elys.amm.PoolParams pool_params = 2;
   */
  poolParams?: PoolParams;

  /**
   * @generated from field: repeated elys.amm.PoolAsset pool_assets = 3;
   */
  poolAssets: PoolAsset[] = [];

  constructor(data?: PartialMessage<MsgCreatePool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgCreatePool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_params", kind: "message", T: PoolParams },
    { no: 3, name: "pool_assets", kind: "message", T: PoolAsset, repeated: true },
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
 * @generated from message elys.amm.MsgCreatePoolResponse
 */
export class MsgCreatePoolResponse extends Message<MsgCreatePoolResponse> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCreatePoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgCreatePoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
 * @generated from message elys.amm.MsgJoinPool
 */
export class MsgJoinPool extends Message<MsgJoinPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin max_amounts_in = 3;
   */
  maxAmountsIn: Coin[] = [];

  /**
   * @generated from field: string share_amount_out = 4;
   */
  shareAmountOut = "";

  constructor(data?: PartialMessage<MsgJoinPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgJoinPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max_amounts_in", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "share_amount_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPool {
    return new MsgJoinPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined, b: MsgJoinPool | PlainMessage<MsgJoinPool> | undefined): boolean {
    return proto3.util.equals(MsgJoinPool, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgJoinPoolResponse
 */
export class MsgJoinPoolResponse extends Message<MsgJoinPoolResponse> {
  /**
   * @generated from field: string share_amount_out = 1;
   */
  shareAmountOut = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_in = 2;
   */
  tokenIn: Coin[] = [];

  constructor(data?: PartialMessage<MsgJoinPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgJoinPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share_amount_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_in", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgJoinPoolResponse {
    return new MsgJoinPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined, b: MsgJoinPoolResponse | PlainMessage<MsgJoinPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgJoinPoolResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgExitPool
 */
export class MsgExitPool extends Message<MsgExitPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin min_amounts_out = 3;
   */
  minAmountsOut: Coin[] = [];

  /**
   * @generated from field: string share_amount_in = 4;
   */
  shareAmountIn = "";

  /**
   * @generated from field: string token_out_denom = 5;
   */
  tokenOutDenom = "";

  constructor(data?: PartialMessage<MsgExitPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgExitPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "min_amounts_out", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "share_amount_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPool {
    return new MsgExitPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPool {
    return new MsgExitPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPool {
    return new MsgExitPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitPool | PlainMessage<MsgExitPool> | undefined, b: MsgExitPool | PlainMessage<MsgExitPool> | undefined): boolean {
    return proto3.util.equals(MsgExitPool, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgExitPoolResponse
 */
export class MsgExitPoolResponse extends Message<MsgExitPoolResponse> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin token_out = 2;
   */
  tokenOut: Coin[] = [];

  constructor(data?: PartialMessage<MsgExitPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgExitPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "token_out", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExitPoolResponse {
    return new MsgExitPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined, b: MsgExitPoolResponse | PlainMessage<MsgExitPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgExitPoolResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapExactAmountIn
 */
export class MsgSwapExactAmountIn extends Message<MsgSwapExactAmountIn> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: repeated elys.amm.SwapAmountInRoute routes = 2;
   */
  routes: SwapAmountInRoute[] = [];

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_in = 3;
   */
  tokenIn?: Coin;

  /**
   * @generated from field: string token_out_min_amount = 4;
   */
  tokenOutMinAmount = "";

  /**
   * @generated from field: string discount = 5;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 6;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapExactAmountIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapExactAmountIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "routes", kind: "message", T: SwapAmountInRoute, repeated: true },
    { no: 3, name: "token_in", kind: "message", T: Coin },
    { no: 4, name: "token_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountIn {
    return new MsgSwapExactAmountIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn {
    return new MsgSwapExactAmountIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountIn {
    return new MsgSwapExactAmountIn().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined, b: MsgSwapExactAmountIn | PlainMessage<MsgSwapExactAmountIn> | undefined): boolean {
    return proto3.util.equals(MsgSwapExactAmountIn, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapExactAmountInResponse
 */
export class MsgSwapExactAmountInResponse extends Message<MsgSwapExactAmountInResponse> {
  /**
   * @generated from field: string token_out_amount = 1;
   */
  tokenOutAmount = "";

  /**
   * @generated from field: string swap_fee = 2;
   */
  swapFee = "";

  /**
   * @generated from field: string discount = 3;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 4;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapExactAmountInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapExactAmountInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountInResponse {
    return new MsgSwapExactAmountInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse {
    return new MsgSwapExactAmountInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountInResponse {
    return new MsgSwapExactAmountInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined, b: MsgSwapExactAmountInResponse | PlainMessage<MsgSwapExactAmountInResponse> | undefined): boolean {
    return proto3.util.equals(MsgSwapExactAmountInResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapExactAmountOut
 */
export class MsgSwapExactAmountOut extends Message<MsgSwapExactAmountOut> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: repeated elys.amm.SwapAmountOutRoute routes = 2;
   */
  routes: SwapAmountOutRoute[] = [];

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_out = 3;
   */
  tokenOut?: Coin;

  /**
   * @generated from field: string token_in_max_amount = 4;
   */
  tokenInMaxAmount = "";

  /**
   * @generated from field: string discount = 5;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 6;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapExactAmountOut>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapExactAmountOut";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "routes", kind: "message", T: SwapAmountOutRoute, repeated: true },
    { no: 3, name: "token_out", kind: "message", T: Coin },
    { no: 4, name: "token_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOut {
    return new MsgSwapExactAmountOut().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut {
    return new MsgSwapExactAmountOut().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOut {
    return new MsgSwapExactAmountOut().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined, b: MsgSwapExactAmountOut | PlainMessage<MsgSwapExactAmountOut> | undefined): boolean {
    return proto3.util.equals(MsgSwapExactAmountOut, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapExactAmountOutResponse
 */
export class MsgSwapExactAmountOutResponse extends Message<MsgSwapExactAmountOutResponse> {
  /**
   * @generated from field: string token_in_amount = 1;
   */
  tokenInAmount = "";

  /**
   * @generated from field: string swap_fee = 2;
   */
  swapFee = "";

  /**
   * @generated from field: string discount = 3;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 4;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapExactAmountOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapExactAmountOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapExactAmountOutResponse {
    return new MsgSwapExactAmountOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse {
    return new MsgSwapExactAmountOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapExactAmountOutResponse {
    return new MsgSwapExactAmountOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined, b: MsgSwapExactAmountOutResponse | PlainMessage<MsgSwapExactAmountOutResponse> | undefined): boolean {
    return proto3.util.equals(MsgSwapExactAmountOutResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgFeedMultipleExternalLiquidity
 */
export class MsgFeedMultipleExternalLiquidity extends Message<MsgFeedMultipleExternalLiquidity> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: repeated elys.amm.ExternalLiquidity liquidity = 2;
   */
  liquidity: ExternalLiquidity[] = [];

  constructor(data?: PartialMessage<MsgFeedMultipleExternalLiquidity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgFeedMultipleExternalLiquidity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "liquidity", kind: "message", T: ExternalLiquidity, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFeedMultipleExternalLiquidity {
    return new MsgFeedMultipleExternalLiquidity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFeedMultipleExternalLiquidity {
    return new MsgFeedMultipleExternalLiquidity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFeedMultipleExternalLiquidity {
    return new MsgFeedMultipleExternalLiquidity().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFeedMultipleExternalLiquidity | PlainMessage<MsgFeedMultipleExternalLiquidity> | undefined, b: MsgFeedMultipleExternalLiquidity | PlainMessage<MsgFeedMultipleExternalLiquidity> | undefined): boolean {
    return proto3.util.equals(MsgFeedMultipleExternalLiquidity, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgFeedMultipleExternalLiquidityResponse
 */
export class MsgFeedMultipleExternalLiquidityResponse extends Message<MsgFeedMultipleExternalLiquidityResponse> {
  constructor(data?: PartialMessage<MsgFeedMultipleExternalLiquidityResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgFeedMultipleExternalLiquidityResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFeedMultipleExternalLiquidityResponse {
    return new MsgFeedMultipleExternalLiquidityResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFeedMultipleExternalLiquidityResponse {
    return new MsgFeedMultipleExternalLiquidityResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFeedMultipleExternalLiquidityResponse {
    return new MsgFeedMultipleExternalLiquidityResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFeedMultipleExternalLiquidityResponse | PlainMessage<MsgFeedMultipleExternalLiquidityResponse> | undefined, b: MsgFeedMultipleExternalLiquidityResponse | PlainMessage<MsgFeedMultipleExternalLiquidityResponse> | undefined): boolean {
    return proto3.util.equals(MsgFeedMultipleExternalLiquidityResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.AssetAmountDepth
 */
export class AssetAmountDepth extends Message<AssetAmountDepth> {
  /**
   * @generated from field: string asset = 1;
   */
  asset = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  /**
   * @generated from field: string depth = 3;
   */
  depth = "";

  constructor(data?: PartialMessage<AssetAmountDepth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.AssetAmountDepth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "depth", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetAmountDepth {
    return new AssetAmountDepth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetAmountDepth {
    return new AssetAmountDepth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetAmountDepth {
    return new AssetAmountDepth().fromJsonString(jsonString, options);
  }

  static equals(a: AssetAmountDepth | PlainMessage<AssetAmountDepth> | undefined, b: AssetAmountDepth | PlainMessage<AssetAmountDepth> | undefined): boolean {
    return proto3.util.equals(AssetAmountDepth, a, b);
  }
}

/**
 * ExternalLiquidity defines price, volume, and time information for an exchange rate.
 *
 * @generated from message elys.amm.ExternalLiquidity
 */
export class ExternalLiquidity extends Message<ExternalLiquidity> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: repeated elys.amm.AssetAmountDepth amount_depth_info = 2;
   */
  amountDepthInfo: AssetAmountDepth[] = [];

  constructor(data?: PartialMessage<ExternalLiquidity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.ExternalLiquidity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amount_depth_info", kind: "message", T: AssetAmountDepth, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExternalLiquidity {
    return new ExternalLiquidity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExternalLiquidity {
    return new ExternalLiquidity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExternalLiquidity {
    return new ExternalLiquidity().fromJsonString(jsonString, options);
  }

  static equals(a: ExternalLiquidity | PlainMessage<ExternalLiquidity> | undefined, b: ExternalLiquidity | PlainMessage<ExternalLiquidity> | undefined): boolean {
    return proto3.util.equals(ExternalLiquidity, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapByDenom
 */
export class MsgSwapByDenom extends Message<MsgSwapByDenom> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin min_amount = 3;
   */
  minAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin max_amount = 4;
   */
  maxAmount?: Coin;

  /**
   * @generated from field: string denom_in = 5;
   */
  denomIn = "";

  /**
   * @generated from field: string denom_out = 6;
   */
  denomOut = "";

  /**
   * @generated from field: string discount = 7;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 8;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapByDenom>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapByDenom";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "min_amount", kind: "message", T: Coin },
    { no: 4, name: "max_amount", kind: "message", T: Coin },
    { no: 5, name: "denom_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "denom_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapByDenom {
    return new MsgSwapByDenom().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapByDenom {
    return new MsgSwapByDenom().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapByDenom {
    return new MsgSwapByDenom().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapByDenom | PlainMessage<MsgSwapByDenom> | undefined, b: MsgSwapByDenom | PlainMessage<MsgSwapByDenom> | undefined): boolean {
    return proto3.util.equals(MsgSwapByDenom, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgSwapByDenomResponse
 */
export class MsgSwapByDenomResponse extends Message<MsgSwapByDenomResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;

  /**
   * @generated from field: repeated elys.amm.SwapAmountInRoute in_route = 2;
   */
  inRoute: SwapAmountInRoute[] = [];

  /**
   * @generated from field: repeated elys.amm.SwapAmountOutRoute out_route = 3;
   */
  outRoute: SwapAmountOutRoute[] = [];

  /**
   * @generated from field: string spot_price = 4;
   */
  spotPrice = "";

  /**
   * @generated from field: string swap_fee = 5;
   */
  swapFee = "";

  /**
   * @generated from field: string discount = 6;
   */
  discount = "";

  /**
   * @generated from field: string recipient = 7;
   */
  recipient = "";

  constructor(data?: PartialMessage<MsgSwapByDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgSwapByDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
    { no: 2, name: "in_route", kind: "message", T: SwapAmountInRoute, repeated: true },
    { no: 3, name: "out_route", kind: "message", T: SwapAmountOutRoute, repeated: true },
    { no: 4, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSwapByDenomResponse {
    return new MsgSwapByDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSwapByDenomResponse {
    return new MsgSwapByDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSwapByDenomResponse {
    return new MsgSwapByDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSwapByDenomResponse | PlainMessage<MsgSwapByDenomResponse> | undefined, b: MsgSwapByDenomResponse | PlainMessage<MsgSwapByDenomResponse> | undefined): boolean {
    return proto3.util.equals(MsgSwapByDenomResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgUpdatePoolParams
 */
export class MsgUpdatePoolParams extends Message<MsgUpdatePoolParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: elys.amm.PoolParams pool_params = 3;
   */
  poolParams?: PoolParams;

  constructor(data?: PartialMessage<MsgUpdatePoolParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgUpdatePoolParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "pool_params", kind: "message", T: PoolParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePoolParams {
    return new MsgUpdatePoolParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePoolParams {
    return new MsgUpdatePoolParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePoolParams {
    return new MsgUpdatePoolParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePoolParams | PlainMessage<MsgUpdatePoolParams> | undefined, b: MsgUpdatePoolParams | PlainMessage<MsgUpdatePoolParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePoolParams, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgUpdatePoolParamsResponse
 */
export class MsgUpdatePoolParamsResponse extends Message<MsgUpdatePoolParamsResponse> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: elys.amm.PoolParams pool_params = 2;
   */
  poolParams?: PoolParams;

  constructor(data?: PartialMessage<MsgUpdatePoolParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgUpdatePoolParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pool_params", kind: "message", T: PoolParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePoolParamsResponse {
    return new MsgUpdatePoolParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePoolParamsResponse {
    return new MsgUpdatePoolParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePoolParamsResponse {
    return new MsgUpdatePoolParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePoolParamsResponse | PlainMessage<MsgUpdatePoolParamsResponse> | undefined, b: MsgUpdatePoolParamsResponse | PlainMessage<MsgUpdatePoolParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePoolParamsResponse, a, b);
  }
}

/**
 * @generated from message elys.amm.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: elys.amm.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgUpdateParams";
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
 * @generated from message elys.amm.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.MsgUpdateParamsResponse";
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
