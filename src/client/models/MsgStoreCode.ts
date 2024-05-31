import { PlainMessage } from "@bufbuild/protobuf";
import { base64 } from "cosmes/codec";
import { CosmwasmWasmV1MsgStoreCode as ProtoMsgStoreCode } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoMsgStoreCode>>;

export class MsgStoreCode implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgStoreCode({
      ...this.data,
    });
  }

  public toAmino() {
    return {
      type: "wasm/MsgStoreCode",
      value: {
        sender: this.data.sender,
        wasm_byte_code: base64.encode(this.data.wasmByteCode),
        instantiate_permission: this.data.instantiatePermission,
      }
    };
  }
}
