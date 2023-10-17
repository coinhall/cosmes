import { MnemonicWallet } from "cosmes/wallet";

async function main() {
  // Example usage for Osmosis chain
  const wallet = new MnemonicWallet({
    // TODO: replace with your mnemonic
    mnemonic:
      "witness snack faint milk gesture memory exhibit oak require mountain hammer crawl innocent day library drum youth result mutual remove capable hour front connect",
    bech32Prefix: "osmo",
    chainId: "osmosis-1",
    rpc: "https://rpc.osmosis.zone",
    gasPrice: {
      amount: "0.0025",
      denom: "uosmo",
    },
    coinType: 118, // optional (default: 118)
    index: 0, // optional (default: 0)
  });
  console.log("Address:", wallet.address); // prints the bech32 address

  // Sign an arbitrary message
  const { signature } = await wallet.signArbitrary("Hello from CosmES!");
  console.log("Signature:", signature);

  // Broadcast a transaction
  // const res = await wallet.broadcastTxSync( ... );
  // console.log("Tx result:", res);
}

main();
