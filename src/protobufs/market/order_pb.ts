// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file market/order.proto (package pendulumlabs.market.market, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message pendulumlabs.market.market.Order
 */
export class Order extends Message<Order> {
  /**
   * @generated from field: uint64 uid = 1;
   */
  uid = protoInt64.zero;

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: string status = 3;
   */
  status = "";

  /**
   * @generated from field: string orderType = 4;
   */
  orderType = "";

  /**
   * @generated from field: string denomAsk = 5;
   */
  denomAsk = "";

  /**
   * @generated from field: string denomBid = 6;
   */
  denomBid = "";

  /**
   * @generated from field: string amount = 7;
   */
  amount = "";

  /**
   * @generated from field: repeated string rate = 8;
   */
  rate: string[] = [];

  /**
   * @generated from field: uint64 prev = 9;
   */
  prev = protoInt64.zero;

  /**
   * @generated from field: uint64 next = 10;
   */
  next = protoInt64.zero;

  /**
   * @generated from field: int64 beg_time = 11;
   */
  begTime = protoInt64.zero;

  /**
   * @generated from field: int64 upd_time = 12;
   */
  updTime = protoInt64.zero;

  constructor(data?: PartialMessage<Order>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pendulumlabs.market.market.Order";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uid", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "orderType", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "denomAsk", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "denomBid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "prev", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "next", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "beg_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "upd_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Order {
    return new Order().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Order {
    return new Order().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Order {
    return new Order().fromJsonString(jsonString, options);
  }

  static equals(a: Order | PlainMessage<Order> | undefined, b: Order | PlainMessage<Order> | undefined): boolean {
    return proto3.util.equals(Order, a, b);
  }
}

/**
 * @generated from message pendulumlabs.market.market.Orders
 */
export class Orders extends Message<Orders> {
  /**
   * @generated from field: repeated uint64 uids = 1;
   */
  uids: bigint[] = [];

  constructor(data?: PartialMessage<Orders>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pendulumlabs.market.market.Orders";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Orders {
    return new Orders().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Orders {
    return new Orders().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Orders {
    return new Orders().fromJsonString(jsonString, options);
  }

  static equals(a: Orders | PlainMessage<Orders> | undefined, b: Orders | PlainMessage<Orders> | undefined): boolean {
    return proto3.util.equals(Orders, a, b);
  }
}

/**
 * @generated from message pendulumlabs.market.market.OrderResponse
 */
export class OrderResponse extends Message<OrderResponse> {
  /**
   * @generated from field: uint64 uid = 1;
   */
  uid = protoInt64.zero;

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: string status = 3;
   */
  status = "";

  /**
   * @generated from field: string orderType = 4;
   */
  orderType = "";

  /**
   * @generated from field: string denomAsk = 5;
   */
  denomAsk = "";

  /**
   * @generated from field: string denomBid = 6;
   */
  denomBid = "";

  /**
   * @generated from field: string amount = 7;
   */
  amount = "";

  /**
   * @generated from field: repeated string rate = 8;
   */
  rate: string[] = [];

  /**
   * @generated from field: uint64 prev = 9;
   */
  prev = protoInt64.zero;

  /**
   * @generated from field: uint64 next = 10;
   */
  next = protoInt64.zero;

  /**
   * @generated from field: int64 beg_time = 11;
   */
  begTime = protoInt64.zero;

  /**
   * @generated from field: int64 upd_time = 12;
   */
  updTime = protoInt64.zero;

  constructor(data?: PartialMessage<OrderResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "pendulumlabs.market.market.OrderResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uid", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "orderType", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "denomAsk", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "denomBid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "rate", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "prev", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "next", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "beg_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "upd_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderResponse {
    return new OrderResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderResponse {
    return new OrderResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderResponse {
    return new OrderResponse().fromJsonString(jsonString, options);
  }

  static equals(a: OrderResponse | PlainMessage<OrderResponse> | undefined, b: OrderResponse | PlainMessage<OrderResponse> | undefined): boolean {
    return proto3.util.equals(OrderResponse, a, b);
  }
}

