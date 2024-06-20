/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Asset lists are a similar mechanism to allow frontends and other UIs to fetch metadata associated with Cosmos SDK denoms, especially for assets sent over IBC.
 */
export interface ChainRegistryAssetList {
  $schema?: string;
  chain_name: string;
  assets: Asset[];
}
export interface Asset {
  /**
   * [OPTIONAL] Whether the asset has been deprecated for use. For readability, it is best to omit this property unless TRUE.
   */
  deprecated?: boolean;
  /**
   * [OPTIONAL] A short description of the asset
   */
  description?: string;
  /**
   * [OPTIONAL] A long description of the asset
   */
  extended_description?: string;
  denom_units: DenomUnit[];
  /**
   * [OPTIONAL] The potential options for type of asset. By default, assumes sdk.coin
   */
  type_asset?:
    | "sdk.coin"
    | "cw20"
    | "erc20"
    | "ics20"
    | "snip20"
    | "snip25"
    | "bitcoin-like"
    | "evm-base"
    | "svm-base"
    | "substrate"
    | "unknown";
  /**
   * [OPTIONAL] The address of the asset. Only required for type_asset : cw20, snip20
   */
  address?: string;
  /**
   * The base unit of the asset. Must be in denom_units.
   */
  base: string;
  /**
   * The project name of the asset. For example Bitcoin.
   */
  name: string;
  /**
   * The human friendly unit of the asset. Must be in denom_units.
   */
  display: string;
  /**
   * The symbol of an asset. For example BTC.
   */
  symbol: string;
  /**
   * The origin of the asset, starting with the index, and capturing all transitions in form and location.
   */
  traces?: (IbcTransition | IbcCw20Transition | NonIbcTransition)[];
  /**
   * [OPTIONAL] IBC Channel between src and dst between chain
   */
  ibc?: {
    source_channel: string;
    dst_channel: string;
    source_denom: string;
  };
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
  /**
   * @minItems 1
   */
  images?: [
    {
      image_sync?: Pointer;
      png?: string;
      svg?: string;
      theme?: {
        primary_color_hex?: string;
        circle?: boolean;
        dark_mode?: boolean;
      };
    },
    ...{
      image_sync?: Pointer;
      png?: string;
      svg?: string;
      theme?: {
        primary_color_hex?: string;
        circle?: boolean;
        dark_mode?: boolean;
      };
    }[]
  ];
  /**
   * [OPTIONAL] The coingecko id to fetch asset data from coingecko v3 api. See https://api.coingecko.com/api/v3/coins/list
   */
  coingecko_id?: string;
  keywords?: string[];
  socials?: {
    website?: string;
    twitter?: string;
    [k: string]: unknown | undefined;
  };
}
export interface DenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}
export interface IbcTransition {
  type: "ibc";
  counterparty: {
    /**
     * The name of the counterparty chain. (must match exactly the chain name used in the Chain Registry)
     */
    chain_name: string;
    /**
     * The base unit of the asset on its source platform. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform.
     */
    base_denom: string;
    /**
     * The counterparty IBC transfer channel(, e.g., 'channel-1').
     */
    channel_id: string;
  };
  chain: {
    /**
     * The chain's IBC transfer channel(, e.g., 'channel-1').
     */
    channel_id: string;
    /**
     * The port/channel/denom input string that generates the 'ibc/...' denom.
     */
    path: string;
  };
}
export interface IbcCw20Transition {
  type: "ibc-cw20";
  counterparty: {
    /**
     * The name of the counterparty chain. (must match exactly the chain name used in the Chain Registry)
     */
    chain_name: string;
    /**
     * The base unit of the asset on its source platform. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform.
     */
    base_denom: string;
    /**
     * The port used to transfer IBC assets; often 'transfer', but sometimes varies, e.g., for outgoing cw20 transfers.
     */
    port: string;
    /**
     * The counterparty IBC transfer channel(, e.g., 'channel-1').
     */
    channel_id: string;
  };
  chain: {
    /**
     * The port used to transfer IBC assets; often 'transfer', but sometimes varies, e.g., for outgoing cw20 transfers.
     */
    port: string;
    /**
     * The chain's IBC transfer channel(, e.g., 'channel-1').
     */
    channel_id: string;
    /**
     * The port/channel/denom input string that generates the 'ibc/...' denom.
     */
    path: string;
  };
}
export interface NonIbcTransition {
  type: "bridge" | "liquid-stake" | "synthetic" | "wrapped" | "additional-mintage" | "test-mintage";
  counterparty: {
    /**
     * The chain or platform from which the asset originates. E.g., 'cosmoshub', 'ethereum', 'forex', or 'nasdaq'
     */
    chain_name: string;
    base_denom: string;
    /**
     * The contract address where the transition takes place, where applicable. E.g., The Ethereum contract that locks up the asset while it's minted on another chain.
     */
    contract?: string;
  };
  chain?: {
    /**
     * The contract address where the transition takes place, where applicable. E.g., The Ethereum contract that locks up the asset while it's minted on another chain.
     */
    contract: string;
  };
  /**
   * The entity offering the service. E.g., 'Gravity Bridge' [Network] or 'Tether' [Company].
   */
  provider: string;
}
/**
 * The (primary) key used to identify an object within the Chain Registry.
 */
export interface Pointer {
  /**
   * The chain name or platform from which the object resides. E.g., 'cosmoshub', 'ethereum', 'forex', or 'nasdaq'
   */
  chain_name: string;
  /**
   * The base denom of the asset from which the object originates. E.g., when describing ATOM from Cosmos Hub, specify 'uatom', NOT 'atom' nor 'ATOM'; base units are unique per platform.
   */
  base_denom?: string;
}
