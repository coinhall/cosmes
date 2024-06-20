// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/bep3/v1beta1/query.proto (package kava.bep3.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAssetSuppliesRequest, QueryAssetSuppliesResponse, QueryAssetSupplyRequest, QueryAssetSupplyResponse, QueryAtomicSwapRequest, QueryAtomicSwapResponse, QueryAtomicSwapsRequest, QueryAtomicSwapsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "kava.bep3.v1beta1.Query";

/**
 * Params queries module params
 *
 * @generated from rpc kava.bep3.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * AssetSupply queries info about an asset's supply
 *
 * @generated from rpc kava.bep3.v1beta1.Query.AssetSupply
 */
export const QueryAssetSupplyService = {
  typeName: TYPE_NAME,
  method: "AssetSupply",
  Request: QueryAssetSupplyRequest,
  Response: QueryAssetSupplyResponse,
} as const;

/**
 * AssetSupplies queries a list of asset supplies
 *
 * @generated from rpc kava.bep3.v1beta1.Query.AssetSupplies
 */
export const QueryAssetSuppliesService = {
  typeName: TYPE_NAME,
  method: "AssetSupplies",
  Request: QueryAssetSuppliesRequest,
  Response: QueryAssetSuppliesResponse,
} as const;

/**
 * AtomicSwap queries info about an atomic swap
 *
 * @generated from rpc kava.bep3.v1beta1.Query.AtomicSwap
 */
export const QueryAtomicSwapService = {
  typeName: TYPE_NAME,
  method: "AtomicSwap",
  Request: QueryAtomicSwapRequest,
  Response: QueryAtomicSwapResponse,
} as const;

/**
 * AtomicSwaps queries a list of atomic swaps
 *
 * @generated from rpc kava.bep3.v1beta1.Query.AtomicSwaps
 */
export const QueryAtomicSwapsService = {
  typeName: TYPE_NAME,
  method: "AtomicSwaps",
  Request: QueryAtomicSwapsRequest,
  Response: QueryAtomicSwapsResponse,
} as const;

