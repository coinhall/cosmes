<!-- omit in toc -->
# CosmES

[![npm version](https://badge.fury.io/js/cosmes.svg)](https://www.npmjs.com/package/cosmes)

A tree-shakeable, framework agnostic, [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) alternative of [CosmJS](https://github.com/cosmos/cosmjs) and [Cosmos Kit](https://cosmoskit.com).

- [Installing](#installing)
  - [Using with TypeScript](#using-with-typescript)
  - [Using with Vite](#using-with-vite)
  - [Using Station wallet](#using-station-wallet)
- [Examples](#examples)
- [Modules](#modules)
  - [`cosmes/client`](#cosmesclient)
  - [`cosmes/codec`](#cosmescodec)
  - [`cosmes/protobufs`](#cosmesprotobufs)
  - [`cosmes/wallet`](#cosmeswallet)
- [Benchmarks](#benchmarks)
- [Contributing](#contributing)

## Installing

```sh
npm install cosmes

pnpm i cosmes

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

### `cosmes/wallet`

This directory is a [Cosmos Kit](https://cosmoskit.com) alternative to manage various wallets (Keplr, Station, Cosmostation, Leap, etc.) across various different Cosmos SDK based blockchains. See [`examples/solid-vite`](./examples/solid-vite) for a working example.

**Features**:

- Supports Station, Keplr, Leap, and Cosmostation wallets
- Supports both browser extension (desktop) and WalletConnect (mobile)
- Unified interface for connecting and signing transactions
- Supports signing of arbitrary messages (for wallets that support it)

## Benchmarks

See [`benchmarks/preact-cosmes-keplr`](./benchmarks/preact-cosmes-keplr), which is able to connect to Keplr via browser extension and WalletConnect v2 and successfully simulate, execute, and poll for a `MsgSend` transaction. Running `vite build` yields the following JavaScript bundle size (inclusive of **all** dependencies):

| Minified | Gzipped |
| -------- | ------- |
| 407 KB   | 104 KB  |

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
