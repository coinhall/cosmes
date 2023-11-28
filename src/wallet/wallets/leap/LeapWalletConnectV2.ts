import { PlainMessage } from "@bufbuild/protobuf";
import { Secp256k1PubKey, Tx, broadcastTx } from "cosmes/client";
import { base64 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxSigningV1beta1SignMode as SignMode,
} from "cosmes/protobufs";
import { WalletName, WalletType } from "cosmes/wallet";

import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";

export class LeapWalletConnectV2 extends ConnectedWallet {
  private readonly wc: WalletConnectV2;

  constructor(
    wc: WalletConnectV2,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.LEAP,
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
    // ! Not implemented by Leap
    throw new Error("Method not implemented.");
  }

  public async signAndBroadcastTx(
    { msgs, memo }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      chainId: this.chainId,
      pubKey: this.pubKey,
      msgs: msgs,
    });
    const { signature, signed } = await this.wc.signAmino(
      this.chainId,
      this.address,
      tx.toStdSignDoc({
        accountNumber,
        sequence,
        fee,
        memo,
      })
    );
    // Since `sendTx` on WC isn't implemented yet, we have to broadcast manually
    return broadcastTx(this.rpc, {
      tx,
      sequence: BigInt(signed.sequence),
      fee: new Fee({
        amount: signed.fee.amount as Coin[],
        gasLimit: BigInt(signed.fee.gas),
        payer: signed.fee.payer,
        granter: signed.fee.granter,
      }),
      signMode: SignMode.LEGACY_AMINO_JSON,
      signature: base64.decode(signature),
      memo: signed.memo,
    });
  }
}
