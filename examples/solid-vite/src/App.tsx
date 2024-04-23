import { Component, createSignal, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import { MsgSend } from "cosmes/client";
import {
  CompassController,
  ConnectedWallet,
  CosmostationController,
  KeplrController,
  LeapController,
  MetamaskInjectiveController,
  NinjiController,
  OWalletController,
  StationController,
  GalaxyStationController,
  UnsignedTx,
  WalletController,
  WalletName,
  WalletType,
} from "cosmes/wallet";

const WC_PROJECT_ID = "2b7d5a2da89dd74fed821d184acabf95";
const SIGN_ARBITRARY_MSG =
  "Hi from CosmeES! This is a test message just to prove that the wallet is working.";
const TX_MEMO = "signed via cosmes";

const CHAINS: Record<string, string> = {
  "osmosis-1": "Osmosis",
  "juno-1": "Juno",
  "kaiyo-1": "Kujira",
  "phoenix-1": "Terra",
  "columbus-5": "Terra Classic",
  "neutron-1": "Neutron",
  "migaloo-1": "Migaloo",
  "injective-1": "Injective",
  "pacific-1": "Sei",
  "dymension_1100-1": "Dymension",
  Oraichain: "Oraichain",
};
const WALLETS: Record<WalletName, string> = {
  [WalletName.KEPLR]: "Keplr",
  [WalletName.COSMOSTATION]: "Cosmostation",
  [WalletName.STATION]: "Terra Station",
  [WalletName.GALAXYSTATION]: "Galaxy Station",
  [WalletName.LEAP]: "Leap",
  [WalletName.COMPASS]: "Compass",
  [WalletName.METAMASK_INJECTIVE]: "MetaMask",
  [WalletName.NINJI]: "Ninji",
  [WalletName.OWALLET]: "OWallet",
};
const TYPES: Record<WalletType, string> = {
  [WalletType.EXTENSION]: "Extension",
  [WalletType.WALLETCONNECT]: "Wallet Connect",
};
const CONTROLLERS: Record<string, WalletController> = {
  [WalletName.STATION]: new StationController(),
  [WalletName.GALAXYSTATION]: new GalaxyStationController(),
  [WalletName.KEPLR]: new KeplrController(WC_PROJECT_ID),
  [WalletName.LEAP]: new LeapController(WC_PROJECT_ID),
  [WalletName.COMPASS]: new CompassController(),
  [WalletName.COSMOSTATION]: new CosmostationController(WC_PROJECT_ID),
  [WalletName.METAMASK_INJECTIVE]: new MetamaskInjectiveController(),
  [WalletName.NINJI]: new NinjiController(),
  [WalletName.OWALLET]: new OWalletController(),
};

function getRpc(chain: string): string {
  switch (chain) {
    case "osmosis-1":
      return "https://rpc.osmosis.zone";
    case "juno-1":
      return "https://juno-rpc.polkachu.com";
    case "kaiyo-1":
      return "https://kujira-rpc.polkachu.com";
    case "phoenix-1":
      return "https://terra-rpc.publicnode.com";
    case "columbus-5":
      return "https://terra-classic-rpc.publicnode.com";
    case "neutron-1":
      return "https://neutron-rpc.polkachu.com";
    case "migaloo-1":
      return "https://migaloo-rpc.polkachu.com";
    case "injective-1":
      return "https://injective-rpc.polkachu.com";
    case "pacific-1":
      return "https://rpc-sei-ia.cosmosia.notional.ventures";
    case "dymension_1100-1":
      return "https://rpc.dymension.nodestake.org";
    case "Oraichain":
      return "https://rpc.orai.io";
    default:
      throw new Error("Unknown chain");
  }
}

function getGasPrice(chain: string): { amount: string; denom: string } {
  switch (chain) {
    case "osmosis-1":
      return { amount: "0.0025", denom: getDenom(chain) };
    case "juno-1":
      return { amount: "0.001", denom: getDenom(chain) };
    case "kaiyo-1":
      return { amount: "0.00119", denom: getDenom(chain) };
    case "phoenix-1":
      return { amount: "0.015", denom: getDenom(chain) };
    case "columbus-5":
      return { amount: "28.325", denom: getDenom(chain) };
    case "neutron-1":
      return { amount: "0.01", denom: getDenom(chain) };
    case "migaloo-1":
      return { amount: "0.25", denom: getDenom(chain) };
    case "injective-1":
      return { amount: "500000000", denom: getDenom(chain) };
    case "pacific-1":
      return { amount: "0.1", denom: getDenom(chain) };
    case "dymension_1100-1":
      return { amount: "20000000000", denom: getDenom(chain) };
    case "Oraichain":
      return { amount: "0.003", denom: getDenom(chain) };
    default:
      throw new Error("Unknown chain");
  }
}

function getDenom(chain: string): string {
  switch (chain) {
    case "osmosis-1":
      return "uosmo";
    case "juno-1":
      return "ujuno";
    case "kaiyo-1":
      return "ukuji";
    case "phoenix-1":
    case "columbus-5":
      return "uluna";
    case "neutron-1":
      return "untrn";
    case "migaloo-1":
      return "uwhale";
    case "injective-1":
      return "inj";
    case "pacific-1":
      return "usei";
    case "dymension_1100-1":
      return "adym";
    case "Oraichain":
      return "orai";
    default:
      throw new Error("Unknown chain");
  }
}

const App: Component = () => {
  const [chain, setChain] = createSignal<string>("pacific-1");
  const [wallet, setWallet] = createSignal<WalletName>(WalletName.COMPASS);
  const [wallets, setWallets] = createStore<Record<string, ConnectedWallet>>(
    {}
  );
  const [type, setType] = createSignal<WalletType>(WalletType.EXTENSION);

  onMount(() => {
    for (const controller of Object.values(CONTROLLERS)) {
      // Register to diconnect event
      controller.onDisconnect((wallets) => {
        const chains = wallets.map((w) => w.chainId);
        console.log("Wallet disconnected", {
          wallet: controller.id,
          chains,
        });
        for (const chain of chains) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          setWallets(chain, undefined!);
        }
      });
      // Register to account change event
      controller.onAccountChange((wallets) => {
        // Reconnect the affected wallets
        const chains = wallets.map((w) => w.chainId);
        console.log("Wallet account changed", {
          wallet: controller.id,
          chains,
        });
        connect(wallets[0].type, chains);
      });
    }
  });

  async function connect(type: WalletType, chainIds: string[]) {
    try {
      const chainInfos = chainIds.map((chainId) => ({
        chainId,
        rpc: getRpc(chainId),
        gasPrice: getGasPrice(chainId),
      }));
      const res = await CONTROLLERS[wallet()].connect(type, chainInfos);
      setWallets({ ...wallets, ...Object.fromEntries(res) });
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  }

  function disconnect() {
    CONTROLLERS[wallet()].disconnect([chain()]);
  }

  async function signArbitrary() {
    const wallet = wallets[chain()];
    if (!wallet) {
      alert("Wallet not connected yet");
      return;
    }
    try {
      const res = await wallet.signArbitrary(SIGN_ARBITRARY_MSG);
      console.log(res);
      alert("Sign success! Check console logs for details.");
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  }

  async function broadcastTx() {
    const wallet = wallets[chain()];
    if (!wallet) {
      alert("Wallet not connected yet");
      return;
    }
    try {
      const tx: UnsignedTx = {
        msgs: [
          new MsgSend({
            fromAddress: wallet.address,
            toAddress: wallet.address,
            amount: [
              {
                denom: getDenom(chain()),
                amount: "1",
              },
            ],
          }),
        ],
        memo: TX_MEMO,
      };

      const fee = await wallet.estimateFee(tx);
      console.log("Tx fee:", fee);

      const txHash = await wallet.broadcastTx(tx, fee);
      console.log("Tx hash:", txHash);

      const { txResponse } = await wallet.pollTx(txHash);
      console.log("Tx response:", txResponse);

      alert(
        "Broadcast success!\n\nTx hash: " +
          txHash +
          "\n\nCheck console logs for details."
      );
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  }

  return (
    <div class="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center text-sm sm:text-base md:text-lg space-y-3 p-3">
      <select
        class="bg-gray-700 rounded p-2 text-gray-200"
        value={chain()}
        onChange={(e) => setChain(e.target.value)}
      >
        <For each={Object.keys(CHAINS)}>
          {(id) => <option value={id}>{CHAINS[id]}</option>}
        </For>
      </select>
      <div class="flex space-x-2">
        <select
          class="bg-gray-700 rounded p-2 text-gray-200"
          value={wallet()}
          onChange={(e) => setWallet(e.target.value as WalletName)}
        >
          <For each={Object.keys(WALLETS)}>
            {(wallet) => (
              <option value={wallet}>{WALLETS[wallet as WalletName]}</option>
            )}
          </For>
        </select>
        <select
          class="bg-gray-700 rounded p-2 text-gray-200"
          value={type()}
          onChange={(e) => setType(e.target.value as WalletType)}
        >
          <For each={Object.keys(TYPES)}>
            {(type) => (
              <option value={type}>{TYPES[type as WalletType]}</option>
            )}
          </For>
        </select>
      </div>

      <div class="flex space-x-2">
        <button
          class="bg-red-700 hover:bg-red-600 text-red-100 p-2 rounded"
          onClick={disconnect}
        >
          Disconnect
        </button>
        <button
          class="bg-green-700 hover:bg-green-600 text-green-100 p-2 rounded"
          onClick={() => connect(type(), [chain()])}
        >
          Connect
        </button>
      </div>

      <button
        class="bg-blue-800 hover:bg-blue-700 text-blue-100 p-2 rounded"
        onClick={signArbitrary}
      >
        Sign Arbitrary
      </button>

      <button
        class="bg-blue-800 hover:bg-blue-700 text-blue-100 p-2 rounded"
        onClick={broadcastTx}
      >
        Broadcast Tx
      </button>

      <div class="flex flex-col">
        <code>CONNECTED WALLETS</code>
        <For each={Object.values(wallets)}>
          {(wallet) => (
            <code>
              {wallet.address.slice(0, 10)}
              ...{wallet.address.slice(-5)} | {WALLETS[wallet.id]}
            </code>
          )}
        </For>
      </div>
    </div>
  );
};

export default App;
