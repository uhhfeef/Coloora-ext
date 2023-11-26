// const now = new Date();
// const fifteenDays = 1000*60*60*24*1 // seven days in milliseconds
// const extpay = ExtPay('phdgnljpgjngdcmkfoakcechbmikjmok')   

document.getElementById('colorWheelBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorWheelScript" });
});

document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorPaletteScript" });
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

    chrome.runtime.sendMessage({ action: "executeEyedropper" });
});

document.getElementById('gradientBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeGradient" });
});

document.addEventListener("DOMContentLoaded", function () {
    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;
    document.getElementById("version").textContent = currentVersion;
});

// Validation for buying the extension
document.getElementById('paymentLink').addEventListener('click', function () {
    const paymentLink = document.getElementById('paymentLink');

    if (paymentLink) {
        paymentLink.addEventListener('click', async function(e) {
            e.preventDefault(); // Prevent the default link behavior

            // Send the Google Analytics event
            await sendInitialEvent('buy_now_clicked', 'paymentLink');

            console.log('Buy now clicked');
        });
    }
});

var FLASK_ENDPOINT = 'https://coloora-400822.et.r.appspot.com/send-analytics';

// Works here
async function getOrCreateClientId() {
    const result = await chrome.storage.local.get('clientId');
    console.log('inside getor create')

    let clientId = result.clientId;
    if (!clientId) {
        // Generate a unique client ID, the actual value is not relevant
        clientId = self.crypto.randomUUID();
        await chrome.storage.local.set({ clientId });
    }
    console.log(clientId)
    return clientId;
}

async function sendInitialEvent(eventName, elementId) {
    try {
        fetch(
            FLASK_ENDPOINT,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_id: await getOrCreateClientId(),
                    event_name: eventName,
                    event_params: {
                        id: elementId,
                    },
                }),
            }
        );
        console.log("event sent");
    }
    catch (error) {
        console.error("Error sending data to Flask server:", error);
    }
}

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
