import { Adapter } from "cosmes/client";
import { CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";

/**
 * Translates the given args to a tx that can be sent to either
 * the Station extension wallet or WalletConnect wallet.
 */
export function toStationTx(
  chainId: string,
  fee: Fee,
  msgs: Adapter[],
  memo?: string | undefined
) {
  return {
    chainID: chainId,
    fee: toStationFee(fee),
    msgs: msgs.map(toStationMsg),
    memo: memo,
  };
}

function toStationFee({ amount, gasLimit }: Fee): string {
  return JSON.stringify({
    amount,
    gas_limit: gasLimit.toString(),
  });
}

function toStationMsg(msg: Adapter): string {
  const { value } = msg.toAmino();
  return JSON.stringify({
    "@type": "/" + msg.toProto().getType().typeName,
    ...value,
  });
}
