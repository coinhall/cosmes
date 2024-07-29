import { Secp256k1PubKey } from "cosmes/client";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { CompassExtension } from "./CompassExtension";

export class CompassController extends WalletController {
  constructor() {
    super(WalletName.COMPASS);
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "compass" in window : false;
  }

  protected async connectWalletConnect<T extends string>(
    _chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV1 | WalletConnectV2;
  }> {
    // Compass does not support WC yet
    throw new Error("WalletConnect not supported");
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.compass;
    if (!ext) {
      throw new Error("Compass extension is not installed");
    }
    await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      const { name, bech32Address, pubKey, isNanoLedger } =
        await WalletError.wrap(ext.getKey(chainId));
      const key = new Secp256k1PubKey({
        chainId,
        key: pubKey,
      });
      wallets.set(
        chainId,
        new CompassExtension(
          this.id,
          name,
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
    /**
     * ! IMPORTANT !
     *
     * Since Leap also uses the same event key, this causes issues when a user
     * has both leap and compass wallets connected simultaneously. For example,
     * a change in Leap's keystore will trigger Compass to emit this event as
     * well, leading to a race condition when `changeAccount` is called.
     *
     * The Compass team has been notified to possibly change this event emitted
     * to `compass_keystorechange` instead.
     */
    onWindowEvent("leap_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
  }
}
