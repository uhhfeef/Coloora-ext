/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// importScripts('ExtPay.js') // dont enable until extpay issue is resolved

// Colorwheel
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("inside background.js for cw");
  if (request.action === "executeColorWheelScript") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs.length === 0) {
        console.error('No active tab found.');
        return;
      }
      var tabId = tabs[0].id;

      // First, inject the CSS file
      chrome.scripting.insertCSS({
        target: {
          tabId: tabId
        },
        files: ['styles/style-cs.css']
      }, function () {
        // Then, inject the JavaScript file
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ['colorwheel.bundle.js']
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          // After injecting the content script, send the message
          chrome.tabs.sendMessage(tabId, {
            action: "toggleColorWheel"
          });
        });
      });
    });
  }
});

// Palette
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "executeColorPaletteScript") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs.length === 0) {
        console.error('No active tab found.');
        return;
      }
      var tabId = tabs[0].id;

      // First, inject the CSS file
      chrome.scripting.insertCSS({
        target: {
          tabId: tabId
        },
        files: ['styles/style-cs.css']
      }, function () {
        // Then, inject the JavaScript file
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ['palette.bundle.js']
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          // After injecting the content script, send the message
          chrome.tabs.sendMessage(tabId, {
            action: "togglePalette"
          });
        });
      });
    });
  }
});

// Eyedropper
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "executeEyedropper") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs.length === 0) {
        console.error('No active tab found.');
        return;
      }
      var tabId = tabs[0].id;

      // First, inject the CSS file
      chrome.scripting.insertCSS({
        target: {
          tabId: tabId
        },
        files: ['styles/style-cs.css']
      }, function () {
        // Then, inject the JavaScript file
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ['eyedropper.bundle.js']
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          // After injecting the content script, send the message
          chrome.tabs.sendMessage(tabId, {
            action: "toggleEyedropper"
          });
        });
      });
    });
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "executeGradient") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var tabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: {
          tabId: tabId
        },
        files: ['gradient.js']
      }, function () {
        // After injecting the content script, send the message
        chrome.tabs.sendMessage(tabId, {
          action: "createGradient"
        });
      });
    });
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "executeGradient") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      if (tabs.length === 0) {
        console.error('No active tab found.');
        return;
      }
      var tabId = tabs[0].id;

      // First, inject the CSS file
      chrome.scripting.insertCSS({
        target: {
          tabId: tabId
        },
        files: ['styles/style-cs.css']
      }, function () {
        // Then, inject the JavaScript file
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ['gradient.bundle.js']
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          // After injecting the content script, send the message
          chrome.tabs.sendMessage(tabId, {
            action: "toggleGradient"
          });
        });
      });
    });
  }
});

// var extpay = ExtPay('phdgnljpgjngdcmkfoakcechbmikjmok'); 
// extpay.startBackground(); 

// chrome.action.onClicked.addListener(function (tab) {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['color-wheel.js']
//     }, () => {
//         // After injecting the content script, send the message
//         chrome.tabs.sendMessage(tab.id, { action: "showColorWheel" });
//     });
// });
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map