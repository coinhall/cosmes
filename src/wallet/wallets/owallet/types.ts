import { Keplr } from "cosmes/registry";

// Type is similar to Keplr
export type OWallet = Keplr & {
  isOwallet: true;
};

export type Window = {
  owallet?: OWallet | undefined;
};
