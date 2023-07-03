import { CosmosTxV1beta1ServiceSimulateService as SimulateService } from "cosmes/protobufs";

import { Prettify } from "../../typeutils/prettify";
import { RpcClient } from "../clients/RpcClient";
import { ToUnsignedTxRawParams, Tx } from "../models/Tx";

export type SimulateTxParams = Prettify<
  ToUnsignedTxRawParams & {
    tx: Tx;
  }
>;

/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export async function simulateTx(
  endpoint: string,
  { tx, ...toUnsignedTxRawParams }: SimulateTxParams
) {
  return RpcClient.query(endpoint, SimulateService, {
    txBytes: tx.toUnsignedTxRaw(toUnsignedTxRawParams).toBinary(),
  });
}
