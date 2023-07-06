import { PlainMessage } from "@bufbuild/protobuf";
import WalletConnect from "@walletconnect/legacy-client";
import { Adapter, broadcastTx } from "cosmes/client";
import { fromBase64ToUint8Array } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxSigningV1beta1SignMode as SignMode,
} from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { isAndroid, isMobile } from "../../utils/os";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { KeplrWcV1Method, KeplrWcV1Uri } from "./constants";
import { SignAminoResponse } from "./types";

export class KeplrWalletConnectV1 extends ConnectedWallet {
  private readonly wc: WalletConnect;

  constructor(
    wc: WalletConnect,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.KEPLR,
      WalletType.WALLETCONNECT,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.wc = wc;
  }

  public async signArbitrary(_data: string): Promise<SignArbitraryResponse> {
    // ! Not implemented by Keplr
    // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-client/src/index.ts#L379
    throw new Error("Method not implemented.");
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    const { tx, sequence, accountNumber, fee } = await this.prepBroadcastTx(
      unsignedTx,
      opts
    );
    const { memo } = unsignedTx;
    // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-client/src/index.ts#L461
    const [{ signature }] = await this.sendRequest<SignAminoResponse>(
      KeplrWcV1Method.SIGN_AMINO,
      [
        this.chainId,
        this.address,
        tx.toStdSignDoc({
          chainId: this.chainId,
          accountNumber,
          sequence,
          fee,
          memo,
        }),
      ]
    );
    // Since `sendTx` on WC isn't implemented yet, we have to broadcast manually
    // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-client/src/index.ts#L449
    return broadcastTx(this.rpc, {
      sequence,
      fee,
      signMode: SignMode.LEGACY_AMINO_JSON,
      signature: fromBase64ToUint8Array(signature.signature),
      tx,
      memo,
    });
  }

  private async sendRequest<T>(method: string, params: unknown[]): Promise<T> {
    if (isMobile()) {
      window.location.href = isAndroid()
        ? KeplrWcV1Uri.ANDROID
        : KeplrWcV1Uri.IOS;
    }
    return this.wc.sendCustomRequest({
      id: Date.now(),
      jsonrpc: "2.0",
      method,
      params: [
        ...params,
        {
          preferNoSetFee: true,
          preferNoSetMemo: true,
        },
      ],
    });
  }
}
