// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/burner/query.proto (package elys.burner, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { History } from "./history_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message elys.burner.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryParamsRequest";
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
 * @generated from message elys.burner.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: elys.burner.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryParamsResponse";
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
 * @generated from message elys.burner.QueryGetHistoryRequest
 */
export class QueryGetHistoryRequest extends Message<QueryGetHistoryRequest> {
  /**
   * @generated from field: string timestamp = 1;
   */
  timestamp = "";

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryGetHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryGetHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetHistoryRequest {
    return new QueryGetHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetHistoryRequest {
    return new QueryGetHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetHistoryRequest {
    return new QueryGetHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetHistoryRequest | PlainMessage<QueryGetHistoryRequest> | undefined, b: QueryGetHistoryRequest | PlainMessage<QueryGetHistoryRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetHistoryRequest, a, b);
  }
}

/**
 * @generated from message elys.burner.QueryGetHistoryResponse
 */
export class QueryGetHistoryResponse extends Message<QueryGetHistoryResponse> {
  /**
   * @generated from field: elys.burner.History history = 1;
   */
  history?: History;

  constructor(data?: PartialMessage<QueryGetHistoryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryGetHistoryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "history", kind: "message", T: History },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetHistoryResponse {
    return new QueryGetHistoryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetHistoryResponse {
    return new QueryGetHistoryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetHistoryResponse {
    return new QueryGetHistoryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetHistoryResponse | PlainMessage<QueryGetHistoryResponse> | undefined, b: QueryGetHistoryResponse | PlainMessage<QueryGetHistoryResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetHistoryResponse, a, b);
  }
}

/**
 * @generated from message elys.burner.QueryAllHistoryRequest
 */
export class QueryAllHistoryRequest extends Message<QueryAllHistoryRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryAllHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllHistoryRequest {
    return new QueryAllHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllHistoryRequest {
    return new QueryAllHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllHistoryRequest {
    return new QueryAllHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllHistoryRequest | PlainMessage<QueryAllHistoryRequest> | undefined, b: QueryAllHistoryRequest | PlainMessage<QueryAllHistoryRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllHistoryRequest, a, b);
  }
}

/**
 * @generated from message elys.burner.QueryAllHistoryResponse
 */
export class QueryAllHistoryResponse extends Message<QueryAllHistoryResponse> {
  /**
   * @generated from field: repeated elys.burner.History history = 1;
   */
  history: History[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllHistoryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.burner.QueryAllHistoryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "history", kind: "message", T: History, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllHistoryResponse {
    return new QueryAllHistoryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllHistoryResponse {
    return new QueryAllHistoryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllHistoryResponse {
    return new QueryAllHistoryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllHistoryResponse | PlainMessage<QueryAllHistoryResponse> | undefined, b: QueryAllHistoryResponse | PlainMessage<QueryAllHistoryResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllHistoryResponse, a, b);
  }
}

