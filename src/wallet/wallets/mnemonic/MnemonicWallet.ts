import type { StdSignDoc } from "@keplr-wallet/types";
import { Secp256k1PubKey } from "cosmes/client";
import {
  HDKey,
  base64,
  bech32,
  hmac,
  mnemonicToSeedSync,
  ripemd160,
  secp256k1,
  serialiseSignDoc,
  sha256,
  utf8,
} from "cosmes/codec";

import { Prettify } from "../../../typeutils/prettify";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { ChainInfo } from "../WalletController";

export type ConnectMnemonicWalletOptions = Prettify<
  {
    mnemonic: string;
    bech32Prefix: string;
    coinType?: number | undefined;
  } & ChainInfo<string>
>;

export class MnemonicWallet extends ConnectedWallet {
  private readonly publicKey: string;
  private readonly privateKey: Uint8Array;

  constructor({
    mnemonic,
    bech32Prefix,
    coinType,
    chainId,
    gasPrice,
    rpc,
  }: ConnectMnemonicWalletOptions) {
    // Polyfill some environments for secp256k1.
    // See: https://github.com/paulmillr/noble-secp256k1?tab=readme-ov-file#usage
    secp256k1.etc.hmacSha256Sync = (k, ...m) =>
      hmac(sha256, k, secp256k1.etc.concatBytes(...m));

    const seed = mnemonicToSeedSync(mnemonic);
    const { publicKey, privateKey } = HDKey.fromMasterSeed(seed).derive(
      `m/44'/${coinType ?? 118}'/0'/0/0`
    );
    if (!publicKey || !privateKey) {
      throw new Error("invalid mnemonic");
    }
    const pubKey = new Secp256k1PubKey({ key: publicKey });
    const address = bech32.encode(
      bech32Prefix,
      bech32.toWords(ripemd160(sha256(publicKey)))
    );

    super(
      // We typecast here instead of adding "mnemonic" as actual names/types
      // to prevent confusing users who are likely never going to use this.
      "mnemonic" as WalletName,
      "mnemonic" as WalletType,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.publicKey = base64.encode(publicKey);
    this.privateKey = privateKey;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    // This sign doc follows ADR 036 specs.
    // See: https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md
    const signDoc: StdSignDoc = {
      chain_id: "",
      account_number: "0",
      sequence: "0",
      fee: {
        gas: "0",
        amount: [],
      },
      msgs: [
        {
          type: "sign/MsgSignData",
          value: {
            signer: this.address,
            data: base64.encode(utf8.decode(data)),
          },
        },
      ],
      memo: "",
    };
    const signature = secp256k1
      .sign(sha256(serialiseSignDoc(signDoc)), this.privateKey)
      .toCompactRawBytes();
    return {
      data,
      pubKey: this.publicKey,
      signature: base64.encode(signature),
    };
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    throw new Error("NOT IMPLEMENTED");
  }
}
