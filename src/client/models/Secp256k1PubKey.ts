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
    algo?: string | undefined;
  } & PlainMessage<ProtoSecp256k1PubKey>
>;

export class Secp256k1PubKey implements Adapter {
  private readonly data: Data;
  private readonly type: string;
  private readonly algo: string | undefined;

  constructor(data: Data) {
    this.data = data;
    this.type = data.chainId?.split(/[-_]/, 2).at(0) ?? "";
    this.algo = data.algo
  }

  public toProto() {

    if(this.algo){
      return this.algo === "ethsecp256k1" ? new ProtoEthermintSecp256k1PubKey(this.data) : new ProtoSecp256k1PubKey(this.data)
    }
    else{
      return this.type === "injective"
        ? new ProtoInjectiveSecp256k1PubKey(this.data)
        : (this.type === "dymension" || this.type === "evmos" || this.type === "planq")
        ? new ProtoEthermintSecp256k1PubKey(this.data)
        : new ProtoSecp256k1PubKey(this.data)
    }

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
