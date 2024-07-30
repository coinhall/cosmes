// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/precisebank/v1/genesis.proto (package kava.precisebank.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the precisebank module's genesis state.
 *
 * @generated from message kava.precisebank.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * balances is a list of all the balances in the precisebank module.
   *
   * @generated from field: repeated kava.precisebank.v1.FractionalBalance balances = 1;
   */
  balances: FractionalBalance[] = [];

  /**
   * remainder is an internal value of how much extra fractional digits are
   * still backed by the reserve, but not assigned to any account.
   *
   * @generated from field: string remainder = 2;
   */
  remainder = "";

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.precisebank.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "balances", kind: "message", T: FractionalBalance, repeated: true },
    { no: 2, name: "remainder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * FractionalBalance defines the fractional portion of an account balance
 *
 * @generated from message kava.precisebank.v1.FractionalBalance
 */
export class FractionalBalance extends Message<FractionalBalance> {
  /**
   * address is the address of the balance holder.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * amount indicates amount of only the fractional balance owned by the
   * address. FractionalBalance currently only supports tracking 1 single asset,
   * e.g. fractional balances of ukava.
   *
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<FractionalBalance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.precisebank.v1.FractionalBalance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FractionalBalance {
    return new FractionalBalance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FractionalBalance {
    return new FractionalBalance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FractionalBalance {
    return new FractionalBalance().fromJsonString(jsonString, options);
  }

  static equals(a: FractionalBalance | PlainMessage<FractionalBalance> | undefined, b: FractionalBalance | PlainMessage<FractionalBalance> | undefined): boolean {
    return proto3.util.equals(FractionalBalance, a, b);
  }
}
