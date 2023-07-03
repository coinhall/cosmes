export const CosmostationWcUri = {
  ANDROID:
    "intent://wc#Intent;package=wannabit.io.cosmostaion;scheme=cosmostation;end;",
  IOS: "cosmostation://wc",
} as const;
export type CosmostationWcUri =
  (typeof CosmostationWcUri)[keyof typeof CosmostationWcUri];

export const CosmostationWcV1Method = {
  GET_ACCOUNTS: "cosmostation_wc_accounts_v1",
  SIGN_AMINO: "cosmostation_wc_sign_tx_v1",
} as const;
export type CosmostationWcV1Method =
  (typeof CosmostationWcV1Method)[keyof typeof CosmostationWcV1Method];

export const CosmostationExtMethod = {
  REQUEST_ACCOUNT: "cos_requestAccount",
  SIGN_ARBITRARY: "cos_signMessage",
  SIGN_AMINO: "cos_signAmino",
  SEND_TX: "cos_sendTransaction",
} as const;
export type CosmostationExtMethod =
  (typeof CosmostationExtMethod)[keyof typeof CosmostationExtMethod];
