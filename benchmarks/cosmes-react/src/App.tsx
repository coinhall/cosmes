import { ConnectedWallet, KeplrController, WalletType } from "cosmes/wallet";
import { useState } from "react";

const WC_PROJECT_ID = "2b7d5a2da89dd74fed821d184acabf95";
const OSMOSIS_CHAIN_INFO = {
  chainId: "osmosis-1",
  rpc: "https://rpc.osmosis.zone",
  gasPrice: { amount: "0.0025", denom: "uosmo" },
} as const;

const Keplr = new KeplrController(WC_PROJECT_ID);

export function App() {
  const [wallet, setWallet] = useState<ConnectedWallet | null>(null);

  async function onConnectClick(type: WalletType) {
    try {
      const res = await Keplr.connect(type, [OSMOSIS_CHAIN_INFO]);
      setWallet(res.get("osmosis-1") ?? null);
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  }

  async function onDisconnectClick() {
    Keplr.disconnect(["osmosis-1"]);
    setWallet(null);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100 space-y-2">
      <div className="font-mono text-xs text-center">
        Address: {wallet?.address ?? "-"}
      </div>

      {wallet ? (
        <button
          className="py-1 px-3 rounded bg-red-600 text-red-50"
          onClick={onDisconnectClick}
        >
          Disconnect from Keplr
        </button>
      ) : (
        <>
          <button
            className="py-1 px-3 rounded bg-green-600 text-green-50"
            onClick={() => onConnectClick(WalletType.EXTENSION)}
          >
            Connect Keplr Extension
          </button>
          <button
            className="py-1 px-3 rounded bg-green-600 text-green-50"
            onClick={() => onConnectClick(WalletType.WALLETCONNECT)}
          >
            Connect Keplr WalletConnect
          </button>
        </>
      )}
    </div>
  );
}
