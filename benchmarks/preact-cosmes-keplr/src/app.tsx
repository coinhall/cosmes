import { useState } from "preact/hooks";

import { MsgSend } from "cosmes/client";
import {
  ConnectedWallet,
  KeplrController,
  UnsignedTx,
  WalletType,
} from "cosmes/wallet";

const WC_PROJECT_ID = "2b7d5a2da89dd74fed821d184acabf95";
const TX_MEMO = "signed via cosmes";
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

  async function broadcastTx() {
    if (!wallet) {
      alert("Please connect to Keplr first.");
      return;
    }
    try {
      const msgs = [
        new MsgSend({
          fromAddress: wallet.address,
          toAddress: wallet.address,
          amount: [
            {
              denom: "uosmo",
              amount: "1",
            },
          ],
        }),
      ];
      const { sequence, accountNumber } = await wallet.getAccount();
      const unsignedTx: UnsignedTx = {
        msgs,
        memo: TX_MEMO,
      };
      const fee = await wallet.estimateFee(unsignedTx, {
        sequence,
      });
      const txHash = await wallet.broadcastTx(unsignedTx, {
        sequence,
        accountNumber,
        fee,
      });
      const res = await wallet.pollTx(txHash);
      console.log(res);
      alert("Broadcast success!\n\nTx hash: " + res.txResponse.txhash);
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  }

  return (
    <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100 space-y-2">
      <div class="font-mono text-xs text-center">
        Address: {wallet?.address ?? "-"}
      </div>

      {wallet ? (
        <button
          class="py-1 px-3 rounded bg-red-600 text-red-50"
          onClick={onDisconnectClick}
        >
          Disconnect from Keplr
        </button>
      ) : (
        <>
          <button
            class="py-1 px-3 rounded bg-green-600 text-green-50"
            onClick={() => onConnectClick(WalletType.EXTENSION)}
          >
            Connect Keplr Extension
          </button>
          <button
            class="py-1 px-3 rounded bg-green-600 text-green-50"
            onClick={() => onConnectClick(WalletType.WALLETCONNECT)}
          >
            Connect Keplr WalletConnect
          </button>
        </>
      )}

      <button
        class="py-1 px-3 bg-blue-600 text-blue-50 rounded"
        onClick={broadcastTx}
      >
        Send self 1 uosmo
      </button>
    </div>
  );
}
