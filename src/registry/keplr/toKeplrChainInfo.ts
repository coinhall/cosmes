import type {
  Currency,
  FeeCurrency,
  ChainInfo as KeplrChainInfo,
} from "@keplr-wallet/types";

import { ChainRegistryAssetList } from "../types/ChainRegistryAssetList";
import { ChainRegistryChainInfo } from "../types/ChainRegistryChainInfo";

const getRpcEndpoint = (chain: ChainRegistryChainInfo): string =>
  chain.apis?.rpc?.[0]?.address ?? "";
const getRestEndpoint = (chain: ChainRegistryChainInfo): string =>
  chain.apis?.rest?.[0]?.address ?? "";

/**
 * Generates the Keplr compatible chain info using Chain Registry's chain info and asset list.
 * This is useful when using Keplr's `experimentalSuggestChain` API.
 *
 * ```typescript
 * // Example
 * const chain = "archway"
 * const [chainInfo, assetList] = await Promise.all([
 *   getChainRegistryChainInfo(chain),
 *   getChainRegistryAssetList(chain),
 * ]);
 * const info = toKeplrChainInfo(chainInfo, assetList);
 * window.keplr.experimentalSuggestChain(info);
 * ```
 *
 * @see https://docs.keplr.app/api/suggest-chain.html
 */
export function toKeplrChainInfo(
  chainRegistryChainInfo: ChainRegistryChainInfo,
  chainRegistryAssetList: ChainRegistryAssetList,
  options: {
    /**
     * Override the default RPC endpoint getter.
     *
     * Default getter will use the first RPC endpoint in the chain's `apis.rpc` array
     */
    getRpcEndpoint?: (chain: ChainRegistryChainInfo) => string;
    /**
     * Override the default REST endpoint getter.
     *
     * Default getter will use the first REST endpoint in the chain's `apis.rest` array
     */
    getRestEndpoint?: (chain: ChainRegistryChainInfo) => string;
  } = {}
): KeplrChainInfo {
  // Adapted from: https://github.com/cosmology-tech/chain-registry/blob/main/packages/keplr/src/index.ts

  const currencies: Currency[] = chainRegistryAssetList.assets.map((asset) => ({
    coinDenom: asset.symbol,
    coinMinimalDenom: asset.base,
    coinDecimals: asset.denom_units.find(
      (denomUnit: { denom: string }) => denomUnit.denom === asset.display
    )?.exponent ?? 6,
    coinGeckoId: asset.coingecko_id === "" ? undefined : asset.coingecko_id,
    coinImageUrl: asset.logo_URIs?.svg ?? asset.logo_URIs?.png,
  }));

  /**
   * Find first matching staking token
   * If no staking token is found, use the first currency
   */
  let stakeCurrency: Currency = currencies[0];
  if (chainRegistryChainInfo.staking) {
    for (const token of chainRegistryChainInfo.staking.staking_tokens) {
      const currency = currencies.find(
        (currency) => currency.coinDenom === token.denom
      );
      if (currency) {
        stakeCurrency = currency;
        break;
      }
    }
  }

  /**
   * FROM KEPLR chain-info.d.ts:
   * This is used to set the fee of the transaction.
   * If this field is empty, it just use the default gas price step (low: 0.01, average: 0.025, high: 0.04).
   * And, set field's type as primitive number because it is hard to restore the prototype after deserialzing if field's type is `Dec`.
   */
  const gasPriceSteps = chainRegistryChainInfo.fees?.fee_tokens?.reduce(
    (m, feeToken) => {
      m[feeToken.denom] = {
        low: feeToken.low_gas_price ?? 0.01,
        average: feeToken.average_gas_price ?? 0.025,
        high: feeToken.high_gas_price ?? 0.04,
      };
      return m;
    },
    {} as Record<string, NonNullable<FeeCurrency["gasPriceStep"]>>
  );

  const feeCurrencies: FeeCurrency[] = currencies
    .filter((currency) =>
      chainRegistryChainInfo.fees?.fee_tokens.find(
        (t) => t.denom === currency.coinMinimalDenom
      )
    )
    .map((feeCurrency) => {
      if (!gasPriceSteps?.hasOwnProperty(feeCurrency.coinMinimalDenom)) {
        return feeCurrency;
      }
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  const feeCurrenciesDefault: FeeCurrency[] = currencies
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!gasPriceSteps?.hasOwnProperty(feeCurrency.coinMinimalDenom)) {
        return feeCurrency;
      }
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  return {
    chainId: chainRegistryChainInfo.chain_id,
    chainName: chainRegistryChainInfo.chain_name,

    rpc: (options.getRpcEndpoint ?? getRpcEndpoint)(chainRegistryChainInfo),
    rest: (options.getRestEndpoint ?? getRestEndpoint)(chainRegistryChainInfo),

    bip44: {
      coinType: chainRegistryChainInfo.slip44 ?? 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: chainRegistryChainInfo.bech32_prefix,
      bech32PrefixAccPub: `${chainRegistryChainInfo.bech32_prefix}pub`,
      bech32PrefixValAddr: `${chainRegistryChainInfo.bech32_prefix}valoper`,
      bech32PrefixValPub: `${chainRegistryChainInfo.bech32_prefix}valoperpub`,
      bech32PrefixConsAddr: `${chainRegistryChainInfo.bech32_prefix}valcons`,
      bech32PrefixConsPub: `${chainRegistryChainInfo.bech32_prefix}valconspub`,
    },

    currencies,
    stakeCurrency,
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,

    // TODO: Support features (?)
    // features: ["stargate", "ibc-transfer"],
  };
}
