const now = new Date();
const sevenDays = 1000*60*60*24*15 // seven days in milliseconds
const extpay = ExtPay('phdgnljpgjngdcmkfoakcechbmikjmok')   

document.getElementById('colorWheelBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorWheelScript" });
});

document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorPaletteScript" });
});

document.getElementById('eyedropperBtn').addEventListener('click', function () {
    extpay.getUser().then(user => {
        if (user.trialStartedAt && (now - user.trialStartedAt) < fifteenDays) {
            // user has an active trial
            chrome.runtime.sendMessage({ action: "executeEyedropper" });
        } else if (!user.trialStartedAt) {
            // user has not started a trial
            extpay.openTrialPage()
        } else if (user.trialStartedAt && (now - user.trialStartedAt) > fifteenDays) {
            // user's trial has completed
            extpay.openPaymentPage()
        }

        if (user.paid) {
            // user has paid
            chrome.runtime.sendMessage({ action: "executeEyedropper" });
        }
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;
    document.getElementById("version").textContent = currentVersion;
});

document.addEventListener("DOMContentLoaded", function () {
    extpay.getUser().then(user => {
        if (user.trialStartedAt && (now - user.trialStartedAt) < fifteenDays) {
            // user has an active trial
            paymentLink.textContent = 'Free trial activated';
            document.getElementById('paymentLink').addEventListener('click', function () {
                extpay.openPaymentPage();
            });
        } else if (!user.trialStartedAt) {
            // user has not started a trial
            paymentLink.textContent = 'Start free trial';
            document.getElementById('paymentLink').addEventListener('click', function () {
                extpay.openTrialPage();
            });
        } else if (user.trialStartedAt && (now - user.trialStartedAt) > fifteenDays) {
            // user's trial has completed
            paymentLink.textContent = 'Activate Coloora';
            document.getElementById('paymentLink').addEventListener('click', function () {
                extpay.openPaymentPage();
            });
        }

        if (user.paid) {
            // user has paid
            paymentLink.textContent = 'Thx for your support :)';
        }
    })
});


// document.getElementById('featureRequestLink').addEventListener('click', function () {
//     chrome.windows.create({
//         url: chrome.runtime.getURL('featureRequest.html'),
//         type: 'popup',
//         width: 300,
//         height: 300
//     });
// });
