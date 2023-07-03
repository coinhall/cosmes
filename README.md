<!-- omit in toc -->
# CosmES

[![npm version](https://badge.fury.io/js/cosmes.svg)](https://www.npmjs.com/package/cosmes)

A tree-shakeable, framework agnostic, [pure ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) alternative of [CosmJS](https://github.com/cosmos/cosmjs) and [Cosmos Kit](https://cosmoskit.com).

- [Install](#install)
- [Examples](#examples)
- [Exports](#exports)
  - [`cosmes/client`](#cosmesclient)
  - [`cosmes/codec`](#cosmescodec)
  - [`cosmes/protobufs`](#cosmesprotobufs)
  - [`cosmes/wallet`](#cosmeswallet)
- [Benchmarks](#benchmarks)
- [Contributing](#contributing)

## Install

```sh
npm install cosmes

pnpm i cosmes

yarn add cosmes
```

## Examples

Docs do not exist yet - see the [`examples`](./examples) folder for various working examples.

## Exports

This package is split into multiple subdirectories, with each subdirectory having their own set of functionalities. The root directory does not contain any exports, and all exports are exported from the subdirectories. Thus, imports must be done by referencing the subdirectories (ie. `import { ... } from  "cosmes/client"`).

### `cosmes/client`

This directory contains models and helper functions to interact with Cosmos SDK via the [CometBFT RPC](https://docs.cosmos.network/v0.50/core/grpc_rest#cometbft-rpc).

### `cosmes/codec`

This directory contains various encoding and decoding functions that relies solely on [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) and has no dependencies on Node.js. For modern browsers and Node v16+, this should work out of the box.

### `cosmes/protobufs`

This directory contains the auto-generated code for various Cosmos SDK based protobufs. See `scripts/gen-protobufs.mjs` for the script that generates the code.

### `cosmes/wallet`

This directory is a [Cosmos Kit](https://cosmoskit.com) alternative to manage various wallets (Keplr, Station, Cosmostation, Leap, etc.) across various different Cosmos SDK based blockchains. See [`examples/solid-vite`](./examples/solid-vite) for a working example.

**Note**: to use Station via WalletConnect v1, a polyfill for `Buffer` is required. See [`examples`](./examples/solid-vite/src/polyfill.ts) for an example on how to do this. Other wallets that are using WalletConnect v2 should work out of the box.

## Benchmarks

Coming soon!

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
