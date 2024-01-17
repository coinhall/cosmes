# Changelog

## `v0.0.51`

### Fixes

- Fixed MetaMask on Injective to work correctly with `MsgExecuteContractCompat` when `funds` are empty

## `v0.0.50`

### Fixes

- Fixed the `verifyArbitrary` function to work correctly for all chains, including Injective which uses a different key algorithm

## `v0.0.49`

### Features

- Added the `verifyArbitrary` helper function (exported by `cosmes/wallet`) to verify signatures signed using `ConnectedWallet.signArbitrary`

### Fixes

- Fixed the `recoverPubKeyFromEthSignature` helper function to calculate and use the correct recovery bit when generating the `secp256k1` model

## `v0.0.48`

### Features

- Added Compass wallet support to execute txs via Compass extension on Sei network (*does not support wallet connect yet*)

## `v0.0.47`

### Features

- Added MetaMask wallet support to execute txs via MetaMask extension on Injective network (*does not support wallet connect yet*)

### Improvements

- Added `extensionOptions` to `Tx.toSignedProto`

## `v0.0.46`

### Fixes

- Fixed `ConnectedWallet.estimateFee` to properly extract account sequences from errors thrown by Injective RPCs

## `v0.0.45`

### Improvements

- Included `isCW20` option for `simulateAstroportSinglePoolSwap` function to handle swapping from CW20 assets

## `v0.0.44`

### Fixes

- Fixed Leap wallet android deep link to ensure redirect happens correctly
- Fixed `toKeplrChainInfo` to return `undefined` for coingecko ID if it is absent

## `v0.0.43`

### Improvements

- Added `timeout_height` parameter when simulating or broadcasting txs
- Use sign mode direct (instead of legacy amino) for non-ledger extension wallets and `MnemonicWallet`
- Added support for sign mode direct for `WalletConnectV2` (although no mobile wallets support it currently)
- Reduced bundle size by combining Keplr-like wallets into the same interface (`examples/solid-vite` reduced from 509kb to 487kb minified)

## `v0.0.42`

### Features

- Added support for Injective chain (both mainnet and testnet)

## `v0.0.40`

### Fixes

- Use `JSON.stringify` on errors thrown by Station Extension to avoid `[object Object]` errors

### Miscellaneous

- Added `Tx.toSignDoc` method to form an unsigned, proto encoded tx ready to be signed by a wallet

## `v0.0.39`

### Features

- Added the optional `height` params to the `FetchClient` to execute queries at a custom block height
- Added batching of queries to `FetchClient` (see `examples/batch-query`)

## `v0.0.38` [breaking change]

### Features

- Added `MnemonicWallet` to allow programmatic signing and broadcasting of txs without relying on a 3rd party wallet/signer (see examples directory)
- Simplified wallet APIs **[breaking change]**
  - `getAccount()`: renamed and reworked to `getAuthInfo()`, but consumers are no longer required to call this method to broadcast transactions
  - `estimateFee()`: second parameter now accepts the `feeMultiplier` directly (still optional) instead of the auth info
  - `broadcastTx()`: second parameter now accepts the `fee` from the result of `estimateFee()` (no longer optional) instead of the auth info
  - `broadcastTxSync()`: new function that executes `estimateFee`, `broadcastTx`, and `pollTx` sequentially
- Handle account sequence mismatch errors directly in `ConnectedWallet.estimateFee()` by retrying once with the correct sequence

### Miscellaneous

- Removed the various `fromXxxToYyy` encoding/decoding functions within `cosmes/codec` in favour of `@scure/base` **[breaking change]**
  - The `@scure/base` pkg is re-exported in `cosmes/codec`
  - Consumers should import the correct encoder or decoder directly from `cosmes/codec`: eg. change `fromHexToUint8Array(...)` to `base16.decode(...)`
- Re-exported `@keplr-wallet/types` from `cosmes/registry`

## `v0.0.35`

### Features

- Added the `cosmes/registry` package with the following additions:
  - APIs to dynamically query for data in Chain Registry
  - Util function to transform Chain Registry data to Keplr's chain info

### Miscellaneous

- The `toBaseAccount` utility can now handle all vesting account types

## `v0.0.34`

### Fixes

- Prevent redirecting users to the mobile app when querying for the user's account via WalletConnect (on first connect)

## `v0.0.33`

### Fixes

- Allow memo and fee fields to be set by user for WalletConnect wallets
- Fixed Cosmostation WalletConnect to use updated API changes

## `v0.0.32`

### Fixes

- Added missing `memo` field for `MsgIbcTransfer`

## `v0.0.31`

### Miscellaneous

- Added missing barrel export for `MsgIbcTransfer` model

## `v0.0.30`

### Features

- Added ICS 23 protobufs from [`cosmos/ics23`](https://github.com/cosmos/ics23) to fix `ibc-go` dependency issues

## `v0.0.29`

### Features

- Added IBC protobufs from [`cosmos/ibc-go`](https://github.com/cosmos/ibc-go)
- Added `MsgIbcTransfer` model

## `v0.0.28`

### Features

- Updated Station extension to use the new APIs injected into the `window` scope

## `v0.0.27`

### Miscellaneous

- Changed `lodash` dependency to `lodash-es`

## `v0.0.26`

### Breaking Changes

- The `onDisconnect` callback in the `WalletController` class now accepts a function that contains a list of disconnected wallets instead of a list of disconnected chain ID strings

### Features

- Added the `onAccountChange` event to the `WalletController` class to allow consumers to detect wallet account changes (works for all wallets except Station via WalletConnect v1)

### Miscellaneous

- Added `lodash` as peer dependency

## `v0.0.25`

### Improvements

- Replaced all `@walletconnect-v1` dependencies with correct legacy libraries at <https://github.com/WalletConnect/walletconnect-legacy>
- Added bundle size benchmarks (see `./benchmarks` folder)
- Improved docs on installing, polyfills, and benchmarks

### Miscellaneous

- Changed GPL v3 license to MIT license

## `v0.0.24`

### Features

- First public release
