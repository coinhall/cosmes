// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/tokenomics/query.proto (package elys.tokenomics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Airdrop } from "./airdrop_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { GenesisInflation } from "./genesis_inflation_pb.js";
import { TimeBasedInflation } from "./time_based_inflation_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message elys.tokenomics.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryParamsRequest";
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
 * @generated from message elys.tokenomics.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: elys.tokenomics.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryParamsResponse";
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
 * @generated from message elys.tokenomics.QueryGetAirdropRequest
 */
export class QueryGetAirdropRequest extends Message<QueryGetAirdropRequest> {
  /**
   * @generated from field: string intent = 1;
   */
  intent = "";

  constructor(data?: PartialMessage<QueryGetAirdropRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetAirdropRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "intent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAirdropRequest {
    return new QueryGetAirdropRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAirdropRequest {
    return new QueryGetAirdropRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAirdropRequest {
    return new QueryGetAirdropRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAirdropRequest | PlainMessage<QueryGetAirdropRequest> | undefined, b: QueryGetAirdropRequest | PlainMessage<QueryGetAirdropRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetAirdropRequest, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryGetAirdropResponse
 */
export class QueryGetAirdropResponse extends Message<QueryGetAirdropResponse> {
  /**
   * @generated from field: elys.tokenomics.Airdrop airdrop = 1;
   */
  airdrop?: Airdrop;

  constructor(data?: PartialMessage<QueryGetAirdropResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetAirdropResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "airdrop", kind: "message", T: Airdrop },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAirdropResponse {
    return new QueryGetAirdropResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAirdropResponse {
    return new QueryGetAirdropResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAirdropResponse {
    return new QueryGetAirdropResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAirdropResponse | PlainMessage<QueryGetAirdropResponse> | undefined, b: QueryGetAirdropResponse | PlainMessage<QueryGetAirdropResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetAirdropResponse, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryAllAirdropRequest
 */
export class QueryAllAirdropRequest extends Message<QueryAllAirdropRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllAirdropRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryAllAirdropRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllAirdropRequest {
    return new QueryAllAirdropRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllAirdropRequest {
    return new QueryAllAirdropRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllAirdropRequest {
    return new QueryAllAirdropRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllAirdropRequest | PlainMessage<QueryAllAirdropRequest> | undefined, b: QueryAllAirdropRequest | PlainMessage<QueryAllAirdropRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllAirdropRequest, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryAllAirdropResponse
 */
export class QueryAllAirdropResponse extends Message<QueryAllAirdropResponse> {
  /**
   * @generated from field: repeated elys.tokenomics.Airdrop airdrop = 1;
   */
  airdrop: Airdrop[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllAirdropResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryAllAirdropResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "airdrop", kind: "message", T: Airdrop, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllAirdropResponse {
    return new QueryAllAirdropResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllAirdropResponse {
    return new QueryAllAirdropResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllAirdropResponse {
    return new QueryAllAirdropResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllAirdropResponse | PlainMessage<QueryAllAirdropResponse> | undefined, b: QueryAllAirdropResponse | PlainMessage<QueryAllAirdropResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllAirdropResponse, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryGetGenesisInflationRequest
 */
export class QueryGetGenesisInflationRequest extends Message<QueryGetGenesisInflationRequest> {
  constructor(data?: PartialMessage<QueryGetGenesisInflationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetGenesisInflationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetGenesisInflationRequest {
    return new QueryGetGenesisInflationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetGenesisInflationRequest {
    return new QueryGetGenesisInflationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetGenesisInflationRequest {
    return new QueryGetGenesisInflationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetGenesisInflationRequest | PlainMessage<QueryGetGenesisInflationRequest> | undefined, b: QueryGetGenesisInflationRequest | PlainMessage<QueryGetGenesisInflationRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetGenesisInflationRequest, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryGetGenesisInflationResponse
 */
export class QueryGetGenesisInflationResponse extends Message<QueryGetGenesisInflationResponse> {
  /**
   * @generated from field: elys.tokenomics.GenesisInflation genesis_inflation = 1;
   */
  genesisInflation?: GenesisInflation;

  constructor(data?: PartialMessage<QueryGetGenesisInflationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetGenesisInflationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "genesis_inflation", kind: "message", T: GenesisInflation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetGenesisInflationResponse {
    return new QueryGetGenesisInflationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetGenesisInflationResponse {
    return new QueryGetGenesisInflationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetGenesisInflationResponse {
    return new QueryGetGenesisInflationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetGenesisInflationResponse | PlainMessage<QueryGetGenesisInflationResponse> | undefined, b: QueryGetGenesisInflationResponse | PlainMessage<QueryGetGenesisInflationResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetGenesisInflationResponse, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryGetTimeBasedInflationRequest
 */
export class QueryGetTimeBasedInflationRequest extends Message<QueryGetTimeBasedInflationRequest> {
  /**
   * @generated from field: uint64 start_block_height = 1;
   */
  startBlockHeight = protoInt64.zero;

  /**
   * @generated from field: uint64 end_block_height = 2;
   */
  endBlockHeight = protoInt64.zero;

  constructor(data?: PartialMessage<QueryGetTimeBasedInflationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetTimeBasedInflationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "end_block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetTimeBasedInflationRequest {
    return new QueryGetTimeBasedInflationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetTimeBasedInflationRequest {
    return new QueryGetTimeBasedInflationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetTimeBasedInflationRequest {
    return new QueryGetTimeBasedInflationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetTimeBasedInflationRequest | PlainMessage<QueryGetTimeBasedInflationRequest> | undefined, b: QueryGetTimeBasedInflationRequest | PlainMessage<QueryGetTimeBasedInflationRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetTimeBasedInflationRequest, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryGetTimeBasedInflationResponse
 */
export class QueryGetTimeBasedInflationResponse extends Message<QueryGetTimeBasedInflationResponse> {
  /**
   * @generated from field: elys.tokenomics.TimeBasedInflation time_based_inflation = 1;
   */
  timeBasedInflation?: TimeBasedInflation;

  constructor(data?: PartialMessage<QueryGetTimeBasedInflationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryGetTimeBasedInflationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time_based_inflation", kind: "message", T: TimeBasedInflation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetTimeBasedInflationResponse {
    return new QueryGetTimeBasedInflationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetTimeBasedInflationResponse {
    return new QueryGetTimeBasedInflationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetTimeBasedInflationResponse {
    return new QueryGetTimeBasedInflationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetTimeBasedInflationResponse | PlainMessage<QueryGetTimeBasedInflationResponse> | undefined, b: QueryGetTimeBasedInflationResponse | PlainMessage<QueryGetTimeBasedInflationResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetTimeBasedInflationResponse, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryAllTimeBasedInflationRequest
 */
export class QueryAllTimeBasedInflationRequest extends Message<QueryAllTimeBasedInflationRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllTimeBasedInflationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryAllTimeBasedInflationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllTimeBasedInflationRequest {
    return new QueryAllTimeBasedInflationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllTimeBasedInflationRequest {
    return new QueryAllTimeBasedInflationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllTimeBasedInflationRequest {
    return new QueryAllTimeBasedInflationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllTimeBasedInflationRequest | PlainMessage<QueryAllTimeBasedInflationRequest> | undefined, b: QueryAllTimeBasedInflationRequest | PlainMessage<QueryAllTimeBasedInflationRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllTimeBasedInflationRequest, a, b);
  }
}

/**
 * @generated from message elys.tokenomics.QueryAllTimeBasedInflationResponse
 */
export class QueryAllTimeBasedInflationResponse extends Message<QueryAllTimeBasedInflationResponse> {
  /**
   * @generated from field: repeated elys.tokenomics.TimeBasedInflation time_based_inflation = 1;
   */
  timeBasedInflation: TimeBasedInflation[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllTimeBasedInflationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.tokenomics.QueryAllTimeBasedInflationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "time_based_inflation", kind: "message", T: TimeBasedInflation, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllTimeBasedInflationResponse {
    return new QueryAllTimeBasedInflationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllTimeBasedInflationResponse {
    return new QueryAllTimeBasedInflationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllTimeBasedInflationResponse {
    return new QueryAllTimeBasedInflationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllTimeBasedInflationResponse | PlainMessage<QueryAllTimeBasedInflationResponse> | undefined, b: QueryAllTimeBasedInflationResponse | PlainMessage<QueryAllTimeBasedInflationResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllTimeBasedInflationResponse, a, b);
  }
}

