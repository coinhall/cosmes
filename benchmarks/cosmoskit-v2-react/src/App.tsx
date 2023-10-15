import { useChain } from "@cosmos-kit/react";

export function App() {
  const { connect, disconnect, address, isWalletConnected } =
    useChain("osmosis");

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100 space-y-2">
      <div className="font-mono text-xs text-center">
        Address: {address || "-"}
      </div>

      {isWalletConnected ? (
        <button
          className="py-1 px-3 rounded bg-red-600 text-red-50"
          onClick={disconnect}
        >
          Disconnect Wallet
        </button>
      ) : (
        <button
          className="py-1 px-3 rounded bg-green-600 text-green-50"
          onClick={connect}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
