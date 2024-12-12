# simple-script

## Initialization

This package was initialized by the following commands:

```sh
# from the root of the Git repository

# Make sure that this is a pnpm workspace
cat pnpm-workspace.yaml

# Create the directory
mkdir -p packages/simple-scripts
cd packages/simple-scripts

# Initialize the package as a pnpm package
pnpm init
```

## Run

Use TypeScript compiler (`tsc`) to transpile the source code into JavaScript.

```sh
npx tsc
```

The output files are stored in the `dist` directory. The source directory and output directory are configured in the TypeScript configuration (`tsconfig.json`).
