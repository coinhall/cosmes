// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/refractor/v1/event.proto (package pryzm.refractor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AssetState } from "./asset_state_pb.js";

/**
 * @generated from message pryzm.refractor.v1.EventRefract
 */
export class EventRefract extends Message<EventRefract> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string c_amount = 2;
   */
  cAmount = "";

  /**
   * @generated from field: string maturity = 3;
   */
  maturity = "";

  /**
   * @generated from field: string refracted_p_amount = 4;
   */
  refractedPAmount = "";

  /**
   * @generated from field: string refracted_y_amount = 5;
   */
  refractedYAmount = "";

  /**
   * @generated from field: string fee = 6;
   */
  fee = "";

  constructor(data?: PartialMessage<EventRefract>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.EventRefract";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "c_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "maturity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "refracted_p_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "refracted_y_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRefract {
    return new EventRefract().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRefract {
    return new EventRefract().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRefract {
    return new EventRefract().fromJsonString(jsonString, options);
  }

  static equals(a: EventRefract | PlainMessage<EventRefract> | undefined, b: EventRefract | PlainMessage<EventRefract> | undefined): boolean {
    return proto3.util.equals(EventRefract, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.EventRedeem
 */
export class EventRedeem extends Message<EventRedeem> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string p_amount = 2;
   */
  pAmount = "";

  /**
   * @generated from field: string y_amount = 3;
   */
  yAmount = "";

  /**
   * @generated from field: string maturity = 4;
   */
  maturity = "";

  /**
   * @generated from field: string redeemed_c_amount = 5;
   */
  redeemedCAmount = "";

  /**
   * @generated from field: string fee = 6;
   */
  fee = "";

  constructor(data?: PartialMessage<EventRedeem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.EventRedeem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "p_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "y_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "maturity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "redeemed_c_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRedeem {
    return new EventRedeem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRedeem {
    return new EventRedeem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRedeem {
    return new EventRedeem().fromJsonString(jsonString, options);
  }

  static equals(a: EventRedeem | PlainMessage<EventRedeem> | undefined, b: EventRedeem | PlainMessage<EventRedeem> | undefined): boolean {
    return proto3.util.equals(EventRedeem, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.EventRefractorYieldDistribution
 */
export class EventRefractorYieldDistribution extends Message<EventRefractorYieldDistribution> {
  /**
   * @generated from field: string asset_id = 1;
   */
  assetId = "";

  /**
   * @generated from field: string total_yield = 2;
   */
  totalYield = "";

  /**
   * @generated from field: string protocol_fee = 3;
   */
  protocolFee = "";

  /**
   * @generated from field: string stake_yield = 4;
   */
  stakeYield = "";

  /**
   * @generated from field: string excess_yield = 5;
   */
  excessYield = "";

  constructor(data?: PartialMessage<EventRefractorYieldDistribution>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.EventRefractorYieldDistribution";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_yield", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "protocol_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "stake_yield", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "excess_yield", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRefractorYieldDistribution {
    return new EventRefractorYieldDistribution().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRefractorYieldDistribution {
    return new EventRefractorYieldDistribution().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRefractorYieldDistribution {
    return new EventRefractorYieldDistribution().fromJsonString(jsonString, options);
  }

  static equals(a: EventRefractorYieldDistribution | PlainMessage<EventRefractorYieldDistribution> | undefined, b: EventRefractorYieldDistribution | PlainMessage<EventRefractorYieldDistribution> | undefined): boolean {
    return proto3.util.equals(EventRefractorYieldDistribution, a, b);
  }
}

/**
 * @generated from message pryzm.refractor.v1.EventSetAssetState
 */
export class EventSetAssetState extends Message<EventSetAssetState> {
  /**
   * @generated from field: pryzm.refractor.v1.AssetState asset_state = 1;
   */
  assetState?: AssetState;

  constructor(data?: PartialMessage<EventSetAssetState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.refractor.v1.EventSetAssetState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_state", kind: "message", T: AssetState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetAssetState {
    return new EventSetAssetState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetAssetState {
    return new EventSetAssetState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetAssetState {
    return new EventSetAssetState().fromJsonString(jsonString, options);
  }

  static equals(a: EventSetAssetState | PlainMessage<EventSetAssetState> | undefined, b: EventSetAssetState | PlainMessage<EventSetAssetState> | undefined): boolean {
    return proto3.util.equals(EventSetAssetState, a, b);
  }
}

