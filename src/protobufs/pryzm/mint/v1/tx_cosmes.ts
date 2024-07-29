// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/mint/v1/tx.proto (package pryzm.mint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgDappAccountSpend, MsgDappAccountSpendResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "pryzm.mint.v1.Msg";

/**
 * @generated from rpc pryzm.mint.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * this line is used by starport scaffolding # proto/tx/rpc
 *
 * @generated from rpc pryzm.mint.v1.Msg.DappAccountSpend
 */
export const MsgDappAccountSpendService = {
  typeName: TYPE_NAME,
  method: "DappAccountSpend",
  Request: MsgDappAccountSpend,
  Response: MsgDappAccountSpendResponse,
} as const;

