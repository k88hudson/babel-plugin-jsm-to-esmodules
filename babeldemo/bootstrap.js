const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "Demo",
                                  "resource://babeldemo/lib/Demo.jsm");

function startup() {
  Demo.install();
};

function install() {}
function uninstall() {}
function shutdown() {}
