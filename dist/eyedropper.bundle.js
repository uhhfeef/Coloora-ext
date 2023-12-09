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
  !*** ./src/cs/eyedropper.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gaAnalytics */ "./src/modules/gaAnalytics.js");
/* harmony import */ var _modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/imageAnalysis */ "./src/modules/imageAnalysis.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var zoomLevel = 1; // Initial zoom level
var zoomCenterX = 0; // Initial zoom center X
var zoomCenterY = 0; // Initial zoom center Y

function initializeEyedropper() {
  console.log("Initializing UI...");

  // Create a main container
  var container = document.createElement('div');
  container.className = 'coloora-container';
  container.id = 'eyedropperContainer';

  // Create close button (acts like a header)
  var closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'X';
  closeButton.onclick = function () {
    document.body.removeChild(container);
  };
  container.appendChild(closeButton);

  // Create a container for image, input link, and button
  var imageInputContainer = document.createElement('div');
  imageInputContainer.className = 'image-input-container';

  // Create an image container
  var imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';
  imageInputContainer.appendChild(imageContainer);

  // Set up the image container as a drop zone
  imageContainer.textContent = 'Drag and drop image URL here';

  // Prevent dragging of the image container
  imageContainer.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

  // Handle drag over event
  imageContainer.addEventListener('dragover', function (e) {
    e.preventDefault();
    imageContainer.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; // Semi-transparent grey overlay
    imageContainer.style.border = '2px dashed #ccc';
  });

  // Handle drag leave event
  imageContainer.addEventListener('dragleave', function (e) {
    imageContainer.style.backgroundColor = 'transparent'; // Remove overlay
    imageContainer.style.borderColor = '#ccc';
    imageContainer.style.border = 'none';
  });

  // Handle drop event
  imageContainer.addEventListener('drop', function (e) {
    e.preventDefault();
    imageContainer.style.backgroundColor = 'transparent'; // Remove overlay

    // Check for different types of data
    if (e.dataTransfer.types.includes('text/uri-list')) {
      // Handle URI list (common for links)
      var _url = e.dataTransfer.getData('text/uri-list');
      console.log('Dropped URL:', _url);
      // Display the image in the container
      imageContainer.innerHTML = "<img src=\"".concat(_url, "\" alt=\"Dropped Image\" style=\"max-width: 100%; max-height: 150px;\">");

      // Analyze the image
      (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(_url, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'loaded_image_eyedropper', 'eyedropperContainer', sendImageForAnalysis);
    } else if (e.dataTransfer.types.includes('text/html')) {
      // Handle HTML (common for rich content)
      var htmlContent = e.dataTransfer.getData('text/html');
      var doc = new DOMParser().parseFromString(htmlContent, 'text/html');
      var imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
      if (imgSrc) {
        console.log('Extracted Image URL from HTML:', imgSrc);
        // Display the image in the container
        imageContainer.innerHTML = "<img src=\"".concat(url, "\" alt=\"Dropped Image\" style=\"max-width: 100%; max-height: 150px;\">");

        // Analyze the image
        (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(url, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'loaded_image_eyedropper', 'eyedropperContainer', sendImageForAnalysis);
      }
    } else if (e.dataTransfer.types.includes('text/plain')) {
      // Handle plain text (fallback)
      var _url2 = e.dataTransfer.getData('text/plain');
      console.log('Extracted URL from text:', _url2);
      // Display the image in the container
      imageContainer.innerHTML = "<img src=\"".concat(_url2, "\" alt=\"Dropped Image\" style=\"max-width: 100%; max-height: 150px;\">");

      // Analyze the image
      (0,_modules_imageAnalysis__WEBPACK_IMPORTED_MODULE_1__.analyzeImage)(_url2, _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent, 'loaded_image_eyedropper', 'eyedropperContainer', sendImageForAnalysis);
    }

    // Animate the visibility of colorBoxesContainer
    colorBoxesContainer.style.opacity = '1'; // Trigger the fade-in animation
    colorBoxesContainer.style.visibility = 'visible';
    imageContainer.style.border = 'none';
    var img = imageContainer.querySelector('img');
    if (img) {
      // Prevent dragging of the image
      img.addEventListener('mousedown', function (event) {
        event.preventDefault();
      });
    }
  });

  // Create label for color boxes
  var label = document.createElement('label');
  label.className = 'label';
  label.innerText = 'Click to pick, right click to delete\nZoom in and out with mouse wheel';
  imageInputContainer.appendChild(label);
  container.appendChild(imageInputContainer);

  // Create a container for color boxes and label
  var colorContainer = document.createElement('div');
  colorContainer.className = 'color-container';
  container.appendChild(colorContainer);

  // Create a container for color boxes
  var colorBoxesContainer = document.createElement('div');
  colorBoxesContainer.className = 'color-boxes-container';
  colorBoxesContainer.id = 'colorBoxesContainer';
  colorContainer.appendChild(colorBoxesContainer);
  addNewCategory(colorBoxesContainer);

  // create a b/w filter to clipboard button
  var greyscaleButton = document.createElement('button');
  greyscaleButton.className = 'label-button';
  greyscaleButton.id = 'greyscaleButton';
  greyscaleButton.innerText = '◐';
  colorBoxesContainer.appendChild(greyscaleButton);
  // Add event listener to the copy button
  greyscaleButton.addEventListener('click', function () {
    toggleGrayscale();
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('greyscale_clicked', 'eyedropperContainer');
  });

  // create a copy to clipboard button
  var copyButton = document.createElement('button');
  copyButton.className = 'label-button';
  copyButton.innerText = '📋';
  copyButton.style.fontSize = '16px';
  copyButton.style.bottom = '20px';
  copyButton.style.right = '40px';
  colorBoxesContainer.appendChild(copyButton);
  // Add event listener to the copy button
  copyButton.addEventListener('click', function () {
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('copy_palette_clicked', 'eyedropperContainer');
    copyButton.innerText = '✅'; // Change the button text to a tick symbol
    copyColorBoxesAsImage();
    setTimeout(function () {
      copyButton.innerText = '📋'; // Revert the button text to the original symbol
    }, 1500); // Delay for 2 seconds (2000 milliseconds)
  });

  // Create a button to add a new category
  var addCategoryButton = document.createElement('button');
  addCategoryButton.className = 'label-button';
  addCategoryButton.id = 'addCategoryButton';
  addCategoryButton.innerText = '+';
  addCategoryButton.style.fontSize = '20px';
  addCategoryButton.style.bottom = '20px';
  addCategoryButton.style.right = '20px';
  // Placeholder for future functionality
  addCategoryButton.onclick = function () {
    addNewCategory(colorBoxesContainer);
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('added_category', 'addCategoryButton');
  };
  colorBoxesContainer.appendChild(addCategoryButton);

  // Append main container to the body
  document.body.appendChild(container);
  initializeDragAndDrop(container);
  activateEyedropperForImage();
}
function editTitle(titleElement, container) {
  var input = document.createElement('input');
  input.className = 'category-title-input';
  input.type = 'text';
  input.value = titleElement.innerText;

  // Replace the title with the input field
  container.replaceChild(input, titleElement);

  // Focus the input field and select the text
  input.focus();
  input.select();

  // Event listener for when the user finishes editing
  input.addEventListener('blur', function () {
    titleElement.innerText = input.value || 'Default'; // Use the new title or revert to 'Default' if empty
    container.replaceChild(titleElement, input);
  });

  // Also update title on pressing Enter
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      input.blur(); // Trigger the blur event
    }
  });
}
function addNewCategory(container) {
  // Create a new category container
  var newCategoryName = 'New Category'; // Default name for new category
  var newCategoryContainer = createCategoryContainer(newCategoryName);
  newCategoryContainer.id = newCategoryName.toLowerCase().replace(/\s+/g, '-'); // Convert name to a valid id

  // Add double click event listener to edit the title of the new category
  var titleElement = newCategoryContainer.querySelector('div');
  titleElement.addEventListener('dblclick', function () {
    editTitle(titleElement, newCategoryContainer);
  });

  // Append the new category container to the main container
  container.appendChild(newCategoryContainer);
}
function createCategoryContainer(categoryName) {
  // Create the category container
  var categoryContainer = document.createElement('div');
  categoryContainer.className = 'category-container';

  // Create the title element
  var title = document.createElement('div');
  title.className = 'category-title';
  title.innerText = categoryName;

  // Add double click event listener to edit the title
  title.addEventListener('dblclick', function () {
    editTitle(title, categoryContainer);
  });

  // Append the title to the category container
  categoryContainer.appendChild(title);

  // Create a container for color boxes within this category
  var colorBoxes = document.createElement('div');
  colorBoxes.style.display = 'grid';
  colorBoxes.style.gridTemplateColumns = 'repeat(5, 40px)';
  colorBoxes.style.gridAutoRows = '40px';
  colorBoxes.id = "".concat(categoryName.toLowerCase().replace(/\s+/g, '-'), "-color-boxes");

  // Append the color boxes container to the category container
  categoryContainer.appendChild(colorBoxes);
  return categoryContainer;
}
function initializeDragAndDrop(container) {
  var isDragging = false;
  var initialMouseX, initialMouseY;
  var initialContainerX, initialContainerY;
  container.addEventListener('mousedown', function (e) {
    // Check if the target element is the image element
    if (e.target.tagName.toLowerCase() === 'img') {
      return;
    }
    isDragging = true;

    // Record the initial mouse position
    initialMouseX = e.clientX;
    initialMouseY = e.clientY;

    // Record the initial position of the container
    initialContainerX = container.getBoundingClientRect().left + container.offsetWidth / 2;
    initialContainerY = container.getBoundingClientRect().top;
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  function onMouseMove(e) {
    if (!isDragging) return;

    // Calculate the movement
    var dx = e.clientX - initialMouseX;
    var dy = e.clientY - initialMouseY;

    // Apply the movement to the container's position
    container.style.left = "".concat(initialContainerX + dx, "px");
    container.style.top = "".concat(initialContainerY + dy, "px");
  }
  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    isDragging = false;
  }
}
function copyColorBoxesAsImage() {
  var colorBoxesContainer = document.getElementById('colorBoxesContainer');
  var categories = colorBoxesContainer.getElementsByClassName('category-container');

  // Calculate the size of the canvas
  var canvasWidth = 200; // Adjust as needed
  var canvasHeight = 0;
  var _iterator = _createForOfIteratorHelper(categories),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var category = _step.value;
      canvasHeight += category.offsetHeight + 10; // 10px for margin
    }

    // Create a canvas element
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  var ctx = canvas.getContext('2d');

  // Draw color boxes and category names on the canvas
  var yOffset = 0;
  var _iterator2 = _createForOfIteratorHelper(categories),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _category = _step2.value;
      // Draw category name
      var categoryName = _category.querySelector('div').innerText;
      ctx.fillStyle = '#000'; // Text color
      ctx.font = '16px Arial'; // Adjust font style as needed
      ctx.fillText(categoryName, 0, yOffset + 16); // Adjust text position as needed
      yOffset += 30; // Adjust space for category name

      // Draw color boxes
      var colorBoxes = _category.querySelectorAll('div[id$="-color-boxes"] > div > input');
      var xOffset = 0;
      var rowHeight = 40;
      var _iterator3 = _createForOfIteratorHelper(colorBoxes),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var box = _step3.value;
          var color = box.style.backgroundColor;
          ctx.fillStyle = color;
          ctx.fillRect(xOffset, yOffset, 40, 40);
          xOffset += 40;

          // Move to next row if end of current row is reached
          if (xOffset + 40 > canvas.width) {
            xOffset = 0;
            yOffset += rowHeight;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      yOffset += rowHeight + 20; // Space after each category
    }

    // Convert the canvas to a blob and copy to clipboard
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  canvas.toBlob(function (blob) {
    var item = new ClipboardItem({
      "image/png": blob
    });
    navigator.clipboard.write([item]).then(function () {
      return console.log("Color boxes with category names copied as image to clipboard");
    })["catch"](function (err) {
      return console.error("Error copying image to clipboard", err);
    });
  });
}
function sendImageForAnalysis(imageUrl) {
  console.log("Sending image URL to Flask API:", imageUrl);
  // showLoadingGif();

  // Endpoint where the Flask API is running.
  // const flaskApiEndpoint = "http://localhost:5000/fetch-image"; //demo 
  var flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/fetch-image"; //prod

  fetch(flaskApiEndpoint, {
    // Send the image URL to the Flask API
    method: 'POST',
    // Send a POST request
    headers: {
      'Content-Type': 'application/json' // Send the image URL in JSON format
    },
    body: JSON.stringify({
      imageURL: imageUrl
    }) // Send the image URL in the request body
  })
  // Get the response from the Flask API
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success && data.dataURL) {
      // If the response is successful
      // Create an image element
      var img = new Image(); // Create a new image element
      img.src = data.dataURL; // Set the image source to the data URL
      img.onload = function () {
        // Calculate the aspect ratio
        var aspectRatio = img.naturalWidth / img.naturalHeight;

        // Get half the viewport height
        var halfViewportHeight = window.innerHeight / 2;
        var colorBoxContainer = document.getElementById('colorBoxesContainer');

        // Get the image container
        var imageContainer = document.getElementById('imageContainer');

        // If the image's natural height exceeds half the viewport height, adjust its dimensions
        if (img.naturalHeight > halfViewportHeight) {
          img.height = halfViewportHeight;
          img.width = halfViewportHeight * aspectRatio;
        } else {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        }

        // Set the image container dimensions
        imageContainer.style.width = "".concat(img.width, "px");
        imageContainer.style.height = "".concat(img.height, "px");

        // Remove any previous images
        imageContainer.innerHTML = '';

        // Create a new container for holding the image
        var image = document.createElement('div');
        image.id = 'image';

        // Append the new image
        image.appendChild(img);
        imageContainer.appendChild(image);
        img.addEventListener('wheel', handleWheelEvent); // Add event listener for zooming

        // Set the color box container height to the image height
        colorBoxContainer.style.height = "".concat(img.height, "px");
      };
    } else {
      console.error("Error:", data.error);
    }
  })["catch"](function (error) {
    console.error("Network Error:", error);
  });
}
function activateEyedropperForImage() {
  var imageContainer = document.getElementById('imageContainer');
  var pixelDisplay = document.createElement('div');
  pixelDisplay.className = 'pixel-display';
  document.body.appendChild(pixelDisplay);
  var isDragging = false;
  imageContainer.addEventListener('mousedown', function (event) {
    isDragging = true;
    var img = event.target;
    if (img instanceof HTMLImageElement) {
      updatePixelDisplay(event, img);
      animatePixelDisplay('expand');
    }
  });
  document.addEventListener('mouseup', function () {
    isDragging = false;
    animatePixelDisplay('shrink'); // Shrink animation
  });
  imageContainer.addEventListener('mousemove', function (event) {
    if (!isDragging) return;
    var img = event.target;
    if (img instanceof HTMLImageElement) {
      updatePixelDisplay(event, img); // Update the pixel display
    }
  });
  imageContainer.addEventListener('mouseleave', function () {
    pixelDisplay.style.visibility = 'hidden'; // Hide when cursor leaves the image
  });
  function updatePixelDisplay(event, img) {
    // Draw the image on a canvas
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Get the color of the clicked pixel
    var x = event.offsetX;
    var y = event.offsetY;
    var pixel = ctx.getImageData(x, y, 1, 1).data;
    var rgb = "rgb(".concat(pixel[0], ", ").concat(pixel[1], ", ").concat(pixel[2], ")");

    // Update the pixel display element
    pixelDisplay.style.backgroundColor = rgb;
    pixelDisplay.style.left = "".concat(event.pageX + 10, "px");
    pixelDisplay.style.top = "".concat(event.pageY - 30, "px");
    pixelDisplay.style.visibility = 'visible';
  }
  function animatePixelDisplay(animationType) {
    if (animationType === 'expand') {
      // Animate the pixel display
      pixelDisplay.animate([
      // Keyframes
      {
        transform: 'scale(.8)',
        opacity: 1
      }, {
        transform: 'scale(1.2)',
        opacity: 1
      }, {
        transform: 'scale(1)',
        opacity: 1
      }], {
        // Animation options
        duration: 100,
        easing: 'ease-out'
      });
    } else if (animationType === 'shrink') {
      // Shrink animation
      var animation = pixelDisplay.animate([{
        transform: 'scale(1)',
        opacity: 1
      }, {
        transform: 'scale(0.8)',
        opacity: 0.5
      }], {
        duration: 100,
        easing: 'ease-out'
      });
      // Use the finished promise to hide the element after the animation
      animation.finished.then(function () {
        pixelDisplay.style.visibility = 'hidden';
      });
    }
  }
  imageContainer.addEventListener('click', function (event) {
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('created_color_box', 'eyedropperContainer');
    var img = event.target; // Get the image element

    // Ensure the clicked element is an image
    if (img instanceof HTMLImageElement) {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Get the color of the clicked pixel
      var x = event.offsetX;
      var y = event.offsetY;
      var pixel = ctx.getImageData(x, y, 1, 1).data;
      console.log(pixel); // This will log [R, G, B, A]
      var rgb = "rgb(".concat(pixel[0], ", ").concat(pixel[1], ", ").concat(pixel[2], ")");
      var hexColor = rgbToHex(rgb); // Convert RGB to HEX

      var colorBoxContainer = document.createElement('div');
      colorBoxContainer.className = 'color-box-container';

      // Create a new color box
      var colorBox = document.createElement('input');
      colorBox.className = 'color-box';
      colorBox.type = 'color';
      colorBox.value = hexColor;
      colorBox.style.backgroundColor = rgb;

      // Append the color box to the last category's color box container
      var categories = document.querySelectorAll('#colorBoxesContainer > .category-container');
      var lastCategoryColorBoxes = categories[categories.length - 1].lastChild;
      colorBox.addEventListener('input', function () {
        this.style.backgroundColor = this.value;
      });

      // Add right-click event to delete the color box
      colorBox.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Prevent the default context menu from appearing

        // Add reverse animation before removing the color box
        colorBox.animate([{
          transform: 'scale(1)',
          opacity: 1
        }, {
          transform: 'scale(1.1)',
          opacity: 1
        }, {
          transform: 'scale(0.8)',
          opacity: 0
        }], {
          duration: 150,
          easing: 'ease-out'
        }).onfinish = function () {
          lastCategoryColorBoxes.removeChild(colorBoxContainer); // Remove the color box
          (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('removed_color_box', 'eyedropperContainer');
        };
      });
      colorBoxContainer.appendChild(colorBox);
      lastCategoryColorBoxes.appendChild(colorBoxContainer); // Append the color box to the last category's color box container
      colorBoxesContainer.scrollTop = colorBoxesContainer.scrollHeight; // Scroll to the bottom

      // Add subtle pop animation
      colorBox.animate([{
        transform: 'scale(0.8)',
        opacity: 0
      }, {
        transform: 'scale(1.1)',
        opacity: 1
      }, {
        transform: 'scale(1)',
        opacity: 1
      }], {
        duration: 300,
        easing: 'ease-out'
      });
      console.log(rgb);

      // Event listener for mouse enter (hover)
      colorBoxContainer.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(0.8)'; // Scales down the box
      });

      // Event listener for mouse leave
      colorBoxContainer.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'; // Returns to original scale
      });
      colorBoxContainer.addEventListener('click', function (event) {
        // Check if the color box container was clicked
        console.log('Color box container clicked');
        (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('clicked_color_box', 'eyedropperContainer');
      });
    }
  });
}
function handleWheelEvent(event) {
  event.preventDefault();
  var delta = event.deltaY || event.detail || event.wheelDelta;
  var zoomFactor = 0.1;

  // Update zoom level
  if (delta < 0) {
    zoomLevel *= 1 + zoomFactor;
  } else {
    zoomLevel /= 1 + zoomFactor;
  }
  var minZoomLevel = 1;
  var maxZoomLevel = Infinity;
  zoomLevel = Math.max(minZoomLevel, Math.min(zoomLevel, maxZoomLevel));

  // Calculate the center of the zoom based on the mouse position
  var rect = this.getBoundingClientRect();
  var zoomCenterX = (event.clientX - rect.left) / rect.width;
  var zoomCenterY = (event.clientY - rect.top) / rect.height;

  // Apply the zoom transformation
  this.style.transformOrigin = "".concat(zoomCenterX * 100, "% ").concat(zoomCenterY * 100, "%");
  this.style.transform = "scale(".concat(zoomLevel, ")");
}

// JavaScript to toggle grayscale
function toggleGrayscale() {
  var image = document.getElementById('image'); // Assuming the image has an ID 'image'

  // Check if the image already has grayscale applied
  if (image.style.filter === 'grayscale(100%)') {
    image.style.filter = ''; // Remove the grayscale filter
  } else {
    image.style.filter = 'grayscale(100%)'; // Apply the grayscale filter
  }
}
function rgbToHex(rgb) {
  var _rgb$match$map = rgb.match(/\d+/g).map(Number),
    _rgb$match$map2 = _slicedToArray(_rgb$match$map, 3),
    r = _rgb$match$map2[0],
    g = _rgb$match$map2[1],
    b = _rgb$match$map2[2];
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function shakeElement(element) {
  console.log('Shake function called');
  var shakes = 5;
  var distance = 2; // in pixels

  var originalStyle = {
    marginLeft: element.style.marginLeft,
    marginRight: element.style.marginRight
  };
  function animateShake() {
    if (shakes === 0) {
      // Reset to original styles
      element.style.marginLeft = originalStyle.marginLeft;
      element.style.marginRight = originalStyle.marginRight;
      return;
    }

    // Alternate direction for shaking effect
    var offset = shakes % 2 === 0 ? distance : -distance;
    element.style.marginLeft = "".concat(parseInt(element.style.marginLeft || 0, 10) + offset, "px");
    element.style.marginRight = "".concat(parseInt(element.style.marginRight || 0, 10) - offset, "px");
    shakes -= 1;
    setTimeout(animateShake, 50);
  }
  animateShake();
}

// This function will create the UI if it does not exist, or toggle its visibility
function toggleUI() {
  var eyedropperContainer = document.getElementById('eyedropperContainer');
  console.log('inside toggle');
  if (!eyedropperContainer) {
    initializeEyedropper();
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('custom_palette_loaded', 'eyedropperContainer');
  } else {
    // Toggle the visibility of the UI
    eyedropperContainer.style.visibility = 'visible';
    eyedropperContainer.style.opacity = '1';
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('custom_palette_loaded', 'eyedropperContainer');
  }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleEyedropper") {
    console.log('inside chrome runtime message listener');
    toggleUI();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=eyedropper.bundle.js.map