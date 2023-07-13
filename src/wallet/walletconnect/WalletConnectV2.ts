import SignClient from "@walletconnect/sign-client";
import debounce from "lodash/debounce";

import { StdSignDoc } from "@keplr-wallet/types";
import { isAndroid, isMobile } from "../utils/os";
import { MobileAppDetails, QRCodeModal } from "./QRCodeModal";

/** The JSON data stored in `localStorage` to recover previous sessions. */
type StorageSession = {
  /** The WalletConnect V2 topic. */
  topic: string;
  /** Non-namespaced chain IDs (eg. `osmosis-1`). */
  chainIds: string[];
};

type GetAccountResponse = {
  address: string;
  algo: string;
  pubkey: string;
};

type SignAminoResponse =
  | {
      // Keplr
      signature: {
        signature: string;
      };
    }
  | {
      // Cosmostation
      signature: string;
    };

const Method = {
  GET_ACCOUNTS: "cosmos_getAccounts",
  SIGN_AMINO: "cosmos_signAmino",
  SIGN_DIRECT: "cosmos_signDirect",
} as const;
type Method = (typeof Method)[keyof typeof Method];

const Event = {
  CHAIN_CHANGED: "chainChanged",
  ACCOUNTS_CHANGED: "accountsChanged",
} as const;
type Event = (typeof Event)[keyof typeof Event];

export class WalletConnectV2 {
  private readonly projectId: string;
  private readonly mobileAppDetails: MobileAppDetails;
  private readonly sessionStorageKey: string;
  private readonly onDisconnectCbs: Set<() => unknown>;
  private readonly onAccountChangeCbs: Set<() => unknown>;
  private signClient: SignClient | null;

  constructor(projectId: string, mobileAppDetails: MobileAppDetails) {
    this.projectId = projectId;
    this.mobileAppDetails = mobileAppDetails;
    this.sessionStorageKey = `cosmes.wallet.${mobileAppDetails.name.toLowerCase()}.wcSession`;
    this.onDisconnectCbs = new Set();
    this.onAccountChangeCbs = new Set();
    this.signClient = null;
  }

  public async connect(chainIds: string[]): Promise<void> {
    // Initialise the sign client and event listeners if they don't already exist
    if (!this.signClient) {
      this.signClient = await SignClient.init({
        projectId: this.projectId,
      });
      // Disconnect if the session is disconnected or expired
      this.signClient.on("session_delete", ({ topic }) =>
        this.disconnect(topic)
      );
      this.signClient.on("session_expire", ({ topic }) =>
        this.disconnect(topic)
      );
      // Handle the `accountsChanged` event
      const handleAccountChange = debounce(
        // Handler is debounced as the `accountsChanged` event is fired once for
        // each connected chain, but we only want to trigger the callback once.
        () => this.onAccountChangeCbs.forEach((cb) => cb()),
        300,
        { leading: true, trailing: false }
      );
      this.signClient.on("session_event", ({ params }) => {
        if (params.event.name === Event.ACCOUNTS_CHANGED) {
          handleAccountChange();
        }
      });
    }

    // Check if a valid session already exists
    const oldSession = localStorage.getItem(this.sessionStorageKey);
    const chainIdsSet = new Set(chainIds);
    if (oldSession) {
      const { topic, chainIds: storedIds } = JSON.parse(
        oldSession
      ) as StorageSession;
      const storedIdsSet = new Set(storedIds);
      if (chainIds.every((id) => storedIdsSet.has(id))) {
        // If the requested chain IDs are a subset of the stored chain IDs, we can
        // proceed to check if the session is still working and connected
        if (await this.isConnected(this.signClient, topic, 4)) {
          // If the current session is properly connected, we can return early
          return;
        } else {
          // Otherwise, assume the session is stale and disconnect
          this.disconnect(topic);
        }
      } else {
        // Otherwise, we need to merge the stored IDs with the requested IDs
        for (const id of storedIds) {
          chainIdsSet.add(id);
        }
      }
    }

    // Initialise a new session
    const { uri, approval } = await this.signClient.connect({
      requiredNamespaces: {
        cosmos: {
          chains: [...chainIdsSet].map((id) => this.toCosmosNamespace(id)),
          methods: Object.values(Method),
          events: Object.values(Event),
        },
      },
    });
    if (uri) {
      // Open the QR code modal and wait for the user to approve the connection
      const modal = new QRCodeModal(this.mobileAppDetails);
      modal.open(uri);
      const { topic } = await approval();
      modal.close();
      // Save this new session to local storage
      const newSession: StorageSession = {
        topic,
        chainIds: [...chainIdsSet],
      };
      localStorage.setItem(this.sessionStorageKey, JSON.stringify(newSession));
      // Disconnect the older session if it exists
      if (oldSession) {
        const { topic } = JSON.parse(oldSession) as StorageSession;
        this.signClient.disconnect({
          topic,
          // TODO: use the actual reason
          reason: { code: -1, message: "" },
        });
      }
    }
  }

  public onDisconnect(cb: () => unknown): () => void {
    this.onDisconnectCbs.add(cb);
    return () => this.onDisconnectCbs.delete(cb);
  }

  public onAccountChange(cb: () => unknown): () => void {
    this.onAccountChangeCbs.add(cb);
    return () => this.onAccountChangeCbs.delete(cb);
  }

  public async getAccount(chainId: string): Promise<GetAccountResponse> {
    const [res] = await this.request<GetAccountResponse[]>(
      chainId,
      Method.GET_ACCOUNTS,
      {}
    );
    return res;
  }

  public async signAmino(
    chainId: string,
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<string> {
    const { signature } = await this.request<SignAminoResponse>(
      chainId,
      Method.SIGN_AMINO,
      {
        signerAddress,
        signDoc,
      }
    );
    return typeof signature === "string" ? signature : signature.signature;
  }

  /**
   * Checks if the current session is **really connected**. The `ping` method may
   * never return a response if the session is already disconnected. Thus, we
   * listen to the `session_delete` and `session_expire` events to detect if the
   * session is disconnected. If all else fails, we timeout after `timeoutSeconds`
   * and assume the session is not connected.
   */
  private isConnected(
    signClient: SignClient,
    topic: string,
    timeoutSeconds: number
  ): Promise<boolean> {
    const tryPing = async (): Promise<boolean> =>
      signClient
        .ping({ topic })
        .then(() => true) // we only return `true` if the ping succeeds
        .catch(() => false);
    const waitDisconnect = async (): Promise<boolean> =>
      new Promise((resolve) => {
        signClient.on("session_delete", (res) => {
          if (topic === res.topic) {
            resolve(false);
          }
        });
        signClient.on("session_expire", (res) => {
          if (topic === res.topic) {
            resolve(false);
          }
        });
      });
    const timeout = async (): Promise<boolean> =>
      new Promise((resolve) =>
        setTimeout(() => resolve(false), timeoutSeconds * 1_000)
      );
    return Promise.race([tryPing(), waitDisconnect(), timeout()]);
  }

  private disconnect(topic: string) {
    const session = localStorage.getItem(this.sessionStorageKey);
    if (!session || session.includes(topic)) {
      // Ignore stale disconnects; clean up only if the topic matches
      localStorage.removeItem(this.sessionStorageKey);
      this.onDisconnectCbs.forEach((cb) => cb());
    }
  }

  private async request<T>(chainId: string, method: Method, params: unknown) {
    const session = localStorage.getItem(this.sessionStorageKey);
    if (!session || !this.signClient) {
      throw new Error("Session not found for " + chainId);
    }
    const { topic } = JSON.parse(session) as StorageSession;
    if (isMobile()) {
      window.location.href = isAndroid()
        ? this.mobileAppDetails.android
        : this.mobileAppDetails.ios;
    }
    return this.signClient.request<T>({
      topic,
      chainId: this.toCosmosNamespace(chainId),
      request: {
        method,
        params,
      },
    });
  }

  private toCosmosNamespace(chainId: string): string {
    return "cosmos:" + chainId;
  }
}
