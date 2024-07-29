// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/mint/v1/query.proto (package pryzm.mint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Minter } from "./minter_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message pryzm.mint.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.mint.v1.QueryParamsRequest";
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
 * @generated from message pryzm.mint.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: pryzm.mint.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.mint.v1.QueryParamsResponse";
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
 * @generated from message pryzm.mint.v1.QueryMinterRequest
 */
export class QueryMinterRequest extends Message<QueryMinterRequest> {
  constructor(data?: PartialMessage<QueryMinterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.mint.v1.QueryMinterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMinterRequest {
    return new QueryMinterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMinterRequest {
    return new QueryMinterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMinterRequest {
    return new QueryMinterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryMinterRequest | PlainMessage<QueryMinterRequest> | undefined, b: QueryMinterRequest | PlainMessage<QueryMinterRequest> | undefined): boolean {
    return proto3.util.equals(QueryMinterRequest, a, b);
  }
}

/**
 * @generated from message pryzm.mint.v1.QueryMinterResponse
 */
export class QueryMinterResponse extends Message<QueryMinterResponse> {
  /**
   * @generated from field: pryzm.mint.v1.Minter minter = 1;
   */
  minter?: Minter;

  constructor(data?: PartialMessage<QueryMinterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.mint.v1.QueryMinterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "minter", kind: "message", T: Minter },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMinterResponse {
    return new QueryMinterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMinterResponse {
    return new QueryMinterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMinterResponse {
    return new QueryMinterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryMinterResponse | PlainMessage<QueryMinterResponse> | undefined, b: QueryMinterResponse | PlainMessage<QueryMinterResponse> | undefined): boolean {
    return proto3.util.equals(QueryMinterResponse, a, b);
  }
}

