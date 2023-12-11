import { PlainMessage } from "@bufbuild/protobuf";
import {
  Secp256k1PubKey,
  ToSignDocParams,
  ToStdSignDocParams,
  Tx,
} from "cosmes/client";
import { base16 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxV1beta1TxRaw as TxRaw,
} from "cosmes/protobufs";
import type { BroadcastMode, Keplr } from "cosmes/registry";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";

export class KeplrExtension extends ConnectedWallet {
  private readonly ext: Keplr;
  private readonly isLedger: boolean;

  constructor(
    walletName: WalletName,
    ext: Keplr,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>,
    isLedger: boolean
  ) {
    super(
      walletName,
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
    this.isLedger = isLedger;
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
    { msgs, memo, timeoutHeight }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      chainId: this.chainId,
      pubKey: this.pubKey,
      msgs: msgs,
    });

    const params: ToStdSignDocParams | ToSignDocParams = {
      accountNumber,
      sequence,
      fee,
      memo,
      timeoutHeight,
    };
    let txRaw: TxRaw;
    if (this.isLedger) {
      const { signed, signature } = await this.ext.signAmino(
        this.chainId,
        this.address,
        tx.toStdSignDoc(params)
      );
      txRaw = tx.toSignedAmino(signed, signature.signature);
    } else {
      const { signed, signature } = await this.ext.signDirect(
        this.chainId,
        this.address,
        tx.toSignDoc(params)
      );
      txRaw = tx.toSignedDirect(signed, signature.signature);
    }

    const txHash = await this.ext.sendTx(
      this.chainId,
      txRaw.toBinary(),
      "sync" as BroadcastMode
    );
    return base16.encode(txHash);
  }
}
