import { PlainMessage } from "@bufbuild/protobuf";
import type { BroadcastMode } from "@keplr-wallet/types";
import { Adapter } from "cosmes/client";
import { fromUint8ArrayToHex } from "cosmes/codec";
import { CosmosBaseV1beta1Coin as Coin } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { getTxRawFromKeplrSignature } from "../../utils/stdSignDocToTxRaw";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { Leap } from "./types";

export class LeapExtension extends ConnectedWallet {
  private readonly ext: Leap;

  constructor(
    ext: Leap,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.LEAP,
      WalletType.EXTENSION,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.ext = ext;
    this.ext.defaultOptions = {
      sign: {
        preferNoSetFee: true,
        preferNoSetMemo: true,
      },
    };
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const res = await this.ext.signArbitrary(this.chainId, this.address, data);
    return {
      data,
      pubKey: res.pub_key.value,
      signature: res.signature,
    };
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
    const { signature, signed } = await this.ext.signAmino(
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
    const txHash = await this.ext.sendTx(
      this.chainId,
      getTxRawFromKeplrSignature(tx, signature.signature, signed).toBinary(),
      "sync" as BroadcastMode
    );
    return fromUint8ArrayToHex(txHash).toUpperCase();
  }
}
