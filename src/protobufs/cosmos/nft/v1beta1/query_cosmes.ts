// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/query.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBalanceByQueryStringRequest, QueryBalanceByQueryStringResponse, QueryBalanceRequest, QueryBalanceResponse, QueryClassByQueryStringRequest, QueryClassByQueryStringResponse, QueryClassesRequest, QueryClassesResponse, QueryClassRequest, QueryClassResponse, QueryNFTByQueryStringRequest, QueryNFTByQueryStringResponse, QueryNFTRequest, QueryNFTResponse, QueryNFTsRequest, QueryNFTsResponse, QueryOwnerByQueryStringRequest, QueryOwnerByQueryStringResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyByQueryStringRequest, QuerySupplyByQueryStringResponse, QuerySupplyRequest, QuerySupplyResponse } from "./query_pb.js";

const TYPE_NAME = "cosmos.nft.v1beta1.Query";

/**
 * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Balance
 */
export const QueryBalanceService = {
  typeName: TYPE_NAME,
  method: "Balance",
  Request: QueryBalanceRequest,
  Response: QueryBalanceResponse,
} as const;

/**
 * BalancebyQueryString queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 *
 * Since: nft v0.1.1
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.BalanceByQueryString
 */
export const QueryBalanceByQueryStringService = {
  typeName: TYPE_NAME,
  method: "BalanceByQueryString",
  Request: QueryBalanceByQueryStringRequest,
  Response: QueryBalanceByQueryStringResponse,
} as const;

/**
 * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Owner
 */
export const QueryOwnerService = {
  typeName: TYPE_NAME,
  method: "Owner",
  Request: QueryOwnerRequest,
  Response: QueryOwnerResponse,
} as const;

/**
 * OwnerByQueryString queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 *
 * Since: nft v0.1.1
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.OwnerByQueryString
 */
export const QueryOwnerByQueryStringService = {
  typeName: TYPE_NAME,
  method: "OwnerByQueryString",
  Request: QueryOwnerByQueryStringRequest,
  Response: QueryOwnerByQueryStringResponse,
} as const;

/**
 * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Supply
 */
export const QuerySupplyService = {
  typeName: TYPE_NAME,
  method: "Supply",
  Request: QuerySupplyRequest,
  Response: QuerySupplyResponse,
} as const;

/**
 * SupplyByQueryString queries the number of NFTs from the given class, same as totalSupply of ERC721.
 *
 * Since: nft v0.1.1
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.SupplyByQueryString
 */
export const QuerySupplyByQueryStringService = {
  typeName: TYPE_NAME,
  method: "SupplyByQueryString",
  Request: QuerySupplyByQueryStringRequest,
  Response: QuerySupplyByQueryStringResponse,
} as const;

/**
 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 * ERC721Enumerable
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.NFTs
 */
export const QueryNFTsService = {
  typeName: TYPE_NAME,
  method: "NFTs",
  Request: QueryNFTsRequest,
  Response: QueryNFTsResponse,
} as const;

/**
 * NFT queries an NFT based on its class and id.
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.NFT
 */
export const QueryNFTService = {
  typeName: TYPE_NAME,
  method: "NFT",
  Request: QueryNFTRequest,
  Response: QueryNFTResponse,
} as const;

/**
 * NFTByQueryString queries an NFT based on its class and id.
 *
 * Since: nft v0.1.1
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.NFTByQueryString
 */
export const QueryNFTByQueryStringService = {
  typeName: TYPE_NAME,
  method: "NFTByQueryString",
  Request: QueryNFTByQueryStringRequest,
  Response: QueryNFTByQueryStringResponse,
} as const;

/**
 * Class queries an NFT class based on its id
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Class
 */
export const QueryClassService = {
  typeName: TYPE_NAME,
  method: "Class",
  Request: QueryClassRequest,
  Response: QueryClassResponse,
} as const;

/**
 * Class queries an NFT class based on its id
 *
 * Since: nft v0.1.1
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.ClassByQueryString
 */
export const QueryClassByQueryStringService = {
  typeName: TYPE_NAME,
  method: "ClassByQueryString",
  Request: QueryClassByQueryStringRequest,
  Response: QueryClassByQueryStringResponse,
} as const;

/**
 * Classes queries all NFT classes
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Classes
 */
export const QueryClassesService = {
  typeName: TYPE_NAME,
  method: "Classes",
  Request: QueryClassesRequest,
  Response: QueryClassesResponse,
} as const;

