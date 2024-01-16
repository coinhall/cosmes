import {
  base64,
  utf8,
  verifyADR36,
  verifyECDSA,
  verifyEIP191,
} from "cosmes/codec";

import { WalletName } from "../constants/WalletName";

type VerifyArbitraryParams = {
  /** The identifier of the wallet which created the signature */
  wallet: WalletName;
  /** The base64 encoded public key which created the signature */
  pubKey: string;
  /** The bech32 account address prefix of the signer */
  bech32Prefix: string;
  /** The utf-8 encoded arbitrary string that was signed */
  data: string;
  /** The base64 encoded string of the signature */
  signature: string;
  /** The type of the signature */
  type?: "secp256k1" | "ethsecp256k1";
};

/**
 * Verifies the signature output of a valid call to `ConnectedWallet.signArbitrary`.
 * Returns `true` if and only if the signature is valid.
 *
 * @param wallet The identifier of the wallet which created the signature
 * @param pubKey The base64 encoded public key which created the signature
 * @param bech32Prefix The bech32 account address prefix of the signer
 * @param data The utf-8 encoded arbitrary string that was signed
 * @param signature The base64 encoded string of the signature
 * @param type The type of the signature (default: `secp256k1`)
 */
export function verifyArbitrary({
  wallet,
  pubKey,
  bech32Prefix,
  data,
  signature,
  type = "secp256k1",
}: VerifyArbitraryParams): boolean {
  const params = {
    wallet,
    pubKey: base64.decode(pubKey),
    bech32Prefix,
    data: utf8.decode(data),
    signature: base64.decode(signature),
    type,
  };
  try {
    switch (wallet) {
      case WalletName.STATION:
        return verifyECDSA(params);
      case WalletName.COMPASS:
      case WalletName.COSMOSTATION:
      case WalletName.KEPLR:
      case WalletName.LEAP:
      case WalletName.NINJI:
        return verifyADR36(params);
      case WalletName.METAMASK_INJECTIVE:
        return verifyEIP191(params);
    }
  } catch (err) {
    return false;
  }
}
