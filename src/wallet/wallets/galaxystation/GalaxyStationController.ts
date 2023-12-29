import { Secp256k1PubKey, getAccount, toBaseAccount } from "cosmes/client";
import { base64 } from "cosmes/codec";
import { CosmosCryptoSecp256k1PubKey } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { GalaxyStationExtension } from "./GalaxyStationExtension";
import { WalletConnectV2 } from "cosmes/wallet/walletconnect/WalletConnectV2";

const TERRA_CLASSIC_CHAIN_ID = "columbus-5";
const TERRA_CHAIN_ID = "phoenix-1";
const TERRA_CHAINS = [TERRA_CLASSIC_CHAIN_ID, TERRA_CHAIN_ID];

export class GalaxyStationController extends WalletController {
  constructor() {
    super(WalletName.GALAXYSTATION);
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "galaxyStation" in window : true;
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.galaxyStation;
    if (!ext) {
      throw new Error("Station extension is not installed");
    }
    const { addresses, pubkey } = await ext.connect();
    // Station will only return one or the other, but not both
    // so we simply set the other one manually
    addresses[TERRA_CLASSIC_CHAIN_ID] ??= addresses[TERRA_CHAIN_ID];
    addresses[TERRA_CHAIN_ID] ??= addresses[TERRA_CLASSIC_CHAIN_ID];
    for (const { chainId, rpc, gasPrice } of chains) {
      const address = addresses[chainId];
      if (address == null) {
        throw new Error(`${chainId} not supported`);
      }
      const coinType = TERRA_CHAINS.includes(chainId) ? "330" : "118";
      const key = pubkey
        ? new Secp256k1PubKey({ key: base64.decode(pubkey[coinType]) })
        : // Legacy support for older versions of Station that don't return pubkey
          await this.getPubKey(rpc, address);
      wallets.set(
        chainId,
        new GalaxyStationExtension(ext, chainId, key, address, rpc, gasPrice)
      );
    }
    return wallets;
  }

  protected async connectWalletConnect<T extends string>(
    _chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV2;
  }> {
    // Galaxy Station does not support WC yet
    throw new Error("WalletConnect not supported");
  }

  protected registerAccountChangeHandlers() {
    onWindowEvent("galaxystation_wallet_change", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
    // Station's WalletConnect v1 doesn't support account change events
  }

  private async getPubKey(
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
      key: CosmosCryptoSecp256k1PubKey.fromBinary(pubKey.value).key,
    });
  }
}
