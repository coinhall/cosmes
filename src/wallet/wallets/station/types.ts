export type Window = {
  isStationExtensionAvailable: boolean;
};

type ErrorResponse = {
  code: number;
  message: string;
};

export type ConnectResponse = {
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
  success: boolean;
  result: {
    public_key: string;
    signature: string;
    recid: number;
  };
  error?: ErrorResponse | undefined;
};

export type PostResponse = {
  success: boolean;
  result: {
    code?: number | undefined;
    raw_log: string;
    txhash: string;
  };
  error?: ErrorResponse | undefined;
};
