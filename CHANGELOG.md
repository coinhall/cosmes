# Changelog

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
