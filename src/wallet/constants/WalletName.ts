/**
 * The unique identifier of the wallet.
 */
export const WalletName = {
  BITGET: "bitget",
  STATION: "station",
  KEPLR: "keplr",
  LEAP: "leap",
  COMPASS: "compass",
  COSMOSTATION: "cosmostation",
  METAMASK_INJECTIVE: "metamask-injective",
  NINJI: "ninji",
} as const;
export type WalletName = (typeof WalletName)[keyof typeof WalletName];
