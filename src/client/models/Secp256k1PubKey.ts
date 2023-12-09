import { PlainMessage } from "@bufbuild/protobuf";
import { base64 } from "cosmes/codec";
import {
  InjectiveCryptoV1beta1Ethsecp256k1PubKey as ProtoInjectiveSecp256k1PubKey,
  CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey,
} from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<PlainMessage<ProtoSecp256k1PubKey>>;

export class Secp256k1PubKey implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto(isInjective = false) {
    return isInjective
      ? new ProtoInjectiveSecp256k1PubKey(this.data)
      : new ProtoSecp256k1PubKey(this.data);
  }

  public toAmino() {
    return {
      type: "tendermint/PubKeySecp256k1",
      value: {
        key: base64.encode(this.data.key),
      },
    };
  }
}
