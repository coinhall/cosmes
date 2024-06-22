import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV1 } from "../../walletconnect/WalletConnectV1";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { GalaxyStationExtension } from "./GalaxyStationExtension";
import { GalaxyStationWalletConnectV1 } from "./GalaxyStationWalletConnectV1";

const COIN_TYPE_330_CHAINS = [
  "columbus-5",
  "phoenix-1",
  "octagon-1",
  "pisco-1",
];

export class GalaxyStationController extends WalletController {
  private readonly wc: WalletConnectV1;

  constructor() {
    super(WalletName.GALAXYSTATION);
    this.wc = new WalletConnectV1(
      "cosmes.wallet.galaxyStation.wcSession",
      {
        name: "Galaxy Station",
        android: "",
        ios: "",
        isStation: true,
      },
      {
        bridge: "https://walletconnect.terra.dev",
        signingMethods: [],
      }
    );
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "galaxyStation" in window : true;
  }

  protected async connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ) {
    for (const { chainId } of chains) {
      // Galaxy Station mobile's WallectConnect only supports these chains
      // TODO: update when Galaxy Station mobile supports more chains
      if (COIN_TYPE_330_CHAINS.includes(chainId)) {
        continue;
      }
      throw new Error(`${chainId} not supported`);
    }
    const wallets = new Map<T, ConnectedWallet>();
    const wc = await WalletError.wrap(this.wc.connect());
    // Galaxy Station mobile only returns 1 address for now
    // TODO: update when Galaxy Station mobile supports more chains
    const address = wc.accounts[0];
    for (let i = 0; i < chains.length; i++) {
      const { chainId, rpc, gasPrice } = chains[i];
      try {
        // Since Galaxy Station's WalletConnect doesn't support getting pub keys, we
        // need to query the account to get it. However, if the wallet does
        // not contain funds, the RPC will throw errors.
        const key = await WalletError.wrap(
          this.getPubKey(chainId, rpc, address)
        );
        wallets.set(
          chainId,
          new GalaxyStationWalletConnectV1(wc, chainId, key, address, rpc, gasPrice)
        );
      } catch (err) {
        // We simply log and ignore the error for now
        console.warn(err);
      }
    }
    this.wc.cacheSession(wc);
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
        const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(
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
    // Galaxy Station's WalletConnect v1 doesn't support account change events
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
