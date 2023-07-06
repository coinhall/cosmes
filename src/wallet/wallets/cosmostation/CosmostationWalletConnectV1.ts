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
import { CosmostationWcUri, CosmostationWcV1Method } from "./constants";
import { WcSignAminoResponse } from "./types";

export class CosmostationWalletConnectV1 extends ConnectedWallet {
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
      WalletName.COSMOSTATION,
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
    // ! Not implemented by Cosmostation
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
    // https://docs.cosmostation.io/integration-mobile/walletconnect/sign-tx
    const [{ signature }] = await this.sendRequest<WcSignAminoResponse>(
      CosmostationWcV1Method.SIGN_AMINO,
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
        ? CosmostationWcUri.ANDROID
        : CosmostationWcUri.IOS;
    }
    return this.wc.sendCustomRequest({
      id: Date.now(),
      jsonrpc: "2.0",
      method,
      params,
    });
  }
}
