import { PlainMessage } from "@bufbuild/protobuf";
import { base64 } from "cosmes/codec";
import {
  EthermintCryptoV1Ethsecp256k1PubKey as ProtoEthermintSecp256k1PubKey,
  InjectiveCryptoV1beta1Ethsecp256k1PubKey as ProtoInjectiveSecp256k1PubKey,
  CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey,
} from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<
  {
    chainId?: string | undefined;
  } & PlainMessage<ProtoSecp256k1PubKey>
>;

export class Secp256k1PubKey implements Adapter {
  private readonly data: Data;
  private readonly type: string;

  constructor(data: Data) {
    this.data = data;
    this.type = data.chainId?.split(/[-_]/, 2).at(0) ?? "";
  }

  public toProto() {
    return this.type === "injective"
      ? new ProtoInjectiveSecp256k1PubKey(this.data)
      : this.type === "dymension" || this.type === "evmos"
      ? new ProtoEthermintSecp256k1PubKey(this.data)
      : new ProtoSecp256k1PubKey(this.data);
  }

  // TODO: needs to be updated to include injective/dymension support
  public toAmino() {
    return {
      type: "tendermint/PubKeySecp256k1",
      value: {
        key: base64.encode(this.data.key),
      },
    };
  }
}
