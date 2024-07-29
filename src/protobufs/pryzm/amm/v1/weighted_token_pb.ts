// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v1/weighted_token.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { WeightUpdateTiming } from "./weight_update_timing_pb.js";

/**
 * @generated from message pryzm.amm.v1.WeightedPoolProperties
 */
export class WeightedPoolProperties extends Message<WeightedPoolProperties> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: pryzm.amm.v1.WeightUpdateTiming weight_update_timing = 2;
   */
  weightUpdateTiming?: WeightUpdateTiming;

  /**
   * @generated from field: repeated pryzm.amm.v1.WeightedToken token_list = 3;
   */
  tokenList: WeightedToken[] = [];

  constructor(data?: PartialMessage<WeightedPoolProperties>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.WeightedPoolProperties";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "weight_update_timing", kind: "message", T: WeightUpdateTiming },
    { no: 3, name: "token_list", kind: "message", T: WeightedToken, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedPoolProperties {
    return new WeightedPoolProperties().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedPoolProperties {
    return new WeightedPoolProperties().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedPoolProperties {
    return new WeightedPoolProperties().fromJsonString(jsonString, options);
  }

  static equals(a: WeightedPoolProperties | PlainMessage<WeightedPoolProperties> | undefined, b: WeightedPoolProperties | PlainMessage<WeightedPoolProperties> | undefined): boolean {
    return proto3.util.equals(WeightedPoolProperties, a, b);
  }
}

/**
 * @generated from message pryzm.amm.v1.WeightedToken
 */
export class WeightedToken extends Message<WeightedToken> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: string denom = 2;
   */
  denom = "";

  /**
   * @generated from field: string normalized_start_weight = 3;
   */
  normalizedStartWeight = "";

  /**
   * @generated from field: string normalized_end_weight = 4;
   */
  normalizedEndWeight = "";

  constructor(data?: PartialMessage<WeightedToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.WeightedToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "normalized_start_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "normalized_end_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedToken {
    return new WeightedToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedToken {
    return new WeightedToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedToken {
    return new WeightedToken().fromJsonString(jsonString, options);
  }

  static equals(a: WeightedToken | PlainMessage<WeightedToken> | undefined, b: WeightedToken | PlainMessage<WeightedToken> | undefined): boolean {
    return proto3.util.equals(WeightedToken, a, b);
  }
}

