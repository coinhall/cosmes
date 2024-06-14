import { SignDoc, StdSignDoc } from "cosmes/registry";

import { MobileAppDetails } from "./QRCodeModal";
import { WalletConnectV2 } from "./WalletConnectV2";

/**
 * The data returned by the `cosmos_signAmino` method. `signed` is optional
 * because some wallets (like Cosmostation) may not return it.
 */
type WcSignAminoResponse = {
  signature: {
    signature: string;
  };
  signed?: StdSignDoc | undefined;
};
type SignAminoResponse = Required<WcSignAminoResponse>;

/**
 * The data returned by the `cosmos_signDirect` method. `signed` is optional
 * because some wallets (like Cosmostation) may not return it.
 */
type WcSignDirectResponse = {
  signature: {
    signature: string;
  };
  signed?: SignDoc | undefined;
};
type SignDirectResponse = Required<WcSignDirectResponse>;

const Method = {
  GET_ACCOUNTS: "cosmos_getAccounts",
  SIGN_AMINO: "cosmos_signAmino",
  SIGN_DIRECT: "cosmos_signDirect",
} as const;
type Method = (typeof Method)[keyof typeof Method];

export interface SignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
  readonly disableBalanceCheck?: boolean;
}

export class WalletConnectV2Keplr extends WalletConnectV2 {
  defaultOptions: {
    sign: { preferNoSetFee: boolean; preferNoSetMemo: boolean };
  };

  constructor(projectId: string, mobileAppDetails: MobileAppDetails) {
    super(projectId, mobileAppDetails);
    this.defaultOptions = {
      sign: { preferNoSetFee: true, preferNoSetMemo: true },
    };
  }

  public async signAminoKeplr(
    chainId: string,
    signerAddress: string,
    stdSignDoc: StdSignDoc,
    signOptions: SignOptions,
  ): Promise<SignAminoResponse> {
    const { signature, signed } = await this.request<WcSignAminoResponse>(
      chainId,
      Method.SIGN_AMINO,
      {
        signerAddress,
        signDoc: stdSignDoc,
        signOptions: signOptions,
      }
    );
    return {
      signature: signature,
      signed: signed ?? stdSignDoc, // simply return the original sign doc if `signed` is not returned
    };
  }

  public async signDirectKeplr(
    chainId: string,
    signerAddress: string,
    signDoc: SignDoc,
    signOptions: SignOptions,
  ): Promise<SignDirectResponse> {
    const { signature, signed } = await this.request<WcSignDirectResponse>(
      chainId,
      Method.SIGN_DIRECT,
      {
        signerAddress,
        signDoc,
        signOptions:signOptions
      }
    );
    return {
      signature: signature,
      signed: signed ?? signDoc, // simply return the original sign doc if `signed` is not returned
    };
  }
}
