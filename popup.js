document.getElementById('colorWheelBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorWheelScript" });
});

document.getElementById('generateColorPaletteBtn').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "executeColorPaletteScript" });
});
