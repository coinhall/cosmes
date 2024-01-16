import { Keplr } from "cosmes/registry";

// Type is similar to Keplr
export type Ninji = Keplr & {
  on: (event: string, callback: () => void) => void;
};

export type Window = {
  ninji?: Ninji | undefined;
};
