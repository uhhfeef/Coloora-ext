console.log("Content script loaded!");
// Constants and DOM elements
const canvas = document.createElement("canvas");
canvas.id = "colorWheel";
let ctx;
let center;
let radius;
let imageUrlInput = document.getElementById('imageUrl');
let analyzeButton = document.getElementById('analyzeButton');
const corsProxy = "https://cors-anywhere.herokuapp.com/";

// Initialization: Setting up the UI
function initializeUI() {
    console.log("Initializing UI...");
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.id = 'colorWheelContainer';
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999';
    container.style.backgroundColor = '#FFF';
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
    ctx = canvas.getContext("2d");
    center = { x: canvas.width / 2, y: canvas.height / 2 };
    radius = canvas.width / 2;

    container.appendChild(canvas);
    document.body.appendChild(container);
    drawColorWheel();

    // Create a div for input and button to make them inline
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'space-between';
    inputContainer.style.marginBottom = '10px';

    // Create input for image URL
    imageUrlInput = document.createElement('input');
    imageUrlInput.id = 'imageUrl';
    imageUrlInput.type = 'text';
    imageUrlInput.placeholder = 'Enter image URL';
    imageUrlInput.style.flex = '1';
    imageUrlInput.style.marginRight = '10px';
    inputContainer.appendChild(imageUrlInput);

    // Create analyze button
    analyzeButton = document.createElement('button');
    analyzeButton.id = 'analyzeButton';
    analyzeButton.innerText = 'Analyze Image';
    analyzeButton.onclick = function () {
        analyzeImage(imageUrlInput.value);
    };
    inputContainer.appendChild(analyzeButton);

    // Append inputContainer to main container
    container.appendChild(inputContainer);
}

function extractImageFromPage(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const imgElements = doc.querySelectorAll('img');
            if (imgElements.length > 0) {
                return imgElements[0].src;
            }
            throw new Error('No images found');
        });
}

// Analyze image function: Fetch, downsample, analyze, and draw
function analyzeImage(imageUrl) {
    imageUrlInput.value = '';

    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
        extractImageFromPage(imageUrl)
            .then(directImageUrl => {
                sendImageForAnalysis(directImageUrl);
            })
            .catch(error => {
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        sendImageForAnalysis(imageUrl);
    }
}
function sendImageForAnalysis(imageUrl) {
    console.log("Sending image URL to background:", imageUrl);
    chrome.runtime.sendMessage({ action: "fetchImage", imageUrl: imageUrl }, response => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
        }

        if (response.status !== "success" || !response.dataURL) {
            console.error(response.error || "Invalid response from background");
            return;
        }

        const img = new Image();
        img.src = response.dataURL;
        img.onload = function () {
            const colorData = downsampleAndAnalyzeColors(img);
            drawColorWheel();  // Reset the color wheel
            updateColorWheel(colorData);
        }
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
                ctx.strokeStyle = getColorByAngleAndRadius(angle, r, 0.1); // Reduced brightness to 30% for unmatched hues/saturations
            }

            ctx.arc(center.x, center.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx.stroke();
        }
    }
}

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "showColorWheel") {
        initializeUI();
    }
});

