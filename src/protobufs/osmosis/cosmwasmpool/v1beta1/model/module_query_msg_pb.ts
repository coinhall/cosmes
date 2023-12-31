// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/module_query_msg.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * ===================== CalcOutAmtGivenIn
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn
 */
export class CalcOutAmtGivenIn extends Message<CalcOutAmtGivenIn> {
  /**
   * token_in is the token to be sent to the pool.
   *
   * @generated from field: cosmos.base.v1beta1.Coin token_in = 1;
   */
  tokenIn?: Coin;

  /**
   * token_out_denom is the token denom to be received from the pool.
   *
   * @generated from field: string token_out_denom = 2;
   */
  tokenOutDenom = "";

  /**
   * swap_fee is the swap fee for this swap estimate.
   *
   * @generated from field: string swap_fee = 3;
   */
  swapFee = "";

  constructor(data?: PartialMessage<CalcOutAmtGivenIn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in", kind: "message", T: Coin },
    { no: 2, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenIn {
    return new CalcOutAmtGivenIn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenIn {
    return new CalcOutAmtGivenIn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenIn {
    return new CalcOutAmtGivenIn().fromJsonString(jsonString, options);
  }

  static equals(a: CalcOutAmtGivenIn | PlainMessage<CalcOutAmtGivenIn> | undefined, b: CalcOutAmtGivenIn | PlainMessage<CalcOutAmtGivenIn> | undefined): boolean {
    return proto3.util.equals(CalcOutAmtGivenIn, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest
 */
export class CalcOutAmtGivenInRequest extends Message<CalcOutAmtGivenInRequest> {
  /**
   * calc_out_amt_given_in is the structure containing all the request
   * information for this query.
   *
   * @generated from field: osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn calc_out_amt_given_in = 1;
   */
  calcOutAmtGivenIn?: CalcOutAmtGivenIn;

  constructor(data?: PartialMessage<CalcOutAmtGivenInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "calc_out_amt_given_in", kind: "message", T: CalcOutAmtGivenIn },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenInRequest {
    return new CalcOutAmtGivenInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInRequest {
    return new CalcOutAmtGivenInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInRequest {
    return new CalcOutAmtGivenInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CalcOutAmtGivenInRequest | PlainMessage<CalcOutAmtGivenInRequest> | undefined, b: CalcOutAmtGivenInRequest | PlainMessage<CalcOutAmtGivenInRequest> | undefined): boolean {
    return proto3.util.equals(CalcOutAmtGivenInRequest, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse
 */
export class CalcOutAmtGivenInResponse extends Message<CalcOutAmtGivenInResponse> {
  /**
   * token_out is the token out computed from this swap estimate call.
   *
   * @generated from field: cosmos.base.v1beta1.Coin token_out = 1;
   */
  tokenOut?: Coin;

  constructor(data?: PartialMessage<CalcOutAmtGivenInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcOutAmtGivenInResponse {
    return new CalcOutAmtGivenInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInResponse {
    return new CalcOutAmtGivenInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcOutAmtGivenInResponse {
    return new CalcOutAmtGivenInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CalcOutAmtGivenInResponse | PlainMessage<CalcOutAmtGivenInResponse> | undefined, b: CalcOutAmtGivenInResponse | PlainMessage<CalcOutAmtGivenInResponse> | undefined): boolean {
    return proto3.util.equals(CalcOutAmtGivenInResponse, a, b);
  }
}

/**
 * ===================== CalcInAmtGivenOut
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut
 */
export class CalcInAmtGivenOut extends Message<CalcInAmtGivenOut> {
  /**
   * token_out is the token out to be receoved from the pool.
   *
   * @generated from field: cosmos.base.v1beta1.Coin token_out = 1;
   */
  tokenOut?: Coin;

  /**
   * token_in_denom is the token denom to be sentt to the pool.
   *
   * @generated from field: string token_in_denom = 2;
   */
  tokenInDenom = "";

  /**
   * swap_fee is the swap fee for this swap estimate.
   *
   * @generated from field: string swap_fee = 3;
   */
  swapFee = "";

  constructor(data?: PartialMessage<CalcInAmtGivenOut>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin },
    { no: 2, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOut {
    return new CalcInAmtGivenOut().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOut {
    return new CalcInAmtGivenOut().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOut {
    return new CalcInAmtGivenOut().fromJsonString(jsonString, options);
  }

  static equals(a: CalcInAmtGivenOut | PlainMessage<CalcInAmtGivenOut> | undefined, b: CalcInAmtGivenOut | PlainMessage<CalcInAmtGivenOut> | undefined): boolean {
    return proto3.util.equals(CalcInAmtGivenOut, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest
 */
export class CalcInAmtGivenOutRequest extends Message<CalcInAmtGivenOutRequest> {
  /**
   * calc_in_amt_given_out is the structure containing all the request
   * information for this query.
   *
   * @generated from field: osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut calc_in_amt_given_out = 1;
   */
  calcInAmtGivenOut?: CalcInAmtGivenOut;

  constructor(data?: PartialMessage<CalcInAmtGivenOutRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "calc_in_amt_given_out", kind: "message", T: CalcInAmtGivenOut },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOutRequest {
    return new CalcInAmtGivenOutRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutRequest {
    return new CalcInAmtGivenOutRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutRequest {
    return new CalcInAmtGivenOutRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CalcInAmtGivenOutRequest | PlainMessage<CalcInAmtGivenOutRequest> | undefined, b: CalcInAmtGivenOutRequest | PlainMessage<CalcInAmtGivenOutRequest> | undefined): boolean {
    return proto3.util.equals(CalcInAmtGivenOutRequest, a, b);
  }
}

/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse
 */
export class CalcInAmtGivenOutResponse extends Message<CalcInAmtGivenOutResponse> {
  /**
   * token_in is the token in computed from this swap estimate call.
   *
   * @generated from field: cosmos.base.v1beta1.Coin token_in = 1;
   */
  tokenIn?: Coin;

  constructor(data?: PartialMessage<CalcInAmtGivenOutResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalcInAmtGivenOutResponse {
    return new CalcInAmtGivenOutResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutResponse {
    return new CalcInAmtGivenOutResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalcInAmtGivenOutResponse {
    return new CalcInAmtGivenOutResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CalcInAmtGivenOutResponse | PlainMessage<CalcInAmtGivenOutResponse> | undefined, b: CalcInAmtGivenOutResponse | PlainMessage<CalcInAmtGivenOutResponse> | undefined): boolean {
    return proto3.util.equals(CalcInAmtGivenOutResponse, a, b);
  }
}

