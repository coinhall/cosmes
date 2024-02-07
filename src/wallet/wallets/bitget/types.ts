import { Keplr } from "cosmes/registry";

// Type is similar to Keplr
export type Bitget = Keplr;

export type Window = {
  bitkeep?:
    | {
        keplr: Bitget
      }
    | undefined;
};
