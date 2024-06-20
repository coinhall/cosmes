// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/amm/params.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message elys.amm.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: string pool_creation_fee = 1;
   */
  poolCreationFee = "";

  /**
   * default 1 week: 604,800
   *
   * @generated from field: uint64 slippage_track_duration = 2;
   */
  slippageTrackDuration = protoInt64.zero;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_creation_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "slippage_track_duration", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

