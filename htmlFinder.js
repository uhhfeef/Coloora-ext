// Listen for a message from the popup to start or stop the HTML Finder
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('htmlFinder received:', request.action);
    if (request.action === "startHtmlFinder") {
        startHtmlFinder();
    } else if (request.action === "stopHtmlFinder") {
        stopHtmlFinder();
    }
});

function startHtmlFinder() {
    document.addEventListener('click', inspectElement, true);
}

function stopHtmlFinder() {
    document.removeEventListener('click', inspectElement, true);
}

function inspectElement(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.outerHTML);
    // // Remove the event listener after logging the outerHTML
    // document.removeEventListener('click', inspectElement, true);
}
