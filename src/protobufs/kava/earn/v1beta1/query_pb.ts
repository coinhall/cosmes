// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/earn/v1beta1/query.proto (package kava.earn.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { StrategyType } from "./strategy_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { VaultShare } from "./vault_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * QueryParamsRequest defines the request type for querying x/earn parameters.
 *
 * @generated from message kava.earn.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryParamsRequest";
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
 * QueryParamsResponse defines the response type for querying x/earn parameters.
 *
 * @generated from message kava.earn.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params represents the earn module parameters
   *
   * @generated from field: kava.earn.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryParamsResponse";
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
 * QueryVaultsRequest is the request type for the Query/Vaults RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryVaultsRequest
 */
export class QueryVaultsRequest extends Message<QueryVaultsRequest> {
  constructor(data?: PartialMessage<QueryVaultsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryVaultsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVaultsRequest {
    return new QueryVaultsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVaultsRequest {
    return new QueryVaultsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVaultsRequest {
    return new QueryVaultsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVaultsRequest | PlainMessage<QueryVaultsRequest> | undefined, b: QueryVaultsRequest | PlainMessage<QueryVaultsRequest> | undefined): boolean {
    return proto3.util.equals(QueryVaultsRequest, a, b);
  }
}

/**
 * QueryVaultsResponse is the response type for the Query/Vaults RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryVaultsResponse
 */
export class QueryVaultsResponse extends Message<QueryVaultsResponse> {
  /**
   * vaults represents the earn module vaults
   *
   * @generated from field: repeated kava.earn.v1beta1.VaultResponse vaults = 1;
   */
  vaults: VaultResponse[] = [];

  constructor(data?: PartialMessage<QueryVaultsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryVaultsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vaults", kind: "message", T: VaultResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVaultsResponse {
    return new QueryVaultsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVaultsResponse {
    return new QueryVaultsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVaultsResponse {
    return new QueryVaultsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVaultsResponse | PlainMessage<QueryVaultsResponse> | undefined, b: QueryVaultsResponse | PlainMessage<QueryVaultsResponse> | undefined): boolean {
    return proto3.util.equals(QueryVaultsResponse, a, b);
  }
}

/**
 * QueryVaultRequest is the request type for the Query/Vault RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryVaultRequest
 */
export class QueryVaultRequest extends Message<QueryVaultRequest> {
  /**
   * vault filters vault by denom
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryVaultRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryVaultRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVaultRequest {
    return new QueryVaultRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVaultRequest {
    return new QueryVaultRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVaultRequest {
    return new QueryVaultRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVaultRequest | PlainMessage<QueryVaultRequest> | undefined, b: QueryVaultRequest | PlainMessage<QueryVaultRequest> | undefined): boolean {
    return proto3.util.equals(QueryVaultRequest, a, b);
  }
}

/**
 * QueryVaultResponse is the response type for the Query/Vault RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryVaultResponse
 */
export class QueryVaultResponse extends Message<QueryVaultResponse> {
  /**
   * vault represents the queried earn module vault
   *
   * @generated from field: kava.earn.v1beta1.VaultResponse vault = 1;
   */
  vault?: VaultResponse;

  constructor(data?: PartialMessage<QueryVaultResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryVaultResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vault", kind: "message", T: VaultResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVaultResponse {
    return new QueryVaultResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVaultResponse {
    return new QueryVaultResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVaultResponse {
    return new QueryVaultResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVaultResponse | PlainMessage<QueryVaultResponse> | undefined, b: QueryVaultResponse | PlainMessage<QueryVaultResponse> | undefined): boolean {
    return proto3.util.equals(QueryVaultResponse, a, b);
  }
}

/**
 * VaultResponse is the response type for a vault.
 *
 * @generated from message kava.earn.v1beta1.VaultResponse
 */
export class VaultResponse extends Message<VaultResponse> {
  /**
   * denom represents the denom of the vault
   *
   * @generated from field: string denom = 1;
   */
  denom = "";

  /**
   * VaultStrategy is the strategy used for this vault.
   *
   * @generated from field: repeated kava.earn.v1beta1.StrategyType strategies = 2;
   */
  strategies: StrategyType[] = [];

  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   *
   * @generated from field: bool is_private_vault = 3;
   */
  isPrivateVault = false;

  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   *
   * @generated from field: repeated string allowed_depositors = 4;
   */
  allowedDepositors: string[] = [];

  /**
   * TotalShares is the total amount of shares issued to depositors.
   *
   * @generated from field: string total_shares = 5;
   */
  totalShares = "";

  /**
   * TotalValue is the total value of denom coins supplied to the vault if the
   * vault were to be liquidated.
   *
   * @generated from field: string total_value = 6;
   */
  totalValue = "";

  constructor(data?: PartialMessage<VaultResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.VaultResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "strategies", kind: "enum", T: proto3.getEnumType(StrategyType), repeated: true },
    { no: 3, name: "is_private_vault", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "allowed_depositors", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "total_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "total_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultResponse {
    return new VaultResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultResponse {
    return new VaultResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultResponse {
    return new VaultResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VaultResponse | PlainMessage<VaultResponse> | undefined, b: VaultResponse | PlainMessage<VaultResponse> | undefined): boolean {
    return proto3.util.equals(VaultResponse, a, b);
  }
}

/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryDepositsRequest
 */
export class QueryDepositsRequest extends Message<QueryDepositsRequest> {
  /**
   * depositor optionally filters deposits by depositor
   *
   * @generated from field: string depositor = 1;
   */
  depositor = "";

  /**
   * denom optionally filters deposits by vault denom
   *
   * @generated from field: string denom = 2;
   */
  denom = "";

  /**
   * respond with vault value in ukava for bkava vaults
   *
   * @generated from field: bool value_in_staked_tokens = 3;
   */
  valueInStakedTokens = false;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryDepositsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryDepositsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value_in_staked_tokens", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined, b: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined): boolean {
    return proto3.util.equals(QueryDepositsRequest, a, b);
  }
}

/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from message kava.earn.v1beta1.QueryDepositsResponse
 */
export class QueryDepositsResponse extends Message<QueryDepositsResponse> {
  /**
   * deposits returns the deposits matching the requested parameters
   *
   * @generated from field: repeated kava.earn.v1beta1.DepositResponse deposits = 1;
   */
  deposits: DepositResponse[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryDepositsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryDepositsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposits", kind: "message", T: DepositResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined, b: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined): boolean {
    return proto3.util.equals(QueryDepositsResponse, a, b);
  }
}

/**
 * DepositResponse defines a deposit query response type.
 *
 * @generated from message kava.earn.v1beta1.DepositResponse
 */
export class DepositResponse extends Message<DepositResponse> {
  /**
   * depositor represents the owner of the deposit.
   *
   * @generated from field: string depositor = 1;
   */
  depositor = "";

  /**
   * Shares represent the issued shares from their corresponding vaults.
   *
   * @generated from field: repeated kava.earn.v1beta1.VaultShare shares = 2;
   */
  shares: VaultShare[] = [];

  /**
   * Value represents the total accumulated value of denom coins supplied to
   * vaults. This may be greater than or equal to amount_supplied depending on
   * the strategy.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin value = 3;
   */
  value: Coin[] = [];

  constructor(data?: PartialMessage<DepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.DepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "shares", kind: "message", T: VaultShare, repeated: true },
    { no: 3, name: "value", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositResponse {
    return new DepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositResponse {
    return new DepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositResponse {
    return new DepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DepositResponse | PlainMessage<DepositResponse> | undefined, b: DepositResponse | PlainMessage<DepositResponse> | undefined): boolean {
    return proto3.util.equals(DepositResponse, a, b);
  }
}

/**
 * QueryTotalSupplyRequest defines the request type for Query/TotalSupply method.
 *
 * @generated from message kava.earn.v1beta1.QueryTotalSupplyRequest
 */
export class QueryTotalSupplyRequest extends Message<QueryTotalSupplyRequest> {
  constructor(data?: PartialMessage<QueryTotalSupplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryTotalSupplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyRequest {
    return new QueryTotalSupplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined, b: QueryTotalSupplyRequest | PlainMessage<QueryTotalSupplyRequest> | undefined): boolean {
    return proto3.util.equals(QueryTotalSupplyRequest, a, b);
  }
}

/**
 * TotalSupplyResponse defines the response type for the Query/TotalSupply method.
 *
 * @generated from message kava.earn.v1beta1.QueryTotalSupplyResponse
 */
export class QueryTotalSupplyResponse extends Message<QueryTotalSupplyResponse> {
  /**
   * Height is the block height at which these totals apply
   *
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * Result is a list of coins supplied to earn
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin result = 2;
   */
  result: Coin[] = [];

  constructor(data?: PartialMessage<QueryTotalSupplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.QueryTotalSupplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "result", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalSupplyResponse {
    return new QueryTotalSupplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined, b: QueryTotalSupplyResponse | PlainMessage<QueryTotalSupplyResponse> | undefined): boolean {
    return proto3.util.equals(QueryTotalSupplyResponse, a, b);
  }
}

