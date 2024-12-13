# simple-scripts-esm

**Key takeaways:**

* The property `__esModule` does not exist in the compiled version `dist/index.js`
* Exports are not assigned as properties of the `experts` object.
* Clients use `import` statement
  * Clients use `require` for CommonJS packages.

## Output

Run `pnpm build` and observe the output.

```sh
pnpm build

# > @mincong-classroom/simple-scripts-esm@1.0.0 build /Users/mincong/github/learning-node/packages/simple-scripts-esm
# > tsc
```

Inspect the tree of the output directory (dist):

```sh
tree dist
# dist
# ├── index.d.ts
# └── index.js

# 1 directory, 2 files
```

```js
// dist/index.js
function greet(name) {
    return `Hello, ${name}!`;
}
export { greet };
```

Comparing the difference between CommonJS and ECMAScript Modules, you will see that the keyword `__esModule` does not exist anymore

```sh
diff packages/simple-scripts-cjs/dist/index.js packages/simple-scripts-esm/dist/index.js
```

```diff
1,3d0
< "use strict";
< Object.defineProperty(exports, "__esModule", { value: true });
< exports.greet = greet;
6a4
> export { greet };
```

## Client

The clients of the package will call it using an import statement:

```ts
// file: esm.test.ts
import { greet } from '@mincong-classroom/simple-scripts-esm';

greet('World') // Hello, World!
```
