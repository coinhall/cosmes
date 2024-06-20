// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/accountedpool/query.proto (package elys.accountedpool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AccountedPool } from "./accounted_pool_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * @generated from message elys.accountedpool.QueryGetAccountedPoolRequest
 */
export class QueryGetAccountedPoolRequest extends Message<QueryGetAccountedPoolRequest> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  constructor(data?: PartialMessage<QueryGetAccountedPoolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.accountedpool.QueryGetAccountedPoolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAccountedPoolRequest {
    return new QueryGetAccountedPoolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAccountedPoolRequest {
    return new QueryGetAccountedPoolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAccountedPoolRequest {
    return new QueryGetAccountedPoolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAccountedPoolRequest | PlainMessage<QueryGetAccountedPoolRequest> | undefined, b: QueryGetAccountedPoolRequest | PlainMessage<QueryGetAccountedPoolRequest> | undefined): boolean {
    return proto3.util.equals(QueryGetAccountedPoolRequest, a, b);
  }
}

/**
 * @generated from message elys.accountedpool.QueryGetAccountedPoolResponse
 */
export class QueryGetAccountedPoolResponse extends Message<QueryGetAccountedPoolResponse> {
  /**
   * @generated from field: elys.accountedpool.AccountedPool accounted_pool = 1;
   */
  accountedPool?: AccountedPool;

  constructor(data?: PartialMessage<QueryGetAccountedPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.accountedpool.QueryGetAccountedPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accounted_pool", kind: "message", T: AccountedPool },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAccountedPoolResponse {
    return new QueryGetAccountedPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAccountedPoolResponse {
    return new QueryGetAccountedPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAccountedPoolResponse {
    return new QueryGetAccountedPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGetAccountedPoolResponse | PlainMessage<QueryGetAccountedPoolResponse> | undefined, b: QueryGetAccountedPoolResponse | PlainMessage<QueryGetAccountedPoolResponse> | undefined): boolean {
    return proto3.util.equals(QueryGetAccountedPoolResponse, a, b);
  }
}

/**
 * @generated from message elys.accountedpool.QueryAllAccountedPoolRequest
 */
export class QueryAllAccountedPoolRequest extends Message<QueryAllAccountedPoolRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllAccountedPoolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.accountedpool.QueryAllAccountedPoolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllAccountedPoolRequest {
    return new QueryAllAccountedPoolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllAccountedPoolRequest {
    return new QueryAllAccountedPoolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllAccountedPoolRequest {
    return new QueryAllAccountedPoolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllAccountedPoolRequest | PlainMessage<QueryAllAccountedPoolRequest> | undefined, b: QueryAllAccountedPoolRequest | PlainMessage<QueryAllAccountedPoolRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllAccountedPoolRequest, a, b);
  }
}

/**
 * @generated from message elys.accountedpool.QueryAllAccountedPoolResponse
 */
export class QueryAllAccountedPoolResponse extends Message<QueryAllAccountedPoolResponse> {
  /**
   * @generated from field: repeated elys.accountedpool.AccountedPool accounted_pool = 1;
   */
  accountedPool: AccountedPool[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllAccountedPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.accountedpool.QueryAllAccountedPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accounted_pool", kind: "message", T: AccountedPool, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllAccountedPoolResponse {
    return new QueryAllAccountedPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllAccountedPoolResponse {
    return new QueryAllAccountedPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllAccountedPoolResponse {
    return new QueryAllAccountedPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllAccountedPoolResponse | PlainMessage<QueryAllAccountedPoolResponse> | undefined, b: QueryAllAccountedPoolResponse | PlainMessage<QueryAllAccountedPoolResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllAccountedPoolResponse, a, b);
  }
}

