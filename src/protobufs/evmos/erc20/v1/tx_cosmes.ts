// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file evmos/erc20/v1/tx.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgConvertERC20, MsgConvertERC20Response, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "evmos.erc20.v1.Msg";

/**
 * ConvertERC20 mints a native Cosmos coin representation of the ERC20 token
 * contract that is registered on the token mapping.
 *
 * @generated from rpc evmos.erc20.v1.Msg.ConvertERC20
 */
export const MsgConvertERC20Service = {
  typeName: TYPE_NAME,
  method: "ConvertERC20",
  Request: MsgConvertERC20,
  Response: MsgConvertERC20Response,
} as const;

/**
 * UpdateParams defined a governance operation for updating the x/erc20 module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc evmos.erc20.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;
