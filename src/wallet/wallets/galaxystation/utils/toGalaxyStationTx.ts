import { Adapter } from "cosmes/client";
import { CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";

import { GalaxyStationTx } from "../types";

/**
 * Translates the given args to a tx that can be sent to either
 * the Galaxy Station extension wallet or WalletConnect wallet.
 */
export function toGalaxyStationTx(
  chainId: string,
  fee: Fee,
  msgs: Adapter[],
  memo?: string | undefined
): GalaxyStationTx {
  return {
    chainID: chainId,
    fee: toGalaxyStationFee(fee),
    msgs: msgs.map(toGalaxyStationMsg),
    memo: memo,
  };
}

function toGalaxyStationFee({ amount, gasLimit }: Fee): string {
  return JSON.stringify({
    amount,
    gas_limit: gasLimit.toString(),
  });
}

function toGalaxyStationMsg(msg: Adapter): string {
  const { value } = msg.toAmino();
  return JSON.stringify({
    "@type": "/" + msg.toProto().getType().typeName,
    ...value,
  });
}
