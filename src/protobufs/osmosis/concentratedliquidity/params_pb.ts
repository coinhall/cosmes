// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/params.proto (package osmosis.concentratedliquidity, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message osmosis.concentratedliquidity.Params
 */
export class Params extends Message<Params> {
  /**
   * authorized_tick_spacing is an array of uint64s that represents the tick
   * spacing values concentrated-liquidity pools can be created with. For
   * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
   * to be created with tick spacing of 1, 10, or 30.
   *
   * @generated from field: repeated uint64 authorized_tick_spacing = 1;
   */
  authorizedTickSpacing: bigint[] = [];

  /**
   * @generated from field: repeated string authorized_spread_factors = 2;
   */
  authorizedSpreadFactors: string[] = [];

  /**
   * balancer_shares_reward_discount is the rate by which incentives flowing
   * from CL to Balancer pools will be discounted to encourage LPs to migrate.
   * e.g. a rate of 0.05 means Balancer LPs get 5% less incentives than full
   * range CL LPs.
   * This field can range from (0,1]. If set to 1, it indicates that all
   * incentives stay at cl pool.
   *
   * @generated from field: string balancer_shares_reward_discount = 3;
   */
  balancerSharesRewardDiscount = "";

  /**
   * @generated from field: repeated google.protobuf.Duration authorized_uptimes = 5;
   */
  authorizedUptimes: Duration[] = [];

  /**
   * is_permissionless_pool_creation_enabled is a boolean that determines if
   * concentrated liquidity pools can be created via message. At launch,
   * we consider allowing only governance to create pools, and then later
   * allowing permissionless pool creation by switching this flag to true
   * with a governance proposal.
   *
   * @generated from field: bool is_permissionless_pool_creation_enabled = 6;
   */
  isPermissionlessPoolCreationEnabled = false;

  /**
   * unrestricted_pool_creator_whitelist is a list of addresses that are
   * allowed to bypass restrictions on permissionless supercharged pool
   * creation, like pool_creation_enabled, restricted quote assets, no
   * double creation of pools, etc.
   *
   * @generated from field: repeated string unrestricted_pool_creator_whitelist = 7;
   */
  unrestrictedPoolCreatorWhitelist: string[] = [];

  /**
   * @generated from field: uint64 hook_gas_limit = 8;
   */
  hookGasLimit = protoInt64.zero;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authorized_tick_spacing", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "authorized_spread_factors", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "balancer_shares_reward_discount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "authorized_uptimes", kind: "message", T: Duration, repeated: true },
    { no: 6, name: "is_permissionless_pool_creation_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "unrestricted_pool_creator_whitelist", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "hook_gas_limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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

