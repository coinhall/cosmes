import type {
  ChainInfo as KeplrChainInfo,
  Currency as KeplrCurrency,
  FeeCurrency as KeplrFeeCurrency,
} from "@keplr-wallet/types";

import type { CosmosChainWithAssets } from "../apis/getChainInfo";

function defaultRpcGetter(chain: CosmosChainWithAssets): string {
  return chain.apis?.rpc?.[0]?.address ?? "";
}
function defaultRestGetter(chain: CosmosChainWithAssets): string {
  return chain.apis?.rest?.[0]?.address ?? "";
}

/**
 * Generate chain info to use unsupported chain with Keplr.
 *
 * @see https://docs.keplr.app/api/suggest-chain.html
 *
 * @example
 * ```typescript
 * const chain = await getChainInfo("archway", { assetlist: true });
 * const info = toKeplrChainInfo(chain);
 * window.keplr.experimentalSuggestChain(info);
 * ```
 */
export function toKeplrChainInfo(
  chain: CosmosChainWithAssets,
  options: {
    /**
     * Override the default RPC endpoint getter, return url.
     *
     * Default getter will use the first RPC endpoint in the chain's `apis.rpc` array
     */
    rpc?: (chain: CosmosChainWithAssets) => string;
    /**
     * Override the default REST endpoint getter, return url.
     *
     * Default getter will use the first REST endpoint in the chain's `apis.rest` array
     */
    rest?: (chain: CosmosChainWithAssets) => string;
  } = {}
): KeplrChainInfo {
  // convert chain to keplr chain info
  const rpc = (options.rpc ?? defaultRpcGetter)(chain);
  const rest = (options.rest ?? defaultRestGetter)(chain);

  const chainId = chain.chain_id;
  const chainName = chain.chain_name;

  const currencies: KeplrCurrency[] = chain.assetlist.map((asset) => {
    return {
      coinDenom: asset.symbol,
      coinMinimalDenom: asset.base,
      coinDecimals: asset.denom_units.filter(
        (denomUnit: { denom: string }) => denomUnit.denom === asset.display
      )[0]?.exponent,
      coinGeckoId: asset.coingecko_id || undefined,
      // Prefer SVG
      coinImageUrl: asset.logo_URIs?.svg ?? asset.logo_URIs?.png,
    };
  });

  /**
   * Find first matching staking token
   * If no staking token is found, use the first currency
   */
  let stakeCurrency: KeplrCurrency = currencies[0];
  if (chain.staking) {
    for (const token of chain.staking.staking_tokens) {
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
  const gasPriceSteps = chain.fees?.fee_tokens?.reduce((m, feeToken) => {
    m[feeToken.denom] = {
      low: feeToken.low_gas_price ?? 0.01,
      average: feeToken.average_gas_price ?? 0.025,
      high: feeToken.high_gas_price ?? 0.04,
    };
    return m;
  }, {} as Record<string, NonNullable<KeplrFeeCurrency["gasPriceStep"]>>);

  const feeCurrencies: KeplrFeeCurrency[] = currencies
    // USE THE FEE DENOMS
    .filter((currency) =>
      chain.fees?.fee_tokens.find((t) => t.denom === currency.coinMinimalDenom)
    )
    .map((feeCurrency) => {
      if (!gasPriceSteps?.hasOwnProperty(feeCurrency.coinMinimalDenom))
        return feeCurrency;

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  const feeCurrenciesDefault: KeplrFeeCurrency[] = currencies
    // USE THE STAKE CURRENCY
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!gasPriceSteps?.hasOwnProperty(feeCurrency.coinMinimalDenom))
        return feeCurrency;

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];
      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  return {
    rpc,
    rest,

    chainId,
    chainName,

    stakeCurrency,
    bip44: {
      coinType: chain.slip44 ?? 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: chain.bech32_prefix,
      bech32PrefixAccPub: `${chain.bech32_prefix}pub`,
      bech32PrefixValAddr: `${chain.bech32_prefix}valoper`,
      bech32PrefixValPub: `${chain.bech32_prefix}valoperpub`,
      bech32PrefixConsAddr: `${chain.bech32_prefix}valcons`,
      bech32PrefixConsPub: `${chain.bech32_prefix}valconspub`,
    },
    currencies,
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,

    // TODO: Support features
    // features: ["stargate", "ibc-transfer"],
  };
}
