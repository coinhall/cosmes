import { PlainMessage } from "@bufbuild/protobuf";
import { fromUint8ArrayToBase64 } from "cosmes/codec";
import { CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoSecp256k1PubKey>>;

export class Secp256k1PubKey implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoSecp256k1PubKey(this.data);
  }

  public toAmino() {
    return {
      type: "tendermint/PubKeySecp256k1",
      value: {
        key: fromUint8ArrayToBase64(this.data.key),
      },
    };
  }
}
