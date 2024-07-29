import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import {
  ethhex,
  recoverPubKeyFromEthSignature,
  translateEthToBech32Address,
  utf8,
} from "cosmes/codec";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { MetamaskInjectiveExtension } from "./MetamaskInjectiveExtension";
import { Ethereum } from "./types";

export class MetamaskInjectiveController extends WalletController {
  constructor() {
    super(WalletName.METAMASK_INJECTIVE);
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "ethereum" in window : false;
  }

  protected async connectWalletConnect<T extends string>(
    _chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV1 | WalletConnectV2;
  }> {
    // TODO: check if walletconnect can be supported
    throw new Error("WalletConnect not supported");
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    if (chains.length !== 1) {
      throw new Error(
        "Exactly one chain information for Injective is required"
      );
    }

    const ext = window.ethereum;
    if (!ext) {
      throw new Error("MetaMask extension is not installed");
    }

    const ethAddresses = await WalletError.wrap(
      ext.request<string[]>({
        method: "eth_requestAccounts",
      })
    );
    const ethAddress = ethAddresses?.[0];
    if (!ethAddress) {
      throw new Error("Failed to connect to MetaMask");
    }
    const injAddress = translateEthToBech32Address(ethAddress, "inj");

    const [chain] = chains;
    const pubKey = await WalletError.wrap(
      this.getPubKey(ext, chain.chainId, chain.rpc, ethAddress, injAddress)
    );
    const wallets = new Map<T, ConnectedWallet>();
    wallets.set(
      chain.chainId,
      new MetamaskInjectiveExtension(
        this.id,
        undefined,
        ext,
        chain.chainId,
        pubKey,
        ethAddress,
        injAddress,
        chain.rpc,
        chain.gasPrice
      )
    );
    return wallets;
  }

  protected registerAccountChangeHandlers() {
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("accountsChanged", () =>
        this.changeAccount(WalletType.EXTENSION)
      );
    }
  }

  private async getPubKey(
    ext: Ethereum,
    chainId: string,
    rpc: string,
    ethAddress: string,
    injAddress: string
  ): Promise<Secp256k1PubKey> {
    // Try to get public key from RPC, but ignore any errors that occur
    const account = await getAccount(rpc, { address: injAddress }).catch(
      console.warn
    );
    if (account) {
      const { pubKey } = toBaseAccount(account);
      if (pubKey) {
        return new Secp256k1PubKey({
          chainId,
          key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
        });
      }
    }

    // Fallback to recovering pub key from a `personal_sign` signature
    // TODO: This may not be desirable behaviour as querying RPC will always
    // TODO: fail if the user's account has not been initialised, thereby making
    // TODO: the user sign this message every time they reconnect to the wallet
    const message = utf8.decode("Sign to allow retrieval of your public key");
    const signature = await ext.request<string>({
      method: "personal_sign",
      params: [ethhex.encode(message), ethAddress],
    });
    if (!signature) {
      throw new Error("Failed to retrieve pubic key");
    }
    return new Secp256k1PubKey({
      chainId,
      key: recoverPubKeyFromEthSignature(message, ethhex.decode(signature)),
    });
  }
}
