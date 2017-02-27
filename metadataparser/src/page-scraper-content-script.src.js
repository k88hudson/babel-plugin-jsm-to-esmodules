"use strict";
import {getMetadata} from "page-metadata-parser";
import {Utils} from "../common/Utils.jsm";

function DOMFetcher() {
  this.cfmm = null;
}

/*
 * This a frame script that gets injected into web pages as they are opened.
 * It collects the raw DOM, as well as it's respective url once the content is
 * loaded. It uses the Content Frame Message Manager to send a message to
 * whoever is registered, sending the DOM and the url as it's payload.
 */
DOMFetcher.prototype = {
  init(cfmm) {
    this.cfmm = cfmm;
    this.cfmm.addEventListener("DOMContentLoaded", (this._addWindowListeners.bind(this)), false);
    console.log(Utils.Constants.APP_NAME);
  },

  _addWindowListeners(event) {
    let window = event.target.defaultView;
    if (window === this.cfmm.content) {
      this._sendContentMessage();
    }
  },

  _sendContentMessage() {
    if (content.document.documentElement) {
      const url = content.document.documentURI;
      const data = getMetadata(content.document.documentElement, url);
      sendAsyncMessage("page-scraper-message", data);
    }
  }
};

const fetcher = new DOMFetcher();
fetcher.init(global);
