var FLASK_ENDPOINT = 'https://coloora-400822.et.r.appspot.com/send-analytics';

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
    clientId = await getOrCreateClientId();
    if (clientId !== "a1e0c334-cbc9-43bf-8de0-16d4a4f89ab7") {
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
    } else {
        console.log("demo user, event not sent");
        return;
    }
}

sendInitialEvent('color_wheel_loaded', 'colorWheelContainer');

console.log("Content script loaded!");
// Constants and DOM elements
var canvas = document.createElement("canvas");
canvas.id = "colorWheel";
var ctx_colorwheel;
var center_color_wheel;
var radius;

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
    container.style.backgroundColor = 'rgba(50, 50, 50, 0.5)'; // Semi-transparent background
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center'; // Center the contents vertically
    container.style.alignItems = 'center'; // Center the contents horizontally
    container.style.zIndex = '99999';
    container.style.border = '0.5px solid #000';
    container.style.padding = '10px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    container.style.backdropFilter = 'blur(30px)'; // Apply blur effect

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
        document.body.removeChild(container);
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
    ctx_colorwheel = canvas.getContext("2d");
    center_color_wheel = { x: canvas.width / 2, y: canvas.height / 2 };
    radius = canvas.width / 2;

    canvas.style.border = 'none';
    canvas.style.transition = 'background-color 0.3s'; // Smooth transition for background color

    // Prevent default drag behavior
    canvas.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    // Handle drag over event
    canvas.addEventListener('dragover', function(e) {
        e.preventDefault();
        canvas.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; // Change background color
        canvas.style.border = '2px dashed #ccc';
    });

    // Handle drag leave event
    canvas.addEventListener('dragleave', function(e) {
        canvas.style.backgroundColor = 'transparent'; // Revert background color
        canvas.style.border = 'none';
    });

    // Handle drop event
    canvas.addEventListener('drop', function(e) {
        e.preventDefault();
        canvas.style.border = 'none';
        canvas.style.backgroundColor = 'transparent'; // Revert background color


        // Create an image and draw it on the canvas
        const img = new Image();
        img.onload = function() {
            ctx_colorwheel.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx_colorwheel.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image
        };
        // Check for different types of data
        if (e.dataTransfer.types.includes('text/uri-list')) {
            // Handle URI list (common for links)
            const url = e.dataTransfer.getData('text/uri-list');
            console.log('Dropped URL:', url);

            // Analyze the image
            analyzeImageWheel(url);
        } else if (e.dataTransfer.types.includes('text/html')) {
            // Handle HTML (common for rich content)
            const htmlContent = e.dataTransfer.getData('text/html');
            const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
            const imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
            if (imgSrc) {
                console.log('Extracted Image URL from HTML:', imgSrc);

                // Analyze the image
                analyzeImageWheel(url);
            }
        } else if (e.dataTransfer.types.includes('text/plain')) {
            // Handle plain text (fallback)
            const url = e.dataTransfer.getData('text/plain');
            console.log('Extracted URL from text:', url);

            // Analyze the image
            analyzeImageWheel(url);
        }
    });
    container.appendChild(canvas); // Append the canvas to the container

    // Create label for color boxes
    const label = document.createElement('label');
    label.innerText = 'Drag n drop any image here';
    label.style.color = '#fff';
    label.style.fontSize = '12px';
    label.style.marginTop = '15px';
    container.appendChild(label);

    document.body.appendChild(container);
    drawColorWheel();
}

async function extractImageFromPage(url) {
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
function analyzeImageWheel(imageUrl) {
    if (!imageUrl) {
        shakeElement(imageUrlInputWheel); //change this
        return; // Terminate the function
    }

    // Check if the URL is a direct link to an image
    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
        extractImageFromPage(imageUrl) 
            .then(directImageUrl => {
                sendInitialEvent("color_wheel_analysis", "analyzeButtonWheel"); // Calling the async function immediately
                sendImageForAnalysisWheel(directImageUrl);
            })
            .catch(error => {
                shakeElement(imageUrlInputWheel); // change
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        sendInitialEvent("color_wheel_analysis", "analyzeButtonWheel"); // Calling the async function immediately
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
    ctx_colorwheel.clearRect(0, 0, canvas.width, canvas.height);

    for (let angle = 0; angle < 360; angle++) {
        for (let r = 0; r < radius; r++) {
            ctx_colorwheel.beginPath();
            ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, r);
            ctx_colorwheel.arc(center_color_wheel.x, center_color_wheel.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx_colorwheel.stroke();
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

function analyzeColors(ctx_colorwheel, width, height) {
    const imageData = ctx_colorwheel.getImageData(0, 0, width, height).data;
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
            ctx_colorwheel.beginPath();

            const hueData = colorData[angle];
            const saturationValue = Math.round((r / radius) * 100);

            if (hueData && hueData[saturationValue]) {
                const avgBrightness = hueData[saturationValue].totalBrightness / hueData[saturationValue].count;
                ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, saturationValue, avgBrightness);
            } else {
                ctx_colorwheel.strokeStyle = getColorByAngleAndRadius(angle, r, 10); // Reduced brightness to 10% for unmatched hues/saturations
            }

            ctx_colorwheel.arc(center_color_wheel.x, center_color_wheel.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx_colorwheel.stroke();
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

    // Calculate the center_color_wheel position of the canvas
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

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "showColorWheel") {
        initializeUIWheel();
    }
});

