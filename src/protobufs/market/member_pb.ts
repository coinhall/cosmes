// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file market/member.proto (package pendulumlabs.market.market, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message pendulumlabs.market.market.Member
 */
export class Member extends Message<Member> {
  /**
   * @generated from field: string pair = 1;
   */
  pair = "";

  /**
   * @generated from field: string denomA = 2;
   */
  denomA = "";

  /**
   * @generated from field: string denomB = 3;
   */
  denomB = "";

  /**
   * @generated from field: string balance = 4;
   */
  balance = "";

  /**
   * @generated from field: string previous = 5;
   */
  previous = "";

  /**
   * @generated from field: uint64 limit = 6;
   */
  limit = protoInt64.zero;

  /**
   * @generated from field: uint64 stop = 7;
   */
  stop = protoInt64.zero;

  constructor(data?: PartialMessage<Member>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pendulumlabs.market.market.Member";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pair", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denomA", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "denomB", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "balance", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "previous", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "stop", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Member {
    return new Member().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Member {
    return new Member().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Member {
    return new Member().fromJsonString(jsonString, options);
  }

  static equals(a: Member | PlainMessage<Member> | undefined, b: Member | PlainMessage<Member> | undefined): boolean {
    return proto3.util.equals(Member, a, b);
  }
}

