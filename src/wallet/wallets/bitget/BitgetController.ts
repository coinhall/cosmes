import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { BitgetExtension } from "./BitgetExtension";
import { BitgetWalletConnectV2 } from "./BitgetWalletConnectV2";

export class BitgetController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.BITGET);
    this.wc = new WalletConnectV2(wcProjectId, {
      name: "Bitget",
      android: "https://bkcode.vip?",
      ios: "bitkeep://bkconnect?",
    });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "bitkeep" in window : true;
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
        key: base64.decode(pubkey),
      });
      wallets.set(
        chainId,
        new BitgetWalletConnectV2(
          this.id,
          this.wc,
          chainId,
          key,
          address,
          rpc,
          gasPrice,
          true // TODO: use sign mode direct when supported
        )
      );
    }
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.bitkeep && window.bitkeep.keplr;
    if (!ext) {
      throw new Error("Bitget extension is not installed");
    }
    await ext.enable(chains.map(({ chainId }) => chainId));
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      const { bech32Address, pubKey, isNanoLedger } = await ext.getKey(chainId);
      const key = new Secp256k1PubKey({
        key: pubKey,
      });
      wallets.set(
        chainId,
        new BitgetExtension(
          this.id,
          ext,
          chainId,
          key,
          bech32Address,
          rpc,
          gasPrice,
          isNanoLedger
        )
      );
    }
    return wallets;
  }

  protected registerAccountChangeHandlers() {
    onWindowEvent("keplr_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }
}
