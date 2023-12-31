// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/group/module/v1/module.proto (package cosmos.group.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Module is the config object of the group module.
 *
 * @generated from message cosmos.group.module.v1.Module
 */
export class Module extends Message<Module> {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   *
   * @generated from field: google.protobuf.Duration max_execution_period = 1;
   */
  maxExecutionPeriod?: Duration;

  /**
   * MaxMetadataLen defines the max chars allowed in all
   * messages that allows creating or updating a group
   * with a metadata field
   * Defaults to 255 if not explicitly set.
   *
   * @generated from field: uint64 max_metadata_len = 2;
   */
  maxMetadataLen = protoInt64.zero;

  /**
   * MaxProposalTitleLen defines the max chars allowed
   * in string for the MsgSubmitProposal and Proposal
   * summary field
   * Defaults to 255 if not explicitly set.
   *
   * @generated from field: uint64 max_proposal_title_len = 3;
   */
  maxProposalTitleLen = protoInt64.zero;

  /**
   * MaxProposalSummaryLen defines the max chars allowed
   * in string for the MsgSubmitProposal and Proposal
   * summary field
   * Defaults to 10200 if not explicitly set.
   *
   * @generated from field: uint64 max_proposal_summary_len = 4;
   */
  maxProposalSummaryLen = protoInt64.zero;

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.module.v1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_execution_period", kind: "message", T: Duration },
    { no: 2, name: "max_metadata_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max_proposal_title_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "max_proposal_summary_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

