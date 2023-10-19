document.getElementById('colorWheelBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorWheelScript" });
});

document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorPaletteScript" });
});

document.addEventListener("DOMContentLoaded", function () {
    const manifestData = chrome.runtime.getManifest();
    const currentVersion = manifestData.version;
    document.getElementById("version").textContent = currentVersion;
});
