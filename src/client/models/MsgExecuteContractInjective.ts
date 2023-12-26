import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "cosmes/protobufs";

import { Adapter } from "./Adapter";
import type { MsgExecuteContract } from "./MsgExecuteContract";

// Take in the same type as `MsgExecuteContract` to simplify consumer code
type Data<T> = ConstructorParameters<typeof MsgExecuteContract<T>>[0];

/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * Metamask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export class MsgExecuteContractInjective<T> implements Adapter {
  private readonly data: Data<T>;

  constructor(data: Data<T>) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgExecuteContractCompat({
      ...this.data,
      msg: JSON.stringify(this.data.msg),
      funds: this.data.funds
        .map(({ amount, denom }) => `${amount}${denom}`)
        .join(","),
    });
  }

  public toAmino() {
    return {
      type: "wasmx/MsgExecuteContractCompat",
      value: this.data,
    };
  }
}
