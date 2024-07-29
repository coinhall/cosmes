// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/gamm/v1beta1/query.proto (package osmosis.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ParamsRequest, ParamsResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCFMMConcentratedPoolLinksRequest, QueryCFMMConcentratedPoolLinksResponse, QueryConcentratedPoolIdLinkFromCFMMRequest, QueryConcentratedPoolIdLinkFromCFMMResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.gamm.v1beta1.Query";

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.Pools
 */
export const QueryPoolsService = {
  typeName: TYPE_NAME,
  method: "Pools",
  Request: QueryPoolsRequest,
  Response: QueryPoolsResponse,
} as const;

/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.NumPools
 * @deprecated
 */
export const QueryNumPoolsService = {
  typeName: TYPE_NAME,
  method: "NumPools",
  Request: QueryNumPoolsRequest,
  Response: QueryNumPoolsResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalLiquidity
 */
export const QueryTotalLiquidityService = {
  typeName: TYPE_NAME,
  method: "TotalLiquidity",
  Request: QueryTotalLiquidityRequest,
  Response: QueryTotalLiquidityResponse,
} as const;

/**
 * PoolsWithFilter allows you to query specific pools with requested
 * parameters
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolsWithFilter
 */
export const QueryPoolsWithFilterService = {
  typeName: TYPE_NAME,
  method: "PoolsWithFilter",
  Request: QueryPoolsWithFilterRequest,
  Response: QueryPoolsWithFilterResponse,
} as const;

/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.Pool
 * @deprecated
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryPoolRequest,
  Response: QueryPoolResponse,
} as const;

/**
 * PoolType returns the type of the pool.
 * Returns "Balancer" as a string literal when the pool is a balancer pool.
 * Errors if the pool is failed to be type caseted.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolType
 */
export const QueryPoolTypeService = {
  typeName: TYPE_NAME,
  method: "PoolType",
  Request: QueryPoolTypeRequest,
  Response: QueryPoolTypeResponse,
} as const;

/**
 * Simulates joining pool without a swap. Returns the amount of shares you'd
 * get and tokens needed to provide
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcJoinPoolNoSwapShares
 */
export const QueryCalcJoinPoolNoSwapSharesService = {
  typeName: TYPE_NAME,
  method: "CalcJoinPoolNoSwapShares",
  Request: QueryCalcJoinPoolNoSwapSharesRequest,
  Response: QueryCalcJoinPoolNoSwapSharesResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcJoinPoolShares
 */
export const QueryCalcJoinPoolSharesService = {
  typeName: TYPE_NAME,
  method: "CalcJoinPoolShares",
  Request: QueryCalcJoinPoolSharesRequest,
  Response: QueryCalcJoinPoolSharesResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.CalcExitPoolCoinsFromShares
 */
export const QueryCalcExitPoolCoinsFromSharesService = {
  typeName: TYPE_NAME,
  method: "CalcExitPoolCoinsFromShares",
  Request: QueryCalcExitPoolCoinsFromSharesRequest,
  Response: QueryCalcExitPoolCoinsFromSharesResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.PoolParams
 */
export const QueryPoolParamsService = {
  typeName: TYPE_NAME,
  method: "PoolParams",
  Request: QueryPoolParamsRequest,
  Response: QueryPoolParamsResponse,
} as const;

/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalPoolLiquidity
 * @deprecated
 */
export const QueryTotalPoolLiquidityService = {
  typeName: TYPE_NAME,
  method: "TotalPoolLiquidity",
  Request: QueryTotalPoolLiquidityRequest,
  Response: QueryTotalPoolLiquidityResponse,
} as const;

/**
 * @generated from rpc osmosis.gamm.v1beta1.Query.TotalShares
 */
export const QueryTotalSharesService = {
  typeName: TYPE_NAME,
  method: "TotalShares",
  Request: QueryTotalSharesRequest,
  Response: QueryTotalSharesResponse,
} as const;

/**
 * SpotPrice defines a gRPC query handler that returns the spot price given
 * a base denomination and a quote denomination.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.SpotPrice
 * @deprecated
 */
export const QuerySpotPriceService = {
  typeName: TYPE_NAME,
  method: "SpotPrice",
  Request: QuerySpotPriceRequest,
  Response: QuerySpotPriceResponse,
} as const;

/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.EstimateSwapExactAmountIn
 * @deprecated
 */
export const QueryEstimateSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountIn",
  Request: QuerySwapExactAmountInRequest,
  Response: QuerySwapExactAmountInResponse,
} as const;

/**
 * Deprecated: please use the alternative in x/poolmanager
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.EstimateSwapExactAmountOut
 * @deprecated
 */
export const QueryEstimateSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "EstimateSwapExactAmountOut",
  Request: QuerySwapExactAmountOutRequest,
  Response: QuerySwapExactAmountOutResponse,
} as const;

/**
 * ConcentratedPoolIdLinkFromBalancer returns the pool id of the concentrated
 * pool that is linked with the given CFMM pool.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.ConcentratedPoolIdLinkFromCFMM
 */
export const QueryConcentratedPoolIdLinkFromCFMMService = {
  typeName: TYPE_NAME,
  method: "ConcentratedPoolIdLinkFromCFMM",
  Request: QueryConcentratedPoolIdLinkFromCFMMRequest,
  Response: QueryConcentratedPoolIdLinkFromCFMMResponse,
} as const;

/**
 * CFMMConcentratedPoolLinks returns migration links between CFMM and
 * Concentrated pools.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.CFMMConcentratedPoolLinks
 */
export const QueryCFMMConcentratedPoolLinksService = {
  typeName: TYPE_NAME,
  method: "CFMMConcentratedPoolLinks",
  Request: QueryCFMMConcentratedPoolLinksRequest,
  Response: QueryCFMMConcentratedPoolLinksResponse,
} as const;

/**
 * Params returns gamm module params.
 *
 * @generated from rpc osmosis.gamm.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

