// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/refractor/v1/tx.proto (package pryzm.refractor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message pryzm.refractor.v1.MsgRefract
 */
export class MsgRefract extends Message<MsgRefract> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
   */
  amount?: Coin;

  /**
   * @generated from field: string maturity = 3;
   */
  maturity = "";

  constructor(data?: PartialMessage<MsgRefract>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.MsgRefract";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
    { no: 3, name: "maturity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRefract {
    return new MsgRefract().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRefract {
    return new MsgRefract().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRefract {
    return new MsgRefract().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRefract | PlainMessage<MsgRefract> | undefined, b: MsgRefract | PlainMessage<MsgRefract> | undefined): boolean {
    return proto3.util.equals(MsgRefract, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.MsgRefractResponse
 */
export class MsgRefractResponse extends Message<MsgRefractResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin p_amount = 1;
   */
  pAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin y_amount = 2;
   */
  yAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 3;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<MsgRefractResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.MsgRefractResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "p_amount", kind: "message", T: Coin },
    { no: 2, name: "y_amount", kind: "message", T: Coin },
    { no: 3, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRefractResponse {
    return new MsgRefractResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRefractResponse {
    return new MsgRefractResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRefractResponse {
    return new MsgRefractResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRefractResponse | PlainMessage<MsgRefractResponse> | undefined, b: MsgRefractResponse | PlainMessage<MsgRefractResponse> | undefined): boolean {
    return proto3.util.equals(MsgRefractResponse, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.MsgRedeem
 */
export class MsgRedeem extends Message<MsgRedeem> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: cosmos.base.v1beta1.Coin p_amount = 2;
   */
  pAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin y_amount = 3;
   */
  yAmount?: Coin;

  constructor(data?: PartialMessage<MsgRedeem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.MsgRedeem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "p_amount", kind: "message", T: Coin },
    { no: 3, name: "y_amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRedeem {
    return new MsgRedeem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRedeem {
    return new MsgRedeem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRedeem {
    return new MsgRedeem().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRedeem | PlainMessage<MsgRedeem> | undefined, b: MsgRedeem | PlainMessage<MsgRedeem> | undefined): boolean {
    return proto3.util.equals(MsgRedeem, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.MsgRedeemResponse
 */
export class MsgRedeemResponse extends Message<MsgRedeemResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin c_amount = 1;
   */
  cAmount?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin fee = 2;
   */
  fee?: Coin;

  constructor(data?: PartialMessage<MsgRedeemResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.MsgRedeemResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "c_amount", kind: "message", T: Coin },
    { no: 2, name: "fee", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRedeemResponse {
    return new MsgRedeemResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRedeemResponse {
    return new MsgRedeemResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRedeemResponse {
    return new MsgRedeemResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRedeemResponse | PlainMessage<MsgRedeemResponse> | undefined, b: MsgRedeemResponse | PlainMessage<MsgRedeemResponse> | undefined): boolean {
    return proto3.util.equals(MsgRedeemResponse, a, b);
  }
}

