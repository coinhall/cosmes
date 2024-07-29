// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file pryzm/amm/v1/pair_match_proposal.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message pryzm.amm.v1.PairMatchProposal
 */
export class PairMatchProposal extends Message<PairMatchProposal> {
  /**
   * @generated from field: uint64 pool_id = 1;
   */
  poolId = protoInt64.zero;

  /**
   * @generated from field: bool whitelisted_route = 2;
   */
  whitelistedRoute = false;

  /**
   * @generated from field: string token_in = 3;
   */
  tokenIn = "";

  /**
   * @generated from field: string token_out = 4;
   */
  tokenOut = "";

  /**
   * @generated from field: repeated uint64 buy_orders = 5;
   */
  buyOrders: bigint[] = [];

  /**
   * @generated from field: repeated uint64 sell_orders = 6;
   */
  sellOrders: bigint[] = [];

  constructor(data?: PartialMessage<PairMatchProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pryzm.amm.v1.PairMatchProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "whitelisted_route", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "buy_orders", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 6, name: "sell_orders", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PairMatchProposal {
    return new PairMatchProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PairMatchProposal {
    return new PairMatchProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PairMatchProposal {
    return new PairMatchProposal().fromJsonString(jsonString, options);
  }

  static equals(a: PairMatchProposal | PlainMessage<PairMatchProposal> | undefined, b: PairMatchProposal | PlainMessage<PairMatchProposal> | undefined): boolean {
    return proto3.util.equals(PairMatchProposal, a, b);
  }
}

