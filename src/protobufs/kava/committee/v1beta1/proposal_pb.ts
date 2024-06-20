// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/committee/v1beta1/proposal.proto (package kava.committee.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one.
 *
 * @generated from message kava.committee.v1beta1.CommitteeChangeProposal
 */
export class CommitteeChangeProposal extends Message<CommitteeChangeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: google.protobuf.Any new_committee = 3;
   */
  newCommittee?: Any;

  constructor(data?: PartialMessage<CommitteeChangeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.CommitteeChangeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_committee", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitteeChangeProposal {
    return new CommitteeChangeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitteeChangeProposal {
    return new CommitteeChangeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitteeChangeProposal {
    return new CommitteeChangeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CommitteeChangeProposal | PlainMessage<CommitteeChangeProposal> | undefined, b: CommitteeChangeProposal | PlainMessage<CommitteeChangeProposal> | undefined): boolean {
    return proto3.util.equals(CommitteeChangeProposal, a, b);
  }
}

/**
 * CommitteeDeleteProposal is a gov proposal for removing a committee.
 *
 * @generated from message kava.committee.v1beta1.CommitteeDeleteProposal
 */
export class CommitteeDeleteProposal extends Message<CommitteeDeleteProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: uint64 committee_id = 3;
   */
  committeeId = protoInt64.zero;

  constructor(data?: PartialMessage<CommitteeDeleteProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.CommitteeDeleteProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "committee_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitteeDeleteProposal {
    return new CommitteeDeleteProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitteeDeleteProposal {
    return new CommitteeDeleteProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitteeDeleteProposal {
    return new CommitteeDeleteProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CommitteeDeleteProposal | PlainMessage<CommitteeDeleteProposal> | undefined, b: CommitteeDeleteProposal | PlainMessage<CommitteeDeleteProposal> | undefined): boolean {
    return proto3.util.equals(CommitteeDeleteProposal, a, b);
  }
}

