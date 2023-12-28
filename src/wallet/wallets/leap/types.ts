import { Keplr } from "cosmes/registry";

// Type is similar to Keplr
export type Leap = Keplr;

export type Window = {
  leap?: Leap | undefined;
};
