import { Any } from "@bufbuild/protobuf";
import {
  CosmosAuthV1beta1BaseAccount as BaseAccount,
  CosmosVestingV1beta1PeriodicVestingAccount as PeriodicVestingAccount,
} from "cosmes/protobufs";

// TODO: add more account types
export function toBaseAccount({ typeUrl, value }: Any): BaseAccount {
  switch (typeUrl.slice(1)) {
    case BaseAccount.typeName:
      return BaseAccount.fromBinary(value);
    case PeriodicVestingAccount.typeName:
      const { baseVestingAccount } = PeriodicVestingAccount.fromBinary(value);
      if (!baseVestingAccount?.baseAccount) {
        throw new Error("Unable to resolve base account");
      }
      return baseVestingAccount.baseAccount;
    default:
      throw new Error("Unknown account type");
  }
}
