document.getElementById('colorWheelBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorWheelScript" });
});

document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorPaletteScript" });
});

document.getElementById('eyedropperBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeEyedropper" });
});

document.addEventListener("DOMContentLoaded", function () {
    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;
    document.getElementById("version").textContent = currentVersion;
});

// document.getElementById('featureRequestLink').addEventListener('click', function () {
//     chrome.windows.create({
//         url: chrome.runtime.getURL('featureRequest.html'),
//         type: 'popup',
//         width: 300,
//         height: 300
//     });
// });
