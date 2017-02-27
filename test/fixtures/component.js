const Cu = Components.utils;

Cu.import("resource://activity-stream/foo");

function foo() {
  function bar() {
    const baz = Cu;
    baz.import("resource://activity-stream/bar");
  }
}
