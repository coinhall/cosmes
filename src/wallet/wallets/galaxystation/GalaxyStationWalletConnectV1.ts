import { PlainMessage } from "@bufbuild/protobuf";
import WalletConnect from "@walletconnect/legacy-client";
import { Secp256k1PubKey } from "cosmes/client";
import { base64, utf8 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
} from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { isMobile } from "../../utils/os";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { WalletError } from "../WalletError";
import { PostResponse, SignBytesResponse } from "./types";
import { toGalaxyStationTx } from "./utils/toGalaxyStationTx";

export class GalaxyStationWalletConnectV1 extends ConnectedWallet {
  private readonly wc: WalletConnect;

  constructor(
    wc: WalletConnect,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.GALAXYSTATION,
      WalletType.WALLETCONNECT,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.wc = wc;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const res = await this.sendRequest<SignBytesResponse>(
      "signBytes",
      base64.encode(utf8.decode(data))
    );
    return {
      data,
      pubKey: res.public_key,
      signature: res.signature,
    };
  }

  public async signAndBroadcastTx(
    { msgs, memo }: UnsignedTx,
    fee: Fee
  ): Promise<string> {
    // Signing a tx without posting it isn't supported
    const { txhash } = await this.sendRequest<PostResponse>(
      "post",
      toGalaxyStationTx(this.chainId, fee, msgs, memo)
    );
    return txhash;
  }

  private async sendRequest<T>(method: string, params: unknown): Promise<T> {
    const id = Date.now();
    if (isMobile()) {
      const payload = base64.encode(
        utf8.decode(
          JSON.stringify({
            id,
            handshakeTopic: this.wc.handshakeTopic,
            method,
            params,
          })
        )
      );
      window.location.href = `galaxystation://walletconnect_confirm/?action=walletconnect_confirm&payload=${payload}`;
    }
    try {
      return await this.wc.sendCustomRequest({
        id,
        method,
        params: [params],
      });
    } catch (err) {
      if (err instanceof Error) {
        // Error messages are JSON stringified (eg. '{"code":1,"message":"Denied by user"}')
        const { message } = JSON.parse(err.message);
        throw new WalletError(message, err);
      }
      throw new WalletError("unknown error", err);
    }
  }
}
