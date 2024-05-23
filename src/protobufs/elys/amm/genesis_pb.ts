// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/amm/genesis.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { OraclePoolSlippageTrack, Pool } from "./pool_pb.js";
import { DenomLiquidity } from "./denom_liquidity_pb.js";

/**
 * GenesisState defines the amm module's genesis state.
 *
 * @generated from message elys.amm.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: elys.amm.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated elys.amm.Pool pool_list = 2;
   */
  poolList: Pool[] = [];

  /**
   * @generated from field: repeated elys.amm.DenomLiquidity denom_liquidity_list = 3;
   */
  denomLiquidityList: DenomLiquidity[] = [];

  /**
   * @generated from field: repeated elys.amm.OraclePoolSlippageTrack slippage_tracks = 4;
   */
  slippageTracks: OraclePoolSlippageTrack[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.amm.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pool_list", kind: "message", T: Pool, repeated: true },
    { no: 3, name: "denom_liquidity_list", kind: "message", T: DenomLiquidity, repeated: true },
    { no: 4, name: "slippage_tracks", kind: "message", T: OraclePoolSlippageTrack, repeated: true },
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
