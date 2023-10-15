import { StdSignDoc } from "cosmes/registry";

/**
 * Adapted from https://github.com/cosmostation/cosmostation-chrome-extension-client/blob/main/src/types/d.ts/window.d.ts
 */
export type Cosmostation = {
  ethereum: {
    request: (message: { method: string; params?: unknown }) => Promise<any>;
    on: (eventName: string, eventHandler: (event?: unknown) => void) => unknown;
    off: (handler: unknown) => void;
    sendAsync: () => null;
  };
  cosmos: {
    request: (message: { method: string; params?: unknown }) => Promise<any>;
    on: (eventName: string, eventHandler: (event?: unknown) => void) => unknown;
    off: (handler: unknown) => void;
  };
  aptos: {
    request: (message: { method: string; params?: unknown }) => Promise<any>;
    on: (eventName: string, eventHandler: (event?: any) => void) => void;
    off: (eventName: string, eventHandler: (event?: any) => void) => void;
  };
  tendermint: {
    request: (message: { method: string; params?: unknown }) => Promise<any>;
    on: (eventName: string, eventHandler: (event?: unknown) => void) => unknown;
    off: (handler: unknown) => void;
  };
};

export type Window = {
  cosmostation: Cosmostation;
};

export type ExtSignArbitraryResponse = {
  pub_key: {
    type: string;
    value: string;
  };
  signature: string;
};

export type SignAminoResponse = {
  signature: string;
  signed_doc: StdSignDoc;
};

export type SendTransactionResponse = {
  tx_response: {
    txhash: string;
  };
};

export type WcSignAminoResponse = {
  signature: {
    signature: string;
  };
}[];
