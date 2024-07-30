// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/pgov/v1/vote.proto (package pryzm.pgov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { WeightedVoteOption } from "../../../cosmos/gov/v1/gov_pb.js";

/**
 * Vote stores the information for a user's vote for a proposal
 *
 * @generated from message pryzm.pgov.v1.Vote
 */
export class Vote extends Message<Vote> {
  /**
   * @generated from field: string asset = 1;
   */
  asset = "";

  /**
   * @generated from field: uint64 proposal = 2;
   */
  proposal = protoInt64.zero;

  /**
   * @generated from field: string voter = 3;
   */
  voter = "";

  /**
   * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 4;
   */
  options: WeightedVoteOption[] = [];

  constructor(data?: PartialMessage<Vote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.pgov.v1.Vote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "proposal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
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
