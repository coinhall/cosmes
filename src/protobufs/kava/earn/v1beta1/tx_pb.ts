// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/earn/v1beta1/tx.proto (package kava.earn.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { StrategyType } from "./strategy_pb.js";
import { VaultShare } from "./vault_pb.js";

/**
 * MsgDeposit represents a message for depositing assedts into a vault
 *
 * @generated from message kava.earn.v1beta1.MsgDeposit
 */
export class MsgDeposit extends Message<MsgDeposit> {
  /**
   * depositor represents the address to deposit funds from
   *
   * @generated from field: string depositor = 1;
   */
  depositor = "";

  /**
   * Amount represents the token to deposit. The vault corresponds to the denom
   * of the amount coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * Strategy is the vault strategy to use.
   *
   * @generated from field: kava.earn.v1beta1.StrategyType strategy = 3;
   */
  strategy = StrategyType.UNSPECIFIED;

  constructor(data?: PartialMessage<MsgDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.MsgDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "strategy", kind: "enum", T: proto3.getEnumType(StrategyType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit {
    return new MsgDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean {
    return proto3.util.equals(MsgDeposit, a, b);
  }
}

/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message kava.earn.v1beta1.MsgDepositResponse
 */
export class MsgDepositResponse extends Message<MsgDepositResponse> {
  /**
   * @generated from field: kava.earn.v1beta1.VaultShare shares = 1;
   */
  shares?: VaultShare;

  constructor(data?: PartialMessage<MsgDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.MsgDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shares", kind: "message", T: VaultShare },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean {
    return proto3.util.equals(MsgDepositResponse, a, b);
  }
}

/**
 * MsgWithdraw represents a message for withdrawing liquidity from a vault
 *
 * @generated from message kava.earn.v1beta1.MsgWithdraw
 */
export class MsgWithdraw extends Message<MsgWithdraw> {
  /**
   * from represents the address we are withdrawing for
   *
   * @generated from field: string from = 1;
   */
  from = "";

  /**
   * Amount represents the token to withdraw. The vault corresponds to the denom
   * of the amount coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * Strategy is the vault strategy to use.
   *
   * @generated from field: kava.earn.v1beta1.StrategyType strategy = 3;
   */
  strategy = StrategyType.UNSPECIFIED;

  constructor(data?: PartialMessage<MsgWithdraw>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.MsgWithdraw";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "strategy", kind: "enum", T: proto3.getEnumType(StrategyType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdraw {
    return new MsgWithdraw().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined, b: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined): boolean {
    return proto3.util.equals(MsgWithdraw, a, b);
  }
}

/**
 * MsgWithdrawResponse defines the Msg/Withdraw response type.
 *
 * @generated from message kava.earn.v1beta1.MsgWithdrawResponse
 */
export class MsgWithdrawResponse extends Message<MsgWithdrawResponse> {
  /**
   * @generated from field: kava.earn.v1beta1.VaultShare shares = 1;
   */
  shares?: VaultShare;

  constructor(data?: PartialMessage<MsgWithdrawResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.earn.v1beta1.MsgWithdrawResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shares", kind: "message", T: VaultShare },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawResponse {
    return new MsgWithdrawResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined, b: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawResponse, a, b);
  }
}
