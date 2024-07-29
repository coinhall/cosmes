import { PlainMessage } from "@bufbuild/protobuf";
import {
  RpcClient,
  Secp256k1PubKey,
  ToSignDocParams,
  ToStdSignDocParams,
  Tx,
} from "cosmes/client";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxV1beta1TxRaw as TxRaw,
} from "cosmes/protobufs";
import { WalletError, WalletName, WalletType } from "cosmes/wallet";

import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";

export class KeplrWalletConnectV2 extends ConnectedWallet {
  private readonly wc: WalletConnectV2;
  private readonly useAmino: boolean;

  constructor(
    walletName: WalletName,
    label: string | undefined,
    wc: WalletConnectV2,
    chainId: string,
    pubKey: Secp256k1PubKey,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>,
    useAmino: boolean
  ) {
    super(
      walletName,
      WalletType.WALLETCONNECT,
      label,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.wc = wc;
    this.useAmino = useAmino;
  }

  public async signArbitrary(_data: string): Promise<SignArbitraryResponse> {
    // ! Not implemented by Keplr
    // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-client/src/index.ts#L379
    throw new Error("Method not implemented.");
  }

  public async signAndBroadcastTx(
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
    if (this.useAmino) {
      const { signed, signature } = await WalletError.wrap(
        this.wc.signAmino(this.chainId, this.address, tx.toStdSignDoc(params))
      );
      txRaw = tx.toSignedAmino(signed, signature.signature);
    } else {
      const { signed, signature } = await WalletError.wrap(
        this.wc.signDirect(this.chainId, this.address, tx.toSignDoc(params))
      );
      txRaw = tx.toSignedDirect(signed, signature.signature);
    }

    return RpcClient.broadcastTx(this.rpc, txRaw);
  }
}
