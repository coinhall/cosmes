export const KeplrWcV1Uri = {
  ANDROID:
    "intent://wcV1#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;",
  IOS: "keplrwallet://wcV1",
} as const;
export type KeplrWcV1Uri = (typeof KeplrWcV1Uri)[keyof typeof KeplrWcV1Uri];

export const KeplrWcV1Method = {
  ENABLE: "keplr_enable_wallet_connect_v1",
  GET_KEY: "keplr_get_key_wallet_connect_v1",
  SIGN_AMINO: "keplr_sign_amino_wallet_connect_v1",
} as const;
export type KeplrWcV1Method =
  (typeof KeplrWcV1Method)[keyof typeof KeplrWcV1Method];

export const KeplrWcV2Uri = {
  ANDROID:
    "intent://wcV2#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;",
  IOS: "keplrwallet://wcV2",
} as const;
export type KeplrWcV2Uri = (typeof KeplrWcV2Uri)[keyof typeof KeplrWcV2Uri];
