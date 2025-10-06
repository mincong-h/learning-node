# Learning Node.js

This is my playground for learning different concepts related to Node.js and Typescript 🔍 This project uses Node.js 22 and TypeScript 5.

You can use this project to learn JS too. You can:

* Read the "key takeaways" of each README.md of different packages to understand what are the most important pieces of information that you should remember from that package
* Read the operations of each README.md to see how is was done
* Clone the source code to play it yourself
* Visit the CI (GitHub Actions) to see how the source code is built.

Your contribution is welcome!

## Terminology

### Node

[Node.js®](https://nodejs.org/en) is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

```sh
pnpm install @types/node --save-dev
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) is Javascript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. You can install Typescript using pnpm.

```sh
pnpm install typescript --save-dev
```

We only need TypeScript as `devDependencies` (install with [`--save-dev`, `-D`](https://pnpm.io/cli/add#--save-dev--d)) because it is a tool used during the development process to transpile TypeScript code into JavaScript, but it is not needed when the application or library is running in production.

```diff
--- a/package.json
+++ b/package.json
@@ -8,5 +8,8 @@
   },
   "keywords": [],
   "author": "Mincong HUANG",
-  "license": "MIT"
+  "license": "MIT",
+  "devDependencies": {
+    "typescript": "^5.7.2"
+  }
 }
```

Once installed, you can use multiple commands for your project, such as `tsc` and `tsserver`.

Name (Command) | Description
:--- | :---
TypeScript Compiler (`tsc`) | The primary command-line tool for transpiling TypeScript to JavaScript.
TypeScript Language Server (`tsserver`) | The TypeScript Language Server used for providing IntelliSense, auto-completion, and type-checking features in editors.

```sh
npx tsc -h
```

```
tsc: The TypeScript Compiler - Version 5.7.2

COMMON COMMANDS

  tsc
  Compiles the current project (tsconfig.json in the working directory.)

  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.

  tsc -b
  Build a composite project in the working directory.

  tsc --init
  Creates a tsconfig.json with the recommended settings in the working directory.

  tsc -p ./path/to/tsconfig.json
  Compiles the TypeScript project located at the specified path.

  tsc --help --all
  An expanded version of this information, showing all possible compiler options

  tsc --noEmit
  tsc --target esnext
  Compiles the current project, with additional settings.


...
```

### pnpm

Fast, disk space efficient package manager for npm. See <https://pnpm.io/>


Recursively build all the modules inside the pnpm workspace:

```sh
pnpm -r build
```

## Publishing

```sh
# --no-git-tag-version don't create Git tag otherwise we will end up with a lot of tags,
# one per commit.
npm version "1.0.0-dev-$(git rev-parse --short HEAD)" --no-git-tag-version
```

then

```sh
# --tag allows clients to use the SDK using a tag rather than a semantic version.
npm publish --access=public --tag dev
```
