import { MnemonicWallet, verifyArbitrary } from "cosmes/wallet";

async function main() {
  // Create a mnemonic wallet to sign an arbitrary message
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
  });

  // Sign the arbitrary data
  const message = "Hello from CosmES!";
  const { signature, pubKey } = await wallet.signArbitrary(message);

  // Verify the signature of the arbitrary data
  const isValidSignature = verifyArbitrary({
    wallet: wallet.id,
    bech32Prefix: "osmo",
    data: message,
    pubKey,
    signature,
    type: "secp256k1",
  });

  console.log({
    pubKey,
    signature,
    isValidSignature,
  });
}

main();
