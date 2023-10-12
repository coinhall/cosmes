// Re-export @scure/base for their codecs
export * from "@scure/base";

export { resolveBech32Address } from "./address";
export { resolveKeyPair } from "./key";
export { serialiseSignDoc } from "./serialise";
export { sign } from "./sign";

/**
 * Converts a valid hex string to its `Uint8Array` representation.
 */
export function fromHexToUint8Array(string: string): Uint8Array {
  // https://stackoverflow.com/questions/38987784/how-to-convert-a-hexadecimal-string-to-uint8array-and-back-in-javascript
  return Uint8Array.from(string.match(/.{1,2}/g) ?? [], (b) => parseInt(b, 16));
}

/**
 * Converts a `Uint8Array` to its hex string representation.
 */
export function fromUint8ArrayToHex(array: Uint8Array): string {
  // https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
  return array.reduce((a, b) => a + b.toString(16).padStart(2, "0"), "");
}

/**
 * Converts a `Uint8Array` to its base64 string representation.
 */
export function fromUint8ArrayToBase64(array: Uint8Array): string {
  return btoa(String.fromCharCode(...array));
}

/**
 * Converts a valid base64 string to its `Uint8Array` representation.
 * Throws if `string` is not a valid base64 string.
 */
export function fromBase64ToUint8Array(string: string): Uint8Array {
  // https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer
  return Uint8Array.from(atob(string), (c) => c.charCodeAt(0));
}

/**
 * Converts a UTF-8 string to its `Uint8Array` representation.
 */
export function fromStringToUint8Array(string: string): Uint8Array {
  return new TextEncoder().encode(string);
}

/**
 * Converts a `Uint8Array` to its UTF-8 string representation.
 */
export function fromUint8ArrayToString(array: Uint8Array): string {
  return new TextDecoder().decode(array);
}

/**
 * Converts a UTF-8 string to its base64 string representation. Unlike `btoa`,
 * this function supports UTF-8 characters.
 */
export function fromStringToBase64(string: string): string {
  return fromUint8ArrayToBase64(fromStringToUint8Array(string));
}

/**
 * Converts a base64 string to its UTF-8 string representation. Unlike `atob`,
 * this function supports UTF-8 characters.
 */
export function fromBase64ToString(string: string): string {
  return fromUint8ArrayToString(fromBase64ToUint8Array(string));
}
