/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wu"] = factory();
	else
		root["wu"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = __webpack_require__(1)["default"];

	var _slicedToArray = __webpack_require__(39)["default"];

	var _Symbol$iterator = __webpack_require__(52)["default"];

	var _getIterator = __webpack_require__(40)["default"];

	var _regeneratorRuntime = __webpack_require__(54)["default"];

	var _Object$keys = __webpack_require__(80)["default"];

	var _Set = __webpack_require__(84)["default"];

	var _Promise = __webpack_require__(65)["default"];

	var wu = module.exports = function wu(iterable) {
	  if (!isIterable(iterable)) {
	    throw new Error("wu: `" + iterable + "` is not iterable!");
	  }
	  return new Wu(iterable);
	};

	function Wu(iterable) {
	  var iterator = getIterator(iterable);
	  this.next = iterator.next.bind(iterator);
	}
	wu.prototype = Wu.prototype;

	wu.prototype[_Symbol$iterator] = function () {
	  return this;
	};

	/*
	 * Internal utilities
	 */

	// An internal placeholder value.
	var MISSING = {};

	// Return whether a thing is iterable.
	var isIterable = function isIterable(thing) {
	  return thing && typeof thing[_Symbol$iterator] === "function";
	};

	// Get the iterator for the thing or throw an error.
	var getIterator = function getIterator(thing) {
	  if (isIterable(thing)) {
	    return _getIterator(thing);
	  }
	  throw new TypeError("Not iterable: " + thing);
	};

	// Define a static method on `wu` and set its prototype to the shared
	// `Wu.prototype`.
	var staticMethod = function staticMethod(name, fn) {
	  fn.prototype = Wu.prototype;
	  wu[name] = fn;
	};

	// Define a function that is attached as both a `Wu.prototype` method and a
	// curryable static method on `wu` directly that takes an iterable as its last
	// parameter.
	var prototypeAndStatic = function prototypeAndStatic(name, fn) {
	  var expectedArgs = arguments.length <= 2 || arguments[2] === undefined ? fn.length : arguments[2];
	  return (function () {
	    fn.prototype = Wu.prototype;
	    Wu.prototype[name] = fn;

	    // +1 for the iterable, which is the `this` value of the function so it
	    // isn't reflected by the length property.
	    expectedArgs += 1;

	    wu[name] = wu.curryable(function () {
	      var _wu;

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var iterable = args.pop();
	      return (_wu = wu(iterable))[name].apply(_wu, args);
	    }, expectedArgs);
	  })();
	};

	// A decorator for rewrapping a method's returned iterable in wu to maintain
	// chainability.
	var rewrap = function rewrap(fn) {
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return wu(fn.call.apply(fn, [this].concat(args)));
	  };
	};

	var rewrapStaticMethod = function rewrapStaticMethod(name, fn) {
	  return staticMethod(name, rewrap(fn));
	};
	var rewrapPrototypeAndStatic = function rewrapPrototypeAndStatic(name, fn, expectedArgs) {
	  return prototypeAndStatic(name, rewrap(fn), expectedArgs);
	};

	// Return a wrapped version of `fn` bound with the initial arguments
	// `...args`.
	function curry(fn, args) {
	  return function () {
	    for (var _len3 = arguments.length, moreArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      moreArgs[_key3] = arguments[_key3];
	    }

	    return fn.call.apply(fn, [this].concat(_toConsumableArray(args), moreArgs));
	  };
	}

	/*
	 * Public utilities
	 */

	staticMethod("curryable", function (fn) {
	  var expected = arguments.length <= 1 || arguments[1] === undefined ? fn.length : arguments[1];
	  return (function () {
	    return function f() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      return args.length >= expected ? fn.apply(this, args) : curry(f, args);
	    };
	  })();
	});

	rewrapStaticMethod("entries", _regeneratorRuntime.mark(function callee$0$0(obj) {
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, k;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion = true;
	        _didIteratorError = false;
	        _iteratorError = undefined;
	        context$1$0.prev = 3;
	        _iterator = _getIterator(_Object$keys(obj));

	      case 5:
	        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        k = _step.value;
	        context$1$0.next = 9;
	        return [k, obj[k]];

	      case 9:
	        _iteratorNormalCompletion = true;
	        context$1$0.next = 5;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError = true;
	        _iteratorError = context$1$0.t0;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion && _iterator["return"]) {
	          _iterator["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	rewrapStaticMethod("keys", _regeneratorRuntime.mark(function callee$0$0(obj) {
	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        return context$1$0.delegateYield(_Object$keys(obj), "t0", 1);

	      case 1:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	rewrapStaticMethod("values", _regeneratorRuntime.mark(function callee$0$0(obj) {
	  var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, k;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion2 = true;
	        _didIteratorError2 = false;
	        _iteratorError2 = undefined;
	        context$1$0.prev = 3;
	        _iterator2 = _getIterator(_Object$keys(obj));

	      case 5:
	        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        k = _step2.value;
	        context$1$0.next = 9;
	        return obj[k];

	      case 9:
	        _iteratorNormalCompletion2 = true;
	        context$1$0.next = 5;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError2 = true;
	        _iteratorError2 = context$1$0.t0;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	          _iterator2["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError2) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError2;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	/*
	 * Infinite iterators
	 */

	rewrapPrototypeAndStatic("cycle", _regeneratorRuntime.mark(function callee$0$0() {
	  var saved, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        saved = [];
	        _iteratorNormalCompletion3 = true;
	        _didIteratorError3 = false;
	        _iteratorError3 = undefined;
	        context$1$0.prev = 4;
	        _iterator3 = _getIterator(this);

	      case 6:
	        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
	          context$1$0.next = 14;
	          break;
	        }

	        x = _step3.value;
	        context$1$0.next = 10;
	        return x;

	      case 10:
	        saved.push(x);

	      case 11:
	        _iteratorNormalCompletion3 = true;
	        context$1$0.next = 6;
	        break;

	      case 14:
	        context$1$0.next = 20;
	        break;

	      case 16:
	        context$1$0.prev = 16;
	        context$1$0.t0 = context$1$0["catch"](4);
	        _didIteratorError3 = true;
	        _iteratorError3 = context$1$0.t0;

	      case 20:
	        context$1$0.prev = 20;
	        context$1$0.prev = 21;

	        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	          _iterator3["return"]();
	        }

	      case 23:
	        context$1$0.prev = 23;

	        if (!_didIteratorError3) {
	          context$1$0.next = 26;
	          break;
	        }

	        throw _iteratorError3;

	      case 26:
	        return context$1$0.finish(23);

	      case 27:
	        return context$1$0.finish(20);

	      case 28:
	        if (!saved) {
	          context$1$0.next = 32;
	          break;
	        }

	        return context$1$0.delegateYield(saved, "t1", 30);

	      case 30:
	        context$1$0.next = 28;
	        break;

	      case 32:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[4, 16, 20, 28], [21,, 23, 27]]);
	}));

	rewrapStaticMethod("count", _regeneratorRuntime.mark(function callee$0$0() {
	  var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var step = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	  var n;
	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        n = start;

	      case 1:
	        if (false) {
	          context$1$0.next = 7;
	          break;
	        }

	        context$1$0.next = 4;
	        return n;

	      case 4:
	        n += step;
	        context$1$0.next = 1;
	        break;

	      case 7:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	rewrapStaticMethod("repeat", _regeneratorRuntime.mark(function callee$0$0(thing) {
	  var times = arguments.length <= 1 || arguments[1] === undefined ? Infinity : arguments[1];
	  var i;
	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        if (!(times === Infinity)) {
	          context$1$0.next = 8;
	          break;
	        }

	      case 1:
	        if (false) {
	          context$1$0.next = 6;
	          break;
	        }

	        context$1$0.next = 4;
	        return thing;

	      case 4:
	        context$1$0.next = 1;
	        break;

	      case 6:
	        context$1$0.next = 15;
	        break;

	      case 8:
	        i = 0;

	      case 9:
	        if (!(i < times)) {
	          context$1$0.next = 15;
	          break;
	        }

	        context$1$0.next = 12;
	        return thing;

	      case 12:
	        i++;
	        context$1$0.next = 9;
	        break;

	      case 15:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	/*
	 * Iterators that terminate once the input sequence has been exhausted
	 */

	rewrapStaticMethod("chain", _regeneratorRuntime.mark(function callee$0$0() {
	  var _iteratorNormalCompletion4,
	      _didIteratorError4,
	      _iteratorError4,
	      _len5,
	      iterables,
	      _key5,
	      _iterator4,
	      _step4,
	      it,
	      args$1$0 = arguments;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion4 = true;
	        _didIteratorError4 = false;
	        _iteratorError4 = undefined;
	        context$1$0.prev = 3;

	        for (_len5 = args$1$0.length, iterables = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          iterables[_key5] = args$1$0[_key5];
	        }

	        _iterator4 = _getIterator(iterables);

	      case 6:
	        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        it = _step4.value;
	        return context$1$0.delegateYield(it, "t0", 9);

	      case 9:
	        _iteratorNormalCompletion4 = true;
	        context$1$0.next = 6;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t1 = context$1$0["catch"](3);
	        _didIteratorError4 = true;
	        _iteratorError4 = context$1$0.t1;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	          _iterator4["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError4) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError4;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	rewrapPrototypeAndStatic("chunk", _regeneratorRuntime.mark(function callee$0$0() {
	  var n = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

	  var items, index, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        items = [];
	        index = 0;
	        _iteratorNormalCompletion5 = true;
	        _didIteratorError5 = false;
	        _iteratorError5 = undefined;
	        context$1$0.prev = 5;
	        _iterator5 = _getIterator(this);

	      case 7:
	        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
	          context$1$0.next = 18;
	          break;
	        }

	        item = _step5.value;

	        items[index++] = item;

	        if (!(index === n)) {
	          context$1$0.next = 15;
	          break;
	        }

	        context$1$0.next = 13;
	        return items;

	      case 13:
	        items = [];
	        index = 0;

	      case 15:
	        _iteratorNormalCompletion5 = true;
	        context$1$0.next = 7;
	        break;

	      case 18:
	        context$1$0.next = 24;
	        break;

	      case 20:
	        context$1$0.prev = 20;
	        context$1$0.t0 = context$1$0["catch"](5);
	        _didIteratorError5 = true;
	        _iteratorError5 = context$1$0.t0;

	      case 24:
	        context$1$0.prev = 24;
	        context$1$0.prev = 25;

	        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	          _iterator5["return"]();
	        }

	      case 27:
	        context$1$0.prev = 27;

	        if (!_didIteratorError5) {
	          context$1$0.next = 30;
	          break;
	        }

	        throw _iteratorError5;

	      case 30:
	        return context$1$0.finish(27);

	      case 31:
	        return context$1$0.finish(24);

	      case 32:
	        if (!index) {
	          context$1$0.next = 35;
	          break;
	        }

	        context$1$0.next = 35;
	        return items;

	      case 35:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[5, 20, 24, 32], [25,, 27, 31]]);
	}), 1);

	rewrapPrototypeAndStatic("concatMap", _regeneratorRuntime.mark(function callee$0$0(fn) {
	  var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion6 = true;
	        _didIteratorError6 = false;
	        _iteratorError6 = undefined;
	        context$1$0.prev = 3;
	        _iterator6 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
	          context$1$0.next = 11;
	          break;
	        }

	        x = _step6.value;
	        return context$1$0.delegateYield(fn(x), "t0", 8);

	      case 8:
	        _iteratorNormalCompletion6 = true;
	        context$1$0.next = 5;
	        break;

	      case 11:
	        context$1$0.next = 17;
	        break;

	      case 13:
	        context$1$0.prev = 13;
	        context$1$0.t1 = context$1$0["catch"](3);
	        _didIteratorError6 = true;
	        _iteratorError6 = context$1$0.t1;

	      case 17:
	        context$1$0.prev = 17;
	        context$1$0.prev = 18;

	        if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	          _iterator6["return"]();
	        }

	      case 20:
	        context$1$0.prev = 20;

	        if (!_didIteratorError6) {
	          context$1$0.next = 23;
	          break;
	        }

	        throw _iteratorError6;

	      case 23:
	        return context$1$0.finish(20);

	      case 24:
	        return context$1$0.finish(17);

	      case 25:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 13, 17, 25], [18,, 20, 24]]);
	}));

	rewrapPrototypeAndStatic("drop", _regeneratorRuntime.mark(function callee$0$0(n) {
	  var i, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        i = 0;
	        _iteratorNormalCompletion7 = true;
	        _didIteratorError7 = false;
	        _iteratorError7 = undefined;
	        context$1$0.prev = 4;
	        _iterator7 = _getIterator(this);

	      case 6:
	        if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
	          context$1$0.next = 16;
	          break;
	        }

	        x = _step7.value;

	        if (!(i++ < n)) {
	          context$1$0.next = 10;
	          break;
	        }

	        return context$1$0.abrupt("continue", 13);

	      case 10:
	        context$1$0.next = 12;
	        return x;

	      case 12:
	        return context$1$0.abrupt("break", 16);

	      case 13:
	        _iteratorNormalCompletion7 = true;
	        context$1$0.next = 6;
	        break;

	      case 16:
	        context$1$0.next = 22;
	        break;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.t0 = context$1$0["catch"](4);
	        _didIteratorError7 = true;
	        _iteratorError7 = context$1$0.t0;

	      case 22:
	        context$1$0.prev = 22;
	        context$1$0.prev = 23;

	        if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	          _iterator7["return"]();
	        }

	      case 25:
	        context$1$0.prev = 25;

	        if (!_didIteratorError7) {
	          context$1$0.next = 28;
	          break;
	        }

	        throw _iteratorError7;

	      case 28:
	        return context$1$0.finish(25);

	      case 29:
	        return context$1$0.finish(22);

	      case 30:
	        return context$1$0.delegateYield(this, "t1", 31);

	      case 31:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[4, 18, 22, 30], [23,, 25, 29]]);
	}));

	rewrapPrototypeAndStatic("dropWhile", _regeneratorRuntime.mark(function callee$0$0() {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];

	  var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion8 = true;
	        _didIteratorError8 = false;
	        _iteratorError8 = undefined;
	        context$1$0.prev = 3;
	        _iterator8 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
	          context$1$0.next = 15;
	          break;
	        }

	        x = _step8.value;

	        if (!fn(x)) {
	          context$1$0.next = 9;
	          break;
	        }

	        return context$1$0.abrupt("continue", 12);

	      case 9:
	        context$1$0.next = 11;
	        return x;

	      case 11:
	        return context$1$0.abrupt("break", 15);

	      case 12:
	        _iteratorNormalCompletion8 = true;
	        context$1$0.next = 5;
	        break;

	      case 15:
	        context$1$0.next = 21;
	        break;

	      case 17:
	        context$1$0.prev = 17;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError8 = true;
	        _iteratorError8 = context$1$0.t0;

	      case 21:
	        context$1$0.prev = 21;
	        context$1$0.prev = 22;

	        if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
	          _iterator8["return"]();
	        }

	      case 24:
	        context$1$0.prev = 24;

	        if (!_didIteratorError8) {
	          context$1$0.next = 27;
	          break;
	        }

	        throw _iteratorError8;

	      case 27:
	        return context$1$0.finish(24);

	      case 28:
	        return context$1$0.finish(21);

	      case 29:
	        return context$1$0.delegateYield(this, "t1", 30);

	      case 30:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 17, 21, 29], [22,, 24, 28]]);
	}), 1);

	rewrapPrototypeAndStatic("enumerate", _regeneratorRuntime.mark(function callee$0$0() {
	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        return context$1$0.delegateYield(_zip([this, wu.count()]), "t0", 1);

	      case 1:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	rewrapPrototypeAndStatic("filter", _regeneratorRuntime.mark(function callee$0$0() {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];

	  var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion9 = true;
	        _didIteratorError9 = false;
	        _iteratorError9 = undefined;
	        context$1$0.prev = 3;
	        _iterator9 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
	          context$1$0.next = 13;
	          break;
	        }

	        x = _step9.value;

	        if (!fn(x)) {
	          context$1$0.next = 10;
	          break;
	        }

	        context$1$0.next = 10;
	        return x;

	      case 10:
	        _iteratorNormalCompletion9 = true;
	        context$1$0.next = 5;
	        break;

	      case 13:
	        context$1$0.next = 19;
	        break;

	      case 15:
	        context$1$0.prev = 15;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError9 = true;
	        _iteratorError9 = context$1$0.t0;

	      case 19:
	        context$1$0.prev = 19;
	        context$1$0.prev = 20;

	        if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
	          _iterator9["return"]();
	        }

	      case 22:
	        context$1$0.prev = 22;

	        if (!_didIteratorError9) {
	          context$1$0.next = 25;
	          break;
	        }

	        throw _iteratorError9;

	      case 25:
	        return context$1$0.finish(22);

	      case 26:
	        return context$1$0.finish(19);

	      case 27:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	}), 1);

	rewrapPrototypeAndStatic("flatten", _regeneratorRuntime.mark(function callee$0$0() {
	  var shallow = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	  var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion10 = true;
	        _didIteratorError10 = false;
	        _iteratorError10 = undefined;
	        context$1$0.prev = 3;
	        _iterator10 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
	          context$1$0.next = 16;
	          break;
	        }

	        x = _step10.value;

	        if (!(typeof x !== "string" && isIterable(x))) {
	          context$1$0.next = 11;
	          break;
	        }

	        return context$1$0.delegateYield(shallow ? x : wu(x).flatten(), "t0", 9);

	      case 9:
	        context$1$0.next = 13;
	        break;

	      case 11:
	        context$1$0.next = 13;
	        return x;

	      case 13:
	        _iteratorNormalCompletion10 = true;
	        context$1$0.next = 5;
	        break;

	      case 16:
	        context$1$0.next = 22;
	        break;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.t1 = context$1$0["catch"](3);
	        _didIteratorError10 = true;
	        _iteratorError10 = context$1$0.t1;

	      case 22:
	        context$1$0.prev = 22;
	        context$1$0.prev = 23;

	        if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
	          _iterator10["return"]();
	        }

	      case 25:
	        context$1$0.prev = 25;

	        if (!_didIteratorError10) {
	          context$1$0.next = 28;
	          break;
	        }

	        throw _iteratorError10;

	      case 28:
	        return context$1$0.finish(25);

	      case 29:
	        return context$1$0.finish(22);

	      case 30:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 18, 22, 30], [23,, 25, 29]]);
	}), 1);

	rewrapPrototypeAndStatic("invoke", _regeneratorRuntime.mark(function callee$0$0(name) {
	  var _iteratorNormalCompletion11,
	      _didIteratorError11,
	      _iteratorError11,
	      _len6,
	      args,
	      _key6,
	      _iterator11,
	      _step11,
	      x,
	      args$1$0 = arguments;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion11 = true;
	        _didIteratorError11 = false;
	        _iteratorError11 = undefined;
	        context$1$0.prev = 3;

	        for (_len6 = args$1$0.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	          args[_key6 - 1] = args$1$0[_key6];
	        }

	        _iterator11 = _getIterator(this);

	      case 6:
	        if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
	          context$1$0.next = 13;
	          break;
	        }

	        x = _step11.value;
	        context$1$0.next = 10;
	        return x[name].apply(x, args);

	      case 10:
	        _iteratorNormalCompletion11 = true;
	        context$1$0.next = 6;
	        break;

	      case 13:
	        context$1$0.next = 19;
	        break;

	      case 15:
	        context$1$0.prev = 15;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError11 = true;
	        _iteratorError11 = context$1$0.t0;

	      case 19:
	        context$1$0.prev = 19;
	        context$1$0.prev = 20;

	        if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
	          _iterator11["return"]();
	        }

	      case 22:
	        context$1$0.prev = 22;

	        if (!_didIteratorError11) {
	          context$1$0.next = 25;
	          break;
	        }

	        throw _iteratorError11;

	      case 25:
	        return context$1$0.finish(22);

	      case 26:
	        return context$1$0.finish(19);

	      case 27:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	}));

	rewrapPrototypeAndStatic("map", _regeneratorRuntime.mark(function callee$0$0(fn) {
	  var _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion12 = true;
	        _didIteratorError12 = false;
	        _iteratorError12 = undefined;
	        context$1$0.prev = 3;
	        _iterator12 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        x = _step12.value;
	        context$1$0.next = 9;
	        return fn(x);

	      case 9:
	        _iteratorNormalCompletion12 = true;
	        context$1$0.next = 5;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError12 = true;
	        _iteratorError12 = context$1$0.t0;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
	          _iterator12["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError12) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError12;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	rewrapPrototypeAndStatic("pluck", _regeneratorRuntime.mark(function callee$0$0(name) {
	  var _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion13 = true;
	        _didIteratorError13 = false;
	        _iteratorError13 = undefined;
	        context$1$0.prev = 3;
	        _iterator13 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        x = _step13.value;
	        context$1$0.next = 9;
	        return x[name];

	      case 9:
	        _iteratorNormalCompletion13 = true;
	        context$1$0.next = 5;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError13 = true;
	        _iteratorError13 = context$1$0.t0;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion13 && _iterator13["return"]) {
	          _iterator13["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError13) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError13;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	rewrapPrototypeAndStatic("reductions", _regeneratorRuntime.mark(function callee$0$0(fn) {
	  var initial = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

	  var val, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, x, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        val = initial;

	        if (!(val === undefined)) {
	          context$1$0.next = 28;
	          break;
	        }

	        _iteratorNormalCompletion14 = true;
	        _didIteratorError14 = false;
	        _iteratorError14 = undefined;
	        context$1$0.prev = 5;
	        _iterator14 = _getIterator(this);

	      case 7:
	        if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
	          context$1$0.next = 14;
	          break;
	        }

	        x = _step14.value;

	        val = x;
	        return context$1$0.abrupt("break", 14);

	      case 11:
	        _iteratorNormalCompletion14 = true;
	        context$1$0.next = 7;
	        break;

	      case 14:
	        context$1$0.next = 20;
	        break;

	      case 16:
	        context$1$0.prev = 16;
	        context$1$0.t0 = context$1$0["catch"](5);
	        _didIteratorError14 = true;
	        _iteratorError14 = context$1$0.t0;

	      case 20:
	        context$1$0.prev = 20;
	        context$1$0.prev = 21;

	        if (!_iteratorNormalCompletion14 && _iterator14["return"]) {
	          _iterator14["return"]();
	        }

	      case 23:
	        context$1$0.prev = 23;

	        if (!_didIteratorError14) {
	          context$1$0.next = 26;
	          break;
	        }

	        throw _iteratorError14;

	      case 26:
	        return context$1$0.finish(23);

	      case 27:
	        return context$1$0.finish(20);

	      case 28:
	        context$1$0.next = 30;
	        return val;

	      case 30:
	        _iteratorNormalCompletion15 = true;
	        _didIteratorError15 = false;
	        _iteratorError15 = undefined;
	        context$1$0.prev = 33;
	        _iterator15 = _getIterator(this);

	      case 35:
	        if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
	          context$1$0.next = 42;
	          break;
	        }

	        x = _step15.value;
	        context$1$0.next = 39;
	        return val = fn(val, x);

	      case 39:
	        _iteratorNormalCompletion15 = true;
	        context$1$0.next = 35;
	        break;

	      case 42:
	        context$1$0.next = 48;
	        break;

	      case 44:
	        context$1$0.prev = 44;
	        context$1$0.t1 = context$1$0["catch"](33);
	        _didIteratorError15 = true;
	        _iteratorError15 = context$1$0.t1;

	      case 48:
	        context$1$0.prev = 48;
	        context$1$0.prev = 49;

	        if (!_iteratorNormalCompletion15 && _iterator15["return"]) {
	          _iterator15["return"]();
	        }

	      case 51:
	        context$1$0.prev = 51;

	        if (!_didIteratorError15) {
	          context$1$0.next = 54;
	          break;
	        }

	        throw _iteratorError15;

	      case 54:
	        return context$1$0.finish(51);

	      case 55:
	        return context$1$0.finish(48);

	      case 56:
	        return context$1$0.abrupt("return", val);

	      case 57:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[5, 16, 20, 28], [21,, 23, 27], [33, 44, 48, 56], [49,, 51, 55]]);
	}), 2);

	rewrapPrototypeAndStatic("reject", _regeneratorRuntime.mark(function callee$0$0() {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];

	  var _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion16 = true;
	        _didIteratorError16 = false;
	        _iteratorError16 = undefined;
	        context$1$0.prev = 3;
	        _iterator16 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
	          context$1$0.next = 13;
	          break;
	        }

	        x = _step16.value;

	        if (fn(x)) {
	          context$1$0.next = 10;
	          break;
	        }

	        context$1$0.next = 10;
	        return x;

	      case 10:
	        _iteratorNormalCompletion16 = true;
	        context$1$0.next = 5;
	        break;

	      case 13:
	        context$1$0.next = 19;
	        break;

	      case 15:
	        context$1$0.prev = 15;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError16 = true;
	        _iteratorError16 = context$1$0.t0;

	      case 19:
	        context$1$0.prev = 19;
	        context$1$0.prev = 20;

	        if (!_iteratorNormalCompletion16 && _iterator16["return"]) {
	          _iterator16["return"]();
	        }

	      case 22:
	        context$1$0.prev = 22;

	        if (!_didIteratorError16) {
	          context$1$0.next = 25;
	          break;
	        }

	        throw _iteratorError16;

	      case 25:
	        return context$1$0.finish(22);

	      case 26:
	        return context$1$0.finish(19);

	      case 27:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	}), 1);

	rewrapPrototypeAndStatic("slice", _regeneratorRuntime.mark(function callee$0$0() {
	  var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  var stop = arguments.length <= 1 || arguments[1] === undefined ? Infinity : arguments[1];

	  var _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _step17$value, x, i;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        if (!(stop < start)) {
	          context$1$0.next = 2;
	          break;
	        }

	        throw new RangeError("parameter `stop` (= " + stop + ") must be >= `start` (= " + start + ")");

	      case 2:
	        _iteratorNormalCompletion17 = true;
	        _didIteratorError17 = false;
	        _iteratorError17 = undefined;
	        context$1$0.prev = 5;
	        _iterator17 = _getIterator(this.enumerate());

	      case 7:
	        if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
	          context$1$0.next = 20;
	          break;
	        }

	        _step17$value = _slicedToArray(_step17.value, 2);
	        x = _step17$value[0];
	        i = _step17$value[1];

	        if (!(i < start)) {
	          context$1$0.next = 13;
	          break;
	        }

	        return context$1$0.abrupt("continue", 17);

	      case 13:
	        if (!(i >= stop)) {
	          context$1$0.next = 15;
	          break;
	        }

	        return context$1$0.abrupt("break", 20);

	      case 15:
	        context$1$0.next = 17;
	        return x;

	      case 17:
	        _iteratorNormalCompletion17 = true;
	        context$1$0.next = 7;
	        break;

	      case 20:
	        context$1$0.next = 26;
	        break;

	      case 22:
	        context$1$0.prev = 22;
	        context$1$0.t0 = context$1$0["catch"](5);
	        _didIteratorError17 = true;
	        _iteratorError17 = context$1$0.t0;

	      case 26:
	        context$1$0.prev = 26;
	        context$1$0.prev = 27;

	        if (!_iteratorNormalCompletion17 && _iterator17["return"]) {
	          _iterator17["return"]();
	        }

	      case 29:
	        context$1$0.prev = 29;

	        if (!_didIteratorError17) {
	          context$1$0.next = 32;
	          break;
	        }

	        throw _iteratorError17;

	      case 32:
	        return context$1$0.finish(29);

	      case 33:
	        return context$1$0.finish(26);

	      case 34:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[5, 22, 26, 34], [27,, 29, 33]]);
	}), 2);

	rewrapPrototypeAndStatic("spreadMap", _regeneratorRuntime.mark(function callee$0$0(fn) {
	  var _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion18 = true;
	        _didIteratorError18 = false;
	        _iteratorError18 = undefined;
	        context$1$0.prev = 3;
	        _iterator18 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
	          context$1$0.next = 12;
	          break;
	        }

	        x = _step18.value;
	        context$1$0.next = 9;
	        return fn.apply(undefined, _toConsumableArray(x));

	      case 9:
	        _iteratorNormalCompletion18 = true;
	        context$1$0.next = 5;
	        break;

	      case 12:
	        context$1$0.next = 18;
	        break;

	      case 14:
	        context$1$0.prev = 14;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError18 = true;
	        _iteratorError18 = context$1$0.t0;

	      case 18:
	        context$1$0.prev = 18;
	        context$1$0.prev = 19;

	        if (!_iteratorNormalCompletion18 && _iterator18["return"]) {
	          _iterator18["return"]();
	        }

	      case 21:
	        context$1$0.prev = 21;

	        if (!_didIteratorError18) {
	          context$1$0.next = 24;
	          break;
	        }

	        throw _iteratorError18;

	      case 24:
	        return context$1$0.finish(21);

	      case 25:
	        return context$1$0.finish(18);

	      case 26:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	}));

	rewrapPrototypeAndStatic("take", _regeneratorRuntime.mark(function callee$0$0(n) {
	  var i, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        if (!(n < 1)) {
	          context$1$0.next = 2;
	          break;
	        }

	        return context$1$0.abrupt("return");

	      case 2:
	        i = 0;
	        _iteratorNormalCompletion19 = true;
	        _didIteratorError19 = false;
	        _iteratorError19 = undefined;
	        context$1$0.prev = 6;
	        _iterator19 = _getIterator(this);

	      case 8:
	        if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
	          context$1$0.next = 17;
	          break;
	        }

	        x = _step19.value;
	        context$1$0.next = 12;
	        return x;

	      case 12:
	        if (!(++i >= n)) {
	          context$1$0.next = 14;
	          break;
	        }

	        return context$1$0.abrupt("break", 17);

	      case 14:
	        _iteratorNormalCompletion19 = true;
	        context$1$0.next = 8;
	        break;

	      case 17:
	        context$1$0.next = 23;
	        break;

	      case 19:
	        context$1$0.prev = 19;
	        context$1$0.t0 = context$1$0["catch"](6);
	        _didIteratorError19 = true;
	        _iteratorError19 = context$1$0.t0;

	      case 23:
	        context$1$0.prev = 23;
	        context$1$0.prev = 24;

	        if (!_iteratorNormalCompletion19 && _iterator19["return"]) {
	          _iterator19["return"]();
	        }

	      case 26:
	        context$1$0.prev = 26;

	        if (!_didIteratorError19) {
	          context$1$0.next = 29;
	          break;
	        }

	        throw _iteratorError19;

	      case 29:
	        return context$1$0.finish(26);

	      case 30:
	        return context$1$0.finish(23);

	      case 31:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[6, 19, 23, 31], [24,, 26, 30]]);
	}));

	rewrapPrototypeAndStatic("takeWhile", _regeneratorRuntime.mark(function callee$0$0() {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];

	  var _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion20 = true;
	        _didIteratorError20 = false;
	        _iteratorError20 = undefined;
	        context$1$0.prev = 3;
	        _iterator20 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
	          context$1$0.next = 14;
	          break;
	        }

	        x = _step20.value;

	        if (fn(x)) {
	          context$1$0.next = 9;
	          break;
	        }

	        return context$1$0.abrupt("break", 14);

	      case 9:
	        context$1$0.next = 11;
	        return x;

	      case 11:
	        _iteratorNormalCompletion20 = true;
	        context$1$0.next = 5;
	        break;

	      case 14:
	        context$1$0.next = 20;
	        break;

	      case 16:
	        context$1$0.prev = 16;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError20 = true;
	        _iteratorError20 = context$1$0.t0;

	      case 20:
	        context$1$0.prev = 20;
	        context$1$0.prev = 21;

	        if (!_iteratorNormalCompletion20 && _iterator20["return"]) {
	          _iterator20["return"]();
	        }

	      case 23:
	        context$1$0.prev = 23;

	        if (!_didIteratorError20) {
	          context$1$0.next = 26;
	          break;
	        }

	        throw _iteratorError20;

	      case 26:
	        return context$1$0.finish(23);

	      case 27:
	        return context$1$0.finish(20);

	      case 28:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
	}), 1);

	rewrapPrototypeAndStatic("tap", _regeneratorRuntime.mark(function callee$0$0() {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? console.log.bind(console) : arguments[0];

	  var _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        _iteratorNormalCompletion21 = true;
	        _didIteratorError21 = false;
	        _iteratorError21 = undefined;
	        context$1$0.prev = 3;
	        _iterator21 = _getIterator(this);

	      case 5:
	        if (_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done) {
	          context$1$0.next = 13;
	          break;
	        }

	        x = _step21.value;

	        fn(x);
	        context$1$0.next = 10;
	        return x;

	      case 10:
	        _iteratorNormalCompletion21 = true;
	        context$1$0.next = 5;
	        break;

	      case 13:
	        context$1$0.next = 19;
	        break;

	      case 15:
	        context$1$0.prev = 15;
	        context$1$0.t0 = context$1$0["catch"](3);
	        _didIteratorError21 = true;
	        _iteratorError21 = context$1$0.t0;

	      case 19:
	        context$1$0.prev = 19;
	        context$1$0.prev = 20;

	        if (!_iteratorNormalCompletion21 && _iterator21["return"]) {
	          _iterator21["return"]();
	        }

	      case 22:
	        context$1$0.prev = 22;

	        if (!_didIteratorError21) {
	          context$1$0.next = 25;
	          break;
	        }

	        throw _iteratorError21;

	      case 25:
	        return context$1$0.finish(22);

	      case 26:
	        return context$1$0.finish(19);

	      case 27:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	}), 1);

	rewrapPrototypeAndStatic("unique", _regeneratorRuntime.mark(function callee$0$0() {
	  var seen, _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, x;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        seen = new _Set();
	        _iteratorNormalCompletion22 = true;
	        _didIteratorError22 = false;
	        _iteratorError22 = undefined;
	        context$1$0.prev = 4;
	        _iterator22 = _getIterator(this);

	      case 6:
	        if (_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done) {
	          context$1$0.next = 15;
	          break;
	        }

	        x = _step22.value;

	        if (seen.has(x)) {
	          context$1$0.next = 12;
	          break;
	        }

	        context$1$0.next = 11;
	        return x;

	      case 11:
	        seen.add(x);

	      case 12:
	        _iteratorNormalCompletion22 = true;
	        context$1$0.next = 6;
	        break;

	      case 15:
	        context$1$0.next = 21;
	        break;

	      case 17:
	        context$1$0.prev = 17;
	        context$1$0.t0 = context$1$0["catch"](4);
	        _didIteratorError22 = true;
	        _iteratorError22 = context$1$0.t0;

	      case 21:
	        context$1$0.prev = 21;
	        context$1$0.prev = 22;

	        if (!_iteratorNormalCompletion22 && _iterator22["return"]) {
	          _iterator22["return"]();
	        }

	      case 24:
	        context$1$0.prev = 24;

	        if (!_didIteratorError22) {
	          context$1$0.next = 27;
	          break;
	        }

	        throw _iteratorError22;

	      case 27:
	        return context$1$0.finish(24);

	      case 28:
	        return context$1$0.finish(21);

	      case 29:
	        seen.clear();

	      case 30:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
	}));

	var _zip = rewrap(_regeneratorRuntime.mark(function callee$0$0(iterables) {
	  var longest = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  var iters, numIters, numFinished, finished, zipped, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, it, _it$next, value, done;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        if (iterables.length) {
	          context$1$0.next = 2;
	          break;
	        }

	        return context$1$0.abrupt("return");

	      case 2:
	        iters = iterables.map(getIterator);
	        numIters = iterables.length;
	        numFinished = 0;
	        finished = false;

	      case 6:
	        if (finished) {
	          context$1$0.next = 44;
	          break;
	        }

	        zipped = [];
	        _iteratorNormalCompletion23 = true;
	        _didIteratorError23 = false;
	        _iteratorError23 = undefined;
	        context$1$0.prev = 11;
	        _iterator23 = _getIterator(iters);

	      case 13:
	        if (_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done) {
	          context$1$0.next = 26;
	          break;
	        }

	        it = _step23.value;
	        _it$next = it.next();
	        value = _it$next.value;
	        done = _it$next.done;

	        if (!done) {
	          context$1$0.next = 22;
	          break;
	        }

	        if (longest) {
	          context$1$0.next = 21;
	          break;
	        }

	        return context$1$0.abrupt("return");

	      case 21:
	        if (++numFinished == numIters) {
	          finished = true;
	        }

	      case 22:
	        if (value === undefined) {
	          // Leave a hole in the array so that you can distinguish an iterable
	          // that's done (via `index in array == false`) from an iterable
	          // yielding `undefined`.
	          zipped.length++;
	        } else {
	          zipped.push(value);
	        }

	      case 23:
	        _iteratorNormalCompletion23 = true;
	        context$1$0.next = 13;
	        break;

	      case 26:
	        context$1$0.next = 32;
	        break;

	      case 28:
	        context$1$0.prev = 28;
	        context$1$0.t0 = context$1$0["catch"](11);
	        _didIteratorError23 = true;
	        _iteratorError23 = context$1$0.t0;

	      case 32:
	        context$1$0.prev = 32;
	        context$1$0.prev = 33;

	        if (!_iteratorNormalCompletion23 && _iterator23["return"]) {
	          _iterator23["return"]();
	        }

	      case 35:
	        context$1$0.prev = 35;

	        if (!_didIteratorError23) {
	          context$1$0.next = 38;
	          break;
	        }

	        throw _iteratorError23;

	      case 38:
	        return context$1$0.finish(35);

	      case 39:
	        return context$1$0.finish(32);

	      case 40:
	        context$1$0.next = 42;
	        return zipped;

	      case 42:
	        context$1$0.next = 6;
	        break;

	      case 44:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this, [[11, 28, 32, 40], [33,, 35, 39]]);
	}));

	rewrapStaticMethod("zip", _regeneratorRuntime.mark(function callee$0$0() {
	  for (var _len7 = arguments.length, iterables = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	    iterables[_key7] = arguments[_key7];
	  }

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        return context$1$0.delegateYield(_zip(iterables), "t0", 1);

	      case 1:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	rewrapStaticMethod("zipLongest", _regeneratorRuntime.mark(function callee$0$0() {
	  for (var _len8 = arguments.length, iterables = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	    iterables[_key8] = arguments[_key8];
	  }

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        return context$1$0.delegateYield(_zip(iterables, true), "t0", 1);

	      case 1:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	rewrapStaticMethod("zipWith", _regeneratorRuntime.mark(function callee$0$0(fn) {
	  for (var _len9 = arguments.length, iterables = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
	    iterables[_key9 - 1] = arguments[_key9];
	  }

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        return context$1$0.delegateYield(_zip(iterables).spreadMap(fn), "t0", 1);

	      case 1:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));

	/*
	 * Functions that force iteration to completion and return a value.
	 */

	// The maximum number of milliseconds we will block the main thread at a time
	// while in `asyncEach`.
	wu.MAX_BLOCK = 15;
	// The number of milliseconds to yield to the main thread between bursts of
	// work.
	wu.TIMEOUT = 1;

	prototypeAndStatic("asyncEach", function (fn) {
	  var maxBlock = arguments.length <= 1 || arguments[1] === undefined ? wu.MAX_BLOCK : arguments[1];
	  var timeout = arguments.length <= 2 || arguments[2] === undefined ? wu.TIMEOUT : arguments[2];

	  var iter = getIterator(this);

	  return new _Promise(function (resolve, reject) {
	    (function loop() {
	      var start = Date.now();

	      var _iteratorNormalCompletion24 = true;
	      var _didIteratorError24 = false;
	      var _iteratorError24 = undefined;

	      try {
	        for (var _iterator24 = _getIterator(iter), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
	          var x = _step24.value;

	          try {
	            fn(x);
	          } catch (e) {
	            reject(e);
	            return;
	          }

	          if (Date.now() - start > maxBlock) {
	            setTimeout(loop, timeout);
	            return;
	          }
	        }
	      } catch (err) {
	        _didIteratorError24 = true;
	        _iteratorError24 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion24 && _iterator24["return"]) {
	            _iterator24["return"]();
	          }
	        } finally {
	          if (_didIteratorError24) {
	            throw _iteratorError24;
	          }
	        }
	      }

	      resolve();
	    })();
	  });
	}, 3);

	prototypeAndStatic("every", function () {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];
	  var _iteratorNormalCompletion25 = true;
	  var _didIteratorError25 = false;
	  var _iteratorError25 = undefined;

	  try {
	    for (var _iterator25 = _getIterator(this), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
	      var x = _step25.value;

	      if (!fn(x)) {
	        return false;
	      }
	    }
	  } catch (err) {
	    _didIteratorError25 = true;
	    _iteratorError25 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion25 && _iterator25["return"]) {
	        _iterator25["return"]();
	      }
	    } finally {
	      if (_didIteratorError25) {
	        throw _iteratorError25;
	      }
	    }
	  }

	  return true;
	}, 1);

	prototypeAndStatic("find", function (fn) {
	  var _iteratorNormalCompletion26 = true;
	  var _didIteratorError26 = false;
	  var _iteratorError26 = undefined;

	  try {
	    for (var _iterator26 = _getIterator(this), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
	      var x = _step26.value;

	      if (fn(x)) {
	        return x;
	      }
	    }
	  } catch (err) {
	    _didIteratorError26 = true;
	    _iteratorError26 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion26 && _iterator26["return"]) {
	        _iterator26["return"]();
	      }
	    } finally {
	      if (_didIteratorError26) {
	        throw _iteratorError26;
	      }
	    }
	  }
	});

	prototypeAndStatic("forEach", function (fn) {
	  var _iteratorNormalCompletion27 = true;
	  var _didIteratorError27 = false;
	  var _iteratorError27 = undefined;

	  try {
	    for (var _iterator27 = _getIterator(this), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
	      var x = _step27.value;

	      fn(x);
	    }
	  } catch (err) {
	    _didIteratorError27 = true;
	    _iteratorError27 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion27 && _iterator27["return"]) {
	        _iterator27["return"]();
	      }
	    } finally {
	      if (_didIteratorError27) {
	        throw _iteratorError27;
	      }
	    }
	  }
	});

	prototypeAndStatic("has", function (thing) {
	  return this.some(function (x) {
	    return x === thing;
	  });
	});

	prototypeAndStatic("reduce", function (fn) {
	  var initial = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

	  var val = initial;
	  if (val === undefined) {
	    var _iteratorNormalCompletion28 = true;
	    var _didIteratorError28 = false;
	    var _iteratorError28 = undefined;

	    try {
	      for (var _iterator28 = _getIterator(this), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
	        var x = _step28.value;

	        val = x;
	        break;
	      }
	    } catch (err) {
	      _didIteratorError28 = true;
	      _iteratorError28 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion28 && _iterator28["return"]) {
	          _iterator28["return"]();
	        }
	      } finally {
	        if (_didIteratorError28) {
	          throw _iteratorError28;
	        }
	      }
	    }
	  }

	  var _iteratorNormalCompletion29 = true;
	  var _didIteratorError29 = false;
	  var _iteratorError29 = undefined;

	  try {
	    for (var _iterator29 = _getIterator(this), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
	      var x = _step29.value;

	      val = fn(val, x);
	    }
	  } catch (err) {
	    _didIteratorError29 = true;
	    _iteratorError29 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion29 && _iterator29["return"]) {
	        _iterator29["return"]();
	      }
	    } finally {
	      if (_didIteratorError29) {
	        throw _iteratorError29;
	      }
	    }
	  }

	  return val;
	}, 2);

	prototypeAndStatic("some", function () {
	  var fn = arguments.length <= 0 || arguments[0] === undefined ? Boolean : arguments[0];
	  var _iteratorNormalCompletion30 = true;
	  var _didIteratorError30 = false;
	  var _iteratorError30 = undefined;

	  try {
	    for (var _iterator30 = _getIterator(this), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
	      var x = _step30.value;

	      if (fn(x)) {
	        return true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError30 = true;
	    _iteratorError30 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion30 && _iterator30["return"]) {
	        _iterator30["return"]();
	      }
	    } finally {
	      if (_didIteratorError30) {
	        throw _iteratorError30;
	      }
	    }
	  }

	  return false;
	}, 1);

	prototypeAndStatic("toArray", function () {
	  return [].concat(_toConsumableArray(this));
	});

	/*
	 * Methods that return an array of iterables.
	 */

	var MAX_CACHE = 500;

	var _tee = rewrap(_regeneratorRuntime.mark(function callee$0$0(iterator, cache) {
	  var items, index, _iterator$next, done, value;

	  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
	    while (1) switch (context$1$0.prev = context$1$0.next) {
	      case 0:
	        items = cache.items;
	        index = 0;

	      case 2:
	        if (false) {
	          context$1$0.next = 25;
	          break;
	        }

	        if (!(index === items.length)) {
	          context$1$0.next = 14;
	          break;
	        }

	        _iterator$next = iterator.next();
	        done = _iterator$next.done;
	        value = _iterator$next.value;

	        if (!done) {
	          context$1$0.next = 10;
	          break;
	        }

	        if (cache.returned === MISSING) {
	          cache.returned = value;
	        }
	        return context$1$0.abrupt("break", 25);

	      case 10:
	        context$1$0.next = 12;
	        return items[index++] = value;

	      case 12:
	        context$1$0.next = 23;
	        break;

	      case 14:
	        if (!(index === cache.tail)) {
	          context$1$0.next = 21;
	          break;
	        }

	        value = items[index];

	        if (index === MAX_CACHE) {
	          items = cache.items = items.slice(index);
	          index = 0;
	          cache.tail = 0;
	        } else {
	          items[index] = undefined;
	          cache.tail = ++index;
	        }
	        context$1$0.next = 19;
	        return value;

	      case 19:
	        context$1$0.next = 23;
	        break;

	      case 21:
	        context$1$0.next = 23;
	        return items[index++];

	      case 23:
	        context$1$0.next = 2;
	        break;

	      case 25:

	        if (cache.tail === index) {
	          items.length = 0;
	        }

	        return context$1$0.abrupt("return", cache.returned);

	      case 27:
	      case "end":
	        return context$1$0.stop();
	    }
	  }, callee$0$0, this);
	}));
	_tee.prototype = Wu.prototype;

	prototypeAndStatic("tee", function () {
	  var n = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

	  var iterables = new Array(n);
	  var cache = { tail: 0, items: [], returned: MISSING };

	  while (n--) {
	    iterables[n] = _tee(this, cache);
	  }

	  return iterables;
	}, 1);

	prototypeAndStatic("unzip", function () {
	  var n = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

	  return this.tee(n).map(function (iter, i) {
	    return iter.pluck(i);
	  });
	}, 1);

	/*
	 * Number of chambers.
	 */

	wu.tang = { clan: 36 };

	// We don't have a cached item for this index, we need to force its
	// evaluation.

	// If we are the last iterator to use a cached value, clean up after
	// ourselves.

	// We have an item in the cache for this index, so yield it.

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(2)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(26);
	module.exports = __webpack_require__(12).Array.from;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(5)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(8)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(6)
	  , defined   = __webpack_require__(7);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(9)
	  , $def            = __webpack_require__(10)
	  , $redef          = __webpack_require__(13)
	  , hide            = __webpack_require__(14)
	  , has             = __webpack_require__(19)
	  , SYMBOL_ITERATOR = __webpack_require__(20)('iterator')
	  , Iterators       = __webpack_require__(23)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(24)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(15).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(25)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(15)
	  , createDesc = __webpack_require__(16);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(21)('wks')
	  , Symbol = __webpack_require__(11).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(22))('Symbol.' + name));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(15)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(20)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(16)(1,next)});
	  __webpack_require__(25)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(19)
	  , hide = __webpack_require__(14)
	  , TAG  = __webpack_require__(20)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(27)
	  , $def        = __webpack_require__(10)
	  , toObject    = __webpack_require__(29)
	  , call        = __webpack_require__(30)
	  , isArrayIter = __webpack_require__(33)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(35);
	$def($def.S + $def.F * !__webpack_require__(38)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(28);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(31);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(23)
	  , ITERATOR  = __webpack_require__(20)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(6)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(36)
	  , ITERATOR  = __webpack_require__(20)('iterator')
	  , Iterators = __webpack_require__(23);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(37)
	  , TAG = __webpack_require__(20)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(20)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator = __webpack_require__(40)["default"];

	var _isIterable = __webpack_require__(49)["default"];

	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(4);
	module.exports = __webpack_require__(48);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43);
	var Iterators = __webpack_require__(23);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(44)
	  , step       = __webpack_require__(45)
	  , Iterators  = __webpack_require__(23)
	  , toIObject  = __webpack_require__(46);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(8)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(47)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(37);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(31)
	  , get      = __webpack_require__(35);
	module.exports = __webpack_require__(12).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(4);
	module.exports = __webpack_require__(51);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(36)
	  , ITERATOR  = __webpack_require__(20)('iterator')
	  , Iterators = __webpack_require__(23);
	module.exports = __webpack_require__(12).isIterable = function(it){
	  var O = Object(it);
	  return ITERATOR in O || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(42);
	module.exports = __webpack_require__(20)('iterator');

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(55);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(57)["default"];

	var _Symbol$iterator = __webpack_require__(52)["default"];

	var _Object$create = __webpack_require__(63)["default"];

	var _Promise = __webpack_require__(65)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator.
	      previousPromise = enqueueResult["catch"](function (ignored) {});

	      return enqueueResult;
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(56)))

/***/ },
/* 56 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	module.exports = __webpack_require__(12).Symbol;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(15)
	  , global         = __webpack_require__(11)
	  , has            = __webpack_require__(19)
	  , SUPPORT_DESC   = __webpack_require__(17)
	  , $def           = __webpack_require__(10)
	  , $redef         = __webpack_require__(13)
	  , $fails         = __webpack_require__(18)
	  , shared         = __webpack_require__(21)
	  , setTag         = __webpack_require__(25)
	  , uid            = __webpack_require__(22)
	  , wks            = __webpack_require__(20)
	  , keyOf          = __webpack_require__(60)
	  , $names         = __webpack_require__(61)
	  , enumKeys       = __webpack_require__(62)
	  , isObject       = __webpack_require__(32)
	  , anObject       = __webpack_require__(31)
	  , toIObject      = __webpack_require__(46)
	  , createDesc     = __webpack_require__(16)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = SUPPORT_DESC && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(SUPPORT_DESC && !__webpack_require__(9)){
	    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	// MS Edge converts symbol values to JSON as {}
	if(!useNative || $fails(function(){
	  return JSON.stringify([$Symbol()]) != '[null]';
	}))$redef($Symbol.prototype, 'toJSON', function toJSON(){
	  if(useNative && isObject(this))return this;
	});

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(15)
	  , toIObject = __webpack_require__(46);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(46)
	  , getNames  = __webpack_require__(15).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(15);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(15);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(4);
	__webpack_require__(42);
	__webpack_require__(68);
	module.exports = __webpack_require__(12).Promise;

/***/ },
/* 67 */
/***/ function(module, exports) {

	

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(15)
	  , LIBRARY    = __webpack_require__(9)
	  , global     = __webpack_require__(11)
	  , ctx        = __webpack_require__(27)
	  , classof    = __webpack_require__(36)
	  , $def       = __webpack_require__(10)
	  , isObject   = __webpack_require__(32)
	  , anObject   = __webpack_require__(31)
	  , aFunction  = __webpack_require__(28)
	  , strictNew  = __webpack_require__(69)
	  , forOf      = __webpack_require__(70)
	  , setProto   = __webpack_require__(71).set
	  , same       = __webpack_require__(72)
	  , species    = __webpack_require__(73)
	  , SPECIES    = __webpack_require__(20)('species')
	  , RECORD     = __webpack_require__(22)('record')
	  , asap       = __webpack_require__(74)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(17)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(79)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(25)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(12)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(38)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(27)
	  , call        = __webpack_require__(30)
	  , isArrayIter = __webpack_require__(33)
	  , anObject    = __webpack_require__(31)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(35);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(15).getDesc
	  , isObject = __webpack_require__(32)
	  , anObject = __webpack_require__(31);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(27)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(15)
	  , SPECIES = __webpack_require__(20)('species');
	module.exports = function(C){
	  if(__webpack_require__(17) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , macrotask = __webpack_require__(75).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(37)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	}

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(27)
	  , invoke             = __webpack_require__(76)
	  , html               = __webpack_require__(77)
	  , cel                = __webpack_require__(78)
	  , global             = __webpack_require__(11)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(37)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(13);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(12).Object.keys;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(29);

	__webpack_require__(83)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(10)
	    , fn   = (__webpack_require__(12).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(18)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(4);
	__webpack_require__(42);
	__webpack_require__(86);
	__webpack_require__(89);
	module.exports = __webpack_require__(12).Set;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(87);

	// 23.2 Set Objects
	__webpack_require__(88)('Set', function(get){
	  return function Set(){ return get(this, arguments[0]); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(15)
	  , hide         = __webpack_require__(14)
	  , ctx          = __webpack_require__(27)
	  , species      = __webpack_require__(73)
	  , strictNew    = __webpack_require__(69)
	  , defined      = __webpack_require__(7)
	  , forOf        = __webpack_require__(70)
	  , step         = __webpack_require__(45)
	  , ID           = __webpack_require__(22)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(32)
	  , isExtensible = Object.isExtensible || isObject
	  , SUPPORT_DESC = __webpack_require__(17)
	  , SIZE         = SUPPORT_DESC ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(79)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments[1], 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    __webpack_require__(8)(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    species(C);
	    species(__webpack_require__(12)[NAME]); // for wrapper
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(15)
	  , $def       = __webpack_require__(10)
	  , hide       = __webpack_require__(14)
	  , forOf      = __webpack_require__(70)
	  , strictNew  = __webpack_require__(69);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = __webpack_require__(11)[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!__webpack_require__(17) || typeof C != 'function'
	    || !(IS_WEAK || proto.forEach && !__webpack_require__(18)(function(){ new C().entries().next(); }))
	  ){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(79)(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var chain = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  __webpack_require__(25)(C, NAME);

	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(10);

	$def($def.P, 'Set', {toJSON: __webpack_require__(90)('Set')});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(70)
	  , classof = __webpack_require__(36);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ }
/******/ ])
});
;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
const Constants = {
  APP_NAME: "Metadata Parser",
  BASE_PATH: "resource://metadataparser/"
};

const Utils = { Constants };



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const urlparse = __webpack_require__(10);
const {dom, rule, ruleset} = __webpack_require__(4);

function makeUrlAbsolute(base, relative) {
  const relativeParsed = urlparse.parse(relative);

  if (relativeParsed.host === null) {
    return urlparse.resolve(base, relative);
  }

  return relative;
}

function getProvider(url) {
  return urlparse.parse(url)
    .hostname
    .replace(/www[a-zA-Z0-9]*\./, '')
    .replace('.co.', '.')
    .split('.')
    .slice(0, -1)
    .join(' ');
}

function buildRuleset(name, rules, processors, scorers) {
  const reversedRules = Array.from(rules).reverse();
  const builtRuleset = ruleset(...reversedRules.map(([query, handler], order) => rule(
    dom(query),
    node => {
      let score = order;

      if (scorers) {
        scorers.forEach(scorer => {
          const newScore = scorer(node, score);

          if (newScore) {
            score = newScore;
          }
        });
      }

      return [{
        flavor: name,
        score: score,
        notes: handler(node),
      }];
    }
  )));

  return (doc, context) => {
    const kb = builtRuleset.score(doc);
    const maxNode = kb.max(name);

    if (maxNode) {
      let value = maxNode.flavors.get(name);

      if (processors) {
        processors.forEach(processor => {
          value = processor(value, context);
        });
      }

      if (value) {
        if (value.trim) {
          return value.trim();
        }
        return value;
      }
    }
  };
}

const metadataRules = {
  description: {
    rules: [
      ['meta[property="og:description"]', node => node.element.getAttribute('content')],
      ['meta[name="description"]', node => node.element.getAttribute('content')],
    ],
  },

  icon_url: {
    rules: [
      ['link[rel="apple-touch-icon"]', node => node.element.getAttribute('href')],
      ['link[rel="apple-touch-icon-precomposed"]', node => node.element.getAttribute('href')],
      ['link[rel="icon"]', node => node.element.getAttribute('href')],
      ['link[rel="fluid-icon"]', node => node.element.getAttribute('href')],
      ['link[rel="shortcut icon"]', node => node.element.getAttribute('href')],
      ['link[rel="Shortcut Icon"]', node => node.element.getAttribute('href')],
      ['link[rel="mask-icon"]', node => node.element.getAttribute('href')],
    ],
    scorers: [
      // Handles the case where multiple icons are listed with specific sizes ie
      // <link rel="icon" href="small.png" sizes="16x16">
      // <link rel="icon" href="large.png" sizes="32x32">
      (node, score) => {
        const sizes = node.element.getAttribute('sizes');

        if (sizes) {
          const sizeMatches = sizes.match(/\d+/g);

          if (sizeMatches) {
            return sizeMatches.reduce((a, b) => a * b);
          }
        }
      }
    ],
    processors: [
      (icon_url, context) => makeUrlAbsolute(context.url, icon_url)
    ]
  },

  image_url: {
    rules: [
      ['meta[property="og:image:secure_url"]', node => node.element.getAttribute('content')],
      ['meta[property="og:image:url"]', node => node.element.getAttribute('content')],
      ['meta[property="og:image"]', node => node.element.getAttribute('content')],
      ['meta[name="twitter:image"]', node => node.element.getAttribute('content')],
      ['meta[property="twitter:image"]', node => node.element.getAttribute('content')],
      ['meta[name="thumbnail"]', node => node.element.getAttribute('content')],
    ],
    processors: [
      (image_url, context) => makeUrlAbsolute(context.url, image_url)
    ],
  },

  keywords: {
    rules: [
      ['meta[name="keywords"]', node => node.element.getAttribute('content')],
    ],
    processors: [
      (keywords) => keywords.split(',').map((keyword) => keyword.trim()),
    ]
  },

  title: {
    rules: [
      ['meta[property="og:title"]', node => node.element.getAttribute('content')],
      ['meta[name="twitter:title"]', node => node.element.getAttribute('content')],
      ['meta[property="twitter:title"]', node => node.element.getAttribute('content')],
      ['meta[name="hdl"]', node => node.element.getAttribute('content')],
      ['title', node => node.element.text],
    ],
  },

  type: {
    rules: [
      ['meta[property="og:type"]', node => node.element.getAttribute('content')],
    ],
  },

  url: {
    rules: [
      ['meta[property="og:url"]', node => node.element.getAttribute('content')],
      ['link[rel="canonical"]', node => node.element.getAttribute('href')],
    ],
    processors: [
      (url, context) => makeUrlAbsolute(context.url, url)
    ]
  },

  provider: {
    rules: [
      ['meta[property="og:site_name"]', node => node.element.getAttribute('content')]
    ]
  },
};

function getMetadata(doc, url, rules) {
  const metadata = {};
  const context = {url};
  const ruleSet = rules || metadataRules;

  Object.keys(ruleSet).map(metadataKey => {
    const metadataRule = ruleSet[metadataKey];

    if(Array.isArray(metadataRule.rules)) {
      const builtRule = buildRuleset(
        metadataKey,
        metadataRule.rules,
        metadataRule.processors,
        metadataRule.scorers
      );

      metadata[metadataKey] = builtRule(doc, context);
    } else {
      metadata[metadataKey] = getMetadata(doc, url, metadataRule);
    }
  });

  if(!metadata.url) {
    metadata.url = url;
  }

  if(url && !metadata.provider) {
    metadata.provider = getProvider(url);
  }

  if(url && !metadata.icon_url) {
    metadata.icon_url = makeUrlAbsolute(url, '/favicon.ico');
  }

  return metadata;
}

module.exports = {
  buildRuleset,
  getMetadata,
  getProvider,
  makeUrlAbsolute,
  metadataRules
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const {forEach} = __webpack_require__(1);
const {max} = __webpack_require__(5);


// Get a key of a map, first setting it to a default value if it's missing.
function getDefault(map, key, defaultMaker) {
    if (map.has(key)) {
        return map.get(key);
    }
    const defaultValue = defaultMaker();
    map.set(key, defaultValue);
    return defaultValue;
}


// Construct a filtration network of rules.
function ruleset(...rules) {
    const rulesByInputFlavor = new Map();  // [someInputFlavor: [rule, ...]]

    // File each rule under its input flavor:
    forEach(rule => getDefault(rulesByInputFlavor, rule.source.inputFlavor, () => []).push(rule),
            rules);

    return {
        // Iterate over a DOM tree or subtree, building up a knowledgebase, a
        // data structure holding scores and annotations for interesting
        // elements. Return the knowledgebase.
        //
        // This is the "rank" portion of the rank-and-yank algorithm.
        score: function (tree) {
            const kb = knowledgebase();

            // Introduce the whole DOM into the KB as flavor 'dom' to get
            // things started:
            const nonterminals = [[{tree}, 'dom']];  // [[node, flavor], [node, flavor], ...]

            // While there are new facts, run the applicable rules over them to
            // generate even newer facts. Repeat until everything's fully
            // digested. Rules run in no particular guaranteed order.
            while (nonterminals.length) {
                const [inNode, inFlavor] = nonterminals.pop();
                for (let rule of getDefault(rulesByInputFlavor, inFlavor, () => [])) {
                    const outFacts = resultsOf(rule, inNode, inFlavor, kb);
                    for (let fact of outFacts) {
                        const outNode = kb.nodeForElement(fact.element);

                        // No matter whether or not this flavor has been
                        // emitted before for this node, we multiply the score.
                        // We want to be able to add rules that refine the
                        // scoring of a node, without having to rewire the path
                        // of flavors that winds through the ruleset.
                        //
                        // 1 score per Node is plenty. That simplifies our
                        // data, our rankers, our flavor system (since we don't
                        // need to represent score axes), and our engine. If
                        // somebody wants more score axes, they can fake it
                        // themselves with notes, thus paying only for what
                        // they eat. (We can even provide functions that help
                        // with that.) Most rulesets will probably be concerned
                        // with scoring only 1 thing at a time anyway. So,
                        // rankers return a score multiplier + 0 or more new
                        // flavors with optional notes. Facts can never be
                        // deleted from the KB by rankers (or order would start
                        // to matter); after all, they're *facts*.
                        outNode.score *= fact.score;

                        // Add a new annotation to a node--but only if there
                        // wasn't already one of the given flavor already
                        // there; otherwise there's no point.
                        //
                        // You might argue that we might want to modify an
                        // existing note here, but that would be a bad
                        // idea. Notes of a given flavor should be
                        // considered immutable once laid down. Otherwise, the
                        // order of execution of same-flavored rules could
                        // matter, hurting pluggability. Emit a new flavor and
                        // a new note if you want to do that.
                        //
                        // Also, choosing not to add a new fact to nonterminals
                        // when we're not adding a new flavor saves the work of
                        // running the rules against it, which would be
                        // entirely redundant and perform no new work (unless
                        // the rankers were nondeterministic, but don't do
                        // that).
                        if (!outNode.flavors.has(fact.flavor)) {
                            outNode.flavors.set(fact.flavor, fact.notes);
                            kb.indexNodeByFlavor(outNode, fact.flavor);  // TODO: better encapsulation rather than indexing explicitly
                            nonterminals.push([outNode, fact.flavor]);
                        }
                    }
                }
            }
            return kb;
        }
    };
}


// Construct a container for storing and querying facts, where a fact has a
// flavor (used to dispatch further rules upon), a corresponding DOM element, a
// score, and some other arbitrary notes opaque to fathom.
function knowledgebase() {
    const nodesByFlavor = new Map();  // Map{'texty' -> [NodeA],
                                      //     'spiffy' -> [NodeA, NodeB]}
                                      // NodeA = {element: <someElement>,
                                      //
                                      //          // Global nodewide score. Add
                                      //          // custom ones with notes if
                                      //          // you want.
                                      //          score: 8,
                                      //
                                      //          // Flavors is a map of flavor names to notes:
                                      //          flavors: Map{'texty' -> {ownText: 'blah',
                                      //                                   someOtherNote: 'foo',
                                      //                                   someCustomScore: 10},
                                      //                       // This is an empty note:
                                      //                       'fluffy' -> undefined}}
    const nodesByElement = new Map();

    return {
        // Return the "node" (our own data structure that we control) that
        // corresponds to a given DOM element, creating one if necessary.
        nodeForElement: function (element) {
            return getDefault(nodesByElement,
                              element,
                              () => ({element,
                                      score: 1,
                                      flavors: new Map()}));
        },

        // Return the highest-scored node of the given flavor, undefined if
        // there is none.
        max: function (flavor) {
            const nodes = nodesByFlavor.get(flavor);
            return nodes === undefined ? undefined : max(nodes, node => node.score);
        },

        // Let the KB know that a new flavor has been added to an element.
        indexNodeByFlavor: function (node, flavor) {
            getDefault(nodesByFlavor, flavor, () => []).push(node);
        },

        nodesOfFlavor: function (flavor) {
            return getDefault(nodesByFlavor, flavor, () => []);
        }
    };
}


// Apply a rule (as returned by a call to rule()) to a fact, and return the
// new facts that result.
function resultsOf(rule, node, flavor, kb) {
    // If more types of rule pop up someday, do fancier dispatching here.
    return rule.source.flavor === 'flavor' ? resultsOfFlavorRule(rule, node, flavor) : resultsOfDomRule(rule, node, kb);
}


// Pull the DOM tree off the special property of the root "dom" fact, and query
// against it.
function *resultsOfDomRule(rule, specialDomNode, kb) {
    // Use the special "tree" property of the special starting node:
    const matches = specialDomNode.tree.querySelectorAll(rule.source.selector);

    for (let i = 0; i < matches.length; i++) {  // matches is a NodeList, which doesn't conform to iterator protocol
        const element = matches[i];
        const newFacts = explicitFacts(rule.ranker(kb.nodeForElement(element)));
        for (let fact of newFacts) {
            if (fact.element === undefined) {
                fact.element = element;
            }
            if (fact.flavor === undefined) {
                throw new Error('Rankers of dom() rules must return a flavor in each fact. Otherwise, there is no way for that fact to be used later.');
            }
            yield fact;
        }
    }
}


function *resultsOfFlavorRule(rule, node, flavor) {
    const newFacts = explicitFacts(rule.ranker(node));

    for (let fact of newFacts) {
        // If the ranker didn't specify a different element, assume it's
        // talking about the one we passed in:
        if (fact.element === undefined) {
            fact.element = node.element;
        }
        if (fact.flavor === undefined) {
            fact.flavor = flavor;
        }
        yield fact;
    }
}


// Take the possibly abbreviated output of a ranker function, and make it
// explicitly an iterable with a defined score.
//
// Rankers can return undefined, which means "no facts", a single fact, or an
// array of facts.
function *explicitFacts(rankerResult) {
    const array = (rankerResult === undefined) ? [] : (Array.isArray(rankerResult) ? rankerResult : [rankerResult]);
    for (let fact of array) {
        if (fact.score === undefined) {
            fact.score = 1;
        }
        yield fact;
    }
}


// TODO: For the moment, a lot of responsibility is on the rankers to return a
// pretty big data structure of up to 4 properties. This is a bit verbose for
// an arrow function (as I hope we can use most of the time) and the usual case
// will probably be returning just a score multiplier. Make that case more
// concise.

// TODO: It is likely that rankers should receive the notes of their input type
// as a 2nd arg, for brevity.


// Return a condition that uses a DOM selector to find its matches from the
// original DOM tree.
//
// For consistency, Nodes will still be delivered to the transformers, but
// they'll have empty flavors and score = 1.
//
// Condition constructors like dom() and flavor() build stupid, introspectable
// objects that the query engine can read. They don't actually do the query
// themselves. That way, the query planner can be smarter than them, figuring
// out which indices to use based on all of them. (We'll probably keep a heap
// by each dimension's score and a hash by flavor name, for starters.) Someday,
// fancy things like this may be possible: rule(and(tag('p'), klass('snork')),
// ...)
function dom(selector) {
    return {
        flavor: 'dom',
        inputFlavor: 'dom',
        selector
    };
}


// Return a condition that discriminates on nodes of the knowledgebase by flavor.
function flavor(inputFlavor) {
    return {
        flavor: 'flavor',
        inputFlavor
    };
}


function rule(source, ranker) {
    return {
        source,
        ranker
    };
}


module.exports = {
    dom,
    rule,
    ruleset,
    flavor
};


// TODO: Integrate jkerim's static-scored, short-circuiting rules into the design. We can make rankers more introspectable. Rankers become hashes. If you return a static score for all matches, just stick an int in there like {score: 5}. Then the ruleset can be smart enough to run the rules emitting a given type in order of decreasing possible score. (Dynamically scored rules will always be run.) Of course, we'll also have to declare what types a rule can emit: {emits: ['titley']}. Move to a more declarative ranker also moves us closer to a machine-learning-based rule deriver (or at least tuner).


// Future possible fanciness:
// * Metarules, e.g. specific rules for YouTube if it's extremely weird. Maybe they can just take simple predicates over the DOM: metarule(dom => !isEmpty(dom.querySelectorAll('body[youtube]')), rule(...)). Maybe they'll have to be worse: the result of a full rank-and-yank process themselves. Or maybe we can somehow implement them without having to have a special "meta" kind of rule at all.
// * Different kinds of "mixing" than just multiplication, though this makes us care even more that rules execute in order and in series. An alternative may be to have rankers lay down the component numbers and a yanker do the fancier math.
// * Fancy combinators for rule sources, along with something like a Rete tree for more efficiently dispatching them. For example, rule(and(flavor('foo'), flavor('bar')), ...) would match only a node having both the foo and bar flavors.
// * If a ranker returns 0 (i.e. this thing has no chance of being in the category that I'm thinking about), delete the fact from the KB: a performance optimization.
// * I'm not sure about constraining us to execute the rules in order. It hurts efficiency and is going to lead us into a monkeypatching nightmare as third parties contribute rules. What if we instead used subflavors to order where necessary, where a subflavor is "(explicit-flavor, rule that touched me, rule that touched me next, ...)". A second approach: Ordinarily, if we were trying to order rules, we'd have them operate on different flavors, each rule spitting out a fact of a new flavor and the next rule taking it as input. Inserting a third-party rule into a ruleset like that would require rewriting the whole thing to interpose a new flavor. But what if we instead did something like declaring dependencies on certain rules but without mentioning them (in case the set of rules in the ruleset changes later). This draws a clear line between the ruleset's private implementation and its public, hookable API. Think: why would 3rd-party rule B want to fire between A and C? Because it requires some data A lays down and wants to muck with it before C uses it as input. That data would be part of facts of a certain flavor (if the ruleset designer is competent), and rules that want to hook in could specify where in terms of "I want to fire right after facts of flavor FOO are made." They can then mess with the fact before C sees it.
// * We could even defer actually multiplying the ranks together, preserving the individual factors, in case we can get any interesting results out of comparing the results with and without certain rules' effects.
// * Probably fact flavors and the score axes should be separate: fact flavors state what flavor of notes are available about nodes (and might affect rule order if they want to use each other's notes). Score axes talk about the degree to which a node is in a category. Each fact would be linked to a proxy for a DOM node, and all scores would live on those proxies.
// * It probably could use a declarative yanking system to go with the ranking one: the "reduce" to its "map". We may want to implement a few imperatively first, though, and see what patterns shake out.

// Yankers:
// max score (of some flavor)
// max-scored sibling cluster (maybe a contiguous span of containers around high-scoring ones, like a blur algo allowing occasional flecks of low-scoring noise)
// adjacent max-scored sibling clusters (like for Readability's remove-extra-paragraphs test, which has 2 divs, each containing <p>s)
//
// Yanking:
// * Block-level containers at the smallest. (Any smaller, and you're pulling out parts of paragraphs, not entire paragraphs.) mergedInnerTextNakedOrInInInlineTags might make this superfluous.
//
//
// Advantages over readability:
// * State clearly contained
// * Should work fine with ideographic languages and others that lack space-delimited words
// * Pluggable
// * Potential to have rules generated or tuned by training
// * Adaptable to find things other than the main body text
// * Potential to perform better since it doesn't have to run over and over, loosening constraints each time, if it fails


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const {flatten, forEach, map} = __webpack_require__(1);


function identity(x) {
    return x;
}


// From an iterable return the best item, according to an arbitrary comparator
// function. In case of a tie, the first item wins.
function best(iterable, by, isBetter) {
    let bestSoFar, bestKeySoFar;
    let isFirst = true;
    forEach(
        function (item) {
            const key = by(item);
            if (isBetter(key, bestKeySoFar) || isFirst) {
                bestSoFar = item;
                bestKeySoFar = key;
                isFirst = false;
            }
        },
        iterable);
    if (isFirst) {
        throw new Error('Tried to call best() on empty iterable');
    }
    return bestSoFar;
}


// Return the maximum item from an iterable, as defined by >.
//
// Works with any type that works with >. If multiple items are equally great,
// return the first.
//
// by: a function that, given an item of the iterable, returns a value to
//     compare
function max(iterable, by = identity) {
    return best(iterable, by, (a, b) => a > b);
}


function min(iterable, by = identity) {
    return best(iterable, by, (a, b) => a < b);
}


// Return the sum of an iterable, as defined by the + operator.
function sum(iterable) {
    let total;
    let isFirst = true;
    forEach(
        function assignOrAdd(addend) {
            if (isFirst) {
                total = addend;
                isFirst = false;
            } else {
                total += addend;
            }
        },
        iterable);
    return total;
}


function length(iterable) {
    let num = 0;
    for (let item of iterable) {
        num++;
    }
    return num;
}


// Iterate, depth first, over a DOM node. Return the original node first.
// shouldTraverse - a function on a node saying whether we should include it
//     and its children
function *walk(element, shouldTraverse) {
    yield element;
    for (let child of element.childNodes) {
        if (shouldTraverse(child)) {
            for (let w of walk(child, shouldTraverse)) {
                yield w;
            }
        }
    }
}


const blockTags = new Set();
forEach(blockTags.add.bind(blockTags),
        ['ADDRESS', 'BLOCKQUOTE', 'BODY', 'CENTER', 'DIR', 'DIV', 'DL',
         'FIELDSET', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HR',
         'ISINDEX', 'MENU', 'NOFRAMES', 'NOSCRIPT', 'OL', 'P', 'PRE',
         'TABLE', 'UL', 'DD', 'DT', 'FRAMESET', 'LI', 'TBODY', 'TD',
         'TFOOT', 'TH', 'THEAD', 'TR', 'HTML']);
// Return whether a DOM element is a block element by default (rather
// than by styling).
function isBlock(element) {
    return blockTags.has(element.tagName);
}


// Yield strings of text nodes within a normalized DOM node and its
// children, without venturing into any contained block elements.
//
// shouldTraverse: A function that specifies additional elements to
//     exclude by returning false
function *inlineTexts(element, shouldTraverse = element => true) {
    // TODO: Could we just use querySelectorAll() with a really long
    // selector rather than walk(), for speed?
    for (let child of walk(element,
                             element => !(isBlock(element) ||
                                          element.tagName === 'SCRIPT' &&
                                          element.tagName === 'STYLE')
                                        && shouldTraverse(element))) {
        if (child.nodeType === child.TEXT_NODE) {
            // wholeText() is not implemented by jsdom, so we use
            // textContent(). The result should be the same, since
            // we're calling it on only text nodes, but it may be
            // slower. On the positive side, it means we don't need to
            // normalize the DOM tree first.
            yield child.textContent;
        }
    }
}


function inlineTextLength(element, shouldTraverse = element => true) {
    return sum(map(text => collapseWhitespace(text).length,
                   inlineTexts(element, shouldTraverse)));
}


function collapseWhitespace(str) {
    return str.replace(/\s{2,}/g, ' ');
}


// Return the ratio of the inline text length of the links in an
// element to the inline text length of the entire element.
function linkDensity(node) {
    const length = node.flavors.get('paragraphish').inlineLength;
    const lengthWithoutLinks = inlineTextLength(node.element,
                                                element => element.tagName !== 'A');
    return (length - lengthWithoutLinks) / length;
}


// Return the next sibling node of `element`, skipping over text nodes that
// consist wholly of whitespace.
function isWhitespace(element) {
    return (element.nodeType === element.TEXT_NODE &&
            element.textContent.trim().length === 0);
}


// Return the number of stride nodes between 2 DOM nodes *at the same
// level of the tree*, without going up or down the tree.
//
// Stride nodes are {(1) siblings or (2) siblings of ancestors} that lie
// between the 2 nodes. These interposed nodes make it less likely that the 2
// nodes should be together in a cluster.
//
// left xor right may also be undefined.
function numStrides(left, right) {
    let num = 0;

    // Walk right from left node until we hit the right node or run out:
    let sibling = left;
    let shouldContinue = sibling && sibling !== right;
    while (shouldContinue) {
        sibling = sibling.nextSibling;
        if ((shouldContinue = sibling && sibling !== right) &&
            !isWhitespace(sibling)) {
            num += 1;
        }
    }
    if (sibling !== right) {  // Don't double-punish if left and right are siblings.
        // Walk left from right node:
        sibling = right;
        while (sibling) {
            sibling = sibling.previousSibling;
            if (sibling && !isWhitespace(sibling)) {
                num += 1;
            }
        }
    }
    return num;
}


// Return a distance measurement between 2 DOM nodes.
//
// I was thinking of something that adds little cost for siblings.
// Up should probably be more expensive than down (see middle example in the Nokia paper).
// O(n log n)
function distance(elementA, elementB) {
    // TODO: Test and tune these costs. They're off-the-cuff at the moment.
    //
    // Cost for each level deeper one node is than the other below their common
    // ancestor:
    const DIFFERENT_DEPTH_COST = 2;
    // Cost for a level below the common ancestor where tagNames differ:
    const DIFFERENT_TAG_COST = 2;
    // Cost for a level below the common ancestor where tagNames are the same:
    const SAME_TAG_COST = 1;
    // Cost for each stride node between A and B:
    const STRIDE_COST = 1;

    if (elementA === elementB) {
        return 0;
    }

    // Stacks that go from the common ancestor all the way to A and B:
    const aAncestors = [elementA];
    const bAncestors = [elementB];

    let aAncestor = elementA;
    let bAncestor = elementB;

    // Ascend to common parent, stacking them up for later reference:
    while (!aAncestor.contains(elementB)) {
        aAncestor = aAncestor.parentNode;
        aAncestors.push(aAncestor);
    }

    // Make an ancestor stack for the right node too so we can walk
    // efficiently down to it:
    do {
        bAncestor = bAncestor.parentNode;  // Assumes we've early-returned above if A === B.
        bAncestors.push(bAncestor);
    } while (bAncestor !== aAncestor);

    // Figure out which node is left and which is right, so we can follow
    // sibling links in the appropriate directions when looking for stride
    // nodes:
    let left = aAncestors;
    let right = bAncestors;
    // In compareDocumentPosition()'s opinion, inside implies after. Basically,
    // before and after pertain to opening tags.
    const comparison = elementA.compareDocumentPosition(elementB);
    let cost = 0;
    let mightStride;
    if (comparison & elementA.DOCUMENT_POSITION_FOLLOWING) {
        // A is before, so it could contain the other node.
        mightStride = !(comparison & elementA.DOCUMENT_POSITION_CONTAINED_BY)
        left = aAncestors;
        right = bAncestors;
    } else if (comparison & elementA.DOCUMENT_POSITION_PRECEDING) {
        // A is after, so it might be contained by the other node.
        mightStride = !(comparison & elementA.DOCUMENT_POSITION_CONTAINS)
        left = bAncestors;
        right = aAncestors;
    }

    // Descend to both nodes in parallel, discounting the traversal
    // cost iff the nodes we hit look similar, implying the nodes dwell
    // within similar structures.
    while (left.length || right.length) {
        const l = left.pop();
        const r = right.pop();
        if (l === undefined || r === undefined) {
            // Punishment for being at different depths: same as ordinary
            // dissimilarity punishment for now
            cost += DIFFERENT_DEPTH_COST;
        } else {
            // TODO: Consider similarity of classList.
            cost += l.tagName === r.tagName ? SAME_TAG_COST : DIFFERENT_TAG_COST;
        }
        // Optimization: strides might be a good dimension to eliminate.
        if (mightStride) {
            cost += numStrides(l, r) * STRIDE_COST;
        }
    }

    return cost;
}


// A lower-triangular matrix of inter-cluster distances
// TODO: Allow distance function to be passed in, making this generally useful
// and not tied to the DOM.
class DistanceMatrix {
    constructor (elements) {
        // A sparse adjacency matrix:
        // {A => {},
        //  B => {A => 4},
        //  C => {A => 4, B => 4},
        //  D => {A => 4, B => 4, C => 4}
        //  E => {A => 4, B => 4, C => 4, D => 4}}
        //
        // A, B, etc. are arrays of [arrays of arrays of...] DOM nodes, each
        // array being a cluster. In this way, they not only accumulate a
        // cluster but retain the steps along the way.
        //
        // This is an efficient data structure in terms of CPU and memory, in
        // that we don't have to slide a lot of memory around when we delete a
        // row or column from the middle of the matrix while merging. Of
        // course, we lose some practical efficiency by using hash tables, and
        // maps in particular are slow in their early implementations.
        this._matrix = new Map();

        // Convert elements to clusters:
        const clusters = elements.map(el => [el]);

        // Init matrix:
        for (let outerCluster of clusters) {
            const innerMap = new Map();
            for (let innerCluster of this._matrix.keys()) {
                innerMap.set(innerCluster, distance(outerCluster[0],
                                                    innerCluster[0]));
            }
            this._matrix.set(outerCluster, innerMap);
        }
        this._numClusters = clusters.length;
    }

    // Return (distance, a: clusterA, b: clusterB) of closest-together clusters.
    // Replace this to change linkage criterion.
    closest () {
        const self = this;

        if (this._numClusters < 2) {
            throw new Error('There must be at least 2 clusters in order to return the closest() ones.');
        }

        // Return the distances between every pair of clusters.
        function *clustersAndDistances() {
            for (let [outerKey, row] of self._matrix.entries()) {
                for (let [innerKey, storedDistance] of row.entries()) {
                    yield {a: outerKey, b: innerKey, distance: storedDistance};
                }
            }
        }
        return min(clustersAndDistances(), x => x.distance);
    }

    // Look up the distance between 2 clusters in me. Try the lookup in the
    // other direction if the first one falls in the nonexistent half of the
    // triangle.
    _cachedDistance (clusterA, clusterB) {
        let ret = this._matrix.get(clusterA).get(clusterB);
        if (ret === undefined) {
            ret = this._matrix.get(clusterB).get(clusterA);
        }
        return ret;
    }

    // Merge two clusters.
    merge (clusterA, clusterB) {
        // An example showing how rows merge:
        //  A: {}
        //  B: {A: 1}
        //  C: {A: 4, B: 4},
        //  D: {A: 4, B: 4, C: 4}
        //  E: {A: 4, B: 4, C: 2, D: 4}}
        //
        // Step 2:
        //  C: {}
        //  D: {C: 4}
        //  E: {C: 2, D: 4}}
        //  AB: {C: 4, D: 4, E: 4}
        //
        // Step 3:
        //  D:  {}
        //  AB: {D: 4}
        //  CE: {D: 4, AB: 4}

        // Construct new row, finding min distances from either subcluster of
        // the new cluster to old clusters.
        //
        // There will be no repetition in the matrix because, after all,
        // nothing pointed to this new cluster before it existed.
        const newRow = new Map();
        for (let outerKey of this._matrix.keys()) {
            if (outerKey !== clusterA && outerKey !== clusterB) {
                newRow.set(outerKey, Math.min(this._cachedDistance(clusterA, outerKey),
                                              this._cachedDistance(clusterB, outerKey)));
            }
        }

        // Delete the rows of the clusters we're merging.
        this._matrix.delete(clusterA);
        this._matrix.delete(clusterB);

        // Remove inner refs to the clusters we're merging.
        for (let inner of this._matrix.values()) {
            inner.delete(clusterA);
            inner.delete(clusterB);
        }

        // Attach new row.
        this._matrix.set([clusterA, clusterB], newRow);

        // There is a net decrease of 1 cluster:
        this._numClusters -= 1;
    }

    numClusters () {
        return this._numClusters;
    }

    // Return an Array of nodes for each cluster in me.
    clusters () {
        // TODO: Can't get wu.map to work here. Don't know why.
        return Array.from(this._matrix.keys()).map(e => Array.from(flatten(false, e)));
    }
}


// Partition the given nodes into one or more clusters by position in the DOM
// tree.
//
// elements: An Array of DOM nodes
// tooFar: The closest-nodes distance() beyond which we will not attempt to
//     unify 2 clusters
//
// This implements an agglomerative clustering. It uses single linkage, since
// we're talking about adjacency here more than Euclidean proximity: the
// clusters we're talking about in the DOM will tend to be adjacent, not
// overlapping. We haven't tried other linkage criteria yet.
//
// Maybe later we'll consider score or notes.
function clusters(elements, tooFar) {
    const matrix = new DistanceMatrix(elements);
    let closest;

    while (matrix.numClusters() > 1 && (closest = matrix.closest()).distance < tooFar) {
        matrix.merge(closest.a, closest.b);
    }

    return matrix.clusters();
}


module.exports = {
    best,
    collapseWhitespace,
    clusters,
    distance,
    identity,
    inlineTextLength,
    inlineTexts,
    isBlock,
    length,
    linkDensity,
    max,
    min,
    sum,
    walk
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(7);
exports.encode = exports.stringify = __webpack_require__(8);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(6);
var util = __webpack_require__(11);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(9);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_page_metadata_parser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_page_metadata_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_page_metadata_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Utils_jsm__ = __webpack_require__(2);




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
    console.log(__WEBPACK_IMPORTED_MODULE_1__common_Utils_jsm__["a" /* Utils */].Constants.APP_NAME);
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
      const data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_page_metadata_parser__["getMetadata"])(content.document.documentElement, url);
      sendAsyncMessage("page-scraper-message", data);
    }
  }
};

const fetcher = new DOMFetcher();
fetcher.init(global);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })
/******/ ]);