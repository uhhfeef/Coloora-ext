import { sendInitialEvent } from './gaAnalytics';


async function extractImageFromPage(url) {
    console.log('inside extract');
    const response = await fetch(url); // Fetch the page
    const text = await response.text(); // Get the page content as text
    const parser = new DOMParser(); // Create a DOM parser
    const doc = parser.parseFromString(text, 'text/html'); // Parse the page
    const imgElements = doc.querySelectorAll('img'); // Find all image elements
    // Return the first or second image's src attribute based on the OS
    if (imgElements.length > 0) { 
        console.log('imgElements', imgElements);
        if (navigator.platform.includes('Mac')) {
            return imgElements[1].src;
        } else {
            return imgElements[0].src;
        }
    }
    throw new Error('No images found');
}

// Analyze image function: Fetch, downsample, analyze, and draw
function analyzeImage(imageUrl, sendInitialEvent, event, id, sendImageForAnalysis ) {
    if (!imageUrl) {
        return; // Terminate the function
    }

    // Check if the URL is a direct link to an image
    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
        extractImageFromPage(imageUrl) 
            .then(directImageUrl => {
                sendInitialEvent(event, id); 
                sendImageForAnalysis(directImageUrl);
            })
            .catch(error => {
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        sendInitialEvent(event, id);
        sendImageForAnalysis(imageUrl); 
    }
}

export function fetchImageData(imageUrl, onSuccess, onError) {
    console.log("inside imageanalysis.js");
    console.log("Sending image URL to Flask API:", imageUrl);

    const flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/fetch-image"; // prod

    fetch(flaskApiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageURL: imageUrl })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success && data.dataURL) {
            onSuccess(data.dataURL);
        } else {
            onError('Image analysis failed: ' + data.error);
        }
    })
    .catch(error => {
        onError('Network error: ' + error.message);
    });
}

// function checkDataTypes() {
//     // Check for different types of data
//     if (e.dataTransfer.types.includes('text/uri-list')) {
//         // Handle URI list (common for links)
//         const url = e.dataTransfer.getData('text/uri-list');
//         console.log('Dropped URL:', url);
//         // Display the image in the container
//         imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//         // Analyze the image
//         analyzeImage(url);
//     } else if (e.dataTransfer.types.includes('text/html')) {
//         // Handle HTML (common for rich content)
//         const htmlContent = e.dataTransfer.getData('text/html');
//         const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
//         const imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
//         if (imgSrc) {
//             console.log('Extracted Image URL from HTML:', imgSrc);
//             // Display the image in the container
//             imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//             // Analyze the image
//             analyzeImage(url);
//         }
//     } else if (e.dataTransfer.types.includes('text/plain')) {
//         // Handle plain text (fallback)
//         const url = e.dataTransfer.getData('text/plain');
//         console.log('Extracted URL from text:', url);
//         // Display the image in the container
//         imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

//         // Analyze the image
//         analyzeImage(url);
//     }
// }


export { extractImageFromPage,analyzeImage };