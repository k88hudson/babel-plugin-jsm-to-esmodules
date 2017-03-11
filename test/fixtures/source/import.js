const Com = Components;
const C = Com;
const {utils: Cu} = C;
const {utils} = Components;

const {foo, afw} = C.utils.import("resource://stuff", {});
const {bar} = Cu.import("resource://stuff", {});
const {awe} = utils.import("resource://stuff", {});

const {baz} = Components.utils.flimport("resource://stuff", {});
const {qux} = Components.u.import("resource://stuff", {});
