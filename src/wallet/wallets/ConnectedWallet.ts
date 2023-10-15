import { PlainMessage } from "@bufbuild/protobuf";
import {
  Adapter,
  PollTxParams,
  Tx,
  calculateFee,
  getAccount,
  pollTx,
  simulateTx,
  toBaseAccount,
} from "cosmes/client";
import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosBaseAbciV1beta1TxResponse as TxResponse,
} from "cosmes/protobufs";

import type { WalletName } from "../constants/WalletName";
import type { WalletType } from "../constants/WalletType";

export type UnsignedTx = {
  msgs: Adapter[];
  memo?: string | undefined;
};

export type PollTxOptions = Pick<
  PollTxParams,
  "intervalSeconds" | "maxAttempts"
>;

export type SignArbitraryResponse = {
  data: string;
  pubKey: string;
  signature: string;
};

/**
 * Represents a connected wallet that is ready to sign transactions.
 * Use `WalletController` to create an instance of this class.
 */
export abstract class ConnectedWallet {
  /** The identifier of this wallet. */
  public readonly id: WalletName;
  /** The type of connection to the wallet. */
  public readonly type: WalletType;
  /** The chain ID this wallet is connected to. */
  public readonly chainId: string;
  /** The public key. */
  public readonly pubKey: Adapter;
  /** The bech32 address. */
  public readonly address: string;
  /** The RPC endpoint to use for interacting with the chain. */
  public readonly rpc: string;
  /** The gas price to use for transactions. */
  public readonly gasPrice: Coin;
  private accountNumber: bigint | undefined;
  private sequence: bigint | undefined;

  constructor(
    id: WalletName,
    type: WalletType,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    this.id = id;
    this.type = type;
    this.chainId = chainId;
    this.pubKey = pubKey;
    this.address = address;
    this.rpc = rpc;
    this.gasPrice = new Coin(gasPrice);
  }

  /**
   * Returns the account number and sequence for the connected address. If `fromCache`
   * is true, the cached values (if they are available) will be returned instead of
   * querying the auth module.
   *
   * @throws if the account does not exist in the auth module.
   */
  public async getAuthInfo(fromCache = false): Promise<{
    accountNumber: bigint;
    sequence: bigint;
  }> {
    if (!this.accountNumber || !this.sequence || !fromCache) {
      const account = await getAccount(this.rpc, { address: this.address });
      const { accountNumber, sequence } = toBaseAccount(account);
      this.accountNumber = accountNumber;
      this.sequence = sequence;
    }
    return {
      accountNumber: this.accountNumber,
      sequence: this.sequence,
    };
  }

  /**
   * Simulates the tx and returns an estimate of the gas fees required.
   *
   * @throws if the tx fails to simulate.
   */
  public async estimateFee(
    { msgs, memo }: UnsignedTx,
    feeMultiplier = 1.4
  ): Promise<Fee> {
    const estimate = async () => {
      const { sequence } = await this.getAuthInfo(true);
      const { gasInfo } = await simulateTx(this.rpc, {
        sequence,
        memo,
        tx: new Tx({ pubKey: this.pubKey, msgs: msgs }),
      });
      if (!gasInfo) {
        throw new Error("Unable to estimate fee");
      }
      return calculateFee(gasInfo, this.gasPrice, feeMultiplier);
    };
    // If we encounter an account sequence mismatch error, we retry exactly once
    // by parsing the error for the correct sequence to use
    try {
      return await estimate();
    } catch (err) {
      if (
        !(err instanceof Error) ||
        !err.message.includes("account sequence mismatch")
      ) {
        // Rethrow if the error is not related to account sequence
        throw err;
      }
      // Possible messages:
      // "account sequence mismatch, expected 10, got 11: incorrect account sequence: invalid request"
      // "rpc error: code = Unknown desc = account sequence mismatch, expected 10, got 11: ..."
      const matches = err.message.match(/(\d+)/g);
      if (!matches || matches.length < 2) {
        throw new Error("Failed to parse account sequence");
      }
      // Set the cached sequence to the one from the error message
      this.sequence = BigInt(matches[0]);
      return estimate();
    }
  }

  /**
   * Signs and broadcasts the given `unsignedTx` and returns the result of the tx.
   *
   * - The `fee` parameter can (and should) be obtained by running `estimateFee` on
   *   the `unsignedTx` prior to calling this method
   * - The tx result will be polled every `intervalSeconds` until it is included in
   *   a block or when `maxAttempts` is reached (default: 2 seconds, 64 attempts)
   *
   * @throws if the tx fails to broadcast.
   * @throws if the tx does not have a response.
   * @throws if the tx is not found after the given number of `maxAttempts`.
   */
  public async broadcastTx(
    unsignedTx: UnsignedTx,
    fee: Fee,
    { maxAttempts, intervalSeconds }: PollTxOptions = {}
  ): Promise<PlainMessage<TxResponse>> {
    const { accountNumber, sequence } = await this.getAuthInfo(true);
    const hash = await this.signAndBroadcastTx(
      unsignedTx,
      fee,
      accountNumber,
      sequence
    );
    // Greedily increment the sequence for the next tx. This may result in the wrong
    // sequence, but if `estimateFee` was called prior to this, it will be corrected
    this.sequence = sequence + 1n;
    const { txResponse } = await pollTx(this.rpc, {
      hash,
      maxAttempts,
      intervalSeconds,
    });
    return txResponse;
  }

  /**
   * Executes `estimateFee` and `broadcastTx` sequentially, returning the result of
   * the tx. Use this if there is no need independently execute the two methods.
   */
  public async broadcastTxWithFeeEstimation(
    unsignedTx: UnsignedTx,
    feeMultiplier = 1.4,
    pollOpts: PollTxOptions = {}
  ): Promise<PlainMessage<TxResponse>> {
    const fee = await this.estimateFee(unsignedTx, feeMultiplier);
    return this.broadcastTx(unsignedTx, fee, pollOpts);
  }

  /**
   * Signs the UTF-8 encoded `data` string. Note that some mobile wallets do not
   * support this method.
   *
   * @throws if the wallet does not support signing arbitrary data.
   */
  public abstract signArbitrary(data: string): Promise<SignArbitraryResponse>;

  /**
   * Signs the given `unsignedTx` and broadcasts the resulting signed tx, returning
   * the hex encoded tx hash if successful. This abstract method should be implemented
   * by the concrete child classes.
   */
  protected abstract signAndBroadcastTx(
    unsignedTx: UnsignedTx,
    fee: Fee,
    accountNumber: bigint,
    sequence: bigint
  ): Promise<string>;
}
