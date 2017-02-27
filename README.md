# JSM to ES Modules

This module converts .jsm modules to ES modules. For example:

Source:

```js
const {Bar, Baz} = Components.utils.import("resource://activity-stream/addon/barbaz.jsm", {});

const Stuff = {};
const Whatever = {};

this.EXPORTED_SYMBOLS = ["Stuff", "Whatever"];
```

Compiles to:

```js
import {Bar, Baz} from "addon/barbaz.js";

const Stuff = {};
const Whatever = {};

export {Stuff, Whatever};
```

## Usage

This plugin Takes a single option `basePath`, which will rewrite paths from `Components.utils.import`.

E.g. For this configuration, the path `resource://activity-stream/foo.js` will be rewritten to `foo.js`.

```
"plugins": ["transform-react-jsx", {basePath: "resource://activity-stream/"}],
```

## Caveats / Limitations

Note that while not true for `Components.utils.import`, ES `import` and `export` statements must be statically analyzable and declared at the top level of modules.
