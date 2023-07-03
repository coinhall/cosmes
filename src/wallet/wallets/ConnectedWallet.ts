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
  CosmosAuthV1beta1BaseAccount as BaseAccount,
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosTxV1beta1GetTxResponse as GetTxResponse,
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

export type EstimateFeeOptions = {
  sequence: bigint;
  feeMultiplier?: number | undefined;
};

export type BroadcastTxOptions = {
  sequence: bigint;
  accountNumber: bigint;
  fee: Fee;
};

export type SignArbitraryResponse = {
  data: string;
  pubKey: string;
  signature: string;
};

/**
 * Represents a wallet that is connected via the browser extension
 * or via WalletConnect. This class should only be instantiated by
 * a `WalletController`.
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
   * Returns the base account for the connected address. This is commonly
   * used to get the sequence and account numbers for constructing a tx.
   */
  public async getAccount(): Promise<BaseAccount> {
    const account = await getAccount(this.rpc, { address: this.address });
    return toBaseAccount(account);
  }

  /**
   * Simulates the tx and returns an estimate of the gas fees required.
   */
  public async estimateFee(
    { msgs, memo }: UnsignedTx,
    opts?: EstimateFeeOptions | undefined
  ): Promise<Fee> {
    const { sequence } = await this.prepEstimateFee(opts);
    const { gasInfo } = await simulateTx(this.rpc, {
      sequence,
      memo,
      tx: new Tx({ pubKey: this.pubKey, msgs: msgs }),
    });
    if (!gasInfo) {
      throw new Error("Unable to estimate fee");
    }
    return calculateFee(gasInfo, this.gasPrice, opts?.feeMultiplier);
  }

  /**
   * Polls for the tx matching the given `hash`, with a minimum interval of
   * `intervalSeconds`. Throws if the tx is not found after the given number
   * of `maxAttempts`.
   */
  public async pollTx(
    txHash: string,
    opts?: PollTxOptions | undefined
  ): Promise<Required<GetTxResponse>> {
    return pollTx(this.rpc, { hash: txHash, ...opts });
  }

  /**
   * Signs the arbitrary `data` string and returns the {@link SignArbitraryResponse}.
   * Note that some mobile wallets do not support this method.
   */
  public abstract signArbitrary(data: string): Promise<SignArbitraryResponse>;

  /**
   * Signs and broadcasts the given `unsignedTx` via the connected wallet and returns
   * the tx hash if successful. Note that the returned tx hash does not guarantee that
   * the tx was successfully included in a block.
   */
  public abstract broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string>;

  /**
   * Returns the prerequisite data for broadcasting a tx, by resolving it with
   * `opts` or by requesting it from the chain.
   */
  protected async prepBroadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ) {
    const tx = new Tx({
      pubKey: this.pubKey,
      msgs: unsignedTx.msgs,
    });
    if (opts) {
      return { tx, ...opts };
    }
    const { accountNumber, sequence } = await this.getAccount();
    const fee = await this.estimateFee(unsignedTx, opts);
    return { tx, accountNumber, sequence, fee };
  }

  /**
   * Returns the prerequisite data for estimating a tx, by resolving it with
   * `opts` or by requesting it from the chain.
   */
  private async prepEstimateFee(opts?: EstimateFeeOptions | undefined) {
    if (opts) {
      return opts;
    }
    const account = await this.getAccount();
    return {
      sequence: account.sequence,
    };
  }
}
