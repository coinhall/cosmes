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
import { toStationTx } from "./utils/toStationTx";

export class StationWalletConnectV1 extends ConnectedWallet {
  private readonly wc: WalletConnect;

  constructor(
    label: string | undefined,
    wc: WalletConnect,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.STATION,
      WalletType.WALLETCONNECT,
      label,
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
    // See: https://github.com/terra-money/wallet-kit/blob/79600bb096d64754160909871dfdf89944120ce8/src/%40terra-money/terra-station-mobile/index.ts#L304
    const { txhash } = await this.sendRequest<PostResponse>(
      "post",
      toStationTx(this.chainId, fee, msgs, memo)
    );
    return txhash;
  }

  private async sendRequest<T>(method: string, params: unknown): Promise<T> {
    // https://github.com/terra-money/wallet-provider/blob/interchain-wallet-provider/packages/src/%40terra-money/wallet-controller/modules/walletconnect/connect.ts#L327-L352
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
      window.location.href = `terrastation://walletconnect_confirm/?action=walletconnect_confirm&payload=${payload}`;
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
