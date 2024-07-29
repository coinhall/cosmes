// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/precisebank/v1/query.proto (package kava.precisebank.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryFractionalBalanceRequest, QueryFractionalBalanceResponse, QueryRemainderRequest, QueryRemainderResponse, QueryTotalFractionalBalancesRequest, QueryTotalFractionalBalancesResponse } from "./query_pb.js";

const TYPE_NAME = "kava.precisebank.v1.Query";

/**
 * TotalFractionalBalances returns the total sum of all fractional balances
 * managed by the precisebank module.
 *
 * @generated from rpc kava.precisebank.v1.Query.TotalFractionalBalances
 */
export const QueryTotalFractionalBalancesService = {
  typeName: TYPE_NAME,
  method: "TotalFractionalBalances",
  Request: QueryTotalFractionalBalancesRequest,
  Response: QueryTotalFractionalBalancesResponse,
} as const;

/**
 * Remainder returns the amount backed by the reserve, but not yet owned by
 * any account, i.e. not in circulation.
 *
 * @generated from rpc kava.precisebank.v1.Query.Remainder
 */
export const QueryRemainderService = {
  typeName: TYPE_NAME,
  method: "Remainder",
  Request: QueryRemainderRequest,
  Response: QueryRemainderResponse,
} as const;

/**
 * FractionalBalance returns only the fractional balance of an address. This
 * does not include any integer balance.
 *
 * @generated from rpc kava.precisebank.v1.Query.FractionalBalance
 */
export const QueryFractionalBalanceService = {
  typeName: TYPE_NAME,
  method: "FractionalBalance",
  Request: QueryFractionalBalanceRequest,
  Response: QueryFractionalBalanceResponse,
} as const;

