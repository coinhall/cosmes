// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/v3/pool_query_msg.proto (package osmosis.cosmwasmpool.v1beta1.model.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ===================== ShareDenomResponse
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse
 */
export class ShareDenomResponse extends Message<ShareDenomResponse> {
  /**
   * share_denom is the share denomination.
   *
   * @generated from field: string share_denom = 1;
   */
  shareDenom = "";

  constructor(data?: PartialMessage<ShareDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.model.v3.ShareDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "share_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShareDenomResponse {
    return new ShareDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShareDenomResponse {
    return new ShareDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShareDenomResponse {
    return new ShareDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ShareDenomResponse | PlainMessage<ShareDenomResponse> | undefined, b: ShareDenomResponse | PlainMessage<ShareDenomResponse> | undefined): boolean {
    return proto3.util.equals(ShareDenomResponse, a, b);
  }
}

/**
 * ===================== TotalPoolLiquidityResponse
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse
 */
export class TotalPoolLiquidityResponse extends Message<TotalPoolLiquidityResponse> {
  /**
   * total_pool_liquidity is the total liquidity in the pool denominated in
   * coins.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin total_pool_liquidity = 1;
   */
  totalPoolLiquidity: Coin[] = [];

  constructor(data?: PartialMessage<TotalPoolLiquidityResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.model.v3.TotalPoolLiquidityResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_pool_liquidity", kind: "message", T: Coin, repeated: true },
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
 * ===================== AssetConfig
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.model.v3.AssetConfig
 */
export class AssetConfig extends Message<AssetConfig> {
  /**
   * denom is the asset denomination.
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * normalization_factor is the normalization factor for the asset.
   *
   * @generated from field: string normalization_factor = 2;
   */
  normalizationFactor = "";

  constructor(data?: PartialMessage<AssetConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.model.v3.AssetConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "normalization_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetConfig {
    return new AssetConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetConfig {
    return new AssetConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetConfig {
    return new AssetConfig().fromJsonString(jsonString, options);
  }

  static equals(a: AssetConfig | PlainMessage<AssetConfig> | undefined, b: AssetConfig | PlainMessage<AssetConfig> | undefined): boolean {
    return proto3.util.equals(AssetConfig, a, b);
  }
}

/**
 * ===================== ListAssetConfigsResponse
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse
 */
export class ListAssetConfigsResponse extends Message<ListAssetConfigsResponse> {
  /**
   * asset_configs is the list of asset configurations.
   *
   * @generated from field: repeated osmosis.cosmwasmpool.v1beta1.model.v3.AssetConfig asset_configs = 1;
   */
  assetConfigs: AssetConfig[] = [];

  constructor(data?: PartialMessage<ListAssetConfigsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.model.v3.ListAssetConfigsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_configs", kind: "message", T: AssetConfig, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssetConfigsResponse {
    return new ListAssetConfigsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssetConfigsResponse {
    return new ListAssetConfigsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssetConfigsResponse {
    return new ListAssetConfigsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListAssetConfigsResponse | PlainMessage<ListAssetConfigsResponse> | undefined, b: ListAssetConfigsResponse | PlainMessage<ListAssetConfigsResponse> | undefined): boolean {
    return proto3.util.equals(ListAssetConfigsResponse, a, b);
  }
}

