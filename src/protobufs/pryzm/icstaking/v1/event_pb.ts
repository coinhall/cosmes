// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/icstaking/v1/event.proto (package pryzm.icstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { HostChain, HostChainState } from "./host_chain_pb.js";
import { Params } from "./params_pb.js";
import { ChannelUndelegation, Undelegation } from "./undelegation_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Acknowledgement, MultiSigConnection, MultiSigPacket } from "./multisig_pb.js";
import { Height } from "../../../ibc/core/client/v1/client_pb.js";

/**
 * @generated from message pryzm.icstaking.v1.EventSetHostChain
 */
export class EventSetHostChain extends Message<EventSetHostChain> {
  /**
   * @generated from field: pryzm.icstaking.v1.HostChain host_chain = 1;
   */
  hostChain?: HostChain;

  constructor(data?: PartialMessage<EventSetHostChain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetHostChain";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host_chain", kind: "message", T: HostChain },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetHostChain {
    return new EventSetHostChain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetHostChain {
    return new EventSetHostChain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetHostChain {
    return new EventSetHostChain().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetHostChain | PlainMessage<EventSetHostChain> | undefined, b: EventSetHostChain | PlainMessage<EventSetHostChain> | undefined): boolean {
    return proto3.util.equals(EventSetHostChain, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetHostChainState
 */
export class EventSetHostChainState extends Message<EventSetHostChainState> {
  /**
   * @generated from field: pryzm.icstaking.v1.HostChainState host_chain_state = 1;
   */
  hostChainState?: HostChainState;

  constructor(data?: PartialMessage<EventSetHostChainState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetHostChainState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host_chain_state", kind: "message", T: HostChainState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetHostChainState {
    return new EventSetHostChainState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetHostChainState {
    return new EventSetHostChainState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetHostChainState {
    return new EventSetHostChainState().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetHostChainState | PlainMessage<EventSetHostChainState> | undefined, b: EventSetHostChainState | PlainMessage<EventSetHostChainState> | undefined): boolean {
    return proto3.util.equals(EventSetHostChainState, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetParams
 */
export class EventSetParams extends Message<EventSetParams> {
  /**
   * @generated from field: pryzm.icstaking.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<EventSetParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetParams {
    return new EventSetParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetParams {
    return new EventSetParams().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetParams | PlainMessage<EventSetParams> | undefined, b: EventSetParams | PlainMessage<EventSetParams> | undefined): boolean {
    return proto3.util.equals(EventSetParams, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetUndelegation
 */
export class EventSetUndelegation extends Message<EventSetUndelegation> {
  /**
   * @generated from field: pryzm.icstaking.v1.Undelegation undelegation = 1;
   */
  undelegation?: Undelegation;

  constructor(data?: PartialMessage<EventSetUndelegation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetUndelegation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "undelegation", kind: "message", T: Undelegation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetUndelegation {
    return new EventSetUndelegation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetUndelegation {
    return new EventSetUndelegation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetUndelegation {
    return new EventSetUndelegation().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetUndelegation | PlainMessage<EventSetUndelegation> | undefined, b: EventSetUndelegation | PlainMessage<EventSetUndelegation> | undefined): boolean {
    return proto3.util.equals(EventSetUndelegation, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetChannelUndelegation
 */
export class EventSetChannelUndelegation extends Message<EventSetChannelUndelegation> {
  /**
   * @generated from field: pryzm.icstaking.v1.ChannelUndelegation channel_undelegation = 1;
   */
  channelUndelegation?: ChannelUndelegation;

  constructor(data?: PartialMessage<EventSetChannelUndelegation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetChannelUndelegation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_undelegation", kind: "message", T: ChannelUndelegation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetChannelUndelegation {
    return new EventSetChannelUndelegation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetChannelUndelegation {
    return new EventSetChannelUndelegation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetChannelUndelegation {
    return new EventSetChannelUndelegation().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetChannelUndelegation | PlainMessage<EventSetChannelUndelegation> | undefined, b: EventSetChannelUndelegation | PlainMessage<EventSetChannelUndelegation> | undefined): boolean {
    return proto3.util.equals(EventSetChannelUndelegation, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventStake
 */
export class EventStake extends Message<EventStake> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * @generated from field: string transfer_channel = 3;
   */
  transferChannel = "";

  /**
   * @generated from field: string amount = 4;
   */
  amount = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 5;
   */
  fee?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin c_amount = 6;
   */
  cAmount?: Coin;

  constructor(data?: PartialMessage<EventStake>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventStake";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transfer_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "fee", kind: "message", T: Coin },
    { no: 6, name: "c_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventStake {
    return new EventStake().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventStake {
    return new EventStake().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventStake {
    return new EventStake().fromJsonString(jsonString, options);
  }

  static equals(a: EventStake | PlainMessage<EventStake> | undefined, b: EventStake | PlainMessage<EventStake> | undefined): boolean {
    return proto3.util.equals(EventStake, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventStakeLsmShares
 */
export class EventStakeLsmShares extends Message<EventStakeLsmShares> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * @generated from field: string transfer_channel = 3;
   */
  transferChannel = "";

  /**
   * @generated from field: string lsm_denom = 4;
   */
  lsmDenom = "";

  /**
   * @generated from field: string amount = 5;
   */
  amount = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 6;
   */
  fee?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin c_amount = 7;
   */
  cAmount?: Coin;

  constructor(data?: PartialMessage<EventStakeLsmShares>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventStakeLsmShares";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transfer_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "lsm_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "fee", kind: "message", T: Coin },
    { no: 7, name: "c_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventStakeLsmShares {
    return new EventStakeLsmShares().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventStakeLsmShares {
    return new EventStakeLsmShares().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventStakeLsmShares {
    return new EventStakeLsmShares().fromJsonString(jsonString, options);
  }

  static equals(a: EventStakeLsmShares | PlainMessage<EventStakeLsmShares> | undefined, b: EventStakeLsmShares | PlainMessage<EventStakeLsmShares> | undefined): boolean {
    return proto3.util.equals(EventStakeLsmShares, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventUnstake
 */
export class EventUnstake extends Message<EventUnstake> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * @generated from field: string transfer_channel = 3;
   */
  transferChannel = "";

  /**
   * @generated from field: string c_amount = 4;
   */
  cAmount = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin u_amount = 5;
   */
  uAmount?: Coin;

  constructor(data?: PartialMessage<EventUnstake>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventUnstake";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transfer_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "c_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "u_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnstake {
    return new EventUnstake().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnstake {
    return new EventUnstake().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnstake {
    return new EventUnstake().fromJsonString(jsonString, options);
  }

  static equals(a: EventUnstake | PlainMessage<EventUnstake> | undefined, b: EventUnstake | PlainMessage<EventUnstake> | undefined): boolean {
    return proto3.util.equals(EventUnstake, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventRedeemUnstaked
 */
export class EventRedeemUnstaked extends Message<EventRedeemUnstaked> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * @generated from field: string transfer_channel = 3;
   */
  transferChannel = "";

  /**
   * @generated from field: uint64 epoch = 4;
   */
  epoch = protoInt64.zero;

  /**
   * @generated from field: string u_amount = 5;
   */
  uAmount = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 6;
   */
  amount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 7;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<EventRedeemUnstaked>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventRedeemUnstaked";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transfer_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "epoch", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "u_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "amount", kind: "message", T: Coin },
    { no: 7, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRedeemUnstaked {
    return new EventRedeemUnstaked().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRedeemUnstaked {
    return new EventRedeemUnstaked().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRedeemUnstaked {
    return new EventRedeemUnstaked().fromJsonString(jsonString, options);
  }

  static equals(a: EventRedeemUnstaked | PlainMessage<EventRedeemUnstaked> | undefined, b: EventRedeemUnstaked | PlainMessage<EventRedeemUnstaked> | undefined): boolean {
    return proto3.util.equals(EventRedeemUnstaked, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventInstantUnstake
 */
export class EventInstantUnstake extends Message<EventInstantUnstake> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string host_chain = 2;
   */
  hostChain = "";

  /**
   * @generated from field: string transfer_channel = 3;
   */
  transferChannel = "";

  /**
   * @generated from field: string min_c_amount = 4;
   */
  minCAmount = "";

  /**
   * @generated from field: string max_c_amount = 5;
   */
  maxCAmount = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 6;
   */
  amount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 7;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<EventInstantUnstake>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventInstantUnstake";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "transfer_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "min_c_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "max_c_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "amount", kind: "message", T: Coin },
    { no: 7, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventInstantUnstake {
    return new EventInstantUnstake().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventInstantUnstake {
    return new EventInstantUnstake().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventInstantUnstake {
    return new EventInstantUnstake().fromJsonString(jsonString, options);
  }

  static equals(a: EventInstantUnstake | PlainMessage<EventInstantUnstake> | undefined, b: EventInstantUnstake | PlainMessage<EventInstantUnstake> | undefined): boolean {
    return proto3.util.equals(EventInstantUnstake, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetMultiSigConnection
 */
export class EventSetMultiSigConnection extends Message<EventSetMultiSigConnection> {
  /**
   * @generated from field: pryzm.icstaking.v1.MultiSigConnection connection = 1;
   */
  connection?: MultiSigConnection;

  constructor(data?: PartialMessage<EventSetMultiSigConnection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetMultiSigConnection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "connection", kind: "message", T: MultiSigConnection },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetMultiSigConnection {
    return new EventSetMultiSigConnection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetMultiSigConnection {
    return new EventSetMultiSigConnection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetMultiSigConnection {
    return new EventSetMultiSigConnection().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetMultiSigConnection | PlainMessage<EventSetMultiSigConnection> | undefined, b: EventSetMultiSigConnection | PlainMessage<EventSetMultiSigConnection> | undefined): boolean {
    return proto3.util.equals(EventSetMultiSigConnection, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventSetMultiSigPacket
 */
export class EventSetMultiSigPacket extends Message<EventSetMultiSigPacket> {
  /**
   * @generated from field: pryzm.icstaking.v1.MultiSigPacket packet = 1;
   */
  packet?: MultiSigPacket;

  constructor(data?: PartialMessage<EventSetMultiSigPacket>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventSetMultiSigPacket";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: MultiSigPacket },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetMultiSigPacket {
    return new EventSetMultiSigPacket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetMultiSigPacket {
    return new EventSetMultiSigPacket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetMultiSigPacket {
    return new EventSetMultiSigPacket().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetMultiSigPacket | PlainMessage<EventSetMultiSigPacket> | undefined, b: EventSetMultiSigPacket | PlainMessage<EventSetMultiSigPacket> | undefined): boolean {
    return proto3.util.equals(EventSetMultiSigPacket, a, b);
  }
}

/**
 * @generated from message pryzm.icstaking.v1.EventAcknowledgeMultiSigPacket
 */
export class EventAcknowledgeMultiSigPacket extends Message<EventAcknowledgeMultiSigPacket> {
  /**
   * @generated from field: string connection_id = 1;
   */
  connectionId = "";

  /**
   * @generated from field: uint64 sequence = 2;
   */
  sequence = protoInt64.zero;

  /**
   * @generated from field: pryzm.icstaking.v1.Acknowledgement ack = 3;
   */
  ack?: Acknowledgement;

  /**
   * @generated from field: ibc.core.client.v1.Height height = 4;
   */
  height?: Height;

  /**
   * @generated from field: string tx_hash = 5;
   */
  txHash = "";

  constructor(data?: PartialMessage<EventAcknowledgeMultiSigPacket>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.EventAcknowledgeMultiSigPacket";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "ack", kind: "message", T: Acknowledgement },
    { no: 4, name: "height", kind: "message", T: Height },
    { no: 5, name: "tx_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAcknowledgeMultiSigPacket {
    return new EventAcknowledgeMultiSigPacket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAcknowledgeMultiSigPacket {
    return new EventAcknowledgeMultiSigPacket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAcknowledgeMultiSigPacket {
    return new EventAcknowledgeMultiSigPacket().fromJsonString(jsonString, options);
  }

  static equals(a: EventAcknowledgeMultiSigPacket | PlainMessage<EventAcknowledgeMultiSigPacket> | undefined, b: EventAcknowledgeMultiSigPacket | PlainMessage<EventAcknowledgeMultiSigPacket> | undefined): boolean {
    return proto3.util.equals(EventAcknowledgeMultiSigPacket, a, b);
  }
}

