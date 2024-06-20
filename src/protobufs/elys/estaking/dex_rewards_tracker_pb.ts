// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file elys/estaking/dex_rewards_tracker.proto (package elys.estaking, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * DexRewardsTracker is used for tracking rewards for stakers and LPs, all
 * amount here is in USDC
 *
 * @generated from message elys.estaking.DexRewardsTracker
 */
export class DexRewardsTracker extends Message<DexRewardsTracker> {
  /**
   * Number of blocks since start of epoch (distribution epoch)
   *
   * @generated from field: string num_blocks = 1;
   */
  numBlocks = "";

  /**
   * Accumulated amount at distribution epoch - recalculated at every
   * distribution epoch
   *
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<DexRewardsTracker>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "elys.estaking.DexRewardsTracker";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "num_blocks", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DexRewardsTracker {
    return new DexRewardsTracker().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DexRewardsTracker {
    return new DexRewardsTracker().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DexRewardsTracker {
    return new DexRewardsTracker().fromJsonString(jsonString, options);
  }

  static equals(a: DexRewardsTracker | PlainMessage<DexRewardsTracker> | undefined, b: DexRewardsTracker | PlainMessage<DexRewardsTracker> | undefined): boolean {
    return proto3.util.equals(DexRewardsTracker, a, b);
  }
}

