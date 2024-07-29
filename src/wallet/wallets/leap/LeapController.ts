import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { LeapExtension } from "./LeapExtension";
import { LeapWalletConnectV2 } from "./LeapWalletConnectV2";

export class LeapController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.LEAP);
    this.wc = new WalletConnectV2(wcProjectId, {
      name: "Leap",
      android:
        "leapcosmos://wcV2#Intent;package=io.leapwallet.cosmos;scheme=leapwallet;end;",
      ios: "leapcosmos://wcV2",
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
    await WalletError.wrap(
      this.wc.connect(chains.map(({ chainId }) => chainId))
    );
    for (let i = 0; i < chains.length; i++) {
      const { chainId, rpc, gasPrice } = chains[i];
      const { name, pubkey, address } = await WalletError.wrap(
        this.wc.getAccount(chainId)
      );
      const key = new Secp256k1PubKey({
        chainId,
        key: base64.decode(pubkey),
      });
      wallets.set(
        chainId,
        new LeapWalletConnectV2(
          this.id,
          name,
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
    const ext = window.leap;
    if (!ext) {
      throw new Error("Leap extension is not installed");
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
        new LeapExtension(
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
    onWindowEvent("leap_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }
}
