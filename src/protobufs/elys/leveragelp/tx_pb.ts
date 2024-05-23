// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/leveragelp/tx.proto (package elys.leveragelp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Pool } from "./pool_pb.js";

/**
 * @generated from message elys.leveragelp.MsgOpen
 */
export class MsgOpen extends Message<MsgOpen> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string collateral_asset = 2;
   */
  collateralAsset = "";

  /**
   * @generated from field: string collateral_amount = 3;
   */
  collateralAmount = "";

  /**
   * @generated from field: uint64 amm_pool_id = 4;
   */
  ammPoolId = protoInt64.zero;

  /**
   * @generated from field: string leverage = 5;
   */
  leverage = "";

  /**
   * @generated from field: string stop_loss_price = 6;
   */
  stopLossPrice = "";

  constructor(data?: PartialMessage<MsgOpen>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgOpen";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "collateral_asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "collateral_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amm_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "leverage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "stop_loss_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgOpen {
    return new MsgOpen().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgOpen {
    return new MsgOpen().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgOpen {
    return new MsgOpen().fromJsonString(jsonString, options);
  }

  static equals(a: MsgOpen | PlainMessage<MsgOpen> | undefined, b: MsgOpen | PlainMessage<MsgOpen> | undefined): boolean {
    return proto3.util.equals(MsgOpen, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgOpenResponse
 */
export class MsgOpenResponse extends Message<MsgOpenResponse> {
  constructor(data?: PartialMessage<MsgOpenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgOpenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgOpenResponse {
    return new MsgOpenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgOpenResponse | PlainMessage<MsgOpenResponse> | undefined, b: MsgOpenResponse | PlainMessage<MsgOpenResponse> | undefined): boolean {
    return proto3.util.equals(MsgOpenResponse, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgClose
 */
export class MsgClose extends Message<MsgClose> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string lp_amount = 3;
   */
  lpAmount = "";

  constructor(data?: PartialMessage<MsgClose>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgClose";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "lp_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClose {
    return new MsgClose().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClose {
    return new MsgClose().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClose {
    return new MsgClose().fromJsonString(jsonString, options);
  }

  static equals(a: MsgClose | PlainMessage<MsgClose> | undefined, b: MsgClose | PlainMessage<MsgClose> | undefined): boolean {
    return proto3.util.equals(MsgClose, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgCloseResponse
 */
export class MsgCloseResponse extends Message<MsgCloseResponse> {
  constructor(data?: PartialMessage<MsgCloseResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgCloseResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCloseResponse {
    return new MsgCloseResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCloseResponse | PlainMessage<MsgCloseResponse> | undefined, b: MsgCloseResponse | PlainMessage<MsgCloseResponse> | undefined): boolean {
    return proto3.util.equals(MsgCloseResponse, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: elys.leveragelp.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgUpdateParams";
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
 * @generated from message elys.leveragelp.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgUpdateParamsResponse";
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
 * @generated from message elys.leveragelp.MsgUpdatePools
 */
export class MsgUpdatePools extends Message<MsgUpdatePools> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: repeated elys.leveragelp.Pool pools = 2;
   */
  pools: Pool[] = [];

  constructor(data?: PartialMessage<MsgUpdatePools>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgUpdatePools";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pools", kind: "message", T: Pool, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePools {
    return new MsgUpdatePools().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePools {
    return new MsgUpdatePools().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePools {
    return new MsgUpdatePools().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePools | PlainMessage<MsgUpdatePools> | undefined, b: MsgUpdatePools | PlainMessage<MsgUpdatePools> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePools, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgUpdatePoolsResponse
 */
export class MsgUpdatePoolsResponse extends Message<MsgUpdatePoolsResponse> {
  constructor(data?: PartialMessage<MsgUpdatePoolsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgUpdatePoolsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdatePoolsResponse {
    return new MsgUpdatePoolsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdatePoolsResponse {
    return new MsgUpdatePoolsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdatePoolsResponse {
    return new MsgUpdatePoolsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdatePoolsResponse | PlainMessage<MsgUpdatePoolsResponse> | undefined, b: MsgUpdatePoolsResponse | PlainMessage<MsgUpdatePoolsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdatePoolsResponse, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgWhitelist
 */
export class MsgWhitelist extends Message<MsgWhitelist> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string whitelisted_address = 2;
   */
  whitelistedAddress = "";

  constructor(data?: PartialMessage<MsgWhitelist>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgWhitelist";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "whitelisted_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWhitelist {
    return new MsgWhitelist().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWhitelist | PlainMessage<MsgWhitelist> | undefined, b: MsgWhitelist | PlainMessage<MsgWhitelist> | undefined): boolean {
    return proto3.util.equals(MsgWhitelist, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgWhitelistResponse
 */
export class MsgWhitelistResponse extends Message<MsgWhitelistResponse> {
  constructor(data?: PartialMessage<MsgWhitelistResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgWhitelistResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWhitelistResponse {
    return new MsgWhitelistResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWhitelistResponse | PlainMessage<MsgWhitelistResponse> | undefined, b: MsgWhitelistResponse | PlainMessage<MsgWhitelistResponse> | undefined): boolean {
    return proto3.util.equals(MsgWhitelistResponse, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgDewhitelist
 */
export class MsgDewhitelist extends Message<MsgDewhitelist> {
  /**
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * @generated from field: string whitelisted_address = 2;
   */
  whitelistedAddress = "";

  constructor(data?: PartialMessage<MsgDewhitelist>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgDewhitelist";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "whitelisted_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDewhitelist {
    return new MsgDewhitelist().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDewhitelist | PlainMessage<MsgDewhitelist> | undefined, b: MsgDewhitelist | PlainMessage<MsgDewhitelist> | undefined): boolean {
    return proto3.util.equals(MsgDewhitelist, a, b);
  }
}

/**
 * @generated from message elys.leveragelp.MsgDewhitelistResponse
 */
export class MsgDewhitelistResponse extends Message<MsgDewhitelistResponse> {
  constructor(data?: PartialMessage<MsgDewhitelistResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.leveragelp.MsgDewhitelistResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDewhitelistResponse {
    return new MsgDewhitelistResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDewhitelistResponse | PlainMessage<MsgDewhitelistResponse> | undefined, b: MsgDewhitelistResponse | PlainMessage<MsgDewhitelistResponse> | undefined): boolean {
    return proto3.util.equals(MsgDewhitelistResponse, a, b);
  }
}

