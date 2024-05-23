// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/clock/v1/query.proto (package elys.clock.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";

/**
 * QueryClockContracts is the request type to get all contracts.
 *
 * @generated from message elys.clock.v1.QueryClockContracts
 */
export class QueryClockContracts extends Message<QueryClockContracts> {
  constructor(data?: PartialMessage<QueryClockContracts>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.clock.v1.QueryClockContracts";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClockContracts {
    return new QueryClockContracts().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClockContracts {
    return new QueryClockContracts().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClockContracts {
    return new QueryClockContracts().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClockContracts | PlainMessage<QueryClockContracts> | undefined, b: QueryClockContracts | PlainMessage<QueryClockContracts> | undefined): boolean {
    return proto3.util.equals(QueryClockContracts, a, b);
  }
}

/**
 * QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method.
 *
 * @generated from message elys.clock.v1.QueryClockContractsResponse
 */
export class QueryClockContractsResponse extends Message<QueryClockContractsResponse> {
  /**
   * @generated from field: repeated string contract_addresses = 1;
   */
  contractAddresses: string[] = [];

  constructor(data?: PartialMessage<QueryClockContractsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.clock.v1.QueryClockContractsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClockContractsResponse {
    return new QueryClockContractsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClockContractsResponse {
    return new QueryClockContractsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClockContractsResponse {
    return new QueryClockContractsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryClockContractsResponse | PlainMessage<QueryClockContractsResponse> | undefined, b: QueryClockContractsResponse | PlainMessage<QueryClockContractsResponse> | undefined): boolean {
    return proto3.util.equals(QueryClockContractsResponse, a, b);
  }
}

/**
 * QueryParams is the request type to get all module params.
 *
 * @generated from message elys.clock.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.clock.v1.QueryParamsRequest";
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
 * QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method.
 *
 * @generated from message elys.clock.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: elys.clock.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.clock.v1.QueryParamsResponse";
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

