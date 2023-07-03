export const LeapWcUri = {
  ANDROID:
    "intent://wcV2#Intent;package=io.leapwallet.cosmos;scheme=leapwallet;end;",
  IOS: "leapcosmos://wcV2",
} as const;
export type LeapWcUri = (typeof LeapWcUri)[keyof typeof LeapWcUri];
