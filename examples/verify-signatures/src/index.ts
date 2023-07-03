import { verifyADR36Amino } from "@keplr-wallet/cosmos";
import { createHash } from "node:crypto";
import { ecdsaVerify } from "secp256k1";

/**
 * Returns true iff the signature is valid for the given data and public key.
 * Works for Keplr / Leap / Cosmostation.
 */
function verifyArbitraryKeplr(
  prefix: string,
  address: string,
  data: string,
  pubKey: string,
  signature: string
) {
  return verifyADR36Amino(
    prefix,
    address,
    data,
    Buffer.from(pubKey, "base64"),
    Buffer.from(signature, "base64")
  );
}

/**
 * Returns true iff the signature is valid for the given data and public key.
 * Works for Station (Extension & WalletConnect).
 */
function verifyArbitraryStation(
  data: string,
  pubKey: string,
  signature: string
) {
  return ecdsaVerify(
    Buffer.from(signature, "base64"),
    createHash("sha256").update(data).digest(),
    Buffer.from(pubKey, "base64")
  );
}

console.log(
  verifyArbitraryKeplr(
    // TODO: fill in chain prefix (eg. "osmo")
    "",
    // TODO: fill in address (eg. "osmo1...")
    "",
    // TODO: change data if necessary
    "Hi from Coinhall! This is a test message just to prove that the wallet is working.",
    // TODO: fill in base64 pubKey
    "",
    // TODO: fill in base64 signature
    ""
  ),
  verifyArbitraryStation(
    // TODO: change data if necessary
    "Hi from Coinhall! This is a test message just to prove that the wallet is working.",
    // TODO: fill in base64 pubKey
    "",
    // TODO: fill in base64 signature
    ""
  )
);
