import { PlainMessage } from "@bufbuild/protobuf";
import { RpcClient, Secp256k1PubKey, Tx } from "cosmes/client";
import { base64, utf8 } from "cosmes/codec";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxSigningV1beta1SignMode as SignMode,
} from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { Station } from "./types";
import { toStationTx } from "./utils/toStationTx";

export class StationExtension extends ConnectedWallet {
  private readonly ext: Station;

  constructor(
    ext: Station,
    chainId: string,
    pubKey: Secp256k1PubKey,
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
    const { public_key, signature } = await this.normaliseError(
      this.ext.signBytes(base64.encode(utf8.decode(data)), true)
    );
    return {
      data,
      pubKey: public_key,
      signature: signature,
    };
  }

  public async signAndBroadcastTx(
    { msgs, memo, timeoutHeight }: UnsignedTx,
    fee: Fee,
    _accountNumber: bigint,
    sequence: bigint
  ): Promise<string> {
    const { auth_info, signatures } = await this.normaliseError(
      this.ext.sign(toStationTx(this.chainId, fee, msgs, memo), true)
    );
    const tx = new Tx({
      chainId: this.chainId,
      pubKey: this.pubKey,
      msgs: msgs,
    });
    const txRaw = tx.toSignedProto({
      fee: new Fee({
        amount: auth_info.fee.amount.slice(),
        gasLimit: BigInt(auth_info.fee.gas_limit),
        payer: fee.payer,
        granter: fee.granter,
      }),
      sequence,
      signMode:
        auth_info.signer_infos[0].mode_info.single.mode === "SIGN_MODE_DIRECT"
          ? SignMode.DIRECT
          : SignMode.LEGACY_AMINO_JSON,
      signature: base64.decode(signatures[0]),
      memo: memo,
      timeoutHeight,
    });
    return RpcClient.broadcastTx(this.rpc, txRaw);
  }

  /**
   * Normalises the error thrown by the Station extension into a standard `Error`
   * instance. Returns the result of the `promise` if it resolves successfully.
   */
  private async normaliseError<T>(promise: Promise<T>): Promise<T> {
    try {
      return await promise;
    } catch (err) {
      if (typeof err === "string") {
        throw new Error(err);
      }
      if (err instanceof Error) {
        throw err;
      }
      throw new Error(
        "Unknown error from Station extension: " + JSON.stringify(err)
      );
    }
  }
}
