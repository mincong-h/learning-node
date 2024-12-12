# simple-scripts

**Key takeaways:**

* `pnpm init` can be used to initialize a package inside a pnpm workspace
* `tsconfig.json` is used for TypeScript Compiler (tsc)
* TypeScript Compiler (tsc) can be used to compile a project or a file

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

## Compilation

Source-to-source compilation from TypeScript to JavaScript.

### Compile A Project

Use TypeScript Compiler (`tsc`) to compile the source code into JavaScript. The output files are stored in the `dist` directory. The source directory and output directory are configured in the TypeScript configuration (`tsconfig.json`).

```sh
npx tsc
```

```
tree dist
dist
├── index.d.ts
└── index.js

1 directory, 2 files
```

```ts
// file: dist/index.d.ts
declare function greet(name: string): string;
```

```js
// file: dist/index.js
"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
```

### Compile A File

But you can also compile a single file:

```sh
# compile one single file
npx tsc src/index.ts
```

The output is a JavaScript file:

```js
// file: src/index.js
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("World"));
```
