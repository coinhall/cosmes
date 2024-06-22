import { Keplr } from "cosmes/registry";

export type Window = {
  galaxyStation?: GalaxyStation | undefined;
};

/**
 * A subset of the Galaxy Station extension API that is injected into the `window` object.
 *
 */
export type GalaxyStation = {
  keplr?: Keplr | undefined;
  connect: () => Promise<ConnectResponse>;
  getPublicKey: () => Promise<GetPubKeyResponse>;
  signBytes(bytes: string, purgeQueue?: boolean): Promise<SignBytesResponse>;
  post: (tx: GalaxyStationTx, purgeQueue?: boolean) => Promise<PostResponse>;
  sign: (tx: GalaxyStationTx, purgeQueue?: boolean) => Promise<SignResponse>;
};

export type GalaxyStationTx = {
  chainID: string;
  msgs: string[];
  fee?: string;
  memo?: string;
};

export type ConnectResponse = {
  addresses: Record<string, string>;
  /**
   * Maps the coin type to the base64 encoded public key.
   * Is `undefined` for legacy versions of the extension.
   */
  pubkey?:
    | {
        "60": string;
        "118": string;
        "330": string;
      }
    | undefined;
};

export type GetPubKeyResponse = {
  addresses: Record<string, string>;
  /**
   * Maps the coin type to the base64 encoded public key.
   * Is `undefined` for legacy versions of the extension.
   */
  pubkey?:
    | {
        "118": string;
        "330": string;
      }
    | undefined;
};

export type SignBytesResponse = {
  public_key: string;
  signature: string;
  recid: number;
};

export type PostResponse = {
  code?: number | undefined;
  raw_log: string;
  txhash: string;
};

// Unnecessary fields are omitted for brevity
export type SignResponse = {
  auth_info: {
    fee: {
      amount: {
        amount: string;
        denom: string;
      }[];
      gas_limit: string;
      granter: string;
      payer: string;
    };
    signer_infos: {
      mode_info: {
        single: {
          mode: string;
        };
      };
    }[];
  };
  signatures: string[];
};
