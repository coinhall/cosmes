import "./polyfill.ts";

import { wallets } from "@cosmos-kit/keplr";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import "./index.css";

const WC_PROJECT_ID = "2b7d5a2da89dd74fed821d184acabf95";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChainProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      wallets={wallets} // supported wallets
      wrappedWithChakra={true}
      walletConnectOptions={{
        signClient: {
          projectId: WC_PROJECT_ID,
        },
      }}
    >
      <App />
    </ChainProvider>
  </React.StrictMode>
);
