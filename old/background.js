// importScripts('ExtPay.js') // dont enable until extpay issue is resolved

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeColorWheelScript") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['color-wheel.js']
            }, () => {
                // After injecting the content script, send the message
                chrome.tabs.sendMessage(tabId, { action: "showColorWheel" });
            });
        });
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeColorPaletteScript") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['palette.js']
            }, () => {
                // After injecting the content script, send the message
                chrome.tabs.sendMessage(tabId, { action: "generatePalette" });
            });
        });
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeEyedropper") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['eyedropper.js']
            }, () => {
                // After injecting the content script, send the message
                chrome.tabs.sendMessage(tabId, { action: "createEyedropperBase" });
            });
        });
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeGradient") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['gradient.js']
            }, () => {
                // After injecting the content script, send the message
                chrome.tabs.sendMessage(tabId, { action: "createGradient" });
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

