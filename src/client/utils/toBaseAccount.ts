import { Any } from "@bufbuild/protobuf";
import {
  CosmosAuthV1beta1BaseAccount as BaseAccount,
  CosmosVestingV1beta1BaseVestingAccount as BaseVestingAccount,
  CosmosVestingV1beta1ContinuousVestingAccount as ContinuousVestingAccount,
  CosmosVestingV1beta1DelayedVestingAccount as DelayedVesting,
  CosmosVestingV1beta1PeriodicVestingAccount as PeriodicVestingAccount,
} from "cosmes/protobufs";

const ERR_UNKNOWN_ACCOUNT_TYPE = "Unknown account type";
const ERR_UNABLE_TO_RESOLVE_BASE_ACCOUNT = "Unable to resolve base account";

// TODO: add more account types
/**
 * Parses an `Any` protobuf message and returns the `BaseAccount`. Throws if unable
 * to parse correctly.
 */
export function toBaseAccount({ typeUrl, value }: Any): BaseAccount {
  switch (typeUrl.slice(1)) {
    case BaseAccount.typeName: {
      return BaseAccount.fromBinary(value);
    }
    case BaseVestingAccount.typeName: {
      const { baseAccount } = BaseVestingAccount.fromBinary(value);
      if (!baseAccount) {
        throw new Error(ERR_UNABLE_TO_RESOLVE_BASE_ACCOUNT);
      }
      return baseAccount;
    }
    case ContinuousVestingAccount.typeName: {
      const { baseVestingAccount } = ContinuousVestingAccount.fromBinary(value);
      if (!baseVestingAccount?.baseAccount) {
        throw new Error(ERR_UNABLE_TO_RESOLVE_BASE_ACCOUNT);
      }
      return baseVestingAccount.baseAccount;
    }
    case DelayedVesting.typeName: {
      const { baseVestingAccount } = DelayedVesting.fromBinary(value);
      if (!baseVestingAccount?.baseAccount) {
        throw new Error(ERR_UNABLE_TO_RESOLVE_BASE_ACCOUNT);
      }
      return baseVestingAccount.baseAccount;
    }
    case PeriodicVestingAccount.typeName: {
      const { baseVestingAccount } = PeriodicVestingAccount.fromBinary(value);
      if (!baseVestingAccount?.baseAccount) {
        throw new Error(ERR_UNABLE_TO_RESOLVE_BASE_ACCOUNT);
      }
      return baseVestingAccount.baseAccount;
    }
    default: {
      throw new Error(`${ERR_UNKNOWN_ACCOUNT_TYPE}: ${typeUrl.slice(1)}`);
    }
  }
}
