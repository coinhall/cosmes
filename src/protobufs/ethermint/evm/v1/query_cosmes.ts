// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ethermint/evm/v1/query.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EstimateGasResponse, EthCallRequest, QueryAccountRequest, QueryAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryCodeRequest, QueryCodeResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryStorageRequest, QueryStorageResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse } from "./query_pb.js";
import { MsgEthereumTxResponse } from "./tx_pb.js";

const TYPE_NAME = "ethermint.evm.v1.Query";

/**
 * Account queries an Ethereum account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Account
 */
export const QueryAccountService = {
  typeName: TYPE_NAME,
  method: "Account",
  Request: QueryAccountRequest,
  Response: QueryAccountResponse,
} as const;

/**
 * CosmosAccount queries an Ethereum account's Cosmos Address.
 *
 * @generated from rpc ethermint.evm.v1.Query.CosmosAccount
 */
export const QueryCosmosAccountService = {
  typeName: TYPE_NAME,
  method: "CosmosAccount",
  Request: QueryCosmosAccountRequest,
  Response: QueryCosmosAccountResponse,
} as const;

/**
 * ValidatorAccount queries an Ethereum account's from a validator consensus
 * Address.
 *
 * @generated from rpc ethermint.evm.v1.Query.ValidatorAccount
 */
export const QueryValidatorAccountService = {
  typeName: TYPE_NAME,
  method: "ValidatorAccount",
  Request: QueryValidatorAccountRequest,
  Response: QueryValidatorAccountResponse,
} as const;

/**
 * Balance queries the balance of a the EVM denomination for a single
 * account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Balance
 */
export const QueryBalanceService = {
  typeName: TYPE_NAME,
  method: "Balance",
  Request: QueryBalanceRequest,
  Response: QueryBalanceResponse,
} as const;

/**
 * Storage queries the balance of all coins for a single account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Storage
 */
export const QueryStorageService = {
  typeName: TYPE_NAME,
  method: "Storage",
  Request: QueryStorageRequest,
  Response: QueryStorageResponse,
} as const;

/**
 * Code queries the balance of all coins for a single account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Code
 */
export const QueryCodeService = {
  typeName: TYPE_NAME,
  method: "Code",
  Request: QueryCodeRequest,
  Response: QueryCodeResponse,
} as const;

/**
 * Params queries the parameters of x/evm module.
 *
 * @generated from rpc ethermint.evm.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * EthCall implements the `eth_call` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.EthCall
 */
export const QueryEthCallService = {
  typeName: TYPE_NAME,
  method: "EthCall",
  Request: EthCallRequest,
  Response: MsgEthereumTxResponse,
} as const;

/**
 * EstimateGas implements the `eth_estimateGas` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.EstimateGas
 */
export const QueryEstimateGasService = {
  typeName: TYPE_NAME,
  method: "EstimateGas",
  Request: EthCallRequest,
  Response: EstimateGasResponse,
} as const;

/**
 * TraceTx implements the `debug_traceTransaction` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.TraceTx
 */
export const QueryTraceTxService = {
  typeName: TYPE_NAME,
  method: "TraceTx",
  Request: QueryTraceTxRequest,
  Response: QueryTraceTxResponse,
} as const;

/**
 * TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.TraceBlock
 */
export const QueryTraceBlockService = {
  typeName: TYPE_NAME,
  method: "TraceBlock",
  Request: QueryTraceBlockRequest,
  Response: QueryTraceBlockResponse,
} as const;

/**
 * BaseFee queries the base fee of the parent block of the current block,
 * it's similar to feemarket module's method, but also checks london hardfork status.
 *
 * @generated from rpc ethermint.evm.v1.Query.BaseFee
 */
export const QueryBaseFeeService = {
  typeName: TYPE_NAME,
  method: "BaseFee",
  Request: QueryBaseFeeRequest,
  Response: QueryBaseFeeResponse,
} as const;

