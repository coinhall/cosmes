// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/kavadist/v1beta1/proposal.proto (package kava.kavadist.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 *
 * @generated from message kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal
 */
export class CommunityPoolMultiSpendProposal extends Message<CommunityPoolMultiSpendProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated kava.kavadist.v1beta1.MultiSpendRecipient recipient_list = 3;
   */
  recipientList: MultiSpendRecipient[] = [];

  constructor(data?: PartialMessage<CommunityPoolMultiSpendProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "recipient_list", kind: "message", T: MultiSpendRecipient, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityPoolMultiSpendProposal {
    return new CommunityPoolMultiSpendProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityPoolMultiSpendProposal {
    return new CommunityPoolMultiSpendProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityPoolMultiSpendProposal {
    return new CommunityPoolMultiSpendProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CommunityPoolMultiSpendProposal | PlainMessage<CommunityPoolMultiSpendProposal> | undefined, b: CommunityPoolMultiSpendProposal | PlainMessage<CommunityPoolMultiSpendProposal> | undefined): boolean {
    return proto3.util.equals(CommunityPoolMultiSpendProposal, a, b);
  }
}

/**
 * CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit
 *
 * @generated from message kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON
 */
export class CommunityPoolMultiSpendProposalJSON extends Message<CommunityPoolMultiSpendProposalJSON> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated kava.kavadist.v1beta1.MultiSpendRecipient recipient_list = 3;
   */
  recipientList: MultiSpendRecipient[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin deposit = 4;
   */
  deposit: Coin[] = [];

  constructor(data?: PartialMessage<CommunityPoolMultiSpendProposalJSON>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "recipient_list", kind: "message", T: MultiSpendRecipient, repeated: true },
    { no: 4, name: "deposit", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityPoolMultiSpendProposalJSON {
    return new CommunityPoolMultiSpendProposalJSON().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityPoolMultiSpendProposalJSON {
    return new CommunityPoolMultiSpendProposalJSON().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityPoolMultiSpendProposalJSON {
    return new CommunityPoolMultiSpendProposalJSON().fromJsonString(jsonString, options);
  }

  static equals(a: CommunityPoolMultiSpendProposalJSON | PlainMessage<CommunityPoolMultiSpendProposalJSON> | undefined, b: CommunityPoolMultiSpendProposalJSON | PlainMessage<CommunityPoolMultiSpendProposalJSON> | undefined): boolean {
    return proto3.util.equals(CommunityPoolMultiSpendProposalJSON, a, b);
  }
}

/**
 * MultiSpendRecipient defines a recipient and the amount of coins they are receiving
 *
 * @generated from message kava.kavadist.v1beta1.MultiSpendRecipient
 */
export class MultiSpendRecipient extends Message<MultiSpendRecipient> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MultiSpendRecipient>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.kavadist.v1beta1.MultiSpendRecipient";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiSpendRecipient {
    return new MultiSpendRecipient().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiSpendRecipient {
    return new MultiSpendRecipient().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiSpendRecipient {
    return new MultiSpendRecipient().fromJsonString(jsonString, options);
  }

  static equals(a: MultiSpendRecipient | PlainMessage<MultiSpendRecipient> | undefined, b: MultiSpendRecipient | PlainMessage<MultiSpendRecipient> | undefined): boolean {
    return proto3.util.equals(MultiSpendRecipient, a, b);
  }
}

