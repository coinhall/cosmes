// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file evmos/vesting/v2/tx.proto (package evmos.vesting.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgClawback, MsgClawbackResponse, MsgConvertVestingAccount, MsgConvertVestingAccountResponse, MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgFundVestingAccount, MsgFundVestingAccountResponse, MsgUpdateVestingFunder, MsgUpdateVestingFunderResponse } from "./tx_pb.js";

const TYPE_NAME = "evmos.vesting.v2.Msg";

/**
 * CreateClawbackVestingAccount creats a vesting account that is subject to clawback.
 *
 * @generated from rpc evmos.vesting.v2.Msg.CreateClawbackVestingAccount
 */
export const MsgCreateClawbackVestingAccountService = {
  typeName: TYPE_NAME,
  method: "CreateClawbackVestingAccount",
  Request: MsgCreateClawbackVestingAccount,
  Response: MsgCreateClawbackVestingAccountResponse,
} as const;

/**
 * FundVestingAccount funds an existing ClawbackVestingAccount with tokens
 * according to the vesting and lockup schedules.
 *
 * @generated from rpc evmos.vesting.v2.Msg.FundVestingAccount
 */
export const MsgFundVestingAccountService = {
  typeName: TYPE_NAME,
  method: "FundVestingAccount",
  Request: MsgFundVestingAccount,
  Response: MsgFundVestingAccountResponse,
} as const;

/**
 * Clawback removes the unvested tokens from a ClawbackVestingAccount.
 *
 * @generated from rpc evmos.vesting.v2.Msg.Clawback
 */
export const MsgClawbackService = {
  typeName: TYPE_NAME,
  method: "Clawback",
  Request: MsgClawback,
  Response: MsgClawbackResponse,
} as const;

/**
 * UpdateVestingFunder updates the funder address of an existing
 * ClawbackVestingAccount.
 *
 * @generated from rpc evmos.vesting.v2.Msg.UpdateVestingFunder
 */
export const MsgUpdateVestingFunderService = {
  typeName: TYPE_NAME,
  method: "UpdateVestingFunder",
  Request: MsgUpdateVestingFunder,
  Response: MsgUpdateVestingFunderResponse,
} as const;

/**
 * ConvertVestingAccount converts a ClawbackVestingAccount to an Eth account
 *
 * @generated from rpc evmos.vesting.v2.Msg.ConvertVestingAccount
 */
export const MsgConvertVestingAccountService = {
  typeName: TYPE_NAME,
  method: "ConvertVestingAccount",
  Request: MsgConvertVestingAccount,
  Response: MsgConvertVestingAccountResponse,
} as const;
