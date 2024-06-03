// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/oracle/band_price.proto (package elys.oracle, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message elys.oracle.BandPriceCallData
 */
export class BandPriceCallData extends Message<BandPriceCallData> {
  /**
   * @generated from field: repeated string symbols = 1;
   */
  symbols: string[] = [];

  /**
   * @generated from field: uint64 multiplier = 2;
   */
  multiplier = protoInt64.zero;

  constructor(data?: PartialMessage<BandPriceCallData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.oracle.BandPriceCallData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "symbols", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "multiplier", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BandPriceCallData {
    return new BandPriceCallData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BandPriceCallData {
    return new BandPriceCallData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BandPriceCallData {
    return new BandPriceCallData().fromJsonString(jsonString, options);
  }

  static equals(a: BandPriceCallData | PlainMessage<BandPriceCallData> | undefined, b: BandPriceCallData | PlainMessage<BandPriceCallData> | undefined): boolean {
    return proto3.util.equals(BandPriceCallData, a, b);
  }
}

/**
 * @generated from message elys.oracle.BandPriceResult
 */
export class BandPriceResult extends Message<BandPriceResult> {
  /**
   * @generated from field: repeated uint64 rates = 1;
   */
  rates: bigint[] = [];

  constructor(data?: PartialMessage<BandPriceResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.oracle.BandPriceResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rates", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BandPriceResult {
    return new BandPriceResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BandPriceResult {
    return new BandPriceResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BandPriceResult {
    return new BandPriceResult().fromJsonString(jsonString, options);
  }

  static equals(a: BandPriceResult | PlainMessage<BandPriceResult> | undefined, b: BandPriceResult | PlainMessage<BandPriceResult> | undefined): boolean {
    return proto3.util.equals(BandPriceResult, a, b);
  }
}
