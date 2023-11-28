// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/ocr/v1beta1/tx.proto (package injective.ocr.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FeedConfig, Params, Report } from "./ocr_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message injective.ocr.v1beta1.MsgCreateFeed
 */
export class MsgCreateFeed extends Message<MsgCreateFeed> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: injective.ocr.v1beta1.FeedConfig config = 2;
   */
  config?: FeedConfig;

  constructor(data?: PartialMessage<MsgCreateFeed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgCreateFeed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: FeedConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFeed {
    return new MsgCreateFeed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFeed {
    return new MsgCreateFeed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFeed {
    return new MsgCreateFeed().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateFeed | PlainMessage<MsgCreateFeed> | undefined, b: MsgCreateFeed | PlainMessage<MsgCreateFeed> | undefined): boolean {
    return proto3.util.equals(MsgCreateFeed, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgCreateFeedResponse
 */
export class MsgCreateFeedResponse extends Message<MsgCreateFeedResponse> {
  constructor(data?: PartialMessage<MsgCreateFeedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgCreateFeedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateFeedResponse {
    return new MsgCreateFeedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateFeedResponse {
    return new MsgCreateFeedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateFeedResponse {
    return new MsgCreateFeedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCreateFeedResponse | PlainMessage<MsgCreateFeedResponse> | undefined, b: MsgCreateFeedResponse | PlainMessage<MsgCreateFeedResponse> | undefined): boolean {
    return proto3.util.equals(MsgCreateFeedResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateFeed
 */
export class MsgUpdateFeed extends Message<MsgUpdateFeed> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * feed_id is an unique ID for the target of this config
   *
   * @generated from field: string feed_id = 2;
   */
  feedId = "";

  /**
   * signers ith element is address ith oracle uses to sign a report
   *
   * @generated from field: repeated string signers = 3;
   */
  signers: string[] = [];

  /**
   * transmitters ith element is address ith oracle uses to transmit a report
   * via the transmit method
   *
   * @generated from field: repeated string transmitters = 4;
   */
  transmitters: string[] = [];

  /**
   * Fixed LINK reward for each observer
   *
   * @generated from field: string link_per_observation = 5;
   */
  linkPerObservation = "";

  /**
   * Fixed LINK reward for transmitter
   *
   * @generated from field: string link_per_transmission = 6;
   */
  linkPerTransmission = "";

  /**
   * Native denom for LINK coin in the bank keeper
   *
   * @generated from field: string link_denom = 7;
   */
  linkDenom = "";

  /**
   * feed administrator
   *
   * @generated from field: string feed_admin = 8;
   */
  feedAdmin = "";

  /**
   * feed billing administrator
   *
   * @generated from field: string billing_admin = 9;
   */
  billingAdmin = "";

  constructor(data?: PartialMessage<MsgUpdateFeed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgUpdateFeed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "signers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "transmitters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "link_per_observation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "link_per_transmission", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "link_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "feed_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "billing_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFeed {
    return new MsgUpdateFeed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFeed {
    return new MsgUpdateFeed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFeed {
    return new MsgUpdateFeed().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateFeed | PlainMessage<MsgUpdateFeed> | undefined, b: MsgUpdateFeed | PlainMessage<MsgUpdateFeed> | undefined): boolean {
    return proto3.util.equals(MsgUpdateFeed, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateFeedResponse
 */
export class MsgUpdateFeedResponse extends Message<MsgUpdateFeedResponse> {
  constructor(data?: PartialMessage<MsgUpdateFeedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgUpdateFeedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFeedResponse {
    return new MsgUpdateFeedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFeedResponse {
    return new MsgUpdateFeedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFeedResponse {
    return new MsgUpdateFeedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateFeedResponse | PlainMessage<MsgUpdateFeedResponse> | undefined, b: MsgUpdateFeedResponse | PlainMessage<MsgUpdateFeedResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateFeedResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgTransmit
 */
export class MsgTransmit extends Message<MsgTransmit> {
  /**
   * Address of the transmitter
   *
   * @generated from field: string transmitter = 1;
   */
  transmitter = "";

  /**
   * @generated from field: bytes config_digest = 2;
   */
  configDigest = new Uint8Array(0);

  /**
   * @generated from field: string feed_id = 3;
   */
  feedId = "";

  /**
   * @generated from field: uint64 epoch = 4;
   */
  epoch = protoInt64.zero;

  /**
   * @generated from field: uint64 round = 5;
   */
  round = protoInt64.zero;

  /**
   * @generated from field: bytes extra_hash = 6;
   */
  extraHash = new Uint8Array(0);

  /**
   * @generated from field: injective.ocr.v1beta1.Report report = 7;
   */
  report?: Report;

  /**
   * @generated from field: repeated bytes signatures = 8;
   */
  signatures: Uint8Array[] = [];

  constructor(data?: PartialMessage<MsgTransmit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgTransmit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "transmitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config_digest", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "epoch", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "round", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "extra_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "report", kind: "message", T: Report },
    { no: 8, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransmit {
    return new MsgTransmit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransmit {
    return new MsgTransmit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransmit {
    return new MsgTransmit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransmit | PlainMessage<MsgTransmit> | undefined, b: MsgTransmit | PlainMessage<MsgTransmit> | undefined): boolean {
    return proto3.util.equals(MsgTransmit, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgTransmitResponse
 */
export class MsgTransmitResponse extends Message<MsgTransmitResponse> {
  constructor(data?: PartialMessage<MsgTransmitResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgTransmitResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransmitResponse {
    return new MsgTransmitResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransmitResponse {
    return new MsgTransmitResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransmitResponse {
    return new MsgTransmitResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransmitResponse | PlainMessage<MsgTransmitResponse> | undefined, b: MsgTransmitResponse | PlainMessage<MsgTransmitResponse> | undefined): boolean {
    return proto3.util.equals(MsgTransmitResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgFundFeedRewardPool
 */
export class MsgFundFeedRewardPool extends Message<MsgFundFeedRewardPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string feed_id = 2;
   */
  feedId = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgFundFeedRewardPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgFundFeedRewardPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundFeedRewardPool {
    return new MsgFundFeedRewardPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPool {
    return new MsgFundFeedRewardPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPool {
    return new MsgFundFeedRewardPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundFeedRewardPool | PlainMessage<MsgFundFeedRewardPool> | undefined, b: MsgFundFeedRewardPool | PlainMessage<MsgFundFeedRewardPool> | undefined): boolean {
    return proto3.util.equals(MsgFundFeedRewardPool, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse
 */
export class MsgFundFeedRewardPoolResponse extends Message<MsgFundFeedRewardPoolResponse> {
  constructor(data?: PartialMessage<MsgFundFeedRewardPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgFundFeedRewardPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundFeedRewardPoolResponse {
    return new MsgFundFeedRewardPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPoolResponse {
    return new MsgFundFeedRewardPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundFeedRewardPoolResponse {
    return new MsgFundFeedRewardPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundFeedRewardPoolResponse | PlainMessage<MsgFundFeedRewardPoolResponse> | undefined, b: MsgFundFeedRewardPoolResponse | PlainMessage<MsgFundFeedRewardPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgFundFeedRewardPoolResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgWithdrawFeedRewardPool
 */
export class MsgWithdrawFeedRewardPool extends Message<MsgWithdrawFeedRewardPool> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string feed_id = 2;
   */
  feedId = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgWithdrawFeedRewardPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgWithdrawFeedRewardPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFeedRewardPool {
    return new MsgWithdrawFeedRewardPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPool {
    return new MsgWithdrawFeedRewardPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPool {
    return new MsgWithdrawFeedRewardPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawFeedRewardPool | PlainMessage<MsgWithdrawFeedRewardPool> | undefined, b: MsgWithdrawFeedRewardPool | PlainMessage<MsgWithdrawFeedRewardPool> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawFeedRewardPool, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse
 */
export class MsgWithdrawFeedRewardPoolResponse extends Message<MsgWithdrawFeedRewardPoolResponse> {
  constructor(data?: PartialMessage<MsgWithdrawFeedRewardPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgWithdrawFeedRewardPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawFeedRewardPoolResponse {
    return new MsgWithdrawFeedRewardPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPoolResponse {
    return new MsgWithdrawFeedRewardPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawFeedRewardPoolResponse {
    return new MsgWithdrawFeedRewardPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawFeedRewardPoolResponse | PlainMessage<MsgWithdrawFeedRewardPoolResponse> | undefined, b: MsgWithdrawFeedRewardPoolResponse | PlainMessage<MsgWithdrawFeedRewardPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawFeedRewardPoolResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgSetPayees
 */
export class MsgSetPayees extends Message<MsgSetPayees> {
  /**
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string feed_id = 2;
   */
  feedId = "";

  /**
   * addresses oracles use to transmit the reports
   *
   * @generated from field: repeated string transmitters = 3;
   */
  transmitters: string[] = [];

  /**
   * addresses of payees corresponding to list of transmitters
   *
   * @generated from field: repeated string payees = 4;
   */
  payees: string[] = [];

  constructor(data?: PartialMessage<MsgSetPayees>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgSetPayees";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transmitters", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "payees", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPayees {
    return new MsgSetPayees().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPayees {
    return new MsgSetPayees().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPayees {
    return new MsgSetPayees().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetPayees | PlainMessage<MsgSetPayees> | undefined, b: MsgSetPayees | PlainMessage<MsgSetPayees> | undefined): boolean {
    return proto3.util.equals(MsgSetPayees, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgSetPayeesResponse
 */
export class MsgSetPayeesResponse extends Message<MsgSetPayeesResponse> {
  constructor(data?: PartialMessage<MsgSetPayeesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgSetPayeesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetPayeesResponse {
    return new MsgSetPayeesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetPayeesResponse {
    return new MsgSetPayeesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetPayeesResponse {
    return new MsgSetPayeesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetPayeesResponse | PlainMessage<MsgSetPayeesResponse> | undefined, b: MsgSetPayeesResponse | PlainMessage<MsgSetPayeesResponse> | undefined): boolean {
    return proto3.util.equals(MsgSetPayeesResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgTransferPayeeship
 */
export class MsgTransferPayeeship extends Message<MsgTransferPayeeship> {
  /**
   * transmitter address of oracle whose payee is changing
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

  /**
   * @generated from field: string transmitter = 2;
   */
  transmitter = "";

  /**
   * @generated from field: string feed_id = 3;
   */
  feedId = "";

  /**
   * new payee address
   *
   * @generated from field: string proposed = 4;
   */
  proposed = "";

  constructor(data?: PartialMessage<MsgTransferPayeeship>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgTransferPayeeship";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "transmitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "proposed", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPayeeship {
    return new MsgTransferPayeeship().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPayeeship {
    return new MsgTransferPayeeship().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPayeeship {
    return new MsgTransferPayeeship().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransferPayeeship | PlainMessage<MsgTransferPayeeship> | undefined, b: MsgTransferPayeeship | PlainMessage<MsgTransferPayeeship> | undefined): boolean {
    return proto3.util.equals(MsgTransferPayeeship, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgTransferPayeeshipResponse
 */
export class MsgTransferPayeeshipResponse extends Message<MsgTransferPayeeshipResponse> {
  constructor(data?: PartialMessage<MsgTransferPayeeshipResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgTransferPayeeshipResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferPayeeshipResponse {
    return new MsgTransferPayeeshipResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferPayeeshipResponse {
    return new MsgTransferPayeeshipResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferPayeeshipResponse {
    return new MsgTransferPayeeshipResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgTransferPayeeshipResponse | PlainMessage<MsgTransferPayeeshipResponse> | undefined, b: MsgTransferPayeeshipResponse | PlainMessage<MsgTransferPayeeshipResponse> | undefined): boolean {
    return proto3.util.equals(MsgTransferPayeeshipResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgAcceptPayeeship
 */
export class MsgAcceptPayeeship extends Message<MsgAcceptPayeeship> {
  /**
   * new payee address
   *
   * @generated from field: string payee = 1;
   */
  payee = "";

  /**
   * transmitter address of oracle whose payee is changing
   *
   * @generated from field: string transmitter = 2;
   */
  transmitter = "";

  /**
   * @generated from field: string feed_id = 3;
   */
  feedId = "";

  constructor(data?: PartialMessage<MsgAcceptPayeeship>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgAcceptPayeeship";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "payee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "transmitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcceptPayeeship {
    return new MsgAcceptPayeeship().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcceptPayeeship {
    return new MsgAcceptPayeeship().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcceptPayeeship {
    return new MsgAcceptPayeeship().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAcceptPayeeship | PlainMessage<MsgAcceptPayeeship> | undefined, b: MsgAcceptPayeeship | PlainMessage<MsgAcceptPayeeship> | undefined): boolean {
    return proto3.util.equals(MsgAcceptPayeeship, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgAcceptPayeeshipResponse
 */
export class MsgAcceptPayeeshipResponse extends Message<MsgAcceptPayeeshipResponse> {
  constructor(data?: PartialMessage<MsgAcceptPayeeshipResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgAcceptPayeeshipResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcceptPayeeshipResponse {
    return new MsgAcceptPayeeshipResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcceptPayeeshipResponse {
    return new MsgAcceptPayeeshipResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcceptPayeeshipResponse {
    return new MsgAcceptPayeeshipResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgAcceptPayeeshipResponse | PlainMessage<MsgAcceptPayeeshipResponse> | undefined, b: MsgAcceptPayeeshipResponse | PlainMessage<MsgAcceptPayeeshipResponse> | undefined): boolean {
    return proto3.util.equals(MsgAcceptPayeeshipResponse, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params defines the ocr parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: injective.ocr.v1beta1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * @generated from message injective.ocr.v1beta1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.ocr.v1beta1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}
