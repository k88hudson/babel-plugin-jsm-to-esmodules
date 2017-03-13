import {Foo} from "./testfile.jsm";

describe("Webpack test", () => {
  it("should exist", () => {
    console.log(Foo);
  });
  it("should create an instance", () => {
    console.log(new Foo());
  });
});
