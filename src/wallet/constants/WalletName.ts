/**
 * The unique identifier of the wallet.
 */
export const WalletName = {
  STATION: "station",
  KEPLR: "keplr",
  LEAP: "leap",
  COSMOSTATION: "cosmostation",
  METAMASK_INJECTIVE: "metamask-injective",
} as const;
export type WalletName = (typeof WalletName)[keyof typeof WalletName];
