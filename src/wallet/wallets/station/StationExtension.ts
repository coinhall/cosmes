import { PlainMessage } from "@bufbuild/protobuf";
import { Adapter } from "cosmes/client";
import { CosmosBaseV1beta1Coin as Coin } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { ExtensionDispatcher } from "./extension/ExtensionDispatcher";

export class StationExtension extends ConnectedWallet {
  private readonly ext: ExtensionDispatcher;

  constructor(
    ext: ExtensionDispatcher,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.STATION,
      WalletType.EXTENSION,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.ext = ext;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const { result, error } = await this.ext.signBytes(data);
    if (error) {
      throw new Error(error.message);
    }
    return {
      data,
      pubKey: result.public_key,
      signature: result.signature,
    };
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    const { fee } = await this.prepBroadcastTx(unsignedTx, opts);
    const { msgs, memo } = unsignedTx;
    const { result, error } = await this.ext.signAndBroadcast(
      this.chainId,
      fee,
      msgs,
      memo
    );
    if (error) {
      throw new Error(error.message);
    }
    if (result.code) {
      throw new Error(result.raw_log);
    }
    return result.txhash;
  }
}
