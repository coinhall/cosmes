import { ripemd160 } from "@noble/hashes/ripemd160";
import { sha256 } from "@noble/hashes/sha256";
import { base64, bech32 } from "@scure/base";

/**
 * Resolves the bech32 address from the given `publicKey` and `prefix`.
 * @param publicKey Must be either a base64 encoded string or a `Uint8Array`.
 */
export function resolveBech32Address(
  publicKey: string | Uint8Array,
  prefix: string
): string {
  const bytes =
    typeof publicKey === "string" ? base64.decode(publicKey) : publicKey;
  return bech32.encode(prefix, bech32.toWords(ripemd160(sha256(bytes))));
}
