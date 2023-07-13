import { Secp256k1PubKey } from "cosmes/client";
import { fromBase64ToUint8Array } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { LeapExtension } from "./LeapExtension";
import { LeapWalletConnectV2 } from "./LeapWalletConnectV2";
import { LeapWcUri } from "./constants";

export class LeapController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.LEAP);
    this.wc = new WalletConnectV2(wcProjectId, {
      name: "Leap",
      android: LeapWcUri.ANDROID,
      ios: LeapWcUri.IOS,
    });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "leap" in window : true;
  }

  protected async connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ) {
    const wallets = new Map<T, ConnectedWallet>();
    await this.wc.connect(chains.map(({ chainId }) => chainId));
    for (let i = 0; i < chains.length; i++) {
      const { chainId, rpc, gasPrice } = chains[i];
      const { pubkey, address } = await this.wc.getAccount(chainId);
      const key = new Secp256k1PubKey({
        key: fromBase64ToUint8Array(pubkey),
      });
      wallets.set(
        chainId,
        new LeapWalletConnectV2(this.wc, chainId, key, address, rpc, gasPrice)
      );
    }
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.leap;
    if (!ext) {
      throw new Error("Leap extension is not installed");
    }
    await ext.enable(chains.map(({ chainId }) => chainId));
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      const { bech32Address, pubKey } = await ext.getKey(chainId);
      const key = new Secp256k1PubKey({
        key: pubKey,
      });
      wallets.set(
        chainId,
        new LeapExtension(ext, chainId, key, bech32Address, rpc, gasPrice)
      );
    }
    return wallets;
  }

  protected registerAccountChangeHandlers() {
    onWindowEvent("leap_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }
}
