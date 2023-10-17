# Changelog

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
