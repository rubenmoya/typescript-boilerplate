# TypeScript Boilerplate

This is a boilerplate to use in coding interviews. It includes:

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [BiomeJS](https://biomejs.dev/)
- [tsup](https://tsup.egoist.sh/)

## Installation

You will need to have [Node.js](https://nodejs.org/en) installed.

Install the dependencies:

```bash
pnpm install
```

Check everything is working:

```bash
pnpm run test
```

## Available commands

- `pnpm build`: Build the project.
- `pnpm test`: Run the tests.
- `pnpm test:watch`: Run the tests in watch mode.
- `pnpm lint`: Run the linter.
- `pnpm lint:fix`: Run the linter and fix the linting errors.
- `pnpm check-exports`: Uses [Are The Types Wrong](https://github.com/microsoft/AreTheTypesWrong) to check the exports.
- `pnpm run ci`: Run the CI pipeline (building, linting, checking exports and running tests).
