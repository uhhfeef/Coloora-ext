document.getElementById("colorWheelBtn").addEventListener("click",(function(){console.log("inside popup.js"),chrome.runtime.sendMessage({action:"executeColorWheelScript"})})),document.getElementById("generateColorPaletteBtn").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"executeColorPaletteScript"})})),document.getElementById("eyedropperBtn").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"executeEyedropper"})})),document.getElementById("gradientBtn").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"executeGradient"})})),document.addEventListener("DOMContentLoaded",(function(){var e=chrome.runtime.getManifest().version;document.getElementById("version").textContent=e}));
//# sourceMappingURL=popup.bundle.js.map