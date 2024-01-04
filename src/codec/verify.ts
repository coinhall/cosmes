import { sha256 } from "@noble/hashes/sha256";
import * as secp256k1 from "@noble/secp256k1";
import { base64 } from "@scure/base";

import { resolveBech32Address } from "./address";
import { serialiseSignDoc } from "./serialise";
import { recoverPubKeyFromEthSignature } from "./sign";

type VerifyArbitraryParams = {
  /** The public key which created the signature */
  pubKey: Uint8Array;
  /** The bech32 account address prefix of the signer */
  bech32Prefix: string;
  /** The arbitrary bytes that was signed */
  data: Uint8Array;
  /** The signature bytes */
  signature: Uint8Array;
};

export function verifyECDSA({
  pubKey,
  data,
  signature,
}: Omit<VerifyArbitraryParams, "bech32Prefix">): boolean {
  return secp256k1.verify(signature, sha256(data), pubKey);
}

export function verifyADR36({
  pubKey,
  bech32Prefix,
  data,
  signature,
}: VerifyArbitraryParams): boolean {
  const msg = serialiseSignDoc({
    chain_id: "",
    account_number: "0",
    sequence: "0",
    fee: {
      gas: "0",
      amount: [],
    },
    msgs: [
      {
        type: "sign/MsgSignData",
        value: {
          signer: resolveBech32Address(pubKey, bech32Prefix),
          data: base64.encode(data),
        },
      },
    ],
    memo: "",
  });
  return verifyECDSA({
    pubKey,
    data: msg,
    signature,
  });
}

export function verifyEIP191({
  pubKey,
  data,
  signature,
}: Omit<VerifyArbitraryParams, "bech32Prefix">): boolean {
  const recoveredPubKey = recoverPubKeyFromEthSignature(data, signature);
  return (
    pubKey.length === recoveredPubKey.length &&
    pubKey.every((v, i) => v === recoveredPubKey[i])
  );
}
