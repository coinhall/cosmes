import { CosmosAuthV1beta1QueryAccountService as QueryAccountService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type GetAccountParams = {
  address: string;
};

export async function getAccount(endpoint: string, params: GetAccountParams) {
  const { account } = await RpcClient.query(
    endpoint,
    QueryAccountService,
    params
  );
  if (!account) {
    throw new Error("Account not found");
  }
  return account;
}
