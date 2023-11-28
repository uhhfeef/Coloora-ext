// var FLASK_ENDPOINT = 'https://coloora-400822.et.r.appspot.com/send-analytics';

// Works here
async function getOrCreateClientId() {
    const result = await chrome.storage.local.get('clientId');
    console.log('inside getor create')

    let clientId = result.clientId;
    if (!clientId) {
        // Generate a unique client ID, the actual value is not relevant
        clientId = self.crypto.randomUUID();
        console.log('generated clientid')
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

console.log("Content script loaded!");
sendInitialEvent("pinterest_loaded", "CSColorWheel")

// Constants and DOM elements
const canvas = document.createElement("canvas");
canvas.id = "colorWheel";
let ctx;
let center;
let radius;
let analyzeButtonWheel = document.getElementById('analyzeButtonWheel');
let initialURL = window.location.href;

// Debounce function to batch process mutations
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

let isUIInitialized = false; // Declare the flag outside the function

function handleImages() {
    console.log('content loaded');
    // Get all image elements on the page
    const images = document.querySelectorAll('img');

    // Iterate over each image
    images.forEach(img => {
        // Skip images that are part of the eyedropperContainer
        if (img.closest('#eyedropperContainer') && !img.closest('#gradientContainer')) {
            return; // Skip this iteration
        }
        if (!img.closest('#colorWheelContainer')) {
            // Check if the image dimensions are above 50x50
            if (img.naturalWidth > 50 && img.naturalHeight > 50) {
                // Create a button for each qualifying image
                const btn = document.createElement('button');
                btn.id = 'CSColorWheel'
                btn.innerText = "🎨";
                btn.style.position = 'absolute';
                btn.style.background = 'white';
                btn.style.color = 'white';
                btn.style.opacity = '20%';
                btn.style.border = 'none';
                btn.style.width = '48px';
                btn.style.height = '48px';
                btn.style.borderRadius = '50%';
                btn.style.cursor = 'pointer';
                btn.style.zIndex = '9999'; // Ensure it's above other elements
                btn.style.opacity = '0'; // Initially transparent
                btn.style.fontSize = '16px';

                // Position the button inside the image, near the top right corner
                btn.style.top = '70px'; // 100 pixels from the top edge of the image
                btn.style.right = '12px'; // 100 pixels from the right edge of the image

                // Get the parent container of the image
                const parentContainer = img.parentNode;

                // Show the button when the parent container is hovered over
                parentContainer.addEventListener('mouseover', function () {
                    btn.style.opacity = '1';
                });

                // Hide the button when the mouse is no longer hovering over the parent container
                parentContainer.addEventListener('mouseout', function () {
                    btn.style.opacity = '0';
                });

                // Add click event to the button
                btn.addEventListener('click', function (e) {
                    sendInitialEvent('color_wheel_cs_clicked', 'CSColorWheel');

                    e.stopPropagation(); // Stop the event from propagating to parent elements
                    e.preventDefault();  // Prevent the default behavior of the event

                    const imageUrl = img.src;
                    const existingContainer = document.getElementById('colorWheelContainer');
                    if (existingContainer) {
                        // If the container already exists, simply display it
                        existingContainer.style.display = 'block';
                    } else {
                        // If the container doesn't exist, initialize the UI
                        if (!isUIInitialized) {
                            initializeUIWheel();
                            isUIInitialized = true;
                        }
                    }
                    analyzeImageWheel(imageUrl);
                });

                // Append the button to the image's parent (so they're in the same container)
                parentContainer.appendChild(btn);
            }
        }
    });
}

// Check if the document is already loaded
if (document.readyState === "loading") {
    // If not, wait for the DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", handleImages);
} else {
    // If it's already loaded, run the function immediately
    handleImages();
}

// Initialization: Setting up the UI
function initializeUIWheel() {
    console.log("Initializing UI...");
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.id = 'colorWheelContainer';
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999';
    container.style.backgroundColor = '#2a2a2a';
    container.style.border = '1px solid #000';
    container.style.padding = '10px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.background = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
        container.style.display = 'none'; // Hide the container instead of removing it
    };
    container.appendChild(closeButton);

    // Drag and drop
    let isDragging = false;
    let initialMouseX, initialMouseY;
    let initialContainerX, initialContainerY;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Record the initial mouse position
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;

        // Record the initial position of the container
        // Adjusting for the transform offset
        initialContainerX = container.getBoundingClientRect().left + (container.offsetWidth / 2);
        initialContainerY = container.getBoundingClientRect().top;

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;

        // Calculate the movement
        let dx = e.clientX - initialMouseX;
        let dy = e.clientY - initialMouseY;

        // Apply the movement to the container's position, adjusting for the transform offset
        container.style.left = `${initialContainerX + dx}px`;
        container.style.top = `${initialContainerY + dy}px`;
    }

    function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        isDragging = false;
    }

    // Set up the canvas
    canvas.width = 250;   // Set canvas size
    canvas.height = 250;
    ctx = canvas.getContext("2d");
    center = { x: canvas.width / 2, y: canvas.height / 2 };
    radius = canvas.width / 2;

    container.appendChild(canvas);
    document.body.appendChild(container);
    drawColorWheel();
}

async function extractImageFromPage(url) {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const imgElements = doc.querySelectorAll('img');
    if (imgElements.length > 0) {
        return imgElements[0].src;
    }
    throw new Error('No images found');
}

// Analyze image function: Fetch, downsample, analyze, and draw
function analyzeImageWheel(imageUrl) {
    if (!imageUrl) {
        shakeElement(imageUrlInputWheel);
        return; // Terminate the function
    }

    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
        extractImageFromPage(imageUrl)
            .then(directImageUrl => {
                // sendInitialEvent("color_wheel_analysis", "analyzeButtonWheel"); // Calling the async function immediately
                sendImageForAnalysisWheel(directImageUrl);
            })
            .catch(error => {
                shakeElement(imageUrlInputWheel);
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        // sendInitialEvent("color_wheel_analysis", "analyzeButtonWheel"); // Calling the async function immediately
        sendImageForAnalysisWheel(imageUrl);
    }
}

function sendImageForAnalysisWheel(imageUrl) {
    console.log("Sending image URL to Flask API:", imageUrl);
    showLoadingGif();

    // Endpoint where the Flask API is running.
    // const flaskApiEndpoint = "http://localhost:5000/fetch-image"; //demo
    const flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/fetch-image";

    fetch(flaskApiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageURL: imageUrl })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.dataURL) {
                const img = new Image();
                img.src = data.dataURL;
                img.onload = function () {
                    const colorData = downsampleAndAnalyzeColors(img);
                    drawColorWheel();  // Reset the color wheel
                    updateColorWheel(colorData);
                }
            } else {
                console.error("Error:", data.error);
            }
        })
        .catch(error => {
            console.error("Network Error:", error);
        });
}


// Downsample and analyze colors from an image
function downsampleAndAnalyzeColors(img) {
    const downsampledCanvas = document.createElement('canvas');
    const downsampledCtx = downsampledCanvas.getContext('2d');
    downsampledCanvas.width = 150;
    downsampledCanvas.height = 150;
    downsampledCtx.drawImage(img, 0, 0, downsampledCanvas.width, downsampledCanvas.height);

    return analyzeColors(downsampledCtx, downsampledCanvas.width, downsampledCanvas.height);
}

function getColorByAngleAndRadius(angle, r, l) {
    // Convert the angle to hue (0-360)
    let hue = angle;

    // Convert radius to saturation (0-100)
    let saturation = (r / radius) * 100;

    // Check if l is undefined
    if (l === undefined) {
        l = 50;
    }

    return `hsl(${hue}, ${saturation}%, ${l}%)`;
}

function drawColorWheel() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let angle = 0; angle < 360; angle++) {
        for (let r = 0; r < radius; r++) {
            ctx.beginPath();
            ctx.strokeStyle = getColorByAngleAndRadius(angle, r);
            ctx.arc(center.x, center.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx.stroke();
        }
    }
}


function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

function analyzeColors(ctx, width, height) {
    const imageData = ctx.getImageData(0, 0, width, height).data;
    const colorData = {};

    for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const [h, s, l] = rgbToHsl(r, g, b);

        const hueKey = Math.round(h);
        const satKey = Math.round(s);

        if (!colorData[hueKey]) {
            colorData[hueKey] = {};
        }
        if (!colorData[hueKey][satKey]) {
            colorData[hueKey][satKey] = { count: 0, totalBrightness: 0 };
        }
        colorData[hueKey][satKey].count++;
        colorData[hueKey][satKey].totalBrightness += l;
    }

    return colorData;
}

function updateColorWheel(colorData) {
    for (let angle = 0; angle < 360; angle++) {
        for (let r = 0; r < radius; r++) {
            ctx.beginPath();

            const hueData = colorData[angle];
            const saturationValue = Math.round((r / radius) * 100);

            if (hueData && hueData[saturationValue]) {
                const avgBrightness = hueData[saturationValue].totalBrightness / hueData[saturationValue].count;
                ctx.strokeStyle = getColorByAngleAndRadius(angle, saturationValue, avgBrightness);
            } else {
                ctx.strokeStyle = getColorByAngleAndRadius(angle, r, 5); // Reduced brightness to 10% for unmatched hues/saturations
            }

            ctx.arc(center.x, center.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx.stroke();
        }
    }
    hideLoadingGif();
}

function showLoadingGif() {
    console.log("entering showLoadingGif");

    const colorWheelContainer = document.getElementById('colorWheelContainer');
    const colorWheelElement = document.getElementById('colorWheel');

    const loadingGif = document.createElement('img');
    loadingGif.id = 'extensionLoadingGif';
    loadingGif.src = chrome.runtime.getURL('loading-bar.gif');

    loadingGif.width = 50;
    loadingGif.height = 50;

    loadingGif.style.display = 'block';
    loadingGif.style.position = 'absolute';

    // Calculate the center position of the canvas
    const canvasRect = colorWheelElement.getBoundingClientRect();
    const containerRect = colorWheelContainer.getBoundingClientRect();

    // Adjust gif's position based on canvas's position
    loadingGif.style.left = `${canvasRect.left - containerRect.left + (canvas.width / 2) - (loadingGif.width / 2)}px`;
    loadingGif.style.top = `${canvasRect.top - containerRect.top + (canvas.height / 2) - (loadingGif.height / 2)}px`;

    loadingGif.style.zIndex = '9999'; // Ensure it's on top

    colorWheelContainer.appendChild(loadingGif);

    console.log("GIF appended");
    console.log(chrome.runtime.getURL('loading-bar.gif'));
}

function hideLoadingGif() {
    console.log("done loading")
    const gif = document.getElementById('extensionLoadingGif');
    if (gif) {
        gif.remove();
    }
}

function shakeElement(element) {
    console.log('Shake function called');
    let shakes = 5;
    let distance = 2; // in pixels

    const originalMarginLeft = parseInt(window.getComputedStyle(element).marginLeft, 10) || 0;
    const originalMarginRight = parseInt(window.getComputedStyle(element).marginRight, 10) || 0;

    function animateShake() {
        if (shakes === 0) {
            element.style.marginLeft = `${originalMarginLeft}px`; // Reset to original margins
            element.style.marginRight = `${originalMarginRight}px`;
            return;
        }

        // Alternate direction for shaking effect
        const offset = (shakes % 2 === 0) ? distance : -distance;
        element.style.marginLeft = `${originalMarginLeft + offset}px`;
        element.style.marginRight = `${originalMarginRight - offset}px`;

        shakes -= 1;
        setTimeout(animateShake, 50);
    }

    animateShake();
}


// Initialize the MutationObserver
const observer = new MutationObserver((mutationsList) => {
    // Handle added nodes
    for (let mutation of mutationsList) {
        // Check if the mutation is a childList mutation
        if (mutation.type === 'childList') {
            // Iterate over all added nodes
            for (let addedNode of mutation.addedNodes) {
                // Check if the added node is an element
                if (addedNode.nodeType === Node.ELEMENT_NODE) {
                    // If an IMG element is added, handle it
                    if (addedNode.tagName === 'IMG') {
                        handleImages();
                    }
                    // Also handle images that are descendants of the added node
                    const newImages = addedNode.querySelectorAll('img');
                    if (newImages.length > 0) {
                        handleImages();
                    }
                }
            }
        }
    }
});

// Configuration for the observer
const config = {
    childList: true,  // Observe direct children
    subtree: true     // Also observe all descendants
};

// Start observing the document
observer.observe(document.body, config);
// Function to restart your content script
function restartContentScript() {
    console.log("Restarting content script due to URL change...");

    const existingButtons = document.querySelectorAll('#injectColorWheel'); // Select all existing buttons
    existingButtons.forEach(btn => btn.remove()); // Remove all existing buttons

    // Re-run your content script initialization code
    handleImages();
}

// Periodically check for URL changes
setInterval(function () {
    if (window.location.href !== initialURL) {
        initialURL = window.location.href; // Update the stored URL
        restartContentScript();
    }
}, 1000); // Check every second
