/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
// const now = new Date();
// const fifteenDays = 1000*60*60*24*1 // seven days in milliseconds
// const extpay = ExtPay('phdgnljpgjngdcmkfoakcechbmikjmok')   

document.getElementById('colorWheelBtn').addEventListener('click', function () {
  console.log('inside popup.js');
  chrome.runtime.sendMessage({
    action: "executeColorWheelScript"
  });
});
document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
  chrome.runtime.sendMessage({
    action: "executeColorPaletteScript"
  });
});
document.getElementById('eyedropperBtn').addEventListener('click', function () {
  // extpay.getUser().then(user => {
  //     if (user.trialStartedAt && (now - user.trialStartedAt) < fifteenDays) {
  //         // user has an active trial
  //         chrome.runtime.sendMessage({ action: "executeEyedropper" });
  //     } else if (!user.trialStartedAt) {
  //         // user has not started a trial
  //         extpay.openTrialPage()
  //     } else if (user.trialStartedAt && (now - user.trialStartedAt) > fifteenDays) {
  //         // user's trial has completed
  //         extpay.openPaymentPage()
  //     }

  //     if (user.paid) {
  //         // user has paid
  //         chrome.runtime.sendMessage({ action: "executeEyedropper" });
  //     }
  // })

  chrome.runtime.sendMessage({
    action: "executeEyedropper"
  });
});
document.getElementById('gradientBtn').addEventListener('click', function () {
  chrome.runtime.sendMessage({
    action: "executeGradient"
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var manifestData = chrome.runtime.getManifest();
  var currentVersion = manifestData.version;
  document.getElementById("version").textContent = currentVersion;
});

// // Validation for buying the extension
// document.getElementById('paymentLink').addEventListener('click', function () {
//     const paymentLink = document.getElementById('paymentLink');

//     if (paymentLink) {
//         paymentLink.addEventListener('click', async function(e) {
//             e.preventDefault(); // Prevent the default link behavior

//             // Send the Google Analytics event
//             await sendInitialEvent('buy_now_clicked', 'paymentLink');

//             console.log('Buy now clicked');
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
// extpay.getUser().then(user => {
//     if (user.trialStartedAt && (now - user.trialStartedAt) < fifteenDays) {
//         // user has an active trial
//         paymentLink.textContent = 'Free trial activated';
//         document.getElementById('paymentLink').addEventListener('click', function () {
//             extpay.openPaymentPage();
//         });
//     } else if (!user.trialStartedAt) {
//         // user has not started a trial
//         paymentLink.textContent = 'Start free trial';
//         document.getElementById('paymentLink').addEventListener('click', function () {
//             extpay.openTrialPage();
//         });
//     } else if (user.trialStartedAt && (now - user.trialStartedAt) > fifteenDays) {
//         // user's trial has completed
//         paymentLink.textContent = 'Activate Coloora';
//         document.getElementById('paymentLink').addEventListener('click', function () {
//             extpay.openPaymentPage();
//         });
//     }

//     if (user.paid) {
//         // user has paid
//         paymentLink.textContent = 'Thx for your support :)';
//     }
// })
// });

// document.getElementById('featureRequestLink').addEventListener('click', function () {
//     chrome.windows.create({
//         url: chrome.runtime.getURL('featureRequest.html'),
//         type: 'popup',
//         width: 300,
//         height: 300
//     });
// });
/******/ })()
;
//# sourceMappingURL=popup.bundle.js.map