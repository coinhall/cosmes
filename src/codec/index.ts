// Re-export @scure/base for their codecs
export * from "@scure/base";

export { resolveBech32Address, translateEthToBech32Address } from "./address";
export { ethhex } from "./ethhex";
export { resolveKeyPair } from "./key";
export { hashEthArbitraryMessage, serialiseSignDoc } from "./serialise";
export { recoverPubKeyFromEthSignature, signAmino, signDirect } from "./sign";
