import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { CosmostationExtension } from "./CosmostationExtension";
import { CosmostationWalletConnectV2 } from "./CosmostationWalletConnectV2";
import { CosmostationExtMethod, CosmostationWcUri } from "./constants";

export class CosmostationController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.COSMOSTATION);
    this.wc = new WalletConnectV2(wcProjectId, {
      // https://github.com/cosmostation/cosmostation-wc-modal/blob/main/src/modal.tsx#L22-L34
      name: "Cosmostation",
      android: CosmostationWcUri.ANDROID,
      ios: CosmostationWcUri.IOS,
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
    await this.wc.connect(chains.map(({ chainId }) => chainId));
    for (let i = 0; i < chains.length; i++) {
      const { chainId, rpc, gasPrice } = chains[i];
      const { pubkey, address } = await this.wc.getAccount(chainId);
      const key = new Secp256k1PubKey({
        key: base64.decode(pubkey),
      });
      wallets.set(
        chainId,
        new CosmostationWalletConnectV2(
          this.wc,
          chainId,
          key,
          address,
          rpc,
          gasPrice
        )
      );
    }
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.cosmostation;
    if (!ext) {
      throw new Error("Cosmostation extension is not installed");
    }
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      // https://docs.cosmostation.io/integration-extension/cosmos/accounts#vanilla-code-1
      const res = await window.cosmostation.cosmos.request({
        method: CosmostationExtMethod.REQUEST_ACCOUNT,
        params: { chainName: chainId },
      });
      const key = new Secp256k1PubKey({
        key: res.publicKey,
      });
      wallets.set(
        chainId,
        new CosmostationExtension(ext, chainId, key, res.address, rpc, gasPrice)
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
