import { hmac } from "@noble/hashes/hmac";
import { sha256 } from "@noble/hashes/sha256";
import { keccak_256 } from "@noble/hashes/sha3";
import * as secp256k1 from "@noble/secp256k1";
import { utf8 } from "@scure/base";
import { CosmosTxV1beta1SignDoc as SignDoc } from "cosmes/protobufs";
import { StdSignDoc } from "cosmes/registry";

import { serialiseSignDoc } from "./serialise";

function sign(bytes: Uint8Array, privateKey: Uint8Array): Uint8Array {
  // Required polyfills for secp256k1 that must be called before any sign ops.
  // See: https://github.com/paulmillr/noble-secp256k1?tab=readme-ov-file#usage
  secp256k1.etc.hmacSha256Sync = (k, ...m) =>
    hmac(sha256, k, secp256k1.etc.concatBytes(...m));

  return secp256k1.sign(sha256(bytes), privateKey).toCompactRawBytes();
}

/**
 * Signs the given amino-encoded `stdSignDoc` with the given `privateKey` using
 * secp256k1, and returns the signature bytes.
 */
export function signAmino(
  stdSignDoc: StdSignDoc,
  privateKey: Uint8Array
): Uint8Array {
  return sign(serialiseSignDoc(stdSignDoc), privateKey);
}

/**
 * Signs the given proto-encoded `signDoc` with the given `privateKey` using
 * secp256k1, and returns the signature bytes.
 */
export function signDirect(
  signDoc: SignDoc,
  privateKey: Uint8Array
): Uint8Array {
  return sign(signDoc.toBinary(), privateKey);
}

/**
 * Hashes and returns the digest of the given EIP191 `message` bytes.
 */
export function hashEthArbitraryMessage(message: Uint8Array): Uint8Array {
  return keccak_256(
    Uint8Array.from([
      ...utf8.decode("\x19Ethereum Signed Message:\n"),
      ...utf8.decode(message.length.toString()),
      ...message,
    ])
  );
}

/**
 * Recovers and returns the secp256k1 public key of the signer given the arbitrary
 * `message` and `signature` that was signed using EIP191.
 */
export function recoverPubKeyFromEthSignature(
  message: Uint8Array,
  signature: Uint8Array
): Uint8Array {
  if (signature.length !== 65) {
    throw new Error("Invalid signature");
  }
  const digest = hashEthArbitraryMessage(message);
  const secpSignature = secp256k1.Signature.fromCompact(
    Uint8Array.from([...signature.slice(0, 32), ...signature.slice(32, 64)])
  ).addRecoveryBit(1);
  return secpSignature.recoverPublicKey(digest).toRawBytes(true);
}
