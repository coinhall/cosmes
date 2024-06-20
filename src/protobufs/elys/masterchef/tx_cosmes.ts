// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/masterchef/tx.proto (package elys.masterchef, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddExternalIncentive, MsgAddExternalIncentiveResponse, MsgAddExternalRewardDenom, MsgAddExternalRewardDenomResponse, MsgClaimRewards, MsgClaimRewardsResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePoolMultipliers, MsgUpdatePoolMultipliersResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.masterchef.Msg";

/**
 * @generated from rpc elys.masterchef.Msg.AddExternalRewardDenom
 */
export const MsgAddExternalRewardDenomService = {
  typeName: TYPE_NAME,
  method: "AddExternalRewardDenom",
  Request: MsgAddExternalRewardDenom,
  Response: MsgAddExternalRewardDenomResponse,
} as const;

/**
 * @generated from rpc elys.masterchef.Msg.AddExternalIncentive
 */
export const MsgAddExternalIncentiveService = {
  typeName: TYPE_NAME,
  method: "AddExternalIncentive",
  Request: MsgAddExternalIncentive,
  Response: MsgAddExternalIncentiveResponse,
} as const;

/**
 * @generated from rpc elys.masterchef.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc elys.masterchef.Msg.UpdatePoolMultipliers
 */
export const MsgUpdatePoolMultipliersService = {
  typeName: TYPE_NAME,
  method: "UpdatePoolMultipliers",
  Request: MsgUpdatePoolMultipliers,
  Response: MsgUpdatePoolMultipliersResponse,
} as const;

/**
 * @generated from rpc elys.masterchef.Msg.ClaimRewards
 */
export const MsgClaimRewardsService = {
  typeName: TYPE_NAME,
  method: "ClaimRewards",
  Request: MsgClaimRewards,
  Response: MsgClaimRewardsResponse,
} as const;

