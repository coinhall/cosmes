import { base64 } from "cosmes/codec";

import { Prettify } from "../../typeutils/prettify";
import { RpcClient } from "../clients/RpcClient";
import { ToTxRawParams, Tx } from "../models/Tx";

export type BroadcastTxParams = Prettify<
  ToTxRawParams & {
    tx: Tx;
  }
>;

/**
 * Broadcasts a tx to the network and returns the tx hash if successful.
 */
export async function broadcastTx(
  endpoint: string,
  { tx, ...toTxRawParams }: BroadcastTxParams
) {
  return RpcClient.broadcastTx(
    endpoint,
    base64.encode(tx.toTxRaw(toTxRawParams).toBinary())
  );
}
