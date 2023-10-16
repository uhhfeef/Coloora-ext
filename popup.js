document.getElementById('colorWheelBtn').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "executeColorWheelScript"});
});
