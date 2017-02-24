const {Foo} = Components.utils.import("resource://activity-stream/addon/foo.jsm", {});
const {Bar, Baz} = Components.utils.import("resource://activity-stream/addon/barbaz.jsm", {});

const Stuff = {};
const Whatever = {};

this.EXPORTED_SYMBOLS = ["Stuff", "Whatever"];
