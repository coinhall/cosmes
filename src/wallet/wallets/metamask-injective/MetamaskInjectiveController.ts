import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import { translateEthToBech32Address } from "cosmes/codec";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { MetamaskInjectiveExtension } from "./MetamaskInjectiveExtension";

export class MetamaskInjectiveController extends WalletController {
  constructor() {
    super(WalletName.METAMASK_INJECTIVE);
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "ethereum" in window : true;
  }

  protected async connectWalletConnect<T extends string>(
    _chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV1 | WalletConnectV2;
  }> {
    // TODO
    throw new Error("Not implemented");
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    if (chains.length !== 1) {
      throw new Error(
        "Exactly one chain information for Injective is required"
      );
    }

    const ext = window.ethereum;
    if (!ext) {
      throw new Error("Metamask extension is not installed");
    }

    const ethAddresses = await window.ethereum.request<string[]>({
      method: "eth_requestAccounts",
    });
    const ethAddress = ethAddresses?.[0];
    if (!ethAddress) {
      throw new Error("Failed to connect to Metamask");
    }
    const bech32Address = translateEthToBech32Address(ethAddress, "inj");

    const [chain] = chains;
    const pubKey = await this.getPubKey(chain.rpc, bech32Address);
    const wallets = new Map<T, ConnectedWallet>();
    wallets.set(
      chain.chainId,
      new MetamaskInjectiveExtension(
        this.id,
        ext,
        chain.chainId,
        pubKey,
        ethAddress,
        bech32Address,
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
    rpc: string,
    address: string
  ): Promise<Secp256k1PubKey> {
    const account = await getAccount(rpc, { address });
    const { pubKey } = toBaseAccount(account);
    if (!pubKey) {
      throw new Error(
        `Failed to connect as ${address} does not have any funds`
      );
    }
    return new Secp256k1PubKey({
      key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
    });
  }
}
