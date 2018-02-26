this.notExported = "hello";
this.foo = 123;
this.rait = "rait";
this.isTrue = true;
this.wow = {};

this.Bar = class Bar {};
this.baz = function baz() {};

const lie = "lie";
this.lie = lie;

function fall() {}
this.fall = fall;

class Foo {}
this.Foo = Foo;

const b = 123;
const woa = b;
this.woa = woa;

this.c = b;

var EXPORTED_SYMBOLS = ["foo", "rait", "isTrue", "wow", "Bar", "baz", "lie", "fall", "Foo", "woa", "floo", "c"];
