// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/stablestake/params.proto (package elys.stablestake, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message elys.stablestake.Params
 */
export class Params extends Message<Params> {
  /**
   * @generated from field: string deposit_denom = 1;
   */
  depositDenom = "";

  /**
   * @generated from field: string redemption_rate = 2;
   */
  redemptionRate = "";

  /**
   * @generated from field: int64 epoch_length = 3;
   */
  epochLength = protoInt64.zero;

  /**
   * @generated from field: string interest_rate = 4;
   */
  interestRate = "";

  /**
   * @generated from field: string interest_rate_max = 5;
   */
  interestRateMax = "";

  /**
   * @generated from field: string interest_rate_min = 6;
   */
  interestRateMin = "";

  /**
   * @generated from field: string interest_rate_increase = 7;
   */
  interestRateIncrease = "";

  /**
   * @generated from field: string interest_rate_decrease = 8;
   */
  interestRateDecrease = "";

  /**
   * @generated from field: string health_gain_factor = 9;
   */
  healthGainFactor = "";

  /**
   * @generated from field: string total_value = 10;
   */
  totalValue = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.stablestake.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposit_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "redemption_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "epoch_length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "interest_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "interest_rate_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "interest_rate_min", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "interest_rate_increase", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "interest_rate_decrease", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "health_gain_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "total_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
