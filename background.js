chrome.action.onClicked.addListener((tab) => {
    // Inject the color wheel UI and related JS into the active tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['color-wheel.js']
    });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Received message in background:", message);

    if (message.action === "fetchImage") {
        const corsProxy = "https://cors-anywhere.herokuapp.com/";

        fetch(corsProxy + message.imageUrl)
            .then(response => {
                console.log("Fetch response:", response);
                return response.blob();
            })
            .then(blob => {
                console.log("Received blob:", blob);
                console.log("Blob type:", blob.type);

                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        console.log("FileReader Load End");
                        resolve(reader.result);
                    };
                    reader.onerror = (e) => {
                        console.log("FileReader Error", e);
                        reject(e);
                    };
                    reader.readAsDataURL(blob);
                });
            })
            .then(dataURL => {
                console.log("Data URL:", dataURL.substring(0, 100));  // only log the first 100 characters
                sendResponse({ status: "success", dataURL: dataURL });
            })
            .catch(error => {
                console.error("Error fetching the image:", error);
                sendResponse({ status: "error", error: error.toString() });
            });

        return true; // indicates the response is sent asynchronously
    }

});
