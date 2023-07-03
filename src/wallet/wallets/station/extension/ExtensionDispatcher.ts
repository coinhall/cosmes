import { Adapter } from "cosmes/client";
import { fromStringToBase64 } from "cosmes/codec";
import { CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";

import {
  ConnectResponse,
  GetPubKeyResponse,
  PostResponse,
  SignBytesResponse,
} from "../types";
import { toStationTx } from "../utils/toStationTx";

type RequestType = "connect" | "get-pubkey" | "sign" | "post";
type ResponseType = "onConnect" | "onGetPubkey" | "onSign" | "onPost";

const TARGET_EXTENSION = "station:content";
const TARGET_WEBSITE = "station:inpage";

/**
 * Helper class to communicate with the station extension.
 */
export class ExtensionDispatcher {
  private readonly eventHandlers = new Map<
    ResponseType,
    (payload: any) => any
  >();

  constructor() {
    if (typeof window === "undefined") {
      // Prevents SSR-ed apps from crashing
      return;
    }
    window.addEventListener(
      "message",
      ({ source, origin, data: { target, data } }) => {
        if (
          source !== window ||
          origin !== window.location.origin ||
          target !== TARGET_WEBSITE ||
          data == null
        ) {
          return;
        }
        data === "ACK"
          ? window.postMessage({ target: TARGET_EXTENSION, data })
          : this.eventHandlers.get(data.name)?.(data.payload);
      }
    );
    window.postMessage({ target: TARGET_EXTENSION, data: "SYN" });
  }

  public isInstalled(): boolean {
    return !!window.isStationExtensionAvailable;
  }

  public async connect(): Promise<ConnectResponse> {
    return this.postRequest("connect");
  }

  public async getPubKey(): Promise<GetPubKeyResponse> {
    return this.postRequest("get-pubkey");
  }

  public async signBytes(data: string): Promise<SignBytesResponse> {
    return this.postRequest("sign", { bytes: fromStringToBase64(data) });
  }

  public async signAndBroadcast(
    chainId: string,
    fee: Fee,
    msgs: Adapter[],
    memo?: string | undefined
  ): Promise<PostResponse> {
    return this.postRequest("post", {
      ...toStationTx(chainId, fee, msgs, memo),
      waitForConfirmation: true,
    });
  }

  private getResponseTypeFromRequestType(type: RequestType): ResponseType {
    switch (type) {
      case "connect":
        return "onConnect";
      case "get-pubkey":
        return "onGetPubkey";
      case "sign":
        return "onSign";
      case "post":
        return "onPost";
    }
  }

  private async postRequest(type: RequestType, data?: any): Promise<any> {
    return new Promise((resolve) => {
      const handlerName = this.getResponseTypeFromRequestType(type);
      this.eventHandlers.set(handlerName, (payload) => {
        this.eventHandlers.delete(handlerName);
        resolve(payload);
      });
      window.postMessage({
        target: TARGET_EXTENSION,
        data: {
          id: Date.now(),
          type,
          purgeQueue: true, // Replaces all pending requests with current one
          ...data,
        },
      });
    });
  }
}
