import { RpcClient, toBaseAccount } from "cosmes/client";
import {
  CosmosAuthV1beta1QueryAccountService as QueryAccountService,
  CosmosBankV1beta1QueryAllBalancesService as QueryAllBalancesService,
} from "cosmes/protobufs";

RpcClient.newBatchQuery("https://phoenix-rpc.terra.dev")
  .add(
    QueryAllBalancesService,
    {
      address:
        "terra1fd68ah02gr2y8ze7tm9te7m70zlmc7vjyyhs6xlhsdmqqcjud4dql4wpxr",
      height: 7_500_000, // this will produce errors if the full node does not have the block
    },
    (err, res) =>
      err
        ? console.log("[1] QUERY ERROR:", err)
        : console.log("[1] QUERY SUCCESS:", res.balances)
  )
  .add(
    QueryAccountService,
    {
      address:
        "terra1fd68ah02gr2y8ze7tm9te7m70zlmc7vjyyhs6xlhsdmqqcjud4dql4wpxr",
    },
    (err, res) =>
      err
        ? console.log("[2] QUERY ERROR:", err)
        : console.log("[2] QUERY SUCCESS:", toBaseAccount(res.account!))
  )
  .add(
    QueryAllBalancesService,
    { address: "terra1x9jh7pl623jaj8dlt4q53mpmv5mv5nlpzdpxfs" },
    (err, res) =>
      err
        ? console.log("[3] QUERY ERROR:", err)
        : console.log("[3] QUERY SUCCESS:", res.balances)
  )
  .add(
    QueryAccountService,
    { address: "terra1x9jh7pl623jaj8dlt4q53mpmv5mv5nlpzdpxfs" },
    (err, res) =>
      err
        ? console.log("[4] QUERY ERROR:", err)
        : console.log("[4] QUERY SUCCESS:", toBaseAccount(res.account!))
  )
  .add(
    QueryAccountService,
    { address: "THIS IS AN INVALID ADDRESS" },
    (err, res) =>
      err
        ? console.log("[5] QUERY ERROR:", err) // this should log an error
        : console.log("[5] QUERY SUCCESS:", toBaseAccount(res.account!))
  )
  .send();
