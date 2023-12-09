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
/*!****************************!*\
  !*** ./src/cs/gradient.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gaAnalytics */ "./src/modules/gaAnalytics.js");


// sendInitialEvent('gradient_loaded', 'gradientContainer');

// Initialization: Setting up the UI
console.log("gradient base  loaded!");
var imageUrlInputGradient = document.getElementById('imageUrl');
var analyzeButtonGradient = document.getElementById('analyzeButtonEyedropper');
function initializeGradient() {
  console.log("Initializing UI...");

  // Create a main container
  var container = document.createElement('div');
  container.className = 'coloora-container';
  container.id = 'gradientContainer';
  container.style.position = 'fixed';
  container.style.top = '10%';
  container.style.left = '50%';
  container.style.transform = 'translateX(-50%)';
  container.style.zIndex = '99999';
  container.style.backgroundColor = 'rgba(50, 50, 50, 0.5)'; // Semi-transparent background
  container.style.border = '0.5px solid #000';
  container.style.padding = '20px';
  container.style.borderRadius = '8px';
  container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.8)';
  container.style.display = 'flex';
  container.style.justifyContent = 'space-between'; // To place child containers side by side
  container.style.backdropFilter = 'blur(30px)'; // Apply blur effect

  // Create close button (acts like a header)
  var closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.background = 'red';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '50%';
  closeButton.style.width = '20px';
  closeButton.style.height = '20px';
  closeButton.style.cursor = 'pointer';
  closeButton.onclick = function () {
    document.body.removeChild(container);
  };
  container.appendChild(closeButton);

  // Create a container for image, input link, and button
  var imageInputContainerGradient = document.createElement('div');
  imageInputContainerGradient.style.display = 'flex';
  imageInputContainerGradient.style.flexDirection = 'column';
  imageInputContainerGradient.style.flex = '1';
  imageInputContainerGradient.style.display = 'flex'; // Added for centering
  imageInputContainerGradient.style.justifyContent = 'center'; // Center horizontally
  imageInputContainerGradient.style.alignItems = 'center'; // Center vertically
  // imageInputContainerGradient.style.marginRight = '20px'; // Space between the two child containers

  // Create an image container
  var imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';
  imageContainer.style.margin = '10px 0 10px 0';
  imageContainer.style.backgroundColor = 'transparent';
  imageInputContainerGradient.appendChild(imageContainer);

  // Set up the image container as a drop zone
  imageContainer.textContent = 'Drag and drop image URL here';
  imageContainer.style.fontSize = '14px';
  imageContainer.style.color = '#fff';
  imageContainer.style.padding = '20px';
  imageContainer.style.border = '2px dashed #ccc';
  imageContainer.style.transition = 'background-color 0.3s'; // Add transition for smooth animation
  imageContainer.style.display = 'flex'; // Add flex display
  imageContainer.style.justifyContent = 'center'; // Center horizontally
  imageContainer.style.alignItems = 'center'; // Center vertically

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

    // Get the URL from the dropped item
    var url = e.dataTransfer.getData('text');

    // Display the image in the container
    imageContainer.innerHTML = "<img src=\"".concat(url, "\" alt=\"Dropped Image\" style=\"max-width: 100%; max-height: 150px;\">");

    // Analyze the image
    analyzeImage(url);
    // Animate the visibility of colorBoxesContainer
    imageContainer.style.border = 'none';
    var img = imageContainer.querySelector('img');
    if (img) {
      // Prevent dragging of the image
      img.addEventListener('mousedown', function (event) {
        event.preventDefault();
      });
    }
  });

  // Create a div for input and button to make them inline
  var inputContainer = document.createElement('div');
  inputContainer.style.display = 'flex';
  inputContainer.style.justifyContent = 'center';

  // // Create label for color boxes

  // const label = document.createElement('label');
  // label.innerText = 'Click to pick, right click to delete';
  // label.style.color = '#fff';
  // label.style.fontSize = '12px';
  // label.style.marginTop = '10px';
  // imageInputContainerGradient.appendChild(label);

  container.appendChild(imageInputContainerGradient);

  // Create a container for color boxes and label
  var colorContainer = document.createElement('div');
  colorContainer.style.display = 'flex';
  colorContainer.style.flexDirection = 'column';
  colorContainer.style.marginTop = '10px';
  container.appendChild(colorContainer);

  // colorBoxesContainer.style.height = '200px';

  // Append main container to the body
  document.body.appendChild(container);
  initializeDragAndDrop(container);
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
function extractImageFromPage(url) {
  return fetch(url).then(function (response) {
    return response.text();
  }).then(function (text) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html');
    var imgElements = doc.querySelectorAll('img');
    if (imgElements.length > 0) {
      return imgElements[0].src;
    }
    throw new Error('No images found');
  });
}

// Analyze image function: Fetch, downsample, analyze, and draw
function analyzeImage(imageUrl) {
  if (!imageUrl) {
    shakeElement(imageUrlInputEyedropper);
    return; // Terminate the function
  }
  // imageUrlInputEyedropper.value = '';

  if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
    extractImageFromPage(imageUrl).then(function (directImageUrl) {
      (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('loaded_image_eyedropper', 'eyedropperContainer');
      sendImageForAnalysisEyedropper(directImageUrl);
    })["catch"](function (error) {
      shakeElement(imageUrlInputEyedropper);
      console.error('Failed to extract direct image URL:', error);
    });
  } else {
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('loaded_image_eyedropper', 'eyedropperContainer');
    sendImageForAnalysisEyedropper(imageUrl);
  }
}
function sendImageForAnalysisEyedropper(imageUrl) {
  console.log("Sending image URL to Flask API:", imageUrl);
  // showLoadingGif();

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
      // Create an image element
      var img = new Image();
      img.src = data.dataURL;
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

        // Append the new image
        imageContainer.appendChild(img);
      };
    } else {
      console.error("Error:", data.error);
    }
  })["catch"](function (error) {
    console.error("Network Error:", error);
  });
}

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleGradient") {
    // initializeGradient();
    alert("Feature coming soon");
    (0,_modules_gaAnalytics__WEBPACK_IMPORTED_MODULE_0__.sendInitialEvent)('gradient_clicked', 'gradientContainer');
  }
});

// // This function will create the UI if it does not exist, or toggle its visibility
// function toggleUI() {
//     let gradientContainer = document.getElementById('gradientContainer');
//     console.log('inside toggle')

//     if (!gradientContainer) {
//         initializeGradient();
//     } else {
//         // Toggle the visibility of the UI
//         gradientContainer.style.visibility = 'visible';
//         gradientContainer.style.opacity = '1';
//     }
// }

// // Listen for messages from the popup or background script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "toggleColorWheel") {
//         console.log('inside chrome runtime message listener');
//         toggleUI();
//     }
// });
})();

/******/ })()
;
//# sourceMappingURL=gradient.bundle.js.map