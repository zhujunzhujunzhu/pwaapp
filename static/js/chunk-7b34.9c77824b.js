(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-7b34"],{

/***/ "/9aa":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "NykK"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "ExA7");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "AP2z":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "ExA7":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "GoyQ":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "KfNM":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "Kz5y":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "Ljmf":
/*!*******************************************!*\
  !*** ./node_modules/fuzzysearch/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),

/***/ "NykK":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "nmnc"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "AP2z"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "QIyF":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "WFqU":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "cCY5":
/*!*********************************************************************!*\
  !*** ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-treeselect v0.0.32 | (c) 2017-2018 Riophae Lee
 * Released under the MIT License.
 * https://vue-treeselect.js.org/
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fuzzysearch */ "Ljmf");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "Kw5r");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! dom-align */ "kaUV");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/debounce */ "sEfC");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Treeselect.vue?vue&type=template&id=d323a1ba
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",class:[ 'vue-treeselect', {
    'vue-treeselect--single': _vm.single,
    'vue-treeselect--multi': _vm.multiple,
    'vue-treeselect--searchable': _vm.searchable,
    'vue-treeselect--disabled': _vm.disabled,
    'vue-treeselect--focused': _vm.trigger.isFocused,
    'vue-treeselect--has-value': _vm.hasValue,
    'vue-treeselect--open': _vm.menu.isOpen,
    'vue-treeselect--open-above': _vm.menu.prefferedOpenDirection === 'above',
    'vue-treeselect--open-below': _vm.menu.prefferedOpenDirection === 'below',
    'vue-treeselect--branch-nodes-disabled': _vm.disableBranchNodes,
    'vue-treeselect--append-to-body': _vm.appendToBody,
  } ]},[(_vm.name && !_vm.disabled && _vm.hasValue)?[(_vm.single)?_c('HiddenField',{attrs:{"stringified-value":_vm.stringifyValue(_vm.internalValue[0])}}):(_vm.joinValues)?_c('HiddenField',{attrs:{"stringified-value":_vm.internalValue.map(_vm.stringifyValue).join(_vm.delimiter)}}):_vm._l((_vm.internalValue),function(v,i){return _c('HiddenField',{key:i,attrs:{"stringified-value":_vm.stringifyValue(v)}})})]:_vm._e(),_c('div',{staticClass:"vue-treeselect__control",on:{"mousedown":_vm.handleMouseDown}},[(_vm.single)?_c('single-value',{ref:"value"}):_c('multi-value',{ref:"value"}),(_vm.shouldShowX)?_c('div',{staticClass:"vue-treeselect__x-container",attrs:{"title":_vm.multiple ? _vm.clearAllText : _vm.clearValueText},on:{"mousedown":_vm.handleMouseDownOnClear}},[_c('delete-icon',{staticClass:"vue-treeselect__x"})],1):_vm._e(),(_vm.shouldShowControlArrow)?_c('div',{staticClass:"vue-treeselect__control-arrow-container",on:{"mousedown":_vm.handleMouseDownOnArrow}},[_c('arrow-icon',{class:[ 'vue-treeselect__control-arrow', { 'vue-treeselect__control-arrow--rotated': _vm.menu.isOpen } ]})],1):_vm._e()],1),_c('portal',[_c('transition',{attrs:{"name":"vue-treeselect__menu--transition"}},[(_vm.shouldShowMenu)?_c('div',{ref:"menu",staticClass:"vue-treeselect__menu",style:({ maxHeight: _vm.menu.optimizedHeight + 'px' }),on:{"mousedown":_vm.handleMouseDown}},[(_vm.shouldShowOptionsList)?_c('div',{staticClass:"vue-treeselect__list"},_vm._l((_vm.forest.normalizedOptions),function(rootNode){return _c('treeselect-option',{key:rootNode.id,attrs:{"node":rootNode},scopedSlots:_vm._u([{key:"option-label",fn:function(ref){
  var node = ref.node;
  var shouldShowCount = ref.shouldShowCount;
  var count = ref.count;
  var labelClassName = ref.labelClassName;
  var countClassName = ref.countClassName;
return [_vm._t("option-label",[_c('label',{class:labelClassName},[_vm._v("\n                  "+_vm._s(node.label)+"\n                  "),(shouldShowCount)?_c('span',{class:countClassName},[_vm._v("("+_vm._s(count)+")")]):_vm._e()])],{node:node,shouldShowCount:shouldShowCount,count:count,labelClassName:labelClassName,countClassName:countClassName})]}}])})})):_vm._e(),(_vm.shouldShowNoResultsTip)?_c('tip',{attrs:{"type":"no-results","icon":"warning"}},[_vm._v(_vm._s(_vm.noResultsText))]):_vm._e(),(_vm.shouldShowNoOptionsTip)?_c('tip',{attrs:{"type":"no-options","icon":"warning"}},[_vm._v(_vm._s(_vm.noOptionsText))]):_vm._e(),(_vm.shouldShowLoadingOptionsTip)?_c('tip',{attrs:{"type":"loading","icon":"loader"}},[_vm._v(_vm._s(_vm.loadingText))]):_vm._e(),(_vm.shouldShowLoadingRootOptionsErrorTip)?_c('tip',{attrs:{"type":"error","icon":"error"}},[_vm._v("\n          "+_vm._s(_vm.rootOptionsStates.loadingError)+"\n          "),_c('a',{staticClass:"vue-treeselect__retry",attrs:{"title":_vm.retryTitle},on:{"click":_vm.loadRootOptions}},[_vm._v("\n            "+_vm._s(_vm.retryText)+"\n          ")])]):_vm._e(),(_vm.shouldShowAsyncSearchLoadingErrorTiop)?_c('tip',{attrs:{"type":"error","icon":"error"}},[_vm._v("\n          "+_vm._s(_vm.getRemoteSearchEntry().loadingError)+"\n          "),_c('a',{staticClass:"vue-treeselect__retry",attrs:{"title":_vm.retryTitle},on:{"click":function($event){_vm.handleRemoteSearch()}}},[_vm._v("\n            "+_vm._s(_vm.retryText)+"\n          ")])]):_vm._e(),(_vm.shouldShowSearchPromptTip)?_c('tip',{attrs:{"type":"search-prompt","icon":"warning"}},[_vm._v(_vm._s(_vm.searchPromptText))]):_vm._e()],1):_vm._e()])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Treeselect.vue?vue&type=template&id=d323a1ba

// EXTERNAL MODULE: external "fuzzysearch"
var external_fuzzysearch_ = __webpack_require__(0);
var external_fuzzysearch_default = /*#__PURE__*/__webpack_require__.n(external_fuzzysearch_);

// CONCATENATED MODULE: ./src/utils.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var warning =  true ? noop : undefined;
function onLeftClick(mouseDownHandler) {
  return function onMouseDown(evt) {
    if (evt.type === 'mousedown' && evt.button === 0) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
    }
  };
}
function scrollIntoView(scrollingEl, focusedEl) {
  var scrollingReact = scrollingEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    scrollingEl.scrollTop = Math.min(focusedEl.offsetTop + focusedEl.clientHeight - scrollingEl.offsetHeight + overScroll, scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    scrollingEl.scrollTop = Math.max(focusedEl.offsetTop - overScroll, 0);
  }
}
function utils_isNaN(x) {
  return x !== x;
}
function isPromise(x) {
  return x != null && (_typeof(x) === 'object' || typeof x === 'function') && typeof x.then === 'function';
}
function once(fn) {
  var wrapper = function wrapper() {
    if (fn.called) return wrapper.val;
    fn.called = true;
    return wrapper.val = fn.apply(void 0, arguments);
  };

  return wrapper;
}
function noop() {}
function identity(x) {
  return x;
}
function constant(x) {
  return function () {
    return x;
  };
}
function createMap() {
  return Object.create(null);
}

function isPlainObject(value) {
  if (value == null || _typeof(value) !== 'object') return false;
  return Object.getPrototypeOf(value) === Object.prototype;
}

function copy(obj, key, value) {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {});
    deepExtend(obj[key], value);
  } else {
    obj[key] = value;
  }
}

function deepExtend(target, source) {
  if (isPlainObject(source)) {
    var keys = Object.keys(source);

    for (var i = 0, len = keys.length; i < len; i++) {
      copy(target, keys[i], source[keys[i]]);
    }
  }

  return target;
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function includes(arrOrStr, elem) {
  return arrOrStr.indexOf(elem) !== -1;
}
function find(arr, predicate, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }

  return undefined;
}
function removeFromArray(arr, elem) {
  var idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}
function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length) return true;

  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }

  return false;
}
// CONCATENATED MODULE: ./src/constants.js
var NO_PARENT_NODE = null;
var UNCHECKED = 0;
var INDETERMINATE = 1;
var CHECKED = 2;
var ALL_CHILDREN = 'ALL_CHILDREN';
var ALL_DESCENDANTS = 'ALL_DESCENDANTS';
var LEAF_CHILDREN = 'LEAF_CHILDREN';
var LEAF_DESCENDANTS = 'LEAF_DESCENDANTS';
var LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS';
var LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS';
var ASYNC_SEARCH = 'ASYNC_SEARCH';
var ALL = 'ALL';
var BRANCH_PRIORITY = 'BRANCH_PRIORITY';
var LEAF_PRIORITY = 'LEAF_PRIORITY';
var ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE';
var ORDER_SELECTED = 'ORDER_SELECTED';
var LEVEL = 'LEVEL';
var INDEX = 'INDEX';
var KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
};
var INPUT_DEBOUNCE_DELAY =  false ? undefined : 200;
var MIN_INPUT_WIDTH = 5;
var MENU_BUFFER = 40;
// CONCATENATED MODULE: ./src/mixins/treeselectMixin.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function treeselectMixin_toConsumableArray(arr) { return treeselectMixin_arrayWithoutHoles(arr) || treeselectMixin_iterableToArray(arr) || treeselectMixin_nonIterableSpread(); }

function treeselectMixin_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function treeselectMixin_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function treeselectMixin_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function sortValueByIndex(a, b) {
  var i = 0;

  do {
    if (a.level < i) return -1;
    if (b.level < i) return 1;
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i];
    i++;
  } while (true);
}

function sortValueByLevel(a, b) {
  return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
}

function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: ''
  };
}

function stringifyOptionPropValue(value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && !utils_isNaN(value)) return value + '';
  return '';
}

function match(enableFuzzyMatch, needle, haystack) {
  return enableFuzzyMatch ? external_fuzzysearch_default()(needle, haystack) : includes(haystack, needle);
}

function getErrorMessage(err) {
  return err.message || String(err);
}

var instanceId = 0;
/* harmony default export */ var treeselectMixin = ({
  provide: function provide() {
    return {
      instance: this,
      UNCHECKED: UNCHECKED,
      INDETERMINATE: INDETERMINATE,
      CHECKED: CHECKED
    };
  },
  props: {
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    autoLoadRootOptions: {
      type: Boolean,
      default: true
    },
    backspaceRemoves: {
      type: Boolean,
      default: true
    },
    beforeClearAll: {
      type: Function,
      default: constant(true)
    },
    branchNodesFirst: {
      type: Boolean,
      default: false
    },
    cacheOptions: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    clearAllText: {
      type: String,
      default: 'Clear all'
    },
    clearOnSelect: {
      type: Boolean,
      default: false
    },
    clearValueText: {
      type: String,
      default: 'Clear value'
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    defaultOptions: {
      default: false
    },
    deleteRemoves: {
      type: Boolean,
      default: true
    },
    delimiter: {
      type: String,
      default: ','
    },
    disableBranchNodes: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableFuzzyMatching: {
      type: Boolean,
      default: false
    },
    escapeClearsValue: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: false
    },
    id: {
      default: null
    },
    instanceId: {
      default: function _default() {
        return "".concat(instanceId++, "$$");
      },
      type: [String, Number]
    },
    joinValues: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    limitText: {
      type: Function,
      default: function limitTextDefault(count) {
        return "and ".concat(count, " more");
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    loadOptions: {
      type: Function
    },
    matchKeys: {
      type: Array,
      default: constant(['label'])
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },
    noOptionsText: {
      type: String,
      default: 'No options available.'
    },
    noResultsText: {
      type: String,
      default: 'No results found...'
    },
    normalizer: {
      type: Function,
      default: identity
    },
    openDirection: {
      type: String,
      default: 'auto'
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    required: {
      type: Boolean,
      default: false
    },
    retryText: {
      type: String,
      default: 'Retry?'
    },
    retryTitle: {
      type: String,
      default: 'Click to retry'
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchNested: {
      type: Boolean,
      default: false
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    showCountOf: {
      type: String,
      default: ALL_CHILDREN,
      validator: function validator(value) {
        var acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
        return includes(acceptableValues, value);
      }
    },
    showCountOnSearch: null,
    sortValueBy: {
      type: String,
      default: ORDER_SELECTED,
      validator: function validator(value) {
        var acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
        return includes(acceptableValues, value);
      }
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    value: null,
    valueConsistsOf: {
      type: String,
      default: BRANCH_PRIORITY,
      validator: function validator(value) {
        var acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
        return includes(acceptableValues, value);
      }
    },
    valueFormat: {
      type: String,
      default: 'id'
    }
  },
  data: function data() {
    return {
      trigger: {
        isFocused: false,
        searchQuery: ''
      },
      menu: {
        isOpen: false,
        current: null,
        lastScrollPosition: 0,
        optimizedHeight: 0,
        prefferedOpenDirection: 'below'
      },
      forest: {
        normalizedOptions: [],
        nodeMap: createMap(),
        checkedStateMap: createMap(),
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        selectedNodeMap: createMap()
      },
      rootOptionsStates: createAsyncOptionsStates(),
      localSearch: {
        active: false,
        noResults: true,
        countMap: createMap()
      },
      remoteSearch: createMap()
    };
  },
  computed: {
    selectedNodes: function selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    internalValue: function internalValue() {
      var _this = this;

      var internalValue;

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        internalValue = this.forest.selectedNodeIds.slice();
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isRootNode) return true;
          return !_this.isSelected(node.parentNode);
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isLeaf) return true;
          return node.children.length === 0;
        });
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _internalValue;

        var indeterminateNodeIds = [];
        internalValue = this.forest.selectedNodeIds.slice();
        this.selectedNodes.forEach(function (selectedNode) {
          selectedNode.ancestors.forEach(function (ancestor) {
            if (includes(indeterminateNodeIds, ancestor.id)) return;
            if (includes(internalValue, ancestor.id)) return;
            indeterminateNodeIds.push(ancestor.id);
          });
        });

        (_internalValue = internalValue).push.apply(_internalValue, indeterminateNodeIds);
      }

      if (this.sortValueBy === LEVEL) {
        internalValue.sort(function (a, b) {
          return sortValueByLevel(_this.getNode(a), _this.getNode(b));
        });
      } else if (this.sortValueBy === INDEX) {
        internalValue.sort(function (a, b) {
          return sortValueByIndex(_this.getNode(a), _this.getNode(b));
        });
      }

      return internalValue;
    },
    hasValue: function hasValue() {
      return this.internalValue.length > 0;
    },
    hasUndisabledValue: function hasUndisabledValue() {
      return this.hasValue && this.internalValue.map(this.getNode).some(function (node) {
        return !node.isDisabled;
      });
    },
    single: function single() {
      return !this.multiple;
    },
    visibleValue: function visibleValue() {
      return this.internalValue.slice(0, this.limit).map(this.getNode);
    },
    visibleOptionIds: function visibleOptionIds() {
      var _this2 = this;

      var visibleOptionIds = [];
      this.traverseAllNodesByIndex(function (node) {
        if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
          visibleOptionIds.push(node.id);
        }

        if (node.isBranch && !_this2.shouldExpand(node)) {
          return false;
        }
      });
      return visibleOptionIds;
    },
    hasVisibleOptions: function hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    hasExceededLimit: function hasExceededLimit() {
      return this.internalValue.length > this.limit;
    },
    shouldShowX: function shouldShowX() {
      return this.clearable && !this.disabled && this.hasUndisabledValue;
    },
    shouldShowControlArrow: function shouldShowControlArrow() {
      if (!this.alwaysOpen) return true;
      return !this.menu.isOpen;
    },
    shouldShowMenu: function shouldShowMenu() {
      return this.menu.isOpen;
    },
    shouldShowOptionsList: function shouldShowOptionsList() {
      if (this.async) {
        var entry = this.getRemoteSearchEntry();
        return entry.isLoaded && entry.options.length > 0;
      }

      if (this.localSearch.active) return !this.localSearch.noResults;
      return this.forest.normalizedOptions.length > 0;
    },
    shouldShowNoOptionsTip: function shouldShowNoOptionsTip() {
      if (this.async) return false;
      if (this.localSearch.active) return false;
      return this.rootOptionsStates.isLoaded && this.forest.normalizedOptions.length === 0;
    },
    shouldShowNoResultsTip: function shouldShowNoResultsTip() {
      if (this.async) {
        if (this.trigger.searchQuery === '' && !this.defaultOptions) return false;
        var entry = this.getRemoteSearchEntry();
        return entry.isLoaded && entry.options.length === 0;
      }

      if (this.localSearch.active) return this.localSearch.noResults;
      return false;
    },
    shouldShowLoadingOptionsTip: function shouldShowLoadingOptionsTip() {
      if (this.async) {
        var entry = this.getRemoteSearchEntry();
        return entry.isLoading;
      }

      return this.rootOptionsStates.isLoading;
    },
    shouldShowLoadingRootOptionsErrorTip: function shouldShowLoadingRootOptionsErrorTip() {
      return this.rootOptionsStates.loadingError;
    },
    shouldShowAsyncSearchLoadingErrorTiop: function shouldShowAsyncSearchLoadingErrorTiop() {
      if (!this.async) return false;
      var entry = this.getRemoteSearchEntry();
      return entry.loadingError;
    },
    shouldShowSearchPromptTip: function shouldShowSearchPromptTip() {
      return this.async && this.trigger.searchQuery === '' && !this.defaultOptions;
    },
    showCountOnSearchComputed: function showCountOnSearchComputed() {
      return typeof this.showCountOnSearch === 'boolean' ? this.showCountOnSearch : this.showCount;
    },
    hasBranchNodes: function hasBranchNodes() {
      return this.forest.normalizedOptions.some(function (rootNode) {
        return rootNode.isBranch;
      });
    }
  },
  watch: {
    alwaysOpen: function alwaysOpen(newValue) {
      if (newValue) this.openMenu();else this.closeMenu();
    },
    branchNodesFirst: function branchNodesFirst() {
      this.initialize();
    },
    disabled: function disabled(newValue) {
      if (newValue && this.menu.isOpen) this.closeMenu();else if (!newValue && !this.menu.isOpen && this.alwaysOpen) this.openMenu();
    },
    flat: function flat() {
      this.initialize();
    },
    internalValue: function internalValue(newValue, oldValue) {
      var hasChanged = quickDiff(newValue, oldValue);
      if (hasChanged) this.$emit('input', this.getValue(), this.getInstanceId());
    },
    matchKeys: function matchKeys() {
      this.initialize();
    },
    multiple: function multiple(newValue) {
      if (newValue) this.buildForestState();
    },
    options: {
      handler: function handler() {
        if (this.async) return;
        this.initialize();
        this.rootOptionsStates.isLoaded = Array.isArray(this.options);
      },
      deep: true,
      immediate: true
    },
    'trigger.searchQuery': function triggerSearchQuery() {
      if (this.async) {
        this.handleRemoteSearch();
      } else {
        this.handleLocalSearch();
      }

      this.$emit('search-change', this.trigger.searchQuery, this.getInstanceId());
    },
    value: function value() {
      var nodeIdsFromValue = this.extractCheckedNodeIdsFromValue();
      var hasChanged = quickDiff(nodeIdsFromValue, this.internalValue);
      if (hasChanged) this.fixSelectedNodeIds(nodeIdsFromValue);
    }
  },
  methods: {
    verifyProps: function verifyProps() {
      var _this3 = this;

      warning(function () {
        return _this3.id == null;
      }, function () {
        return '`id` prop is deprecated. Use `instanceId` instead.';
      });
      warning(function () {
        return !_this3.autofocus;
      }, function () {
        return '`autofocus` prop is deprecated. Use `autoFocus` instead.';
      });
      warning(function () {
        return _this3.async ? _this3.searchable : true;
      }, function () {
        return 'For async search mode, the value of `searchable` prop must be true.';
      });

      if (this.options == null && !this.loadOptions) {
        warning(function () {
          return false;
        }, function () {
          return 'Are you meant to dynamically load options? You need to use `loadOptions` prop.';
        });
      }
    },
    resetFlags: function resetFlags() {
      this._blurOnSelect = false;
    },
    initialize: function initialize() {
      var options = this.async ? this.getRemoteSearchEntry().options : this.options;

      if (Array.isArray(options)) {
        var prevNodeMap = this.forest.nodeMap;
        this.forest.nodeMap = createMap();
        this.keepDataOfSelectedNodes(prevNodeMap);
        this.forest.normalizedOptions = this.normalize(NO_PARENT_NODE, options, prevNodeMap);
        this.fixSelectedNodeIds(this.internalValue);
      } else {
        this.forest.normalizedOptions = [];
      }
    },
    getInstanceId: function getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue: function getValue() {
      var _this4 = this;

      if (this.valueFormat === 'id') {
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      }

      var rawNodes = this.internalValue.map(function (id) {
        return _this4.getNode(id).raw;
      });
      return this.multiple ? rawNodes : rawNodes[0];
    },
    getNode: function getNode(nodeId) {
      warning(function () {
        return nodeId != null;
      }, function () {
        return "Invalid node id: ".concat(nodeId);
      });
      if (nodeId == null) return null;
      return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
    },
    createFallbackNode: function createFallbackNode(id) {
      var raw = this.extractNodeFromValue(id);
      var label = this.enhancedNormalizer(raw).label || "".concat(id, " (unknown)");
      var fallbackNode = {
        id: id,
        label: label,
        ancestors: [],
        parentNode: NO_PARENT_NODE,
        isFallbackNode: true,
        isRootNode: true,
        isLeaf: true,
        isBranch: false,
        isDisabled: false,
        isNew: false,
        index: [-1],
        level: 0,
        raw: raw
      };
      return this.$set(this.forest.nodeMap, id, fallbackNode);
    },
    extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
      var _this5 = this;

      if (this.value == null) return [];

      if (this.valueFormat === 'id') {
        return this.multiple ? this.value.slice() : [this.value];
      }

      return (this.multiple ? this.value : [this.value]).map(function (node) {
        return _this5.enhancedNormalizer(node);
      }).map(function (node) {
        return node.id;
      });
    },
    extractNodeFromValue: function extractNodeFromValue(id) {
      var _this6 = this;

      var defaultNode = {
        id: id
      };

      if (this.valueFormat === 'id') {
        return defaultNode;
      }

      var valueArray = this.multiple ? Array.isArray(this.value) ? this.value : [] : this.value ? [this.value] : [];
      var matched = find(valueArray, function (node) {
        return node && _this6.enhancedNormalizer(node).id === id;
      });
      return matched || defaultNode;
    },
    fixSelectedNodeIds: function fixSelectedNodeIds(nodeIdListOfPrevValue) {
      var _this7 = this;

      var nextSelectedNodeIds = [];

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        nextSelectedNodeIds = nodeIdListOfPrevValue;
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        nodeIdListOfPrevValue.forEach(function (nodeId) {
          nextSelectedNodeIds.push(nodeId);

          var node = _this7.getNode(nodeId);

          if (node.isBranch) _this7.traverseDescendantsBFS(node, function (descendant) {
            nextSelectedNodeIds.push(descendant.id);
          });
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        var map = createMap();
        var queue = nodeIdListOfPrevValue.slice();

        while (queue.length) {
          var nodeId = queue.shift();
          var node = this.getNode(nodeId);
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (!(node.parentNode.id in map)) map[node.parentNode.id] = node.parentNode.children.length;
          if (--map[node.parentNode.id] === 0) queue.push(node.parentNode.id);
        }
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _map = createMap();

        var _queue = nodeIdListOfPrevValue.filter(function (nodeId) {
          var node = _this7.getNode(nodeId);

          return node.isLeaf || node.children.length === 0;
        });

        while (_queue.length) {
          var _nodeId = _queue.shift();

          var _node = this.getNode(_nodeId);

          nextSelectedNodeIds.push(_nodeId);
          if (_node.isRootNode) continue;
          if (!(_node.parentNode.id in _map)) _map[_node.parentNode.id] = _node.parentNode.children.length;
          if (--_map[_node.parentNode.id] === 0) _queue.push(_node.parentNode.id);
        }
      }

      var hasChanged = quickDiff(this.forest.selectedNodeIds, nextSelectedNodeIds);
      if (hasChanged) this.forest.selectedNodeIds = nextSelectedNodeIds;
      this.buildForestState();
    },
    keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
      var _this8 = this;

      this.forest.selectedNodeIds.forEach(function (id) {
        if (!prevNodeMap[id]) return;

        var node = _objectSpread({}, prevNodeMap[id], {
          isFallbackNode: true
        });

        _this8.$set(_this8.forest.nodeMap, id, node);
      });
    },
    isSelected: function isSelected(node) {
      return this.forest.selectedNodeMap[node.id] === true;
    },
    stringifyValue: function stringifyValue(value) {
      return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
    },
    traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
      if (!parentNode.isBranch) return;
      var queue = parentNode.children.slice();

      while (queue.length) {
        var currNode = queue[0];
        if (currNode.isBranch) queue.push.apply(queue, treeselectMixin_toConsumableArray(currNode.children));
        callback(currNode);
        queue.shift();
      }
    },
    traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
      var _this9 = this;

      if (!parentNode.isBranch) return;
      parentNode.children.forEach(function (child) {
        _this9.traverseDescendantsDFS(child, callback);

        callback(child);
      });
    },
    traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
      var _this10 = this;

      this.forest.normalizedOptions.forEach(function (rootNode) {
        _this10.traverseDescendantsDFS(rootNode, callback);

        callback(rootNode);
      });
    },
    traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
      var walk = function walk(parentNode) {
        parentNode.children.forEach(function (child) {
          if (callback(child) !== false && child.isBranch) {
            walk(child);
          }
        });
      };

      walk({
        children: this.forest.normalizedOptions
      });
    },
    toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
      if (enabled) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    },
    focusInput: function focusInput() {
      this.$refs.value.focusInput();
    },
    blurInput: function blurInput() {
      this.$refs.value.blurInput();
    },
    handleMouseDown: onLeftClick(function handleMouseDown(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (this.disabled) return;
      var isClickedOnValueContainer = this.$refs.value.$el.contains(evt.target);

      if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
        this.openMenu();
      }

      if (this._blurOnSelect) {
        this.blurInput();
      } else {
        this.focusInput();
      }

      this.resetFlags();
    }),
    handleMouseDownOnClear: onLeftClick(function handleMouseDownOnClear(evt) {
      var _this11 = this;

      evt.stopPropagation();
      evt.preventDefault();
      var result = this.beforeClearAll();

      var handler = function handler(shouldClear) {
        if (shouldClear) {
          _this11.clear();
        }

        _this11.focusInput();
      };

      if (isPromise(result)) {
        result.then(handler);
      } else {
        setTimeout(function () {
          return handler(result);
        }, 0);
      }
    }),
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.focusInput();
      this.toggleMenu();
    }),
    handleClickOutside: function handleClickOutside(evt) {
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
        this.blurInput();
        this.closeMenu();
      }
    },
    handleLocalSearch: function handleLocalSearch() {
      var _this12 = this;

      var searchQuery = this.trigger.searchQuery;

      var done = function done() {
        return _this12.resetHighlightedOptionWhenNecessary(true);
      };

      if (!searchQuery) {
        this.localSearch.active = false;
        return done();
      }

      this.localSearch.active = true;
      this.localSearch.noResults = true;
      this.traverseAllNodesDFS(function (node) {
        if (node.isBranch) {
          var _this12$$set;

          node.isExpandedOnSearch = false;
          node.showAllChildrenOnSearch = false;
          node.isMatched = false;
          node.hasMatchedDescendants = false;

          _this12.$set(_this12.localSearch.countMap, node.id, (_this12$$set = {}, _defineProperty(_this12$$set, ALL_CHILDREN, 0), _defineProperty(_this12$$set, ALL_DESCENDANTS, 0), _defineProperty(_this12$$set, LEAF_CHILDREN, 0), _defineProperty(_this12$$set, LEAF_DESCENDANTS, 0), _this12$$set));
        }
      });
      var lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
      var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ');
      this.traverseAllNodesDFS(function (node) {
        if (_this12.searchNested && splitSearchQuery.length > 1) {
          node.isMatched = splitSearchQuery.every(function (filterValue) {
            return match(false, filterValue, node.nestedSearchLabel);
          });
        } else {
          node.isMatched = _this12.matchKeys.some(function (matchKey) {
            return match(!_this12.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]);
          });
        }

        if (node.isMatched) {
          _this12.localSearch.noResults = false;
          node.ancestors.forEach(function (ancestor) {
            return _this12.localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++;
          });
          if (node.isLeaf) node.ancestors.forEach(function (ancestor) {
            return _this12.localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++;
          });

          if (node.parentNode !== NO_PARENT_NODE) {
            _this12.localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
            if (node.isLeaf) _this12.localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }

        if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== NO_PARENT_NODE) {
          node.parentNode.isExpandedOnSearch = true;
          node.parentNode.hasMatchedDescendants = true;
        }
      });
      done();
    },
    handleRemoteSearch: function handleRemoteSearch() {
      var _this13 = this;

      var searchQuery = this.trigger.searchQuery;
      var entry = this.getRemoteSearchEntry();

      var done = function done() {
        _this13.initialize();

        _this13.resetHighlightedOptionWhenNecessary(true);
      };

      if ((searchQuery === '' || this.cacheOptions) && entry.isLoaded) {
        return done();
      }

      this.callLoadOptionsProp({
        action: ASYNC_SEARCH,
        args: {
          searchQuery: searchQuery
        },
        isPending: function isPending() {
          return entry.isLoading;
        },
        start: function start() {
          entry.isLoading = true;
          entry.isLoaded = false;
          entry.loadingError = '';
        },
        succeed: function succeed(options) {
          entry.isLoaded = true;
          entry.options = options;
          if (_this13.trigger.searchQuery === searchQuery) done();
        },
        fail: function fail(err) {
          entry.loadingError = getErrorMessage(err);
        },
        end: function end() {
          entry.isLoading = false;
        }
      });
    },
    getRemoteSearchEntry: function getRemoteSearchEntry() {
      var searchQuery = this.trigger.searchQuery;

      var entry = this.remoteSearch[searchQuery] || _objectSpread({}, createAsyncOptionsStates(), {
        options: []
      });

      if (searchQuery === '') {
        if (Array.isArray(this.defaultOptions)) {
          entry.options = this.defaultOptions;
          entry.isLoaded = true;
          return entry;
        } else if (this.defaultOptions !== true) {
          entry.isLoaded = true;
          return entry;
        }
      }

      if (!this.remoteSearch[searchQuery]) {
        this.$set(this.remoteSearch, searchQuery, entry);
      }

      return entry;
    },
    shouldExpand: function shouldExpand(node) {
      return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
      if (node.isMatched) return true;
      if (node.isBranch && node.hasMatchedDescendants) return true;
      if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch) return true;
      return false;
    },
    shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
      if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
        return false;
      }

      return true;
    },
    setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var prev = this.menu.current;

      if (prev != null && prev in this.forest.nodeMap) {
        this.forest.nodeMap[prev].isHighlighted = false;
      }

      this.menu.current = node.id;
      node.isHighlighted = true;

      if (scroll) {
        var $option = this.$el.querySelector(".vue-treeselect__option[data-id=\"".concat(node.id, "\"]"));
        if ($option) scrollIntoView(this.$refs.menu, $option);
      }
    },
    resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
      var forceReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var current = this.menu.current;

      if (forceReset || current == null || !(current in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(current))) {
        this.highlightFirstOption();
      }
    },
    highlightFirstOption: function highlightFirstOption() {
      if (!this.hasVisibleOptions) return;
      var first = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(first));
    },
    highlightPrevOption: function highlightPrevOption() {
      if (!this.hasVisibleOptions) return;
      var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (prev === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
    },
    highlightNextOption: function highlightNextOption() {
      if (!this.hasVisibleOptions) return;
      var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (next === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
    },
    highlightLastOption: function highlightLastOption() {
      if (!this.hasVisibleOptions) return;
      var last = getLast(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(last));
    },
    resetSearchQuery: function resetSearchQuery() {
      this.trigger.searchQuery = '';
    },
    closeMenu: function closeMenu() {
      if (!this.menu.isOpen || !this.disabled && this.alwaysOpen) return;
      this.saveMenuScrollPosition();
      this.menu.isOpen = false;
      this.toggleClickOutsideEvent(false);
      this.resetSearchQuery();
      this.$emit('close', this.getValue(), this.getInstanceId());
    },
    openMenu: function openMenu() {
      if (this.disabled || this.menu.isOpen) return;
      this.menu.isOpen = true;
      this.$nextTick(this.adjustMenuOpenDirection);
      this.$nextTick(this.restoreMenuScrollPosition);
      if (!this.options && !this.async) this.loadRootOptions();
      this.toggleClickOutsideEvent(true);
      this.resetHighlightedOptionWhenNecessary();
      this.$emit('open', this.getInstanceId());
    },
    toggleMenu: function toggleMenu() {
      if (this.menu.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    toggleExpanded: function toggleExpanded(node) {
      var nextState;

      if (this.localSearch.active) {
        nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
        if (nextState) node.showAllChildrenOnSearch = true;
      } else {
        nextState = node.isExpanded = !node.isExpanded;
      }

      if (nextState && !node.isLoaded) {
        this.loadChildrenOptions(node);
      }
    },
    buildForestState: function buildForestState() {
      var _this14 = this;

      var selectedNodeMap = createMap();
      this.forest.selectedNodeIds.forEach(function (selectedNodeId) {
        selectedNodeMap[selectedNodeId] = true;
      });
      this.forest.selectedNodeMap = selectedNodeMap;
      var checkedStateMap = createMap();

      if (this.multiple) {
        this.traverseAllNodesByIndex(function (node) {
          checkedStateMap[node.id] = UNCHECKED;
        });
        this.selectedNodes.forEach(function (selectedNode) {
          checkedStateMap[selectedNode.id] = CHECKED;

          if (!_this14.flat && !_this14.disableBranchNodes) {
            selectedNode.ancestors.forEach(function (ancestorNode) {
              if (!_this14.isSelected(ancestorNode)) {
                checkedStateMap[ancestorNode.id] = INDETERMINATE;
              }
            });
          }
        });
      }

      this.forest.checkedStateMap = checkedStateMap;
    },
    enhancedNormalizer: function enhancedNormalizer(raw) {
      return _objectSpread({}, raw, this.normalizer(raw, this.getInstanceId()));
    },
    normalize: function normalize(parentNode, nodes, prevNodeMap) {
      var _this15 = this;

      var normalizedOptions = nodes.map(function (node) {
        return [_this15.enhancedNormalizer(node), node];
      }).map(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            raw = _ref2[1];

        _this15.checkDuplication(node);

        _this15.verifyNodeShape(node);

        var id = node.id,
            label = node.label,
            children = node.children,
            isDefaultExpanded = node.isDefaultExpanded;
        var isRootNode = parentNode === NO_PARENT_NODE;
        var level = isRootNode ? 0 : parentNode.level + 1;
        var isBranch = Array.isArray(children) || children === null;
        var isLeaf = !isBranch;
        var isDisabled = !!node.isDisabled || !_this15.flat && !isRootNode && parentNode.isDisabled;
        var isNew = !!node.isNew;

        var lowerCased = _this15.matchKeys.reduce(function (prev, key) {
          return _objectSpread({}, prev, _defineProperty({}, key, stringifyOptionPropValue(node[key]).toLocaleLowerCase()));
        }, {});

        var nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + ' ' + lowerCased.label;

        var normalized = _this15.$set(_this15.forest.nodeMap, id, createMap());

        _this15.$set(normalized, 'id', id);

        _this15.$set(normalized, 'label', label);

        _this15.$set(normalized, 'level', level);

        _this15.$set(normalized, 'ancestors', isRootNode ? [] : [parentNode].concat(parentNode.ancestors));

        _this15.$set(normalized, 'index', (isRootNode ? [] : parentNode.index).concat(index));

        _this15.$set(normalized, 'parentNode', parentNode);

        _this15.$set(normalized, 'lowerCased', lowerCased);

        _this15.$set(normalized, 'nestedSearchLabel', nestedSearchLabel);

        _this15.$set(normalized, 'isDisabled', isDisabled);

        _this15.$set(normalized, 'isNew', isNew);

        _this15.$set(normalized, 'isMatched', false);

        _this15.$set(normalized, 'isHighlighted', false);

        _this15.$set(normalized, 'isBranch', isBranch);

        _this15.$set(normalized, 'isLeaf', isLeaf);

        _this15.$set(normalized, 'isRootNode', isRootNode);

        _this15.$set(normalized, 'raw', raw);

        if (isBranch) {
          var _this15$$set;

          var isLoaded = Array.isArray(children);

          _this15.$set(normalized, 'childrenStates', _objectSpread({}, createAsyncOptionsStates(), {
            isLoaded: isLoaded
          }));

          _this15.$set(normalized, 'isExpanded', typeof isDefaultExpanded === 'boolean' ? isDefaultExpanded : level < _this15.defaultExpandLevel);

          _this15.$set(normalized, 'hasMatchedDescendants', false);

          _this15.$set(normalized, 'hasDisabledDescendants', false);

          _this15.$set(normalized, 'isExpandedOnSearch', false);

          _this15.$set(normalized, 'showAllChildrenOnSearch', false);

          _this15.$set(normalized, 'count', (_this15$$set = {}, _defineProperty(_this15$$set, ALL_CHILDREN, 0), _defineProperty(_this15$$set, ALL_DESCENDANTS, 0), _defineProperty(_this15$$set, LEAF_CHILDREN, 0), _defineProperty(_this15$$set, LEAF_DESCENDANTS, 0), _this15$$set));

          _this15.$set(normalized, 'children', isLoaded ? _this15.normalize(normalized, children, prevNodeMap) : []);

          if (!isLoaded && typeof _this15.loadOptions !== 'function') {
            warning(function () {
              return false;
            }, function () {
              return 'Unloaded branch node detected. `loadOptions` prop is required to load its children.';
            });
          } else if (!isLoaded && normalized.isExpanded) {
            _this15.loadChildrenOptions(normalized);
          }
        }

        normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[ALL_DESCENDANTS]++;
        });
        if (isLeaf) normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[LEAF_DESCENDANTS]++;
        });

        if (!isRootNode) {
          parentNode.count[ALL_CHILDREN] += 1;
          if (isLeaf) parentNode.count[LEAF_CHILDREN] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        if (prevNodeMap && prevNodeMap[id]) {
          var prev = prevNodeMap[id];

          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;

            if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
              normalized.isExpanded = false;
            } else {
              normalized.childrenStates = _objectSpread({}, prev.childrenStates);
            }
          }
        }

        return normalized;
      });

      if (this.branchNodesFirst) {
        var branchNodes = normalizedOptions.filter(function (option) {
          return option.isBranch;
        });
        var leafNodes = normalizedOptions.filter(function (option) {
          return option.isLeaf;
        });
        normalizedOptions = branchNodes.concat(leafNodes);
      }

      return normalizedOptions;
    },
    loadRootOptions: function loadRootOptions() {
      var _this16 = this;

      this.callLoadOptionsProp({
        action: LOAD_ROOT_OPTIONS,
        isPending: function isPending() {
          return _this16.rootOptionsStates.isLoading;
        },
        start: function start() {
          _this16.rootOptionsStates.isLoading = true;
          _this16.rootOptionsStates.loadingError = '';
        },
        succeed: function succeed() {
          _this16.rootOptionsStates.isLoaded = true;

          _this16.$nextTick(function () {
            _this16.resetHighlightedOptionWhenNecessary(true);
          });
        },
        fail: function fail(err) {
          _this16.rootOptionsStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this16.rootOptionsStates.isLoading = false;
        }
      });
    },
    loadChildrenOptions: function loadChildrenOptions(parentNode) {
      var _this17 = this;

      var id = parentNode.id,
          raw = parentNode.raw;
      this.callLoadOptionsProp({
        action: LOAD_CHILDREN_OPTIONS,
        args: {
          parentNode: raw
        },
        isPending: function isPending() {
          return _this17.getNode(id).childrenStates.isLoading;
        },
        start: function start() {
          _this17.getNode(id).childrenStates.isLoading = true;
          _this17.getNode(id).childrenStates.loadingError = '';
        },
        succeed: function succeed() {
          _this17.getNode(id).childrenStates.isLoaded = true;
        },
        fail: function fail(err) {
          _this17.getNode(id).childrenStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this17.getNode(id).childrenStates.isLoading = false;
        }
      });
    },
    callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
      var action = _ref3.action,
          args = _ref3.args,
          isPending = _ref3.isPending,
          start = _ref3.start,
          succeed = _ref3.succeed,
          fail = _ref3.fail,
          end = _ref3.end;

      if (!this.loadOptions || isPending()) {
        return;
      }

      start();
      var callback = once(function (err, result) {
        if (err) {
          fail(err);
        } else {
          succeed(result);
        }

        end();
      });
      var result = this.loadOptions(_objectSpread({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: action
      }, args, {
        callback: callback
      }));

      if (isPromise(result)) {
        result.then(function () {
          callback();
        }, function (err) {
          callback(err);
        }).catch(function (err) {
          console.error(err);
        });
      }
    },
    checkDuplication: function checkDuplication(node) {
      var _this18 = this;

      warning(function () {
        return !(node.id in _this18.forest.nodeMap && !_this18.forest.nodeMap[node.id].isFallbackNode);
      }, function () {
        return "Detected duplicate presence of node id ".concat(JSON.stringify(node.id), ". ") + "Their labels are \"".concat(_this18.forest.nodeMap[node.id].label, "\" and \"").concat(node.label, "\" respectively.");
      });
    },
    verifyNodeShape: function verifyNodeShape(node) {
      warning(function () {
        return !(node.children === undefined && node.isBranch === true);
      }, function () {
        return 'Are you meant to declare an unloaded branch node? ' + '`isBranch: true` is no longer supported, please use `children: null` instead.';
      });
    },
    select: function select(node) {
      if (this.disabled || node.isDisabled) {
        return;
      }

      if (this.single) {
        this.clear();
      }

      var nextState = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === UNCHECKED : !this.isSelected(node);

      if (nextState) {
        this._selectNode(node);
      } else {
        this._deselectNode(node);
      }

      this.buildForestState();

      if (nextState) {
        this.$emit('select', node.raw, this.getInstanceId());
      } else {
        this.$emit('deselect', node.raw, this.getInstanceId());
      }

      if (this.localSearch.active && nextState && (this.single || this.clearOnSelect)) {
        this.resetSearchQuery();
      }

      if (this.single && this.closeOnSelect) {
        this.closeMenu();

        if (this.searchable) {
          this._blurOnSelect = true;
        }
      }
    },
    clear: function clear() {
      var _this19 = this;

      if (this.hasValue) {
        this.forest.selectedNodeIds = this.multiple ? this.forest.selectedNodeIds.filter(function (nodeId) {
          return _this19.getNode(nodeId).isDisabled;
        }) : [];
        this.buildForestState();
      }
    },
    _selectNode: function _selectNode(node) {
      var _this20 = this;

      if (this.single || this.flat || this.disableBranchNodes) {
        return this.addValue(node);
      }

      if (node.isLeaf || node.isBranch && !node.hasDisabledDescendants) {
        this.addValue(node);
      }

      if (node.isBranch) {
        this.traverseDescendantsBFS(node, function (descendant) {
          if (!descendant.isDisabled) _this20.addValue(descendant);
        });
      }

      if (node.isLeaf || node.isBranch && !node.hasDisabledDescendants) {
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (curr.children.every(this.isSelected)) this.addValue(curr);else break;
        }
      }
    },
    _deselectNode: function _deselectNode(node) {
      var _this21 = this;

      if (this.single || this.flat || this.disableBranchNodes) {
        return this.removeValue(node);
      }

      var hasUncheckedSomeDescendants = false;

      if (node.isBranch) {
        this.traverseDescendantsDFS(node, function (descendant) {
          if (!descendant.isDisabled) {
            _this21.removeValue(descendant);

            hasUncheckedSomeDescendants = true;
          }
        });
      }

      if (node.isLeaf || hasUncheckedSomeDescendants || node.children.length === 0) {
        this.removeValue(node);
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (this.isSelected(curr)) this.removeValue(curr);else break;
        }
      }
    },
    addValue: function addValue(node) {
      this.forest.selectedNodeIds.push(node.id);
      this.forest.selectedNodeMap[node.id] = true;
    },
    removeValue: function removeValue(node) {
      removeFromArray(this.forest.selectedNodeIds, node.id);
      delete this.forest.selectedNodeMap[node.id];
    },
    removeLastValue: function removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      var lastValue = getLast(this.internalValue);
      var lastSelectedNode = this.getNode(lastValue);
      this.select(lastSelectedNode);
    },
    saveMenuScrollPosition: function saveMenuScrollPosition() {
      if (this.$refs.menu) this.menu.lastScrollPosition = this.$refs.menu.scrollTop;
    },
    restoreMenuScrollPosition: function restoreMenuScrollPosition() {
      if (this.$refs.menu) this.$refs.menu.scrollTop = this.menu.lastScrollPosition;
    },
    adjustMenuOpenDirection: function adjustMenuOpenDirection() {
      if (typeof window === 'undefined') return;
      var rect = this.$el.getBoundingClientRect();
      var spaceAbove = rect.top;
      var spaceBelow = window.innerHeight - rect.bottom;
      var hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      var isInViewport = rect.top > 0 && window.innerHeight - rect.top > MENU_BUFFER;

      switch (true) {
        case hasEnoughSpaceBelow:
        case spaceBelow > spaceAbove:
        case !isInViewport:
        case this.openDirection === 'below':
        case this.openDirection === 'bottom':
          this.menu.prefferedOpenDirection = 'below';
          this.menu.optimizedHeight = Math.max(Math.min(spaceBelow - MENU_BUFFER, this.maxHeight), this.maxHeight);
          break;

        default:
          this.menu.prefferedOpenDirection = 'above';
          this.menu.optimizedHeight = Math.min(spaceAbove - MENU_BUFFER, this.maxHeight);
      }
    }
  },
  created: function created() {
    this.verifyProps();
    this.resetFlags();
  },
  mounted: function mounted() {
    if (this.autoFocus || this.autofocus) this.$refs.value.focusInput();
    if (!this.options && !this.async && this.autoLoadRootOptions) this.loadRootOptions();
    if (this.alwaysOpen) this.openMenu();
    if (this.async && this.defaultOptions) this.handleRemoteSearch();
  },
  destroyed: function destroyed() {
    this.toggleClickOutsideEvent(false);
  }
});
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "dom-align"
var external_dom_align_ = __webpack_require__(2);
var external_dom_align_default = /*#__PURE__*/__webpack_require__.n(external_dom_align_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Portal.vue?vue&type=script&lang=js
function Portalvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Portalvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } return target; }

function Portalvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var placeholderEl;
var Portal = {
  inject: ['instance'],
  methods: {
    updateStyle: function updateStyle() {
      var source = this.$el;
      var target = this.instance.$el;
      var points = this.instance.menu.prefferedOpenDirection === 'below' ? ['tl', 'bl'] : ['tl', 'tl'];
      external_dom_align_default()(source, target, {
        points: points
      });
      this.$el.style.width = target.getBoundingClientRect().width + 'px';
    }
  },
  mounted: function mounted() {
    this.updateStyle();
  }
};
/* harmony default export */ var Portalvue_type_script_lang_js = ({
  name: 'vue-treeselect--portal',
  inject: ['instance'],
  computed: {
    enablePortal: function enablePortal() {
      return this.instance.appendToBody;
    }
  },
  created: function created() {
    this.portalCreated = false;
    this.portal = null;
  },
  updated: function updated() {
    if (this.enablePortal) {
      if (this.portalCreated) {
        this.portal.$forceUpdate();
      } else {
        this.install();
      }
    } else {
      this.teardown();
    }
  },
  destroyed: function destroyed() {
    this.teardown();
  },
  methods: {
    install: function install() {
      var _this = this;

      this.portalCreated = true;
      var el = document.createElement('div');
      document.body.appendChild(el);
      this.portal = new external_vue_default.a(Portalvue_type_script_lang_js_objectSpread({}, Portal, {
        el: el,
        parent: this.instance,
        render: function render(h) {
          var className = [_this.instance.$el.className, 'vue-treeselect__portal'].join(' ');
          return h('div', {
            class: className
          }, _this.$slots.default);
        }
      }));
    },
    teardown: function teardown() {
      if (!this.portalCreated) return;
      this.portalCreated = false;
      document.body.removeChild(this.portal.$el);
      this.portal.$el.innerHTML = '';
      this.portal.$destroy();
      this.portal = null;
    }
  },
  render: function render(h) {
    if (this.enablePortal) {
      return placeholderEl || (placeholderEl = h('div', {
        style: {
          display: 'none'
        }
      }));
    }

    return this.$slots.default[0];
  }
});
// CONCATENATED MODULE: ./src/components/Portal.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Portalvue_type_script_lang_js = (Portalvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Portal.vue
var Portal_render, Portal_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_Portalvue_type_script_lang_js,
  Portal_render,
  Portal_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Portal = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HiddenField.vue?vue&type=template&id=07a30e55
var HiddenFieldvue_type_template_id_07a30e55_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"hidden","name":_vm.instance.name,"disabled":_vm.instance.disabled},domProps:{"value":_vm.stringifiedValue}})}
var HiddenFieldvue_type_template_id_07a30e55_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HiddenField.vue?vue&type=template&id=07a30e55

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HiddenField.vue?vue&type=script&lang=js
/* harmony default export */ var HiddenFieldvue_type_script_lang_js = ({
  name: 'vue-treeselect--hidden-field',
  inject: ['instance'],
  props: {
    stringifiedValue: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/HiddenField.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HiddenFieldvue_type_script_lang_js = (HiddenFieldvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/HiddenField.vue





/* normalize component */

var HiddenField_component = normalizeComponent(
  components_HiddenFieldvue_type_script_lang_js,
  HiddenFieldvue_type_template_id_07a30e55_render,
  HiddenFieldvue_type_template_id_07a30e55_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HiddenField = (HiddenField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValue.vue?vue&type=template&id=a54ffd00
var MultiValuevue_type_template_id_a54ffd00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-treeselect__value-container"},[_c('transition-group',{staticClass:"vue-treeselect__multi-value",attrs:{"tag":"div","name":"vue-treeselect__multi-value-item--transition","appear":""}},[_vm._l((_vm.instance.visibleValue),function(node){return [_c('div',{key:'value-' + node.id,staticClass:"vue-treeselect__multi-value-item-container"},[_c('div',{class:[ 'vue-treeselect__multi-value-item', { 'vue-treeselect__multi-value-item-disabled': node.isDisabled }, { 'vue-treeselect__multi-value-item-new': node.isNew } ],on:{"mousedown":function($event){_vm.handleMouseDownOnValueItem($event, node)}}},[_c('span',{staticClass:"vue-treeselect__multi-value-label"},[_vm._v(_vm._s(node.label))]),_c('span',{staticClass:"vue-treeselect__icon vue-treeselect__value-remove"},[_c('delete-icon')],1)])])]}),(_vm.instance.hasExceededLimit)?_c('div',{key:"limit-tip",staticClass:"vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"},[_c('span',{staticClass:"vue-treeselect__limit-tip-text"},[_vm._v(_vm._s(_vm.limitText))])]):_vm._e(),(!_vm.instance.hasValue && !_vm.instance.trigger.searchQuery)?_c('placeholder',{key:"placeholer"}):_vm._e(),_c('search-input',{key:"input",ref:"input"})],2)],1)}
var MultiValuevue_type_template_id_a54ffd00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MultiValue.vue?vue&type=template&id=a54ffd00

// CONCATENATED MODULE: ./src/mixins/valueMixin.js

/* harmony default export */ var valueMixin = ({
  computed: {
    limitText: function limitText() {
      var count = this.instance.internalValue.length - this.instance.limit;
      return this.instance.limitText(count);
    }
  },
  methods: {
    focusInput: function focusInput() {
      this.$refs.input.focus();
    },
    blurInput: function blurInput() {
      this.$refs.input.blur();
    },
    handleMouseDownOnValueItem: onLeftClick(function handleMouseDownOnValueItem(evt, node) {
      this.instance.select(node);
    })
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Placeholder.vue?vue&type=template&id=3ed1e0d7
var Placeholdervue_type_template_id_3ed1e0d7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-treeselect__placeholder vue-treeselect-helper-zoom-effect-off"},[_vm._t("placeholder",[_vm._v(_vm._s(_vm.instance.placeholder))])],2)}
var Placeholdervue_type_template_id_3ed1e0d7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Placeholder.vue?vue&type=template&id=3ed1e0d7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Placeholder.vue?vue&type=script&lang=js
/* harmony default export */ var Placeholdervue_type_script_lang_js = ({
  name: 'vue-treeselect--placeholder',
  inject: ['instance']
});
// CONCATENATED MODULE: ./src/components/Placeholder.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Placeholdervue_type_script_lang_js = (Placeholdervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Placeholder.vue





/* normalize component */

var Placeholder_component = normalizeComponent(
  components_Placeholdervue_type_script_lang_js,
  Placeholdervue_type_template_id_3ed1e0d7_render,
  Placeholdervue_type_template_id_3ed1e0d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Placeholder = (Placeholder_component.exports);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(3);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchInput.vue?vue&type=script&lang=js



var keysThatRequireMenuBeingOpen = [KEY_CODES.ENTER, KEY_CODES.END, KEY_CODES.HOME, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN];
/* harmony default export */ var SearchInputvue_type_script_lang_js = ({
  name: 'vue-treeselect--input',
  inject: ['instance'],
  data: function data() {
    return {
      inputWidth: MIN_INPUT_WIDTH,
      value: ''
    };
  },
  computed: {
    needAutoSize: function needAutoSize() {
      return this.instance.searchable && !this.instance.disabled && this.instance.multiple;
    }
  },
  watch: {
    'instance.trigger.searchQuery': function instanceTriggerSearchQuery(newValue) {
      this.value = newValue;
    }
  },
  updated: function updated() {
    if (this.needAutoSize) this.updateInputWidth();
  },
  created: function created() {
    this.debouncedCallback = debounce_default()(this.updateSearchQuery, INPUT_DEBOUNCE_DELAY, {
      leading: true,
      trailing: true
    });
  },
  methods: {
    clear: function clear() {
      this.onInput({
        target: {
          value: ''
        }
      });
    },
    focus: function focus() {
      if (!this.instance.disabled) {
        this.$refs.input && this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus: function onFocus() {
      this.instance.trigger.isFocused = true;
      if (this.instance.openOnFocus) this.instance.openMenu();
    },
    onBlur: function onBlur() {
      if (document.activeElement === this.instance.$refs.menu) {
        this.focus();
        return;
      }

      this.instance.trigger.isFocused = false;
      this.instance.closeMenu();
    },
    onInput: function onInput(evt) {
      var value = evt.target.value;
      this.value = value;

      if (value) {
        this.debouncedCallback();
      } else {
        this.debouncedCallback.cancel();
        this.updateSearchQuery();
      }
    },
    onKeyDown: function onKeyDown(evt) {
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;
      var key = 'which' in evt ? evt.which : evt.keyCode;

      if (!this.instance.menu.isOpen && includes(keysThatRequireMenuBeingOpen, key)) {
        evt.preventDefault();
        return this.instance.openMenu();
      }

      switch (key) {
        case KEY_CODES.BACKSPACE:
          {
            if (this.instance.backspaceRemoves && !this.value.length) {
              this.instance.removeLastValue();
            }

            break;
          }

        case KEY_CODES.ENTER:
          {
            evt.preventDefault();
            var current = this.instance.getNode(this.instance.menu.current);
            if (current.isBranch && this.instance.disableBranchNodes) return;
            this.instance.select(current);
            break;
          }

        case KEY_CODES.ESCAPE:
          {
            if (this.value.length) {
              this.clear();
            } else if (this.instance.menu.isOpen) {
              this.instance.closeMenu();
            } else if (this.instance.escapeClearsValue) {
              this.instance.clear();
            }

            break;
          }

        case KEY_CODES.END:
          {
            evt.preventDefault();
            this.instance.highlightLastOption();
            break;
          }

        case KEY_CODES.HOME:
          {
            evt.preventDefault();
            this.instance.highlightFirstOption();
            break;
          }

        case KEY_CODES.ARROW_LEFT:
          {
            var _current = this.instance.getNode(this.instance.menu.current);

            if (_current.isBranch && this.instance.shouldExpand(_current)) {
              evt.preventDefault();
              this.instance.toggleExpanded(_current);
            } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !this.instance.shouldExpand(_current))) {
              evt.preventDefault();
              this.instance.setCurrentHighlightedOption(_current.parentNode);
            }

            break;
          }

        case KEY_CODES.ARROW_UP:
          {
            evt.preventDefault();
            this.instance.highlightPrevOption();
            break;
          }

        case KEY_CODES.ARROW_RIGHT:
          {
            var _current2 = this.instance.getNode(this.instance.menu.current);

            if (_current2.isBranch && !this.instance.shouldExpand(_current2)) {
              evt.preventDefault();
              this.instance.toggleExpanded(_current2);
            }

            break;
          }

        case KEY_CODES.ARROW_DOWN:
          {
            evt.preventDefault();
            this.instance.highlightNextOption();
            break;
          }

        case KEY_CODES.DELETE:
          {
            if (this.instance.deleteRemoves && !this.value.length) {
              this.instance.removeLastValue();
            }

            break;
          }

        default:
          {
            this.instance.openMenu();
          }
      }
    },
    onMouseDown: function onMouseDown(evt) {
      if (this.value.length) {
        evt.stopPropagation();
      }
    },
    renderInputContainer: function renderInputContainer(h) {
      var props = {
        class: 'vue-treeselect__input-container'
      };
      var children = [];

      if (this.instance.searchable && !this.instance.disabled) {
        children.push(this.renderInput(h));
        if (this.needAutoSize) children.push(this.renderSizer(h));
      }

      if (!this.instance.searchable) {
        deepExtend(props, {
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            keydown: this.onKeyDown
          },
          ref: 'input'
        });
      }

      if (!this.instance.searchable && !this.instance.disabled) {
        deepExtend(props, {
          attrs: {
            tabIndex: this.instance.tabIndex
          }
        });
      }

      return h('div', props, children);
    },
    renderInput: function renderInput(h) {
      return h('input', {
        class: 'vue-treeselect__input',
        attrs: {
          type: 'text',
          autocomplete: 'off',
          tabIndex: this.instance.tabIndex,
          required: this.instance.required && !this.instance.hasValue
        },
        domProps: {
          value: this.value
        },
        style: {
          width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
        },
        on: {
          focus: this.onFocus,
          input: this.onInput,
          blur: this.onBlur,
          keydown: this.onKeyDown,
          mousedown: this.onMouseDown
        },
        ref: 'input'
      });
    },
    renderSizer: function renderSizer(h) {
      return h('div', {
        class: 'vue-treeselect__sizer',
        domProps: {
          textContent: this.value
        },
        ref: 'sizer'
      });
    },
    updateInputWidth: function updateInputWidth() {
      this.inputWidth = Math.max(MIN_INPUT_WIDTH, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery: function updateSearchQuery() {
      this.instance.trigger.searchQuery = this.value;
    }
  },
  render: function render(h) {
    return this.renderInputContainer(h);
  }
});
// CONCATENATED MODULE: ./src/components/SearchInput.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SearchInputvue_type_script_lang_js = (SearchInputvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/SearchInput.vue
var SearchInput_render, SearchInput_staticRenderFns




/* normalize component */

var SearchInput_component = normalizeComponent(
  components_SearchInputvue_type_script_lang_js,
  SearchInput_render,
  SearchInput_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchInput = (SearchInput_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=template&id=12b4a02e
var Deletevue_type_template_id_12b4a02e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 348.333 348.333"}},[_c('path',{attrs:{"d":"M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"}})])}
var Deletevue_type_template_id_12b4a02e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=template&id=12b4a02e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=script&lang=js
/* harmony default export */ var Deletevue_type_script_lang_js = ({
  name: 'vue-treeselect--x'
});
// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=script&lang=js
 /* harmony default export */ var icons_Deletevue_type_script_lang_js = (Deletevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/icons/Delete.vue





/* normalize component */

var Delete_component = normalizeComponent(
  icons_Deletevue_type_script_lang_js,
  Deletevue_type_template_id_12b4a02e_render,
  Deletevue_type_template_id_12b4a02e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Delete = (Delete_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValue.vue?vue&type=script&lang=js




/* harmony default export */ var MultiValuevue_type_script_lang_js = ({
  name: 'vue-treeselect--multi-value',
  components: {
    Placeholder: Placeholder,
    SearchInput: SearchInput,
    DeleteIcon: Delete
  },
  mixins: [valueMixin],
  inject: ['instance']
});
// CONCATENATED MODULE: ./src/components/MultiValue.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MultiValuevue_type_script_lang_js = (MultiValuevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/MultiValue.vue





/* normalize component */

var MultiValue_component = normalizeComponent(
  components_MultiValuevue_type_script_lang_js,
  MultiValuevue_type_template_id_a54ffd00_render,
  MultiValuevue_type_template_id_a54ffd00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiValue = (MultiValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SingleValue.vue?vue&type=template&id=754eff10
var SingleValuevue_type_template_id_754eff10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-treeselect__value-container"},[(_vm.instance.hasValue && !_vm.instance.trigger.searchQuery)?_c('div',{staticClass:"vue-treeselect__single-value"},[_vm._v("\n    "+_vm._s(_vm.instance.selectedNodes[0].label)+"\n  ")]):(!_vm.instance.trigger.searchQuery)?_c('placeholder'):_vm._e(),_c('search-input',{key:"input",ref:"input"})],1)}
var SingleValuevue_type_template_id_754eff10_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SingleValue.vue?vue&type=template&id=754eff10

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SingleValue.vue?vue&type=script&lang=js



/* harmony default export */ var SingleValuevue_type_script_lang_js = ({
  name: 'vue-treeselect--single-value',
  components: {
    Placeholder: Placeholder,
    SearchInput: SearchInput
  },
  mixins: [valueMixin],
  inject: ['instance']
});
// CONCATENATED MODULE: ./src/components/SingleValue.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SingleValuevue_type_script_lang_js = (SingleValuevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/SingleValue.vue





/* normalize component */

var SingleValue_component = normalizeComponent(
  components_SingleValuevue_type_script_lang_js,
  SingleValuevue_type_template_id_754eff10_render,
  SingleValuevue_type_template_id_754eff10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleValue = (SingleValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Option.vue?vue&type=template&id=2cdeaf48
var Optionvue_type_template_id_2cdeaf48_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-treeselect__list-item",class:("vue-treeselect__indent-level-" + (_vm.node.level))},[_c('div',{class:[ 'vue-treeselect__option', {
    'vue-treeselect__option--disabled': _vm.node.isDisabled,
    'vue-treeselect__option--selected': _vm.instance.isSelected(_vm.node),
    'vue-treeselect__option--highlight': _vm.node.isHighlighted,
    'vue-treeselect__option--matched': _vm.instance.localSearch.active && _vm.node.isMatched,
    'vue-treeselect__option--hide': !_vm.instance.shouldShowOptionInMenu(_vm.node),
  } ],attrs:{"data-id":_vm.node.id},on:{"mouseenter":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.setCurrentHighlightedOption($event)}}},[(_vm.shouldShowArrorPlaceholder)?_c('div',{staticClass:"vue-treeselect__option-arrow-placeholder"},[_vm._v(" ")]):(_vm.node.isBranch)?_c('div',{staticClass:"vue-treeselect__option-arrow-container",on:{"mousedown":_vm.handleMouseDownOnOptionArrow}},[_c('transition',{attrs:{"name":"vue-treeselect__option-arrow--prepare","appear":""}},[_c('arrow-icon',{class:[ 'vue-treeselect__option-arrow', { 'vue-treeselect__option-arrow--rotated': _vm.shouldExpand } ]})],1)],1):_vm._e(),_c('div',{staticClass:"vue-treeselect__label-container",on:{"mousedown":_vm.handleMouseDownOnOption}},[(_vm.instance.multiple && (!_vm.instance.disableBranchNodes || _vm.node.isLeaf))?_c('div',{staticClass:"vue-treeselect__checkbox-container"},[_c('span',{class:[ 'vue-treeselect__checkbox', {
          'vue-treeselect__checkbox--checked': _vm.checkedState === _vm.CHECKED,
          'vue-treeselect__checkbox--indeterminate': _vm.checkedState === _vm.INDETERMINATE,
          'vue-treeselect__checkbox--unchecked': _vm.checkedState === _vm.UNCHECKED,
          'vue-treeselect__checkbox--disabled': _vm.node.isDisabled,
        } ]},[_c('span',{staticClass:"vue-treeselect__check-mark"}),_c('span',{staticClass:"vue-treeselect__minus-mark"})])]):_vm._e(),_vm._t("option-label",null,{node:_vm.node,shouldShowCount:_vm.shouldShowCount,count:_vm.count,labelClassName:"vue-treeselect__label",countClassName:"vue-treeselect__count"})],2)]),_c('transition',{attrs:{"name":"vue-treeselect__list--transition"}},[(_vm.shouldExpand)?_c('div',{staticClass:"vue-treeselect__list"},[(_vm.node.childrenStates.isLoaded)?[(_vm.node.children.length)?_vm._l((_vm.node.children),function(childNode){return _c('vue-treeselect--option',{key:childNode.id,attrs:{"node":childNode},scopedSlots:_vm._u([{key:"option-label",fn:function(ref){
        var node = ref.node;
        var shouldShowCount = ref.shouldShowCount;
        var count = ref.count;
        var labelClassName = ref.labelClassName;
        var countClassName = ref.countClassName;
return [_vm._t("option-label",null,{node:node,shouldShowCount:shouldShowCount,count:count,labelClassName:labelClassName,countClassName:countClassName})]}}])})}):_c('tip',{attrs:{"type":"no-children","icon":"warning"}},[_vm._v(_vm._s(_vm.instance.noChildrenText))])]:(_vm.node.childrenStates.isLoading)?_c('tip',{attrs:{"type":"loading","icon":"loader"}},[_vm._v(_vm._s(_vm.instance.loadingText))]):(_vm.node.childrenStates.loadingError)?_c('tip',{attrs:{"type":"error","icon":"error"}},[_vm._v("\n        "+_vm._s(_vm.node.childrenStates.loadingError)+"\n        "),_c('a',{staticClass:"vue-treeselect__retry",attrs:{"title":_vm.instance.retryTitle},on:{"click":function($event){_vm.instance.loadChildrenOptions(_vm.node)}}},[_vm._v("\n          "+_vm._s(_vm.instance.retryText)+"\n        ")])]):_vm._e()],2):_vm._e()])],1)}
var Optionvue_type_template_id_2cdeaf48_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Option.vue?vue&type=template&id=2cdeaf48

// CONCATENATED MODULE: ./src/mixins/optionMixin.js

/* harmony default export */ var optionMixin = ({
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  computed: {
    checkedState: function checkedState() {
      return this.instance.forest.checkedStateMap[this.node.id];
    },
    shouldExpand: function shouldExpand() {
      if (!this.node.isBranch) return false;
      return this.instance.shouldExpand(this.node);
    },
    shouldShowCount: function shouldShowCount() {
      if (!this.node.isBranch) return false;
      return this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount;
    },
    count: function count() {
      if (!this.shouldShowCount) return NaN;
      return this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf];
    },
    shouldShowArrorPlaceholder: function shouldShowArrorPlaceholder() {
      if (this.node.isBranch) return false;
      return this.node.isLeaf && this.instance.hasBranchNodes;
    }
  },
  methods: {
    handleMouseDownOnOption: onLeftClick(function handleMouseDownOnOptionArrow() {
      if (this.node.isBranch && this.instance.disableBranchNodes) {
        this.instance.toggleExpanded(this.node);
      } else {
        this.instance.select(this.node);
      }
    }),
    handleMouseDownOnOptionArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
      this.instance.toggleExpanded(this.node);
    }),
    setCurrentHighlightedOption: function setCurrentHighlightedOption() {
      this.instance.setCurrentHighlightedOption(this.node, false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tip.vue?vue&type=template&id=1d39f9a5
var Tipvue_type_template_id_1d39f9a5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:("vue-treeselect__tip vue-treeselect__" + _vm.type + "-tip")},[_c('div',{staticClass:"vue-treeselect__icon-container"},[_c('span',{class:("vue-treeselect__icon-" + _vm.icon)})]),_c('span',{class:("vue-treeselect__tip-text vue-treeselect__" + _vm.type + "-tip-text")},[_vm._t("default")],2)])}
var Tipvue_type_template_id_1d39f9a5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tip.vue?vue&type=template&id=1d39f9a5

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tip.vue?vue&type=script&lang=js
/* harmony default export */ var Tipvue_type_script_lang_js = ({
  name: 'vue-treeselect--tip',
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tip.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Tipvue_type_script_lang_js = (Tipvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Tip.vue





/* normalize component */

var Tip_component = normalizeComponent(
  components_Tipvue_type_script_lang_js,
  Tipvue_type_template_id_1d39f9a5_render,
  Tipvue_type_template_id_1d39f9a5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tip = (Tip_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=template&id=5d5151cb
var Arrowvue_type_template_id_5d5151cb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 292.362 292.362"}},[_c('path',{attrs:{"d":"M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"}})])}
var Arrowvue_type_template_id_5d5151cb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=template&id=5d5151cb

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=script&lang=js
/* harmony default export */ var Arrowvue_type_script_lang_js = ({
  name: 'vue-treeselect--arrow'
});
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=script&lang=js
 /* harmony default export */ var icons_Arrowvue_type_script_lang_js = (Arrowvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue





/* normalize component */

var Arrow_component = normalizeComponent(
  icons_Arrowvue_type_script_lang_js,
  Arrowvue_type_template_id_5d5151cb_render,
  Arrowvue_type_template_id_5d5151cb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Arrow = (Arrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Option.vue?vue&type=script&lang=js



/* harmony default export */ var Optionvue_type_script_lang_js = ({
  name: 'vue-treeselect--option',
  inject: ['instance', 'UNCHECKED', 'INDETERMINATE', 'CHECKED'],
  components: {
    Tip: Tip,
    ArrowIcon: Arrow
  },
  mixins: [optionMixin]
});
// CONCATENATED MODULE: ./src/components/Option.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Optionvue_type_script_lang_js = (Optionvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Option.vue





/* normalize component */

var Option_component = normalizeComponent(
  components_Optionvue_type_script_lang_js,
  Optionvue_type_template_id_2cdeaf48_render,
  Optionvue_type_template_id_2cdeaf48_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Option = (Option_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Treeselect.vue?vue&type=script&lang=js









/* harmony default export */ var Treeselectvue_type_script_lang_js = ({
  name: 'vue-treeselect',
  components: {
    Portal: components_Portal,
    HiddenField: HiddenField,
    MultiValue: MultiValue,
    SingleValue: SingleValue,
    TreeselectOption: Option,
    Tip: Tip,
    ArrowIcon: Arrow,
    DeleteIcon: Delete
  },
  mixins: [treeselectMixin]
});
// CONCATENATED MODULE: ./src/components/Treeselect.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Treeselectvue_type_script_lang_js = (Treeselectvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Treeselect.vue





/* normalize component */

var Treeselect_component = normalizeComponent(
  components_Treeselectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Treeselect = (Treeselect_component.exports);
// EXTERNAL MODULE: ./src/style.less
var style = __webpack_require__(4);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__esModule", function() { return __esModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Treeselect", function() { return Treeselect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LOAD_ROOT_OPTIONS", function() { return LOAD_ROOT_OPTIONS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LOAD_CHILDREN_OPTIONS", function() { return LOAD_CHILDREN_OPTIONS; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ASYNC_SEARCH", function() { return ASYNC_SEARCH; });


/* harmony default export */ var src = __webpack_exports__["default"] = (Treeselect);


var __esModule = true;
var VERSION = "0.0.32";

/***/ })
/******/ ]);
//# sourceMappingURL=vue-treeselect.js.map

/***/ }),

/***/ "kaUV":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/dist-web/index.js ***!
  \**************************************************/
/*! exports provided: default, alignElement, alignPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return alignElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return alignPoint; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "nmnc":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "Kz5y");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "sEfC":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    now = __webpack_require__(/*! ./now */ "QIyF"),
    toNumber = __webpack_require__(/*! ./toNumber */ "tLB3");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "tLB3":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "GoyQ"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "/9aa");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ })

}]);