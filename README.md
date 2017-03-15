# JSM to ES Module Babel Plugin

[![Build Status](https://travis-ci.org/k88hudson/babel-plugin-jsm-to-esmodules.svg?branch=master)](https://travis-ci.org/k88hudson/babel-plugin-jsm-to-esmodules)

This module converts import and export statements in `.jsm` modules to ES modules. For example:

Source:

```js
const {utils: Cu} = Components;
const {Bar, Baz} = Cu.import("resource://activity-stream/addon/barbaz.jsm", {});

function Stuff() {
  return 123;
}

this.Whatever = {};
this.Stuff = Stuff;
this.EXPORTED_SYMBOLS = ["Stuff", "Whatever"];
```

Compiles to:

```js
import {Bar, Baz} from "addon/barbaz.js";

export function Stuff() {
  return 123;
}

export var Whatever = {};
```

## Caveats / Limitations

### Use top-level imports and exports only

Because `import` and `export` statements in ES modules must be statically analyzable, this plugin will only transform
top level `Cu.import` / `EXPORTED_SYMBOLS`. Example:

Good:

```js
const {utils: Cu} = Components;
const {Bar} = Cu.import("resource://foo/Bar.jsm", {});

this.Baz = 123;
this.EXPORTED_SYMBOLS = ["Baz"];
```

Bad:

```js
const {utils: Cu} = Components;
const root = this;
function innerFunction() {
  // This won't get converted because it's inside innerFunction
  const {Bar} = Cu.import("resource://foo/Bar.jsm", {});

  // Don't do this either
  root.Baz = 123;
}

this.EXPORTED_SYMBOLS = ["Baz"];
```

### Don't alias `this` or dynamically add items to `this.EXPORTED_SYMBOLS` when exporting

You should only declare `this.EXPORTED_SYMBOLS` once in the top-level scope, and it should not be modified.

Good:

```js
function Foo() {...}
this.Foo = Foo;
this.Bar = 123;
this.EXPORTED_SYMBOLS = ["Foo", "Bar"];
```

Bad:

```js
const root = this;
const Foo = 123;
root.EXPORTED_SYMBOLS = ["Foo"]; // Don't alias this when exporting
root.Bar = 456;
root.EXPORTED_SYMBOLS.push("Bar"); // Don't do this

```

### Don't reassign Components.utils.import

Assigning variables to `Components` or `Components.utils` is OK, but don't assign the `.import`;

```js
const C = Components; // OK
const {utils: Cu} = Components; // OK
const u = Components.utils // OK

const {import} = Cu; // Don't do this
const i = Components.utils.import // Don't do this

```

## Options

### `basePath`

Defaults to `/^resource:\/\/`. A RegEx or String that tests for which import paths to rewrite.

### `replace`

Defaults to `false`. Remove the `basePath` component of the import string?

e.g. If the basePath is `/^resource:\/\/`, `resource://activity-stream/foo.js` will be rewritten to `activity-stream/foo.js`.

```
"plugins": ["transform-react-jsx", {basePath: "resource://activity-stream/"}],
```
