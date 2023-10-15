import { PlainMessage } from "@bufbuild/protobuf";
import { Adapter, Tx } from "cosmes/client";
import { base64 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
} from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { stdSignDocToSignedProto } from "../../utils/tx";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { CosmostationExtMethod } from "./constants";
import {
  Cosmostation,
  ExtSignArbitraryResponse,
  SendTransactionResponse,
  SignAminoResponse,
} from "./types";

export class CosmostationExtension extends ConnectedWallet {
  private readonly ext: Cosmostation;

  constructor(
    ext: Cosmostation,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.COSMOSTATION,
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
    // https://docs.cosmostation.io/integration-extension/cosmos/sign-message#vanilla-code
    const res: ExtSignArbitraryResponse = await this.ext.cosmos.request({
      method: CosmostationExtMethod.SIGN_ARBITRARY,
      params: {
        chainName: this.chainId,
        signer: this.address,
        message: data,
      },
    });
    return {
      data,
      pubKey: res.pub_key.value,
      signature: res.signature,
    };
  }

  public async signAndBroadcastTx(
    { msgs, memo }: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const tx = new Tx({
      pubKey: this.pubKey,
      msgs: msgs,
    });
    // https://docs.cosmostation.io/integration-extension/cosmos/sign-tx#vanilla-code
    const { signature, signed_doc }: SignAminoResponse =
      await this.ext.cosmos.request({
        method: CosmostationExtMethod.SIGN_AMINO,
        params: {
          chainName: this.chainId,
          doc: tx.toStdSignDoc({
            chainId: this.chainId,
            accountNumber,
            sequence,
            fee,
            memo,
          }),
        },
      });
    // https://docs.cosmostation.io/integration-extension/cosmos/send-tx#vanilla-code
    const { tx_response }: SendTransactionResponse =
      await this.ext.cosmos.request({
        method: CosmostationExtMethod.SEND_TX,
        params: {
          chainName: this.chainId,
          txBytes: base64.encode(
            stdSignDocToSignedProto(tx, signature, signed_doc).toBinary()
          ),
          mode: 2, // for SYNC mode
        },
      });
    return tx_response.txhash;
  }
}
