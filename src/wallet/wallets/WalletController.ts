import type { PlainMessage } from "@bufbuild/protobuf";
import type { CosmosBaseV1beta1Coin as Coin } from "cosmes/protobufs";

import type { WalletName } from "../constants/WalletName";
import { WalletType } from "../constants/WalletType";
import { WalletConnectV1 } from "../walletconnect/WalletConnectV1";
import { WalletConnectV2 } from "../walletconnect/WalletConnectV2";
import type { ConnectedWallet } from "./ConnectedWallet";

/**
 * Represents a chain that the wallet can connect to.
 */
export type ChainInfo<T extends string> = {
  chainId: T;
  rpc: string;
  gasPrice: PlainMessage<Coin>;
};

/**
 * Controls initial connection to the wallet, and instantiates the
 * various `ConnectedWallet` instances.
 */
export abstract class WalletController {
  /** The identifier of this wallet. */
  public readonly id: WalletName;
  /** Map of chain ID to connected wallets. */
  public readonly connectedWallets: Map<string, ConnectedWallet>;
  private readonly onDisconnectCbs: Set<(chainIds: string[]) => unknown>;
  private isWcOnDisconnectRegistered: boolean;

  constructor(id: WalletName) {
    this.id = id;
    this.connectedWallets = new Map();
    this.onDisconnectCbs = new Set();
    this.isWcOnDisconnectRegistered = false;
  }

  /**
   * Returns `true` iff the wallet is installed.
   */
  public abstract isInstalled(type: WalletType): Promise<boolean>;

  /**
   * Connects to the wallet and returns a map of `ConnectedWallet` instances.
   * The keys of the map are the chain IDs.
   */
  public async connect<T extends string>(
    type: WalletType,
    chains: ChainInfo<T>[]
  ): Promise<Map<T, ConnectedWallet>> {
    if (chains.length === 0) {
      return new Map();
    }
    let connectedWallets: Map<T, ConnectedWallet>;
    if (type === WalletType.EXTENSION) {
      connectedWallets = await this.connectExtension(chains);
    } else {
      const { wallets, wc } = await this.connectWalletConnect(chains);
      if (!this.isWcOnDisconnectRegistered) {
        // On WalletConnect session disconnect, remove all WalletConnect wallets
        this.isWcOnDisconnectRegistered = true;
        wc.onDisconnect(() => {
          this.disconnect(
            Array.from(this.connectedWallets.keys()).filter(
              (id) =>
                this.connectedWallets.get(id)?.type === WalletType.WALLETCONNECT
            )
          );
        });
      }
      connectedWallets = wallets;
    }
    for (const [key, value] of connectedWallets) {
      this.connectedWallets.set(key, value);
    }
    return connectedWallets;
  }

  /**
   * Disconnects the wallet connected to the given `chainIds`.
   */
  public disconnect(chainIds: string[]) {
    const callbackIds = chainIds.filter((id) => this.connectedWallets.has(id));
    if (callbackIds.length === 0) {
      return;
    }
    for (const id of callbackIds) {
      this.connectedWallets.delete(id);
    }
    for (const cb of this.onDisconnectCbs) {
      cb(callbackIds);
    }
  }

  /**
   * Registers a callback to be called when the wallet is disconnected.
   * Returns an `unsubscribe` function that should be called after the
   * callback is no longer needed.
   *
   * ```ts
   * const unsubscribe = walletController.onDisconnect((chainIds) => {
   *   // do something with the chain IDs that were disconnected
   *   console.log(chainIds);
   *   // unsubscribe from this callback (if necessary)
   *   unsubsribe();
   * });
   * ```
   */
  public onDisconnect(cb: (chainIds: string[]) => unknown): () => void {
    this.onDisconnectCbs.add(cb);
    return () => this.onDisconnectCbs.delete(cb);
  }

  protected abstract connectExtension<T extends string>(
    chains: ChainInfo<T>[]
  ): Promise<Map<T, ConnectedWallet>>;

  protected abstract connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ): Promise<{
    wallets: Map<T, ConnectedWallet>;
    wc: WalletConnectV1 | WalletConnectV2;
  }>;
}
