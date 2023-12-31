// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/gov.proto (package osmosis.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CreateGroup } from "./group_pb.js";

/**
 * CreateGroupsProposal is a type for creating one or more groups via
 * governance. This is useful for creating groups without having to pay
 * creation fees.
 *
 * @generated from message osmosis.incentives.CreateGroupsProposal
 */
export class CreateGroupsProposal extends Message<CreateGroupsProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated osmosis.incentives.CreateGroup create_groups = 3;
   */
  createGroups: CreateGroup[] = [];

  constructor(data?: PartialMessage<CreateGroupsProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.incentives.CreateGroupsProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "create_groups", kind: "message", T: CreateGroup, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGroupsProposal {
    return new CreateGroupsProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGroupsProposal {
    return new CreateGroupsProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGroupsProposal {
    return new CreateGroupsProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGroupsProposal | PlainMessage<CreateGroupsProposal> | undefined, b: CreateGroupsProposal | PlainMessage<CreateGroupsProposal> | undefined): boolean {
    return proto3.util.equals(CreateGroupsProposal, a, b);
  }
}

