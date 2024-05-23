// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/evmutil/v1beta1/tx.proto (package kava.evmutil.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCoinToERC20
 */
export class MsgConvertCoinToERC20 extends Message<MsgConvertCoinToERC20> {
  /**
   * Kava bech32 address initiating the conversion.
   *
   * @generated from field: string initiator = 1;
   */
  initiator = "";

  /**
   * EVM 0x hex address that will receive the converted Kava ERC20 tokens.
   *
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * Amount is the sdk.Coin amount to convert.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgConvertCoinToERC20>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCoinToERC20";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initiator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCoinToERC20 {
    return new MsgConvertCoinToERC20().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCoinToERC20 {
    return new MsgConvertCoinToERC20().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCoinToERC20 {
    return new MsgConvertCoinToERC20().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCoinToERC20 | PlainMessage<MsgConvertCoinToERC20> | undefined, b: MsgConvertCoinToERC20 | PlainMessage<MsgConvertCoinToERC20> | undefined): boolean {
    return proto3.util.equals(MsgConvertCoinToERC20, a, b);
  }
}

/**
 * MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCoinToERC20Response
 */
export class MsgConvertCoinToERC20Response extends Message<MsgConvertCoinToERC20Response> {
  constructor(data?: PartialMessage<MsgConvertCoinToERC20Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCoinToERC20Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCoinToERC20Response {
    return new MsgConvertCoinToERC20Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCoinToERC20Response {
    return new MsgConvertCoinToERC20Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCoinToERC20Response {
    return new MsgConvertCoinToERC20Response().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCoinToERC20Response | PlainMessage<MsgConvertCoinToERC20Response> | undefined, b: MsgConvertCoinToERC20Response | PlainMessage<MsgConvertCoinToERC20Response> | undefined): boolean {
    return proto3.util.equals(MsgConvertCoinToERC20Response, a, b);
  }
}

/**
 * MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertERC20ToCoin
 */
export class MsgConvertERC20ToCoin extends Message<MsgConvertERC20ToCoin> {
  /**
   * EVM 0x hex address initiating the conversion.
   *
   * @generated from field: string initiator = 1;
   */
  initiator = "";

  /**
   * Kava bech32 address that will receive the converted sdk.Coin.
   *
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * EVM 0x hex address of the ERC20 contract.
   *
   * @generated from field: string kava_erc20_address = 3;
   */
  kavaErc20Address = "";

  /**
   * ERC20 token amount to convert.
   *
   * @generated from field: string amount = 4;
   */
  amount = "";

  constructor(data?: PartialMessage<MsgConvertERC20ToCoin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initiator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "kava_erc20_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertERC20ToCoin {
    return new MsgConvertERC20ToCoin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertERC20ToCoin {
    return new MsgConvertERC20ToCoin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertERC20ToCoin {
    return new MsgConvertERC20ToCoin().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertERC20ToCoin | PlainMessage<MsgConvertERC20ToCoin> | undefined, b: MsgConvertERC20ToCoin | PlainMessage<MsgConvertERC20ToCoin> | undefined): boolean {
    return proto3.util.equals(MsgConvertERC20ToCoin, a, b);
  }
}

/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse
 */
export class MsgConvertERC20ToCoinResponse extends Message<MsgConvertERC20ToCoinResponse> {
  constructor(data?: PartialMessage<MsgConvertERC20ToCoinResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertERC20ToCoinResponse {
    return new MsgConvertERC20ToCoinResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertERC20ToCoinResponse {
    return new MsgConvertERC20ToCoinResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertERC20ToCoinResponse {
    return new MsgConvertERC20ToCoinResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertERC20ToCoinResponse | PlainMessage<MsgConvertERC20ToCoinResponse> | undefined, b: MsgConvertERC20ToCoinResponse | PlainMessage<MsgConvertERC20ToCoinResponse> | undefined): boolean {
    return proto3.util.equals(MsgConvertERC20ToCoinResponse, a, b);
  }
}

/**
 * MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20
 */
export class MsgConvertCosmosCoinToERC20 extends Message<MsgConvertCosmosCoinToERC20> {
  /**
   * Kava bech32 address initiating the conversion.
   *
   * @generated from field: string initiator = 1;
   */
  initiator = "";

  /**
   * EVM hex address that will receive the ERC20 tokens.
   *
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * Amount is the sdk.Coin amount to convert.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgConvertCosmosCoinToERC20>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initiator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCosmosCoinToERC20 {
    return new MsgConvertCosmosCoinToERC20().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinToERC20 {
    return new MsgConvertCosmosCoinToERC20().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinToERC20 {
    return new MsgConvertCosmosCoinToERC20().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCosmosCoinToERC20 | PlainMessage<MsgConvertCosmosCoinToERC20> | undefined, b: MsgConvertCosmosCoinToERC20 | PlainMessage<MsgConvertCosmosCoinToERC20> | undefined): boolean {
    return proto3.util.equals(MsgConvertCosmosCoinToERC20, a, b);
  }
}

/**
 * MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response
 */
export class MsgConvertCosmosCoinToERC20Response extends Message<MsgConvertCosmosCoinToERC20Response> {
  constructor(data?: PartialMessage<MsgConvertCosmosCoinToERC20Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCosmosCoinToERC20Response {
    return new MsgConvertCosmosCoinToERC20Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinToERC20Response {
    return new MsgConvertCosmosCoinToERC20Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinToERC20Response {
    return new MsgConvertCosmosCoinToERC20Response().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCosmosCoinToERC20Response | PlainMessage<MsgConvertCosmosCoinToERC20Response> | undefined, b: MsgConvertCosmosCoinToERC20Response | PlainMessage<MsgConvertCosmosCoinToERC20Response> | undefined): boolean {
    return proto3.util.equals(MsgConvertCosmosCoinToERC20Response, a, b);
  }
}

/**
 * MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20
 */
export class MsgConvertCosmosCoinFromERC20 extends Message<MsgConvertCosmosCoinFromERC20> {
  /**
   * EVM hex address initiating the conversion.
   *
   * @generated from field: string initiator = 1;
   */
  initiator = "";

  /**
   * Kava bech32 address that will receive the cosmos coins.
   *
   * @generated from field: string receiver = 2;
   */
  receiver = "";

  /**
   * Amount is the amount to convert, expressed as a Cosmos coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<MsgConvertCosmosCoinFromERC20>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initiator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCosmosCoinFromERC20 {
    return new MsgConvertCosmosCoinFromERC20().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinFromERC20 {
    return new MsgConvertCosmosCoinFromERC20().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinFromERC20 {
    return new MsgConvertCosmosCoinFromERC20().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCosmosCoinFromERC20 | PlainMessage<MsgConvertCosmosCoinFromERC20> | undefined, b: MsgConvertCosmosCoinFromERC20 | PlainMessage<MsgConvertCosmosCoinFromERC20> | undefined): boolean {
    return proto3.util.equals(MsgConvertCosmosCoinFromERC20, a, b);
  }
}

/**
 * MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20.
 *
 * @generated from message kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response
 */
export class MsgConvertCosmosCoinFromERC20Response extends Message<MsgConvertCosmosCoinFromERC20Response> {
  constructor(data?: PartialMessage<MsgConvertCosmosCoinFromERC20Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConvertCosmosCoinFromERC20Response {
    return new MsgConvertCosmosCoinFromERC20Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinFromERC20Response {
    return new MsgConvertCosmosCoinFromERC20Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConvertCosmosCoinFromERC20Response {
    return new MsgConvertCosmosCoinFromERC20Response().fromJsonString(jsonString, options);
  }

  static equals(a: MsgConvertCosmosCoinFromERC20Response | PlainMessage<MsgConvertCosmosCoinFromERC20Response> | undefined, b: MsgConvertCosmosCoinFromERC20Response | PlainMessage<MsgConvertCosmosCoinFromERC20Response> | undefined): boolean {
    return proto3.util.equals(MsgConvertCosmosCoinFromERC20Response, a, b);
  }
}
