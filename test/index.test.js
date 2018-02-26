const chai = require("chai");
const assert = chai.assert;
const babel = require("babel-core");
const plugin = require("../plugin");
const path = require("path");
const fs = require("fs");

chai.use(require("chai-string"));

function testFile(fileName) {
  const sourceFile = path.join(__dirname, "./fixtures/source", fileName);
  const actual = babel.transformFileSync(sourceFile, {plugins: [plugin]}).code + "\n";
  const expected = fs.readFileSync(path.join(__dirname, "./fixtures/expected", fileName), {encoding: "utf8"});
  console.log(`${fileName}\n--------------------------\n${actual}\n--------------------------`);
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
    it("should convert ChomeUtils.import", () => {
      assert.equal(
        transform("const {foo} = ChromeUtils.import('resource://foo.jsm', {})"),
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
    it("should work with assignment destructuring in the import statement", () => {
      assert.equal(
        transform("const {actionTypes: at} = Components.utils.import('resource://foo.jsm', {});"),
        "import { actionTypes as at } from 'resource://foo.jsm';"
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
    describe("XPCOMUtils.defineLazyModuleGetter", () => {
      it("should convert XPCOMUtils.defineLazyModuleGetter", () => {
        const actual = transform("XPCOMUtils.defineLazyModuleGetter(this, 'Foo', 'resource://as/Foo.jsm');");
        const expected = "import {Foo} from 'resource://as/Foo.jsm';";
        assert.equalIgnoreSpaces(actual, expected);
      });
      it("should replace the resource base if opts.replace is true", () => {
        const text = "XPCOMUtils.defineLazyModuleGetter(this, 'Foo', 'resource://as/Foo.jsm');";
        const actual = babel.transform(text, {plugins: [[plugin, {basePath: /^resource:\/\/as\//, replace: true}]]}).code;
        const expected = "import {Foo} from 'Foo.jsm';";
        assert.equalIgnoreSpaces(actual, expected);
      });
      it("should not replace XPCOM... that do not match the basePath", () => {
        const text = "XPCOMUtils.defineLazyModuleGetter(this, 'Foo', 'module://Foo.jsm');";
        const actual = babel.transform(text, {plugins: [[plugin, {basePath: /^resource:\/\/as\//}]]}).code;
        assert.equalIgnoreSpaces(actual, text);
      });
    });
    describe("ChromeUtils.defineModuleGetter", () => {
      it("should convert ChromeUtils.defineModuleGetter", () => {
        const actual = transform("ChromeUtils.defineModuleGetter(this, 'Foo', 'resource://as/Foo.jsm');");
        const expected = "import {Foo} from 'resource://as/Foo.jsm';";
        assert.equalIgnoreSpaces(actual, expected);
      });
    });
  });
  describe("exports", () => {
    it("should work", () => {
      testFile("export.js");
    });
    it("should export number literals with var EXPORTED_SYMBOLS...", () => {
      assert.equal(transform("var a = 1; var EXPORTED_SYMBOLS = ['a'];"), "export var a = 1;");
    });
    it("should export number literals with this.EXPORTED_SYMBOLS...", () => {
      assert.equal(transform("this.a = 1; this.EXPORTED_SYMBOLS = ['a'];"), "export var a = 1;");
    });
    it("should export string literals", () => {
      assert.equal(transform("this.a = 'a'; var EXPORTED_SYMBOLS = ['a'];"), "export var a = 'a';");
    });
    it("should export booleans", () => {
      assert.equal(transform("this.a = true; var EXPORTED_SYMBOLS = ['a'];"), "export var a = true;");
    });
    it("should export null", () => {
      assert.equal(transform("this.a = null; this.EXPORTED_SYMBOLS = ['a'];"), "export var a = null;");
    });
    it("should export undefined", () => {
      assert.equal(transform("this.a = undefined; var EXPORTED_SYMBOLS = ['a'];"), "export var a = undefined;");
    });
    it("should export object literals", () => {
      assert.equal(transform("this.a = {}; var EXPORTED_SYMBOLS = ['a'];"), "export var a = {};");
    });
    it("should export call expressions", () => {
      assert.equal(transform("this.a = (function(){return 123;}()); var EXPORTED_SYMBOLS = ['a'];"), "export var a = function () {\n  return 123;\n}();");
    });
    it("should export functions", () => {
      assert.equal(transform("this.a = function a() {}; var EXPORTED_SYMBOLS = ['a'];"), "export function a() {}");
    });
    it("should export classes", () => {
      assert.equal(transform("this.a = class a {}; var EXPORTED_SYMBOLS = ['a'];"), "export class a {}");
    });
    it("should export references to classes", () => {
      assert.equal(transform("class a {}; this.a = a; var EXPORTED_SYMBOLS = ['a'];"), "export class a {}\n;");
    });
    it("should export references to functions", () => {
      assert.equal(transform("function a(){}; this.a = a; var EXPORTED_SYMBOLS = ['a'];"), "export function a() {}\n;");
    });
    it("should export references to variables", () => {
      assert.equal(transform("const a = b; this.a = a; var EXPORTED_SYMBOLS = ['a'];"), "export { b as a };");
    });
    it("should export different named variables", () => {
      assert.equal(transform("this.a = b; var EXPORTED_SYMBOLS = ['a'];"), "export { b as a };");
    });
    it("should work for variables not attached to this", () => {
      assert.equal(transform("const a = 123; var EXPORTED_SYMBOLS = ['a'];"), "export const a = 123;");
    });
    it("should export uninitialized variables", () => {
      assert.equal(transform("var a; var EXPORTED_SYMBOLS = ['a'];"), "export var a;");
    });
    it("should not export variables that aren't explicitly added to EXPORTED_SYMBOLS", () => {
      assert.equal(transform("this.a = 1; this.b = 2; var EXPORTED_SYMBOLS = ['a'];"), "export var a = 1;\nvar b = 2;");
    });
  });
});
