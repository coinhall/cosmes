import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { GalaxyStationExtension } from "./GalaxyStationExtension";
import { GalaxyStationWalletConnectV2 } from "./GalaxyStationWalletConnectV2";

const COIN_TYPE_330_CHAINS = [
  "columbus-5",
  "phoenix-1",
  "octagon-1",
  "pisco-1",
];

export class GalaxyStationController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.GALAXYSTATION);
    this.wc = new WalletConnectV2(wcProjectId, {
      name: "Galaxy Station",
      android: "https://station.hexxagon.io/wcV2#Intent;package=io.hexxagon.station;scheme=galaxystation;end;",
      ios: "https://station.hexxagon.io/wcV2",
    });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "galaxyStation" in window : true;
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
        new GalaxyStationWalletConnectV2(
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
    const ext = window.galaxyStation?.keplr;
    if (!ext) {
      throw new Error("Galaxy Station extension is not installed");
    }
    // This method never throws on Galaxy Station
    await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
    for (const { chainId, rpc, gasPrice } of Object.values(chains)) {
      try {
        const { name, bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(
          ext.getKey(chainId)
        );
        const key = new Secp256k1PubKey({
          key: pubKey,
          chainId,
        });
        wallets.set(
          chainId,
          new GalaxyStationExtension(
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
      } catch (err) {
        if (err instanceof Error) {
          // The `getKey` method throws if the chain is not supported
          console.warn(`Failed to get public key for ${chainId}`, err);
          continue;
        }
        throw err; // Rethrow other stuff
      }
    }
    return wallets;
  }

  protected registerAccountChangeHandlers() {
    onWindowEvent("galaxy_station_wallet_change", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    onWindowEvent("galaxy_station_network_change", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
  }

  private async getPubKey(
    chainId: string,
    rpc: string,
    address: string
  ): Promise<Secp256k1PubKey> {
    const account = await getAccount(rpc, { address });
    const { pubKey } = toBaseAccount(account);
    if (!pubKey) {
      throw new Error("Unable to get pub key");
    }
    // TODO: handle other key types (?)
    return new Secp256k1PubKey({
      chainId,
      key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
    });
  }
}
