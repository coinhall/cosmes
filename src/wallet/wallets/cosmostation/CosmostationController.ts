import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { CosmostationExtension } from "./CosmostationExtension";
import { CosmostationWalletConnectV2 } from "./CosmostationWalletConnectV2";

export class CosmostationController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.COSMOSTATION);
    this.wc = new WalletConnectV2(wcProjectId, {
      // https://github.com/cosmostation/cosmostation-wc-modal/blob/main/src/modal.tsx#L22-L34
      name: "Cosmostation",
      android:
        "intent://wc#Intent;package=wannabit.io.cosmostaion;scheme=cosmostation;end;",
      ios: "cosmostation://wc",
    });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "cosmostation" in window : true;
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
        new CosmostationWalletConnectV2(
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
    const ext = window.cosmostation?.providers.keplr;
    if (!ext) {
      throw new Error("Cosmostation extension is not installed");
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
        new CosmostationExtension(
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
    onWindowEvent("cosmostation_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }
}
