# simple-scripts-cjs

**Key takeaways:**

* Adds a `__esModule` property to handle interoperability with ESModules.

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