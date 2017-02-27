const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "PageScraper",
                                  "resource://metadataparser/lib/PageScraper.jsm");

let ps;
function startup() {
  ps = new PageScraper();
  ps.init();
};

function install() {}
function uninstall() {}
function shutdown() {
  ps.uninit();
}
