// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/pricefeed/v1beta1/store.proto (package kava.pricefeed.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the pricefeed module.
 *
 * @generated from message kava.pricefeed.v1beta1.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: repeated kava.pricefeed.v1beta1.Market markets = 1;
   */
  markets: Market[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "markets", kind: "message", T: Market, repeated: true },
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

/**
 * Market defines an asset in the pricefeed.
 *
 * @generated from message kava.pricefeed.v1beta1.Market
 */
export class Market extends Message<Market> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: string base_asset = 2;
   */
  baseAsset = "";

  /**
   * @generated from field: string quote_asset = 3;
   */
  quoteAsset = "";

  /**
   * @generated from field: repeated bytes oracles = 4;
   */
  oracles: Uint8Array[] = [];

  /**
   * @generated from field: bool active = 5;
   */
  active = false;

  constructor(data?: PartialMessage<Market>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.Market";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "oracles", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 5, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Market {
    return new Market().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Market {
    return new Market().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Market {
    return new Market().fromJsonString(jsonString, options);
  }

  static equals(a: Market | PlainMessage<Market> | undefined, b: Market | PlainMessage<Market> | undefined): boolean {
    return proto3.util.equals(Market, a, b);
  }
}

/**
 * PostedPrice defines a price for market posted by a specific oracle.
 *
 * @generated from message kava.pricefeed.v1beta1.PostedPrice
 */
export class PostedPrice extends Message<PostedPrice> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: bytes oracle_address = 2;
   */
  oracleAddress = new Uint8Array(0);

  /**
   * @generated from field: string price = 3;
   */
  price = "";

  /**
   * @generated from field: google.protobuf.Timestamp expiry = 4;
   */
  expiry?: Timestamp;

  constructor(data?: PartialMessage<PostedPrice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.PostedPrice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "oracle_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expiry", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostedPrice {
    return new PostedPrice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostedPrice {
    return new PostedPrice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostedPrice {
    return new PostedPrice().fromJsonString(jsonString, options);
  }

  static equals(a: PostedPrice | PlainMessage<PostedPrice> | undefined, b: PostedPrice | PlainMessage<PostedPrice> | undefined): boolean {
    return proto3.util.equals(PostedPrice, a, b);
  }
}

/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 *
 * @generated from message kava.pricefeed.v1beta1.CurrentPrice
 */
export class CurrentPrice extends Message<CurrentPrice> {
  /**
   * @generated from field: string market_id = 1;
   */
  marketId = "";

  /**
   * @generated from field: string price = 2;
   */
  price = "";

  constructor(data?: PartialMessage<CurrentPrice>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.pricefeed.v1beta1.CurrentPrice";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrentPrice {
    return new CurrentPrice().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrentPrice {
    return new CurrentPrice().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrentPrice {
    return new CurrentPrice().fromJsonString(jsonString, options);
  }

  static equals(a: CurrentPrice | PlainMessage<CurrentPrice> | undefined, b: CurrentPrice | PlainMessage<CurrentPrice> | undefined): boolean {
    return proto3.util.equals(CurrentPrice, a, b);
  }
}

