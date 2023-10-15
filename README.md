<!-- omit in toc -->
# CosmES

[![npm version](https://badge.fury.io/js/cosmes.svg)](https://www.npmjs.com/package/cosmes)

A tree-shakeable, framework agnostic, [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) alternative of [CosmJS](https://github.com/cosmos/cosmjs) and [Cosmos Kit](https://cosmoskit.com). Generates bundles up to 10x smaller than Cosmos Kit.

- [Features](#features)
- [Installing](#installing)
  - [Using with TypeScript](#using-with-typescript)
  - [Using with Vite](#using-with-vite)
  - [Using Station wallet](#using-station-wallet)
- [Examples](#examples)
- [Modules](#modules)
  - [`cosmes/client`](#cosmesclient)
  - [`cosmes/codec`](#cosmescodec)
  - [`cosmes/protobufs`](#cosmesprotobufs)
  - [`cosmes/registry`](#cosmesregistry)
  - [`cosmes/wallet`](#cosmeswallet)
- [Benchmarks](#benchmarks)
  - [Results](#results)
- [Contributing](#contributing)

## Features

> [!WARNING]  
> **This is still a work in progress**. Before `v1` is reached, the API is not guaranteed to be semver compatible - patch releases may break everything. See the [changelog](./CHANGELOG.md) for notable changes.

- **Fully tree-shakeable**: import and bundle only the modules you need
- **Framework agnostic**: integrate with any web framework (React, Vue, Svelte, Solid, etc.)
- **Lightweight and  minimal**: 145 KB gzipped to connect a React app to Keplr via browser extension or WalletConnect, 10x smaller than Cosmos Kit (see [benchmarks](#benchmarks))
- **Uses modern web APIs**: no dependencies on Node.js and minimal dependencies on third-party libraries where possible
- **Supports modern bundlers**: works with Vite, SWC, Rollup, etc.
- **Fully typed**: written in TypeScript and ships with type definitions

## Installing

```sh
npm install cosmes

pnpm add cosmes

yarn add cosmes
```

### Using with TypeScript

This library only exports ES modules. To ensure imports from this library work correctly, the following configuration is required in `tsconfig.json`:

```ts
{
  "compilerOptions": {
    "moduleResolution": "bundler", // recommended if using modern bundlers
    // or "node16" 
    // or "nodenext"
    // but NOT "node"
  }
}
```

### Using with Vite

If you are using Vite, the following configuration is required in `vite.config.ts`:

```ts
export default defineConfig({
  define: {
    global: "window",
  },
});
```

> This can be removed once support for WalletConnect v1 is no longer required.

### Using Station wallet

The Station wallet currently relies on WalletConnect v1. If you want to import and use `StationController`, a polyfill for `Buffer` is required:

```ts
// First, install the buffer package
npm install buffer

// Then, create a new file 'polyfill.ts'
import { Buffer } from "buffer";
(window as any).Buffer = Buffer;

// Finally, import the above file in your entry file
import "./polyfill";
```

See [`examples/solid-vite`](./examples/solid-vite) for a working example.

> This can be removed once support for WalletConnect v1 is no longer required.

## Examples

Docs do not exist yet - see the [`examples`](./examples) folder for various working examples.

## Modules

This package is split into multiple subdirectories, with each subdirectory having their own set of functionalities. The root directory does not contain any exports, and all exports are exported from the subdirectories. Thus, imports must be done by referencing the subdirectories (ie. `import { ... } from  "cosmes/client"`).

### `cosmes/client`

This directory contains models and helper functions to interact with Cosmos SDK via the [CometBFT RPC](https://docs.cosmos.network/v0.50/core/grpc_rest#cometbft-rpc).

### `cosmes/codec`

This directory contains various encoding and decoding functions that relies solely on [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) and has no dependencies on Node.js. For modern browsers and Node v16+, this should work out of the box.

### `cosmes/protobufs`

This directory contains the auto-generated code for various Cosmos SDK based protobufs. See `scripts/gen-protobufs.mjs` for the script that generates the code.

### `cosmes/registry`

This directory contains various APIs, data, and types needed for wallet interactions (ie. Keplr). Some types are auto-generated, see `scripts/gen-registry.mjs` for the script that generates the types.

### `cosmes/wallet`

This directory is a [Cosmos Kit](https://cosmoskit.com) alternative to manage various wallets (Keplr, Station, Cosmostation, Leap, etc.) across various different Cosmos SDK based blockchains. See [`examples/solid-vite`](./examples/solid-vite) for a working example.

**Features**:

- Supports Station, Keplr, Leap, and Cosmostation wallets
- Supports both browser extension (desktop) and WalletConnect (mobile)
- Unified interface for connecting, signing, broadcasting, and event handling
- Signing of arbitrary messages (for wallets that support it)
- Simultaneous connections to multiple WalletConnect wallets

## Benchmarks

See the [`benchmarks`](./benchmarks) folder, where the JS bundle size of CosmES is compared against Cosmos Kit. The following are adhered to:

- Apps should only contain the minimal functionality of connecting to Osmosis via Keplr using both the browser extension and WalletConnect wallets
- Apps should be built using React v18 (as Cosmos Kit has a [hard dependency](https://docs.cosmoskit.com/get-started)) and Vite
- Use the bundle size as reported by Vite after running the `vite build` command (including the size of all other dependencies like React)

### Results

| Package       | Minified | Gzipped |
|---------------|----------|---------|
| CosmES        | 536 KB   | 145 KB  |
| Cosmos Kit V1 | 6004 KB  | 1392 KB |
| Cosmos Kit V2 | 6273 KB  | 1453 KB |

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
