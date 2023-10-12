<!-- omit in toc -->
# Contributing

- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
  - [Adding Dependencies](#adding-dependencies)
  - [Building For Production](#building-for-production)
  - [Developing](#developing)
  - [Testing \& CI](#testing--ci)
- [Design Decisions](#design-decisions)
  - [Minimise Bundle Size](#minimise-bundle-size)
  - [Minimise Side Effects](#minimise-side-effects)
  - [No Minifying](#no-minifying)
  - [No Bundling](#no-bundling)
  - [No Barrel Files](#no-barrel-files)
  - [Full ESM Compatibility](#full-esm-compatibility)

## Directory Structure

This is a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c), written in TypeScript and managed by [pnpm](https://pnpm.io).

- [`/examples`](./examples) - contains example applications that consume from the `cosmes` package
- [`/scripts`](./scripts) - contains internal scripts for use in this monorepo
- [`/src`](./src) - contains the source code for the `cosmes` package

## Getting Started

```sh
# To install all dependencies
pnpm install
```

### Adding Dependencies

Dependencies that are not `devDependencies` should be added as `peerDependencies`. See ["No Bundling"](#no-bundling) for more information.

```sh
# To add a new dev dependency
pnpm add -D [dependency_name]

# To add a new dependency
# This also automatically adds it as a dev dependency
pnpm add --save-peer [dependency_name]
```

### Building For Production

```sh
# [OPTIONAL] To regenerate the code built using scripts
pnpm gen:protobufs
pnpm gen:registry

# To build to the `dist` directory
pnpm build
```

### Developing

All examples in the `/examples` directory are independent packages that contain a symlink to the root `cosmes` package. This allows us to develop the `cosmes` package and test it in the examples at the same time.

To start developing with hot reload:

```sh
# First, watch the package and rebuild on changes
pnpm build # If the root `dist` directory does not exist
pnpm dev

# Then, in a separate terminal, start the example app
cd examples/[app_name]
pnpm install # If necessary
pnpm dev
```

### Testing & CI

The full test suite includes building, linting, type checking, and unit tests.

```sh
# To run tests
pnpm test

# To run the full test suite, including linting and typechecking
pnpm test:suite
```

## Design Decisions

If you intend to contribute to this monorepo, please read this section carefully and adhere to the guidelines (which are listed most important first).

### Minimise Bundle Size

This library's primary target users are web apps, built using a suitable bundler, running on modern browsers. As such, we should ensure that tree shaking works as well as possible, and use native browser APIs instead of relying on external dependencies/polyfills.

### Minimise Side Effects

Modules must not contain [side effects](https://blog.saeloun.com/2022/11/24/tree-shaking-in-webpack-5/#what-are-sideeffects) where possible. This allows us to specify the `sideEffects: false` flag in `package.json`, which allows bundlers to tree shake more effectively.

### No Minifying

All TypeScript code is *only transpiled*, not minified. Minifying changes the code structure and may [cause tree shaking issues for bundlers](https://stackoverflow.com/questions/71275009/bundling-and-publishing-an-npm-library-is-it-common-to-resolve-all-dependencies). Assuming that most consumers worried about bundle size will already be using a bundler, it is better to leave the minifying to their bundler.

### No Bundling

Dependencies must not be bundled but should instead be installed as [`peerDependencies`](https://blog.bitsrc.io/understanding-peer-dependencies-in-javascript-dbdb4ab5a7be?gi=c8dc907bb6cf). This allows consumers to use a different version of the dependency if need be, and [shifts dependency resolution and bundling](https://stackoverflow.com/questions/71275009/bundling-and-publishing-an-npm-library-is-it-common-to-resolve-all-dependencies) to the consumer's package manager and bundler. For the latter, it allows consumers to avoid having multiple copies of the same dependency in their bundle.

### No Barrel Files

There should only be one [barrel file](https://basarat.gitbook.io/typescript/main-1/barrel) located in the immediate subdirectories in the `src` directory, which defines the public API of the library. No other barrel files should exist as it [creates more issue than it solves](https://steven-lemon182.medium.com/are-typescript-barrel-files-an-anti-pattern-72a713004250), like making it [harder for bundlers to tree shake](https://github.com/vercel/next.js/issues/12557).

### Full ESM Compatibility

Full ESM compatibility of the emitted JavaScript files is required so that consumers can still use this library *without having to use a bundler* (even if they are not our primary target users). Most importantly, all imports and exports must use a [fully qualified relative path](https://nodejs.org/api/esm.html#mandatory-file-extensions) (ie. starts with `.` and ends with `.js`).

We achieve this by using `tsc-alias` on the emitted JavaScript files. It transforms the `path` alias configured in `tsconfig.json` to the relative path and adds the `.js` extensions to all imports and exports. See [`configs/tsconfig`](./configs/tsconfig) for the up to date configurations.
