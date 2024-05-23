// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/committee/v1beta1/genesis.proto (package kava.committee.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * VoteType enumerates the valid types of a vote.
 *
 * @generated from enum kava.committee.v1beta1.VoteType
 */
export enum VoteType {
  /**
   * VOTE_TYPE_UNSPECIFIED defines a no-op vote option.
   *
   * @generated from enum value: VOTE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * VOTE_TYPE_YES defines a yes vote option.
   *
   * @generated from enum value: VOTE_TYPE_YES = 1;
   */
  YES = 1,

  /**
   * VOTE_TYPE_NO defines a no vote option.
   *
   * @generated from enum value: VOTE_TYPE_NO = 2;
   */
  NO = 2,

  /**
   * VOTE_TYPE_ABSTAIN defines an abstain vote option.
   *
   * @generated from enum value: VOTE_TYPE_ABSTAIN = 3;
   */
  ABSTAIN = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(VoteType)
proto3.util.setEnumType(VoteType, "kava.committee.v1beta1.VoteType", [
  { no: 0, name: "VOTE_TYPE_UNSPECIFIED" },
  { no: 1, name: "VOTE_TYPE_YES" },
  { no: 2, name: "VOTE_TYPE_NO" },
  { no: 3, name: "VOTE_TYPE_ABSTAIN" },
]);

/**
 * GenesisState defines the committee module's genesis state.
 *
 * @generated from message kava.committee.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: uint64 next_proposal_id = 1;
   */
  nextProposalId = protoInt64.zero;

  /**
   * @generated from field: repeated google.protobuf.Any committees = 2;
   */
  committees: Any[] = [];

  /**
   * @generated from field: repeated kava.committee.v1beta1.Proposal proposals = 3;
   */
  proposals: Proposal[] = [];

  /**
   * @generated from field: repeated kava.committee.v1beta1.Vote votes = 4;
   */
  votes: Vote[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "next_proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "committees", kind: "message", T: Any, repeated: true },
    { no: 3, name: "proposals", kind: "message", T: Proposal, repeated: true },
    { no: 4, name: "votes", kind: "message", T: Vote, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Proposal is an internal record of a governance proposal submitted to a committee.
 *
 * @generated from message kava.committee.v1beta1.Proposal
 */
export class Proposal extends Message<Proposal> {
  /**
   * @generated from field: google.protobuf.Any content = 1;
   */
  content?: Any;

  /**
   * @generated from field: uint64 id = 2;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: uint64 committee_id = 3;
   */
  committeeId = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp deadline = 4;
   */
  deadline?: Timestamp;

  constructor(data?: PartialMessage<Proposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.Proposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "content", kind: "message", T: Any },
    { no: 2, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "committee_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "deadline", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal {
    return new Proposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJsonString(jsonString, options);
  }

  static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean {
    return proto3.util.equals(Proposal, a, b);
  }
}

/**
 * Vote is an internal record of a single governance vote.
 *
 * @generated from message kava.committee.v1beta1.Vote
 */
export class Vote extends Message<Vote> {
  /**
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * @generated from field: bytes voter = 2;
   */
  voter = new Uint8Array(0);

  /**
   * @generated from field: kava.committee.v1beta1.VoteType vote_type = 3;
   */
  voteType = VoteType.UNSPECIFIED;

  constructor(data?: PartialMessage<Vote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.Vote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "vote_type", kind: "enum", T: proto3.getEnumType(VoteType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote {
    return new Vote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJsonString(jsonString, options);
  }

  static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean {
    return proto3.util.equals(Vote, a, b);
  }
}
