import { PartialMessage } from "@bufbuild/protobuf";
import { InjectiveWasmxV1MsgExecuteContractCompat as ProtoMsgExecuteContractCompat } from "cosmes/protobufs";

import { Adapter } from "./Adapter";
import type { MsgExecuteContract } from "./MsgExecuteContract";

// Take in the same type as `MsgExecuteContract` to simplify consumer code
type Data<T> = ConstructorParameters<typeof MsgExecuteContract<T>>[0];

/**
 * **NOTE**: this message is only used on Injective when broadcasting txs via
 * MetaMask or EVM wallets. Otherwise, use `MsgExecuteContract` instead!
 */
export class MsgExecuteContractInjective<T> implements Adapter {
  private readonly data: PartialMessage<ProtoMsgExecuteContractCompat>;

  constructor(data: Data<T>) {
    this.data = {
      sender: data.sender,
      contract: data.contract,
      msg: JSON.stringify(data.msg),
    };
    // Bug in Injective where `funds` must be removed if it is "empty"
    if (data.funds.length > 0) {
      this.data.funds = data.funds
        .map(({ amount, denom }) => `${amount}${denom}`)
        .join(",");
    }
  }

  public toProto() {
    return new ProtoMsgExecuteContractCompat(this.data);
  }

  public toAmino() {
    return {
      type: "wasmx/MsgExecuteContractCompat",
      value: this.data,
    };
  }
}
