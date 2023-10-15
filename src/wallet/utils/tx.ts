import { Tx } from "cosmes/client";
import { base64 } from "cosmes/codec";
import {
  CosmosTxV1beta1Fee as Fee,
  CosmosTxSigningV1beta1SignMode as SignMode,
  CosmosTxV1beta1TxRaw as TxRaw,
} from "cosmes/protobufs";
import type { Coin, StdSignDoc } from "cosmes/registry";

/**
 * Returns a signed `TxRaw` by combining the given `tx`, `signature`, and `stdSignDoc`.
 * This function can be used across all Keplr-like wallets.
 */
export function toSignedTxRaw(
  tx: Tx,
  signature: string,
  { sequence, fee, memo }: StdSignDoc
): TxRaw {
  return tx.toTxRaw({
    sequence: BigInt(sequence),
    fee: new Fee({
      amount: fee.amount as Coin[],
      gasLimit: BigInt(fee.gas),
      payer: fee.payer,
      granter: fee.granter,
    }),
    signMode: SignMode.LEGACY_AMINO_JSON, // TODO: support other sign modes (?)
    signature: base64.decode(signature),
    memo: memo,
  });
}
