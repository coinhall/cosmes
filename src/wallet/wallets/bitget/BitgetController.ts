import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { BitgetExtension } from "./BitgetExtension";
// import { BitgetWalletConnectV2 } from "./BitgetWalletConnectV2";

export class BitgetController extends WalletController {
  // private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.BITGET);
    // this.wc = new WalletConnectV2(wcProjectId, {
    //   // https://github.com/chainapsis/keplr-wallet/blob/master/packages/wc-qrcode-modal/src/modal.tsx#L61-L75
    //   name: "Bitget",
    //   android:
    //     "intent://wcV2#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;",
    //   ios: "keplrwallet://wcV2",
    // });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "bitkeep" in window : true;
  }

  protected async connectWalletConnect<T extends string>(
    _chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV2;
  }> {
    // Compass does not support WC yet
    throw new Error("WalletConnect not supported");
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
    // this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }
}
