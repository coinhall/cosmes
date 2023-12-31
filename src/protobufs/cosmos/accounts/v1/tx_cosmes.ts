// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/accounts/v1/tx.proto (package cosmos.accounts.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgExecute, MsgExecuteBundle, MsgExecuteBundleResponse, MsgExecuteResponse, MsgInit, MsgInitResponse } from "./tx_pb.js";

const TYPE_NAME = "cosmos.accounts.v1.Msg";

/**
 * Init creates a new account in the chain.
 *
 * @generated from rpc cosmos.accounts.v1.Msg.Init
 */
export const MsgInitService = {
  typeName: TYPE_NAME,
  method: "Init",
  Request: MsgInit,
  Response: MsgInitResponse,
} as const;

/**
 * Execute executes a message to the target account.
 *
 * @generated from rpc cosmos.accounts.v1.Msg.Execute
 */
export const MsgExecuteService = {
  typeName: TYPE_NAME,
  method: "Execute",
  Request: MsgExecute,
  Response: MsgExecuteResponse,
} as const;

/**
 * ExecuteBundle pertains account abstraction, it is used by the bundler
 * to execute multiple UserOperations in a single transaction message.
 *
 * @generated from rpc cosmos.accounts.v1.Msg.ExecuteBundle
 */
export const MsgExecuteBundleService = {
  typeName: TYPE_NAME,
  method: "ExecuteBundle",
  Request: MsgExecuteBundle,
  Response: MsgExecuteBundleResponse,
} as const;

