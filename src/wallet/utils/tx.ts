import { Tx } from "cosmes/client";
import { base64 } from "cosmes/codec";
import {
  CosmosTxV1beta1Fee as Fee,
  CosmosTxSigningV1beta1SignMode as SignMode,
  CosmosTxV1beta1TxRaw as TxRaw,
} from "cosmes/protobufs";
import type { Coin, SignDoc, StdSignDoc } from "cosmes/registry";

/**
 * Returns the signed, proto encoded tx by combining the given `tx`, `signature`,
 * and `stdSignDoc`. This function can be used across all Keplr-like wallets.
 */
export function stdSignDocToSignedProto(
  tx: Tx,
  signature: string,
  { sequence, fee, memo, timeout_height }: StdSignDoc
): TxRaw {
  return tx.toSignedProto({
    sequence: BigInt(sequence),
    fee: new Fee({
      amount: fee.amount as Coin[],
      gasLimit: BigInt(fee.gas),
      payer: fee.payer,
      granter: fee.granter,
    }),
    signMode: SignMode.LEGACY_AMINO_JSON,
    signature: base64.decode(signature),
    memo: memo,
    timeoutHeight: timeout_height ? BigInt(timeout_height) : undefined,
  });
}

/**
 * Returns the signed, proto encoded tx by combining the given `signature` and
 * `signDoc`. This function can be used across all Keplr-like wallets.
 */
export function signDocToSignedProto(
  signature: string,
  { bodyBytes, authInfoBytes }: SignDoc
): TxRaw {
  return new TxRaw({
    authInfoBytes,
    bodyBytes,
    signatures: [base64.decode(signature)],
  });
}
