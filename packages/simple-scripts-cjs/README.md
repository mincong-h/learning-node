# simple-scripts-cjs

**Key takeaways:**

* Adds a `__esModule` property to handle interoperability with ESModules.
* Exports are assigned as properties of the `exports` object.
* Uses `require` and `module.exports` under the hood.
  * Clients use `import` statement

## Output

Inspecting the output of the JS file under `dist/index.js`, we can see that it adds a `__esModule` property to handle interoperability with ESModule.

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Usage

On the client side, you can use the module using the `require` keyword. See detailed usage in `simple-scripts-tests`.

```ts
const ss = require('@mincong-classroom/simple-scripts-cjs');
ss.greet('World') // Hello, World!
```

or

```ts
import ss from '@mincong-classroom/simple-scripts-cjs';

ss.greet('World') // Hello, World!
```
