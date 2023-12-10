import { sendInitialEvent } from '../modules/gaAnalytics';
import { fetchImageData, extractImageFromPage, analyzeImage } from '../modules/imageAnalysis';
import { showLoadingGif, hideLoadingGif } from '../modules/loadingBar';

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
    container.className = 'coloora-container';
    container.id = 'colorWheelContainer';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerText = 'X';
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
            analyzeImage(
                url,
                sendInitialEvent,
                'color_wheel_analysis',
                "analyzeButton",
                sendImageForAnalysis
            );
        } else if (e.dataTransfer.types.includes('text/html')) {
            // Handle HTML (common for rich content)
            const htmlContent = e.dataTransfer.getData('text/html');
            const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
            const imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
            if (imgSrc) {
                console.log('Extracted Image URL from HTML:', imgSrc);

                // Analyze the image
                analyzeImage(
                    url,
                    sendInitialEvent,
                    'color_wheel_analysis',
                    "analyzeButton",
                    sendImageForAnalysis
                );
            }
        } else if (e.dataTransfer.types.includes('text/plain')) {
            // Handle plain text (fallback)
            const url = e.dataTransfer.getData('text/plain');
            console.log('Extracted URL from text:', url);

            // Analyze the image
            analyzeImage(
                url,
                sendInitialEvent,
                'color_wheel_analysis',
                "analyzeButton",
                sendImageForAnalysis
            );
        }
    });
    container.appendChild(canvas); // Append the canvas to the container

    // Create label for color boxes
    const label = document.createElement('label');
    label.className = 'label';
    label.innerText = 'Drag n drop any image here';
    container.appendChild(label);

    document.body.appendChild(container);
    drawColorWheel();
}

function sendImageForAnalysis(imageUrl) {
    showLoadingGif(
        document.getElementById('colorWheelContainer'),
        document.getElementById('colorWheel')
    );

    fetchImageData(imageUrl, (dataUrl) => {
        handleImageLoad(dataUrl);
        // Additional success logic if needed
    }, (error) => {
        console.error(error);
        // Additional error handling logic if needed
    });
}

function handleImageLoad(dataUrl) {
    const img = new Image();
    img.src = dataUrl;
    img.onload = function () {
        const colorData = downsampleAndAnalyzeColors(img);
        drawColorWheel();  // Reset the color wheel
        updateColorWheel(colorData);
    }
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

// This function will create the UI if it does not exist, or toggle its visibility
function toggleUI() {
    let colorWheelContainer = document.getElementById('colorWheelContainer');
    console.log('inside toggle')

    if (!colorWheelContainer) {
        initializeUIWheel();
        sendInitialEvent('color_wheel_loaded', 'colorWheelContainer');
    } else {
        // Toggle the visibility of the UI
        colorWheelContainer.style.visibility = 'visible';
        colorWheelContainer.style.opacity = '1';
        sendInitialEvent('color_wheel_loaded', 'colorWheelContainer');
    }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleColorWheel") {
        console.log('inside chrome runtime message listener');
        toggleUI();
    }
});