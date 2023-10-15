import { PlainMessage } from "@bufbuild/protobuf";
import { Adapter, Tx } from "cosmes/client";
import { base16 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
} from "cosmes/protobufs";
import type { BroadcastMode } from "cosmes/registry";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { toSignedTxRaw } from "../../utils/tx";
import {
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

  protected async signAndBroadcastTx(
    { msgs, memo }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      pubKey: this.pubKey,
      msgs: msgs,
    });
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
      toSignedTxRaw(tx, signature.signature, signed).toBinary(),
      "sync" as BroadcastMode
    );
    return base16.encode(txHash);
  }
}
