/**
 * The unique identifier of the wallet.
 */
export const WalletName = {
  STATION: "station",
  KEPLR: "keplr",
  LEAP: "leap",
  COSMOSTATION: "cosmostation",
} as const;
export type WalletName = (typeof WalletName)[keyof typeof WalletName];
