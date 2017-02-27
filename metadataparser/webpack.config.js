"use strict";
const absolute = relPath => require("path").join(__dirname, relPath);
const options = {
  entry: {"content-script": absolute("src/page-scraper-content-script.src.js")},
  output: {
    path: absolute("data"),
    filename: "page-scraper-content-script.js"
  },
  module: {
   rules: [
     {
       test: /\.jsm$/,
       loader: "babel-loader",
       query: {plugins: [[require("../index"), {basePath: "resource://metadataparser/"}]]}
     }
   ]
 },
};

module.exports = options;
