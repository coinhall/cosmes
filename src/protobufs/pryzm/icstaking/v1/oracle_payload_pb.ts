// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/icstaking/v1/oracle_payload.proto (package pryzm.icstaking.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Height } from "../../../ibc/core/client/v1/client_pb.js";
import { ValidatorState } from "./host_chain_pb.js";

/**
 * OraclePayload defines the structure of oracle vote payload
 *
 * @generated from message pryzm.icstaking.v1.OraclePayload
 */
export class OraclePayload extends Message<OraclePayload> {
  /**
   * Oracle is reporting the data based on the host chain’s time which may have a time difference with Pryzm.
   * In order to be accurate, we use a reference of host chain’s latest block in which Pryzm's state has changed to idle,
   * and oracle feeders' reported block height is checked to be after that specific block
   *
   * @generated from field: ibc.core.client.v1.Height block_height = 1;
   */
  blockHeight?: Height;

  /**
   * list of validators and their state containing the delegation amount
   *
   * @generated from field: repeated pryzm.icstaking.v1.ValidatorState validator_states = 3;
   */
  validatorStates: ValidatorState[] = [];

  /**
   * balance of delegation interchain account
   *
   * @generated from field: string delegation_account_balance = 4;
   */
  delegationAccountBalance = "";

  /**
   * balance of reward interchain account
   *
   * @generated from field: string reward_account_balance = 5;
   */
  rewardAccountBalance = "";

  /**
   * balance of sweep interchain account
   *
   * @generated from field: string sweep_account_balance = 6;
   */
  sweepAccountBalance = "";

  /**
   * the largest undelegation epoch number for which the undelegation is completed and is ready to be swept to PRYZM
   * reporting this with zero means that none of incomplete undelegations are completed.
   *
   * @generated from field: uint64 last_completed_undelegation_epoch = 7;
   */
  lastCompletedUndelegationEpoch = protoInt64.zero;

  constructor(data?: PartialMessage<OraclePayload>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.icstaking.v1.OraclePayload";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "message", T: Height },
    { no: 3, name: "validator_states", kind: "message", T: ValidatorState, repeated: true },
    { no: 4, name: "delegation_account_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reward_account_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "sweep_account_balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "last_completed_undelegation_epoch", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePayload {
    return new OraclePayload().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePayload {
    return new OraclePayload().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePayload {
    return new OraclePayload().fromJsonString(jsonString, options);
  }

  static equals(a: OraclePayload | PlainMessage<OraclePayload> | undefined, b: OraclePayload | PlainMessage<OraclePayload> | undefined): boolean {
    return proto3.util.equals(OraclePayload, a, b);
  }
}
