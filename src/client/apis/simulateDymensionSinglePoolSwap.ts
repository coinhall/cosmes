import { DymensionGammV1beta1QueryEstimateSwapExactAmountInService as SwapService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type SimulateDymensionSinglePoolSwapParams = {
  poolId: bigint;
  fromAsset: string;
  fromAmount: bigint;
  toAsset: string;
};

/**
 * Simulates the amount of `toAsset` assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export async function simulateDymensionSinglePoolSwap(
  endpoint: string,
  {
    poolId,
    fromAsset,
    fromAmount,
    toAsset,
  }: SimulateDymensionSinglePoolSwapParams
): Promise<bigint> {
  const { tokenOutAmount } = await RpcClient.query(endpoint, SwapService, {
    poolId,
    tokenIn: fromAmount.toString() + fromAsset,
    routes: [
      {
        poolId,
        tokenOutDenom: toAsset,
      },
    ],
  });
  return BigInt(tokenOutAmount);
}
