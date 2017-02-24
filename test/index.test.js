const {assert} = require("chai");
const babel = require("babel-core");
const plugin = require("../index");
const path = require("path");

function transform(fileName) {
  const filePath = path.join(__dirname, "./fixtures", fileName);
  const result = babel.transformFileSync(filePath, {plugins: [
    [plugin, {basePath: "resource://activity-stream/"}]
  ]});
  console.log(`${fileName}\n--------------------------\n${result.code}\n--------------------------`);
  return result;
}

describe("babel-plugin-firefox-jsm", () => {
  it("should convert EXPORTED_SYMBOLS to export default", () => {
    transform("export.js");
  });
  it("should convert Components.utils.import", () => {
    transform("import.js");
  });
  it("should convert imports and exports", () => {
    transform("example.js");
  });
});
