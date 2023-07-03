import { CosmosBankV1beta1QueryAllBalancesService as QueryAllBalancesService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type GetNativeBalancesParams = {
  address: string;
};

export async function getNativeBalances(
  endpoint: string,
  params: GetNativeBalancesParams
) {
  // TODO: handle pagination
  const { balances } = await RpcClient.query(
    endpoint,
    QueryAllBalancesService,
    params
  );
  return balances;
}
