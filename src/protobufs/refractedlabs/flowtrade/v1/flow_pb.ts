// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file refractedlabs/flowtrade/v1/flow.proto (package refractedlabs.flowtrade.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from enum refractedlabs.flowtrade.v1.FlowStatus
 */
export enum FlowStatus {
  /**
   * the flow is waiting to be started
   *
   * @generated from enum value: WAITING = 0;
   */
  WAITING = 0,

  /**
   * the flow is active
   *
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * the flow has been ended. this is a final state
   *
   * @generated from enum value: ENDED = 2;
   */
  ENDED = 2,

  /**
   * the flow has been stopped. this is a final state
   *
   * @generated from enum value: STOPPED = 3;
   */
  STOPPED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(FlowStatus)
proto3.util.setEnumType(FlowStatus, "refractedlabs.flowtrade.v1.FlowStatus", [
  { no: 0, name: "WAITING" },
  { no: 1, name: "ACTIVE" },
  { no: 2, name: "ENDED" },
  { no: 3, name: "STOPPED" },
]);

/**
 * Flow holds information and price calculations for a flow trade
 *
 * @generated from message refractedlabs.flowtrade.v1.Flow
 */
export class Flow extends Message<Flow> {
  /**
   * auto-generated identifier for a flow
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * the address of flow creator and owner
   *
   * @generated from field: string creator = 2;
   */
  creator = "";

  /**
   * informational data about the flow
   *
   * @generated from field: refractedlabs.flowtrade.v1.FlowInfo flow_info = 3;
   */
  flowInfo?: FlowInfo;

  /**
   * the time that swap distribution starts
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * the time that flow is ended
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   *
   * @generated from field: google.protobuf.Duration dist_interval = 6;
   */
  distInterval?: Duration;

  /**
   * the address that the swapped tokens are sent to after the flow ends
   *
   * @generated from field: string treasury_address = 7;
   */
  treasuryAddress = "";

  /**
   * total amount creator provided to be swapped
   *
   * @generated from field: cosmos.base.v1beta1.Coin total_token_out = 8;
   */
  totalTokenOut?: Coin;

  /**
   * the accepted token to buy the out tokens
   *
   * @generated from field: string token_in_denom = 9;
   */
  tokenInDenom = "";

  /**
   * the time from then the buyers can claim their purchased tokens
   *
   * @generated from field: google.protobuf.Timestamp token_out_claimable_after = 10;
   */
  tokenOutClaimableAfter?: Timestamp;

  /**
   * the time from then the flow creator can claim the swapped tokens
   *
   * @generated from field: google.protobuf.Timestamp token_in_claimable_after = 11;
   */
  tokenInClaimableAfter?: Timestamp;

  /**
   * whether the flow can be stopped by the flow's creator
   *
   * @generated from field: bool stoppable = 12;
   */
  stoppable = false;

  /**
   * whether to allow buyers to claim their tokens immediately after the flow is stopped
   *
   * @generated from field: bool allow_immediate_token_out_claim_if_stopped = 13;
   */
  allowImmediateTokenOutClaimIfStopped = false;

  /**
   * whether to allow flow's creator to claim tokens immediately after the flow is stopped
   *
   * @generated from field: bool allow_immediate_token_in_claim_if_stopped = 14;
   */
  allowImmediateTokenInClaimIfStopped = false;

  /**
   * a global index for the amount of purchase that has already been applied
   *
   * @generated from field: string dist_index = 15;
   */
  distIndex = "";

  /**
   * the last time the dist index is updated
   *
   * @generated from field: google.protobuf.Timestamp last_dist_update = 16;
   */
  lastDistUpdate?: Timestamp;

  /**
   * the amount of remaining out tokens to sell
   *
   * @generated from field: string token_out_balance = 17;
   */
  tokenOutBalance = "";

  /**
   * the current amount of token-in provided to buy token-out
   *
   * @generated from field: string token_in_balance = 18;
   */
  tokenInBalance = "";

  /**
   * the amount of already spent in tokens
   *
   * @generated from field: string spent_token_in = 19;
   */
  spentTokenIn = "";

  /**
   * the total number of users shares
   *
   * @generated from field: string total_shares = 20;
   */
  totalShares = "";

  /**
   * the latest price of token-out in terms of token-in
   *
   * @generated from field: string live_price = 21;
   */
  livePrice = "";

  /**
   * the current status of flow
   *
   * @generated from field: refractedlabs.flowtrade.v1.FlowStatus status = 22;
   */
  status = FlowStatus.WAITING;

  /**
   * the amount of creation deposit that should be revenue to the flow creator
   *
   * @generated from field: cosmos.base.v1beta1.Coin creation_deposit = 23;
   */
  creationDeposit?: Coin;

  /**
   * the fee ratio taken from token-out, this is copied from module params at the time of flow creation
   *
   * @generated from field: string token_out_fee_ratio = 24;
   */
  tokenOutFeeRatio = "";

  /**
   * the fee ratio taken from token-in, this is copied from module params at the time of flow creation
   *
   * @generated from field: string token_in_fee_ratio = 25;
   */
  tokenInFeeRatio = "";

  /**
   * if true, the swapped tokens are automatically sent to the treasury address when the flow ends
   * this option is only available when another module creates a flow using keeper api
   *
   * @generated from field: bool automatic_treasury_collection = 26;
   */
  automaticTreasuryCollection = false;

  /**
   * the amount of spent in tokens that have been claimed by the flow's creator
   *
   * @generated from field: string claimed_token_in = 27;
   */
  claimedTokenIn = "";

  /**
   * whether the flow is checked out, meaning the creation deposit and any remaining out tokens are transferred back to the creator
   *
   * @generated from field: bool checked_out = 28;
   */
  checkedOut = false;

  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   *
   * @generated from field: string limit_price = 29;
   */
  limitPrice = "";

  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   *
   * @generated from field: google.protobuf.Duration exit_window_duration = 30;
   */
  exitWindowDuration?: Duration;

  constructor(data?: PartialMessage<Flow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.Flow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "flow_info", kind: "message", T: FlowInfo },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "dist_interval", kind: "message", T: Duration },
    { no: 7, name: "treasury_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "total_token_out", kind: "message", T: Coin },
    { no: 9, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "token_out_claimable_after", kind: "message", T: Timestamp },
    { no: 11, name: "token_in_claimable_after", kind: "message", T: Timestamp },
    { no: 12, name: "stoppable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "allow_immediate_token_out_claim_if_stopped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "allow_immediate_token_in_claim_if_stopped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "dist_index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "last_dist_update", kind: "message", T: Timestamp },
    { no: 17, name: "token_out_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "token_in_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "spent_token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "total_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "live_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "status", kind: "enum", T: proto3.getEnumType(FlowStatus) },
    { no: 23, name: "creation_deposit", kind: "message", T: Coin },
    { no: 24, name: "token_out_fee_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 25, name: "token_in_fee_ratio", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "automatic_treasury_collection", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 27, name: "claimed_token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 28, name: "checked_out", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 29, name: "limit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "exit_window_duration", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Flow {
    return new Flow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Flow {
    return new Flow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Flow {
    return new Flow().fromJsonString(jsonString, options);
  }

  static equals(a: Flow | PlainMessage<Flow> | undefined, b: Flow | PlainMessage<Flow> | undefined): boolean {
    return proto3.util.equals(Flow, a, b);
  }
}

/**
 * Informational data about the flow
 *
 * @generated from message refractedlabs.flowtrade.v1.FlowInfo
 */
export class FlowInfo extends Message<FlowInfo> {
  /**
   * a name of the flow
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * a short description about the flow
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * a referring url
   *
   * @generated from field: string url = 3;
   */
  url = "";

  constructor(data?: PartialMessage<FlowInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.FlowInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlowInfo {
    return new FlowInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlowInfo {
    return new FlowInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlowInfo {
    return new FlowInfo().fromJsonString(jsonString, options);
  }

  static equals(a: FlowInfo | PlainMessage<FlowInfo> | undefined, b: FlowInfo | PlainMessage<FlowInfo> | undefined): boolean {
    return proto3.util.equals(FlowInfo, a, b);
  }
}

/**
 * a structure for requesting a new flow's creation
 *
 * @generated from message refractedlabs.flowtrade.v1.FlowCreationRequest
 */
export class FlowCreationRequest extends Message<FlowCreationRequest> {
  /**
   * informational data about the flow
   *
   * @generated from field: refractedlabs.flowtrade.v1.FlowInfo flow_info = 1;
   */
  flowInfo?: FlowInfo;

  /**
   * the time that swap distribution starts
   *
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * the time that flow is ended
   *
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;

  /**
   * the interval in which the distribution index is updated and hence tokens are swapped
   * if dist_interval is 0, the flow is updated every time in or out tokens are increased or decreased
   * if dist_interval is equal to the duration of flow, it means that all of the tokens are swapped once after the flow ends
   *
   * @generated from field: google.protobuf.Duration dist_interval = 4;
   */
  distInterval?: Duration;

  /**
   * the address that the swapped tokens are sent to after the flow ends
   *
   * @generated from field: string treasury_address = 5;
   */
  treasuryAddress = "";

  /**
   * total amount creator provided to be swapped
   *
   * @generated from field: cosmos.base.v1beta1.Coin tokens_out = 6;
   */
  tokensOut?: Coin;

  /**
   * the accepted token to buy the out tokens
   *
   * @generated from field: string token_in_denom = 7;
   */
  tokenInDenom = "";

  /**
   * the time from then the flow buyers can claim their purchased tokens
   *
   * @generated from field: google.protobuf.Timestamp token_out_claimable_after = 8;
   */
  tokenOutClaimableAfter?: Timestamp;

  /**
   * the time from then the flow creator can claim the swapped tokens
   *
   * @generated from field: google.protobuf.Timestamp token_in_claimable_after = 9;
   */
  tokenInClaimableAfter?: Timestamp;

  /**
   * whether the flow can be stopped by the flow's creator
   *
   * @generated from field: bool stoppable = 10;
   */
  stoppable = false;

  /**
   * whether to allow buyers to claim their tokens immediately after the flow is stopped
   *
   * @generated from field: bool allow_immediate_token_out_claim_if_stopped = 11;
   */
  allowImmediateTokenOutClaimIfStopped = false;

  /**
   * whether to allow flow's creator to claim tokens immediately after the flow is stopped
   *
   * @generated from field: bool allow_immediate_token_in_claim_if_stopped = 12;
   */
  allowImmediateTokenInClaimIfStopped = false;

  /**
   * the minimum price for the token-out in terms of token-in.
   * in each swap interval, if the calculated price is less than this limit, the swap doesn't happen in that turn
   * Since: v0.4
   *
   * @generated from field: string limit_price = 13;
   */
  limitPrice = "";

  /**
   * the duration of the exit window before swap interval, in which users can only exit the flow and joining is not permitted
   * this duration is used to protect joiners from buying the token-out with a higher price when someone joins with a huge amount of token-in
   * Since: v0.4
   *
   * @generated from field: google.protobuf.Duration exit_window_duration = 14;
   */
  exitWindowDuration?: Duration;

  constructor(data?: PartialMessage<FlowCreationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "refractedlabs.flowtrade.v1.FlowCreationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "flow_info", kind: "message", T: FlowInfo },
    { no: 2, name: "start_time", kind: "message", T: Timestamp },
    { no: 3, name: "end_time", kind: "message", T: Timestamp },
    { no: 4, name: "dist_interval", kind: "message", T: Duration },
    { no: 5, name: "treasury_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tokens_out", kind: "message", T: Coin },
    { no: 7, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "token_out_claimable_after", kind: "message", T: Timestamp },
    { no: 9, name: "token_in_claimable_after", kind: "message", T: Timestamp },
    { no: 10, name: "stoppable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "allow_immediate_token_out_claim_if_stopped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "allow_immediate_token_in_claim_if_stopped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "limit_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "exit_window_duration", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlowCreationRequest {
    return new FlowCreationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlowCreationRequest {
    return new FlowCreationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlowCreationRequest {
    return new FlowCreationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FlowCreationRequest | PlainMessage<FlowCreationRequest> | undefined, b: FlowCreationRequest | PlainMessage<FlowCreationRequest> | undefined): boolean {
    return proto3.util.equals(FlowCreationRequest, a, b);
  }
}
