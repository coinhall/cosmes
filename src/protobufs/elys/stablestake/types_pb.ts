// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/stablestake/types.proto (package elys.stablestake, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.stablestake.BalanceBorrowed
 */
export class BalanceBorrowed extends Message<BalanceBorrowed> {
  /**
   * @generated from field: string usd_amount = 1;
   */
  usdAmount = "";

  /**
   * @generated from field: string percentage = 2;
   */
  percentage = "";

  constructor(data?: PartialMessage<BalanceBorrowed>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.stablestake.BalanceBorrowed";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "usd_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalanceBorrowed {
    return new BalanceBorrowed().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalanceBorrowed {
    return new BalanceBorrowed().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalanceBorrowed {
    return new BalanceBorrowed().fromJsonString(jsonString, options);
  }

  static equals(a: BalanceBorrowed | PlainMessage<BalanceBorrowed> | undefined, b: BalanceBorrowed | PlainMessage<BalanceBorrowed> | undefined): boolean {
    return proto3.util.equals(BalanceBorrowed, a, b);
  }
}

