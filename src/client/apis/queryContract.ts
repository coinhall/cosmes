import { JsonValue } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1QuerySmartContractStateService as QuerySmartContractStateService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type QueryContractParams = {
  address: string;
  query: JsonValue;
};

/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export async function queryContract<T extends JsonValue>(
  endpoint: string,
  { address, query }: QueryContractParams
): Promise<T> {
  const { data } = await RpcClient.query(
    endpoint,
    QuerySmartContractStateService,
    {
      address,
      queryData: utf8.decode(JSON.stringify(query)),
    }
  );
  return JSON.parse(utf8.encode(data));
}
