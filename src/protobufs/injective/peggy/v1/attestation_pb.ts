// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/attestation.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 *
 * @generated from enum injective.peggy.v1.ClaimType
 */
export enum ClaimType {
  /**
   * @generated from enum value: CLAIM_TYPE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: CLAIM_TYPE_DEPOSIT = 1;
   */
  DEPOSIT = 1,

  /**
   * @generated from enum value: CLAIM_TYPE_WITHDRAW = 2;
   */
  WITHDRAW = 2,

  /**
   * @generated from enum value: CLAIM_TYPE_ERC20_DEPLOYED = 3;
   */
  ERC20_DEPLOYED = 3,

  /**
   * @generated from enum value: CLAIM_TYPE_VALSET_UPDATED = 4;
   */
  VALSET_UPDATED = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ClaimType)
proto3.util.setEnumType(ClaimType, "injective.peggy.v1.ClaimType", [
  { no: 0, name: "CLAIM_TYPE_UNKNOWN" },
  { no: 1, name: "CLAIM_TYPE_DEPOSIT" },
  { no: 2, name: "CLAIM_TYPE_WITHDRAW" },
  { no: 3, name: "CLAIM_TYPE_ERC20_DEPLOYED" },
  { no: 4, name: "CLAIM_TYPE_VALSET_UPDATED" },
]);

/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
 *
 * @generated from message injective.peggy.v1.Attestation
 */
export class Attestation extends Message<Attestation> {
  /**
   * @generated from field: bool observed = 1;
   */
  observed = false;

  /**
   * @generated from field: repeated string votes = 2;
   */
  votes: string[] = [];

  /**
   * @generated from field: uint64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Any claim = 4;
   */
  claim?: Any;

  constructor(data?: PartialMessage<Attestation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.Attestation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "observed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "votes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "claim", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attestation {
    return new Attestation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attestation {
    return new Attestation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attestation {
    return new Attestation().fromJsonString(jsonString, options);
  }

  static equals(a: Attestation | PlainMessage<Attestation> | undefined, b: Attestation | PlainMessage<Attestation> | undefined): boolean {
    return proto3.util.equals(Attestation, a, b);
  }
}

/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to
 * display for UI)
 *
 * @generated from message injective.peggy.v1.ERC20Token
 */
export class ERC20Token extends Message<ERC20Token> {
  /**
   * @generated from field: string contract = 1;
   */
  contract = "";

  /**
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<ERC20Token>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "injective.peggy.v1.ERC20Token";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ERC20Token {
    return new ERC20Token().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ERC20Token {
    return new ERC20Token().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ERC20Token {
    return new ERC20Token().fromJsonString(jsonString, options);
  }

  static equals(a: ERC20Token | PlainMessage<ERC20Token> | undefined, b: ERC20Token | PlainMessage<ERC20Token> | undefined): boolean {
    return proto3.util.equals(ERC20Token, a, b);
  }
}

