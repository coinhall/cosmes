import type { MetaMaskInpageProvider } from "@metamask/providers";

export type Ethereum = MetaMaskInpageProvider;

export type Window = {
  ethereum?: Ethereum | undefined;
};
