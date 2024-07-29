// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/refractor/v1/tx.proto (package pryzm.refractor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgRedeem, MsgRedeemResponse, MsgRefract, MsgRefractResponse } from "./tx_pb.js";

const TYPE_NAME = "pryzm.refractor.v1.Msg";

/**
 * @generated from rpc pryzm.refractor.v1.Msg.Refract
 */
export const MsgRefractService = {
  typeName: TYPE_NAME,
  method: "Refract",
  Request: MsgRefract,
  Response: MsgRefractResponse,
} as const;

/**
 * this line is used by starport scaffolding # proto/tx/rpc
 *
 * @generated from rpc pryzm.refractor.v1.Msg.Redeem
 */
export const MsgRedeemService = {
  typeName: TYPE_NAME,
  method: "Redeem",
  Request: MsgRedeem,
  Response: MsgRedeemResponse,
} as const;

