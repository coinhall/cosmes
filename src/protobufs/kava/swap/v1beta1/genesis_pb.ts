// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/swap/v1beta1/genesis.proto (package kava.swap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, PoolRecord, ShareRecord } from "./swap_pb.js";

/**
 * GenesisState defines the swap module's genesis state.
 *
 * @generated from message kava.swap.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the parameters related to swap
   *
   * @generated from field: kava.swap.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * pool_records defines the available pools
   *
   * @generated from field: repeated kava.swap.v1beta1.PoolRecord pool_records = 2;
   */
  poolRecords: PoolRecord[] = [];

  /**
   * share_records defines the owned shares of each pool
   *
   * @generated from field: repeated kava.swap.v1beta1.ShareRecord share_records = 3;
   */
  shareRecords: ShareRecord[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.swap.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pool_records", kind: "message", T: PoolRecord, repeated: true },
    { no: 3, name: "share_records", kind: "message", T: ShareRecord, repeated: true },
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
