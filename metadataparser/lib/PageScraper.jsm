"use strict";

const {utils: Cu} = Components;
const {Services} = Cu.import("resource://gre/modules/Services.jsm", {});

class PageScraper {
  /**
   * Initialize the Page Scraper
   */
  init() {
    this._messageHandler = this._messageHandler.bind(this);
    Services.mm.loadFrameScript("resource://metadataparser/data/page-scraper-content-script.js", true);
    Services.mm.addMessageListener("page-scraper-message", this._messageHandler);
    dump("INIT\n\n\n");
  }

  /**
   * Uninitialize the Page Scraper
   */
  uninit() {
    Services.mm.removeMessageListener("page-scraper-message", this._messageHandler);
    Services.mm.removeDelayedFrameScript(this.options.framescriptPath);
  }

  /**
   * Message handler for the incoming framescript messages
   */
  _messageHandler(message) {
    dump(JSON.stringify(message.data, null, 2) + "\n");
  }
}

this.EXPORTED_SYMBOLS = ["PageScraper"];
