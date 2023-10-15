import { hmac } from "@noble/hashes/hmac";
import { sha256 } from "@noble/hashes/sha256";
import * as secp256k1 from "@noble/secp256k1";
import { StdSignDoc } from "cosmes/registry";

import { serialiseSignDoc } from "./serialise";

/**
 * Signs the given `stdSignDoc` with the given `privateKey` using secp256k1, and
 * returns the signature bytes.
 */
export function signAmino(
  stdSignDoc: StdSignDoc,
  privateKey: Uint8Array
): Uint8Array {
  // Required polyfills for secp256k1.
  // See: https://github.com/paulmillr/noble-secp256k1?tab=readme-ov-file#usage
  secp256k1.etc.hmacSha256Sync = (k, ...m) =>
    hmac(sha256, k, secp256k1.etc.concatBytes(...m));

  return secp256k1
    .sign(sha256(serialiseSignDoc(stdSignDoc)), privateKey)
    .toCompactRawBytes();
}
