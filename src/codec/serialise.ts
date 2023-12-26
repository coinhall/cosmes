import { keccak_256 } from "@noble/hashes/sha3";
import { utf8 } from "@scure/base";
import { StdSignDoc } from "cosmes/registry";

/**
 * Escapes <,>,& in string.
 * Golang's json marshaller escapes <,>,& by default.
 * However, because JS doesn't do that by default, to match the sign doc with cosmos-sdk,
 * we should escape <,>,& in string manually.
 * @param str
 */
function escapeHtml(str: string): string {
  return str
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function sortObjectByKey<T>(obj: T): T {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortObjectByKey) as T;
  }
  const sortedKeys = Object.keys(obj).sort();
  const result: Record<string, unknown> = {};
  sortedKeys.forEach((key) => {
    result[key] = sortObjectByKey((obj as Record<string, unknown>)[key]);
  });
  return result as T;
}

/**
 * Serialises the given sign doc to a `Uint8Array` in a deterministic manner.
 */
export function serialiseSignDoc(doc: StdSignDoc): Uint8Array {
  return utf8.decode(escapeHtml(JSON.stringify(sortObjectByKey(doc))));
}

/**
 * Returns the EIP191 digest of the given `message` bytes.
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
