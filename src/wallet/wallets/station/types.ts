import { Keplr } from "cosmes/registry";

export type Window = {
  station?: Station | undefined;
};

/**
 * A subset of the Station extension API that is injected into the `window` object.
 *
 * @see https://github.com/terra-money/wallet-kit/blob/79600bb096d64754160909871dfdf89944120ce8/src/%40terra-money/station-connector/index.ts#L66
 */
export type Station = {
  keplr?: Keplr | undefined;
  connect: () => Promise<ConnectResponse>;
  getPublicKey: () => Promise<GetPubKeyResponse>;
  signBytes(bytes: string, purgeQueue?: boolean): Promise<SignBytesResponse>;
  post: (tx: StationTx, purgeQueue?: boolean) => Promise<PostResponse>;
  sign: (tx: StationTx, purgeQueue?: boolean) => Promise<SignResponse>;
};

export type StationTx = {
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
