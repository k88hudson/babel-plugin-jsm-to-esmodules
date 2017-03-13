const path = require("path");
const pluginPath = require("./plugin");

const CONFIG = {
  // Where is the entry point for the unit tests?
  testEntryFile: path.resolve(__dirname, "test/webpack/testentry.js"),

  // A glob-style pattern matching all unit tests
  testFilesPattern: "test/**/*.{js,jsm}"
};

const preprocessors = {};
preprocessors[CONFIG.testFilesPattern] = ["webpack"];
module.exports = function(config) {
  config.set({
    singleRun: true,
    browsers: ["Firefox"],
    frameworks: ["mocha"],
    reporters: ["mocha"],
    files: [CONFIG.testEntryFile],
    preprocessors,
    webpack: {
      module: {
        rules: [
          // This rule rewrites importing/exporting in .jsm files to be compatible with esmodules
          {
            test: /\.jsm$/,
            exclude: [/node_modules/],
            use: [{
              loader: "babel-loader",
              options: {plugins: [pluginPath]}
            }]
          }
        ]
      }
    },
    webpackMiddleware: {noInfo: true}
  });
};
