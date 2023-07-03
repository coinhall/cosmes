import { Secp256k1PubKey } from "cosmes/client";
import { fromBase64ToUint8Array } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { KeplrExtension } from "./KeplrExtension";
import { KeplrWalletConnectV2 } from "./KeplrWalletConnectV2";
import { KeplrWcV2Uri } from "./constants";

export class KeplrController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.KEPLR);
    this.wc = new WalletConnectV2(wcProjectId, {
      // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-qrcode-modal/src/modal.tsx#L61-L75
      name: "Keplr",
      android: KeplrWcV2Uri.ANDROID,
      ios: KeplrWcV2Uri.IOS,
    });
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "keplr" in window : true;
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
        new KeplrWalletConnectV2(this.wc, chainId, key, address, rpc, gasPrice)
      );
    }
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.keplr;
    if (!ext) {
      throw new Error("Keplr extension is not installed");
    }
    await ext.enable(chains.map(({ chainId }) => chainId));
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      const { bech32Address, pubKey } = await ext.getKey(chainId);
      const key = new Secp256k1PubKey({
        key: pubKey,
      });
      wallets.set(
        chainId,
        new KeplrExtension(ext, chainId, key, bech32Address, rpc, gasPrice)
      );
    }
    return wallets;
  }
}
