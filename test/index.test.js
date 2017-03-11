const {assert}= require("chai");
const babel = require("babel-core");
const plugin = require("../plugin");
const path = require("path");
const fs = require("fs");

function testFile(fileName) {
  const sourceFile = path.join(__dirname, "./fixtures/source", fileName);
  const actual = babel.transformFileSync(sourceFile, {plugins: [plugin]}).code + "\n";
  const expected = fs.readFileSync(path.join(__dirname, "./fixtures/expected", fileName), {encoding: "utf8"});
  //console.log(`${fileName}\n--------------------------\n${actual}\n--------------------------`);
  assert.equal(actual, expected);
}

function transform(text) {
  return babel.transform(text, {plugins: [plugin]}).code;
}

describe("babel-plugin-firefox-jsm", () => {
  describe("imports", () => {
    it("should work", () => {
      testFile("import.js");
    });
    it("should convert Components.utils.import", () => {
      assert.equal(
        transform("const {foo} = Components.utils.import('resource://foo.jsm', {})"),
        "import { foo } from 'resource://foo.jsm';"
      );
    });
    it("should work with references of Components", () => {
      assert.equal(
        transform("const C = Components; const {foo} = C.utils.import('resource://foo.jsm', {});"),
        "const C = Components;import { foo } from 'resource://foo.jsm';"
      );
    });
    it("should work with references of Components.utils", () => {
      assert.equal(
        transform("const Cu = Components.utils; const {foo} = Cu.import('resource://foo.jsm', {});"),
        "const Cu = Components.utils;import { foo } from 'resource://foo.jsm';"
      );
    });
    it("should work with assignment destructuring", () => {
      assert.equal(
        transform("const {utils} = Components; const {foo} = utils.import('resource://foo.jsm', {});"),
        "const { utils } = Components;import { foo } from 'resource://foo.jsm';"
      );
    });
    it("should work with assignment destructuring with renaming", () => {
      assert.equal(
        transform("const {utils: Cu} = Components; const {foo} = Cu.import('resource://foo.jsm', {});"),
        "const { utils: Cu } = Components;import { foo } from 'resource://foo.jsm';"
      );
    });
    it("should work with a custom resource base", () => {
      const text = "const {foo} = Components.utils.import('resource://as/foo.jsm', {})";
      const actual = babel.transform(text, {plugins: [[plugin, {basePath: /^resource:\/\/as\//}]]}).code;
      const expected = "import { foo } from 'resource://as/foo.jsm';";
      assert.equal(actual, expected);
    });
    it("should replace the resource base if opts.replace is true", () => {
      const text = "const {foo} = Components.utils.import('resource://as/foo.jsm', {})";
      const actual = babel.transform(text, {plugins: [[plugin, {basePath: /^resource:\/\/as\//, replace: true}]]}).code;
      const expected = "import { foo } from 'foo.jsm';";
      assert.equal(actual, expected);
    });
    it("should work with a string for the basePath option", () => {
      const text = "const {foo} = Components.utils.import('resource://as/foo.jsm', {})";
      const actual = babel.transform(text, {plugins: [[plugin, {basePath: "resource://as/", replace: true}]]}).code;
      const expected = "import { foo } from 'foo.jsm';";
      assert.equal(actual, expected);
    });
  });
  describe("exports", () => {
    it("should work", () => {
      testFile("export.js");
    });
    it("should convert EXPORTED_SYMBOLS", () => {
      assert.equal(transform("this.EXPORTED_SYMBOLS = ['a', 'b'];"), "export { a, b };");
    });
    it("should convert exported variables of the same name", () => {
      assert.equal(transform("const i = 0; this.i = i; this.EXPORTED_SYMBOLS = ['i']"), "const i = 0;export { i };");
    });
    it("should convert exported variables of a different name", () => {
      assert.equal(transform("this.i = x; this.EXPORTED_SYMBOLS = ['i']"), "var i = x;\nexport { i };");
    });
    it("should convert exported functions", () => {
      assert.equal(transform("this.i = function i() {}; this.EXPORTED_SYMBOLS = ['i']"), "var i = function i() {};\n\nexport { i };");
    });
    it("should convert exported expressions", () => {
      assert.equal(transform("this.i = 2 + 3; this.EXPORTED_SYMBOLS = ['i']"), "var i = 2 + 3;\nexport { i };");
    });
  });
});
