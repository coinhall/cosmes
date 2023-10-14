import { Message, PartialMessage } from "@bufbuild/protobuf";
import { base16, base64 } from "cosmes/codec";

import { FetchClient } from "./FetchClient";

type ErrorResponse = {
  id: number;
  jsonrpc: string;
  error: {
    code: number;
    message: string;
    data: string;
  };
  result: never;
};
type SuccessResponse<T> = {
  id: number;
  jsonrpc: string;
  result: T;
  error: never;
};
type Response<T> = SuccessResponse<T> | ErrorResponse;

type QueryResult = {
  response: {
    code: number;
    log: string;
    info: string;
    index: string;
    key: string | null;
    value: string | null;
    proofOps: string[] | null;
    height: string;
    codespace: string;
  };
};
type QueryService<T extends Message<T>, U extends Message<U>> = {
  typeName: string;
  method: string;
  Request: new (msg: PartialMessage<T>) => T;
  Response: { fromBinary: (bytes: Uint8Array) => U };
};

type BroadcastTxResult = {
  code: number;
  codespace: string;
  data: string;
  hash: string;
  log: string;
};

export class RpcClient {
  private static async doRequest<T>(
    endpoint: string,
    method: string,
    params: Record<string, unknown>
  ) {
    const { result, error } = await FetchClient.post<Response<T>>(endpoint, {
      id: Date.now(),
      jsonrpc: "2.0",
      method,
      params,
    });
    if (error != null) {
      throw new Error(error.data);
    }
    return result;
  }

  /**
   * Posts an `abci_query` request to the RPC `endpoint`. If successful,
   * returns the response, otherwise throws an error.
   */
  public static async query<T extends Message<T>, U extends Message<U>>(
    endpoint: string,
    { typeName, method, Request, Response }: QueryService<T, U>,
    requestMsg: PartialMessage<T>
  ): Promise<U> {
    const { response } = await this.doRequest<QueryResult>(
      endpoint,
      "abci_query",
      {
        path: `/${typeName}/${method}`,
        data: base16.encode(new Request(requestMsg).toBinary()),
      }
    );
    const { log, value } = response;
    if (!value) {
      throw new Error(log);
    }
    return Response.fromBinary(base64.decode(value));
  }

  /**
   * Posts a `broadcast_tx_sync` request to the RPC `endpoint`. If successful,
   * returns the tx hash, otherwise throws an error.
   */
  public static async broadcastTx(
    endpoint: string,
    base64EncodedTx: string
  ): Promise<string> {
    const { code, log, hash } = await this.doRequest<BroadcastTxResult>(
      endpoint,
      "broadcast_tx_sync",
      {
        tx: base64EncodedTx,
      }
    );
    if (code !== 0) {
      throw new Error(log);
    }
    return hash;
  }
}
