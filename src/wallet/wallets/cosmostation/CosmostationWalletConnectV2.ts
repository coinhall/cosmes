import { PlainMessage } from "@bufbuild/protobuf";
import { Adapter, broadcastTx } from "cosmes/client";
import { fromBase64ToUint8Array } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxSigningV1beta1SignMode as SignMode,
} from "cosmes/protobufs";
import { WalletName, WalletType } from "cosmes/wallet";

import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";

export class CosmostationWalletConnectV2 extends ConnectedWallet {
  private readonly wc: WalletConnectV2;

  constructor(
    wc: WalletConnectV2,
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
    const signature = await this.wc.signAmino(
      this.chainId,
      this.address,
      tx.toStdSignDoc({
        chainId: this.chainId,
        accountNumber,
        sequence,
        fee,
        memo,
      })
    );
    // Since `sendTx` on WC isn't implemented yet, we have to broadcast manually
    return broadcastTx(this.rpc, {
      sequence,
      fee,
      signMode: SignMode.LEGACY_AMINO_JSON,
      signature: fromBase64ToUint8Array(signature),
      tx,
      memo,
    });
  }
}
