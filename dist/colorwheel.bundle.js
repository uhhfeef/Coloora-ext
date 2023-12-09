/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/gaAnalytics.js":
/*!************************************!*\
  !*** ./src/modules/gaAnalytics.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendInitialEvent: () => (/* binding */ sendInitialEvent)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// var FLASK_ENDPOINT = 'https://coloora-400822.et.r.appspot.com/send-analytics';

var clientId;
function getOrCreateClientId() {
  return _getOrCreateClientId.apply(this, arguments);
}
function _getOrCreateClientId() {
  _getOrCreateClientId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!clientId) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", clientId);
        case 2:
          _context.next = 4;
          return chrome.storage.local.get('clientId');
        case 4:
          result = _context.sent;
          clientId = result.clientId;
          if (clientId) {
            _context.next = 11;
            break;
          }
          // Generate a unique client ID, the actual value is not relevant
          clientId = self.crypto.randomUUID();
          console.log('generated clientid');
          _context.next = 11;
          return chrome.storage.local.set({
            clientId: clientId
          });
        case 11:
          console.log(clientId);
          return _context.abrupt("return", clientId);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getOrCreateClientId.apply(this, arguments);
}
function sendInitialEvent(_x, _x2) {
  return _sendInitialEvent.apply(this, arguments);
}
function _sendInitialEvent() {
  _sendInitialEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(eventName, elementId) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log("inside gaanalytics");
          _context2.next = 3;
          return getOrCreateClientId();
        case 3:
          clientId = _context2.sent;
          if (!(clientId !== "a1e0c334-cbc9-43bf-8de0-16d4a4f89ab7")) {
            _context2.next = 27;
            break;
          }
          _context2.prev = 5;
          _context2.t0 = fetch;
          _context2.t1 = FLASK_ENDPOINT;
          _context2.t2 = {
            'Content-Type': 'application/json'
          };
          _context2.t3 = JSON;
          _context2.next = 12;
          return getOrCreateClientId();
        case 12:
          _context2.t4 = _context2.sent;
          _context2.t5 = eventName;
          _context2.t6 = {
            id: elementId
          };
          _context2.t7 = {
            client_id: _context2.t4,
            event_name: _context2.t5,
            event_params: _context2.t6
          };
          _context2.t8 = _context2.t3.stringify.call(_context2.t3, _context2.t7);
          _context2.t9 = {
            method: 'POST',
            headers: _context2.t2,
            body: _context2.t8
          };
          (0, _context2.t0)(_context2.t1, _context2.t9);
          console.log("event sent");
          _context2.next = 25;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t10 = _context2["catch"](5);
          console.error("Error sending data to Flask server:", _context2.t10);
        case 25:
          _context2.next = 29;
          break;
        case 27:
          console.log("demo user, event not sent");
          return _context2.abrupt("return");
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 22]]);
  }));
  return _sendInitialEvent.apply(this, arguments);
}


/***/ }),

/***/ "./src/modules/imageAnalysis.js":
/*!**************************************!*\
  !*** ./src/modules/imageAnalysis.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyzeImage: () => (/* binding */ analyzeImage),
/* harmony export */   extractImageFromPage: () => (/* binding */ extractImageFromPage)
/* harmony export */ });
/* harmony import */ var _gaAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gaAnalytics */ "./src/modules/gaAnalytics.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function extractImageFromPage(_x) {
  return _extractImageFromPage.apply(this, arguments);
} // Analyze image function: Fetch, downsample, analyze, and draw
function _extractImageFromPage() {
  _extractImageFromPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, text, parser, doc, imgElements;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('inside extract');
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.text();
        case 6:
          text = _context.sent;
          // Get the page content as text
          parser = new DOMParser(); // Create a DOM parser
          doc = parser.parseFromString(text, 'text/html'); // Parse the page
          imgElements = doc.querySelectorAll('img'); // Find all image elements
          // Return the first or second image's src attribute based on the OS
          if (!(imgElements.length > 0)) {
            _context.next = 17;
            break;
          }
          console.log('imgElements', imgElements);
          if (!navigator.platform.includes('Mac')) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", imgElements[1].src);
        case 16:
          return _context.abrupt("return", imgElements[0].src);
        case 17:
          throw new Error('No images found');
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _extractImageFromPage.apply(this, arguments);
}
function analyzeImage(imageUrl, sendInitialEvent, event, id, sendImageForAnalysis) {
  if (!imageUrl) {
    return; // Terminate the function
  }

  // Check if the URL is a direct link to an image
  if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
    extractImageFromPage(imageUrl).then(function (directImageUrl) {
      sendInitialEvent(event, id);
      sendImageForAnalysis(directImageUrl);
    })["catch"](function (error) {
      console.error('Failed to extract direct image URL:', error);
    });
  } else {
    sendInitialEvent(event, id);
    sendImageForAnalysis(imageUrl);
  }
}

// function checkDataTypes() {
//     // Check for different types of data
//     if (e.dataTransfer.types.includes('text/uri-list')) {
//         // Handle URI list (common for links)
//         const url = e.dataTransfer.getData('text/uri-list');
//         console.log('Dropped URL:', url);
//         // Display the image in the container
//         imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//         // Analyze the image
//         analyzeImage(url);
//     } else if (e.dataTransfer.types.includes('text/html')) {
//         // Handle HTML (common for rich content)
//         const htmlContent = e.dataTransfer.getData('text/html');
//         const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
//         const imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
//         if (imgSrc) {
//             console.log('Extracted Image URL from HTML:', imgSrc);
//             // Display the image in the container
//             imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//             // Analyze the image
//             analyzeImage(url);
//         }
//     } else if (e.dataTransfer.types.includes('text/plain')) {
//         // Handle plain text (fallback)
//         const url = e.dataTransfer.getData('text/plain');
//         console.log('Extracted URL from text:', url);
//         // Display the image in the container
//         imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//         // Analyze the image
//         analyzeImage(url);
//     }
// }



/***/ }),

/***/ "./src/modules/loadingBar.js":
/*!***********************************!*\
  !*** ./src/modules/loadingBar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideLoadingGif: () => (/* binding */ hideLoadingGif),
/* harmony export */   showLoadingGif: () => (/* binding */ showLoadingGif)
/* harmony export */ });
function showLoadingGif(container, element) {
  var canvas = document.querySelector("canvas");
  console.log("entering showLoadingGif");

  // const colorWheelContainer = document.getElementById('colorWheelContainer');
  // const colorWheelElement = document.getElementById('colorWheel');

  var loadingGif = document.createElement('img');
  loadingGif.id = 'extensionLoadingGif';
  loadingGif.src = chrome.runtime.getURL('assets/gifs/loading-bar.gif');
  loadingGif.width = 50;
  loadingGif.height = 50;
  loadingGif.style.display = 'block';
  loadingGif.style.position = 'absolute';

  // Calculate the center_color_wheel position of the canvas
  var canvasRect = element.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();

  // Adjust gif's position based on canvas's position
  loadingGif.style.left = "".concat(canvasRect.left - containerRect.left + canvas.width / 2 - loadingGif.width / 2, "px");
  loadingGif.style.top = "".concat(canvasRect.top - containerRect.top + canvas.height / 2 - loadingGif.height / 2, "px");
  loadingGif.style.zIndex = '9999'; // Ensure it's on top

  colorWheelContainer.appendChild(loadingGif);
  console.log("GIF appended");
  console.log(chrome.runtime.getURL('assets/gifs/loading-bar.gif'));
}
function hideLoadingGif() {
  console.log("done loading");
  var gif = document.getElementById('extensionLoadingGif');
  if (gif) {
    gif.remove();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/cs/colorWheel.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gaAnalytics */ "./src/modules/gaAnalytics.js");
/* harmony import */ var _modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/imageAnalysis */ "./src/modules/imageAnalysis.js");
/* harmony import */ var _modules_loadingBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loadingBar */ "./src/modules/loadingBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// Constants and DOM elements
var canvas = document.createElement("canvas");
canvas.id = "colorWheel";
var ctx_colorwheel;
var center_color_wheel;
var radius;

// Initialization: Setting up the UI
function initializeUIWheel() {
  console.log("Initializing UI...");
  // Create a container for the color wheel
  var container = document.createElement('div');
  container.className = 'coloora-container';
  container.id = 'colorWheelContainer';

  // Create close button
  var closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'X';
  closeButton.onclick = function () {
    document.body.removeChild(container);
  };
  container.appendChild(closeButton);

  // Drag and drop
  var isDragging = false;
  var initialMouseX, initialMouseY;
  var initialContainerX, initialContainerY;
  container.addEventListener('mousedown', function (e) {
    isDragging = true;

    // Record the initial mouse position
    initialMouseX = e.clientX;
    initialMouseY = e.clientY;

    // Record the initial position of the container
    // Adjusting for the transform offset
    initialContainerX = container.getBoundingClientRect().left + container.offsetWidth / 2;
    initialContainerY = container.getBoundingClientRect().top;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
  function onMouseMove(e) {
    if (!isDragging) return;

    // Calculate the movement
    var dx = e.clientX - initialMouseX;
    var dy = e.clientY - initialMouseY;

    // Apply the movement to the container's position, adjusting for the transform offset
    container.style.left = "".concat(initialContainerX + dx, "px");
    container.style.top = "".concat(initialContainerY + dy, "px");
  }
  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    isDragging = false;
  }

  // Set up the canvas
  canvas.width = 250; // Set canvas size
  canvas.height = 250;
  ctx_colorwheel = canvas.getContext("2d");
  center_color_wheel = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  radius = canvas.width / 2;
  canvas.style.border = 'none';
  canvas.style.transition = 'background-color 0.3s'; // Smooth transition for background color

  // Prevent default drag behavior
  canvas.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

  // Handle drag over event
  canvas.addEventListener('dragover', function (e) {
    e.preventDefault();
    canvas.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; // Change background color
    canvas.style.border = '2px dashed #ccc';
  });

  // Handle drag leave event
  canvas.addEventListener('dragleave', function (e) {
    canvas.style.backgroundColor = 'transparent'; // Revert background color
    canvas.style.border = 'none';
  });

  // Handle drop event
  canvas.addEventListener('drop', function (e) {
    e.preventDefault();
    canvas.style.border = 'none';
    canvas.style.backgroundColor = 'transparent'; // Revert background color

    // Create an image and draw it on the canvas
    var img = new Image();
    img.onload = function () {
      ctx_colorwheel.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx_colorwheel.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image
    };
    // Check for different types of data
    if (e.dataTransfer.types.includes('text/uri-list')) {
      // Handle URI list (common for links)
      var _url = e.dataTransfer.getData('text/uri-list');
      console.log('Dropped URL:', _url);

      // Analyze the image
      (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(_url, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'color_wheel_analysis', "analyzeButton", sendImageForAnalysis);
    } else if (e.dataTransfer.types.includes('text/html')) {
      // Handle HTML (common for rich content)
      var htmlContent = e.dataTransfer.getData('text/html');
      var doc = new DOMParser().parseFromString(htmlContent, 'text/html');
      var imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
      if (imgSrc) {
        console.log('Extracted Image URL from HTML:', imgSrc);

        // Analyze the image
        (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(url, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'color_wheel_analysis', "analyzeButton", sendImageForAnalysis);
      }
    } else if (e.dataTransfer.types.includes('text/plain')) {
      // Handle plain text (fallback)
      var _url2 = e.dataTransfer.getData('text/plain');
      console.log('Extracted URL from text:', _url2);

      // Analyze the image
      (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(_url2, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'color_wheel_analysis', "analyzeButton", sendImageForAnalysis);
    }
  });
  container.appendChild(canvas); // Append the canvas to the container

  // Create label for color boxes
  var label = document.createElement('label');
  label.className = 'label';
  label.innerText = 'Drag n drop any image here';
  container.appendChild(label);
  document.body.appendChild(container);
  drawColorWheel();
}
function sendImageForAnalysis(imageUrl) {
  console.log("Sending image URL to Flask API:", imageUrl);
  (0,_modules_loadingBar__WEBPACK_IMPORTED_MODULE_2__.showLoadingGif)(document.getElementById('colorWheelContainer'), document.getElementById('colorWheel'));

  // Endpoint where the Flask API is running.
  // const flaskApiEndpoint = "http://localhost:5000/fetch-image"; //demo
  var flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/fetch-image";
  fetch(flaskApiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      imageURL: imageUrl
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success && data.dataURL) {
      var img = new Image();
      img.src = data.dataURL;
      img.onload = function () {
        var colorData = downsampleAndAnalyzeColors(img);
        drawColorWheel(); // Reset the color wheel
        updateColorWheel(colorData);
      };
    } else {
      console.error("Error:", data.error);
    }
  })["catch"](function (error) {
    console.error("Network Error:", error);
  });
}

// Downsample and analyze colors from an image
function downsampleAndAnalyzeColors(img) {
  var downsampledCanvas = document.createElement('canvas');
  var downsampledCtx = downsampledCanvas.getContext('2d');
  downsampledCanvas.width = 150;
  downsampledCanvas.height = 150;
  downsampledCtx.drawImage(img, 0, 0, downsampledCanvas.width, downsampledCanvas.height);
  return analyzeColors(downsampledCtx, downsampledCanvas.width, downsampledCanvas.height);
}
function getColorByAngleAndRadius(angle, r, l) {
  // Convert the angle to hue (0-360)
  var hue = angle;

  // Convert radius to saturation (0-100)
  var saturation = r / radius * 100;

  // Check if l is undefined
  if (l === undefined) {
    l = 50;
  }
  return "hsl(".concat(hue, ", ").concat(saturation, "%, ").concat(l, "%)");
}
function drawColorWheel() {
  // Clear the canvas
  ctx_colorwheel.clearRect(0, 0, canvas.width, canvas.height);
  for (var angle = 0; angle < 360; angle++) {
    for (var r = 0; r < radius; r++) {
      ctx_colorwheel.beginPath();
      ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, r);
      ctx_colorwheel.arc(center_color_wheel.x, center_color_wheel.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
      ctx_colorwheel.stroke();
    }
  }
}
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}
function analyzeColors(ctx_colorwheel, width, height) {
  var imageData = ctx_colorwheel.getImageData(0, 0, width, height).data;
  var colorData = {};
  for (var i = 0; i < imageData.length; i += 4) {
    var r = imageData[i];
    var g = imageData[i + 1];
    var b = imageData[i + 2];
    var _rgbToHsl = rgbToHsl(r, g, b),
      _rgbToHsl2 = _slicedToArray(_rgbToHsl, 3),
      h = _rgbToHsl2[0],
      s = _rgbToHsl2[1],
      l = _rgbToHsl2[2];
    var hueKey = Math.round(h);
    var satKey = Math.round(s);
    if (!colorData[hueKey]) {
      colorData[hueKey] = {};
    }
    if (!colorData[hueKey][satKey]) {
      colorData[hueKey][satKey] = {
        count: 0,
        totalBrightness: 0
      };
    }
    colorData[hueKey][satKey].count++;
    colorData[hueKey][satKey].totalBrightness += l;
  }
  return colorData;
}
function updateColorWheel(colorData) {
  for (var angle = 0; angle < 360; angle++) {
    for (var r = 0; r < radius; r++) {
      ctx_colorwheel.beginPath();
      var hueData = colorData[angle];
      var saturationValue = Math.round(r / radius * 100);
      if (hueData && hueData[saturationValue]) {
        var avgBrightness = hueData[saturationValue].totalBrightness / hueData[saturationValue].count;
        ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, saturationValue, avgBrightness);
      } else {
        ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, r, 10); // Reduced brightness to 10% for unmatched hues/saturations
      }
      ctx_colorwheel.arc(center_color_wheel.x, center_color_wheel.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
      ctx_colorwheel.stroke();
    }
  }
  (0,_modules_loadingBar__WEBPACK_IMPORTED_MODULE_2__.hideLoadingGif)();
}
function shakeElement(element) {
  console.log('Shake function called');
  var shakes = 5;
  var distance = 2; // in pixels

  var originalMarginLeft = parseInt(window.getComputedStyle(element).marginLeft, 10) || 0;
  var originalMarginRight = parseInt(window.getComputedStyle(element).marginRight, 10) || 0;
  function animateShake() {
    if (shakes === 0) {
      element.style.marginLeft = "".concat(originalMarginLeft, "px"); // Reset to original margins
      element.style.marginRight = "".concat(originalMarginRight, "px");
      return;
    }

    // Alternate direction for shaking effect
    var offset = shakes % 2 === 0 ? distance : -distance;
    element.style.marginLeft = "".concat(originalMarginLeft + offset, "px");
    element.style.marginRight = "".concat(originalMarginRight - offset, "px");
    shakes -= 1;
    setTimeout(animateShake, 50);
  }
  animateShake();
}

// This function will create the UI if it does not exist, or toggle its visibility
function toggleUI() {
  var colorWheelContainer = document.getElementById('colorWheelContainer');
  console.log('inside toggle');
  if (!colorWheelContainer) {
    initializeUIWheel();
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('color_wheel_loaded', 'colorWheelContainer');
  } else {
    // Toggle the visibility of the UI
    colorWheelContainer.style.visibility = 'visible';
    colorWheelContainer.style.opacity = '1';
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('color_wheel_loaded', 'colorWheelContainer');
  }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleColorWheel") {
    console.log('inside chrome runtime message listener');
    toggleUI();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=colorwheel.bundle.js.map