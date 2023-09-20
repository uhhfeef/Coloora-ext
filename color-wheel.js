// Constants and DOM elements
const canvas = document.getElementById('colorWheel');
const ctx = canvas.getContext('2d');
const center = { x: canvas.width / 2, y: canvas.height / 2 };
const radius = Math.min(center.x, center.y);
const imageUrlInput = document.getElementById('imageUrl');
const analyzeButton = document.getElementById('analyzeButton');
const corsProxy = "https://cors-anywhere.herokuapp.com/";

// Initialization: Setting up the UI
function initializeUI() {
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.id = 'colorWheelContainer';
    document.body.appendChild(container);

    // Move the canvas into the container
    container.appendChild(canvas);

    analyzeButton.addEventListener('click', analyzeImage);
    drawColorWheel(); // Draw base color wheel
}

// Analyze image function: Fetch, downsample, analyze, and draw
function analyzeImage() {
    const imageUrl = imageUrlInput.value;
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

function getColorByAngleAndRadius(angle, r, l = 50) {
    // Convert the angle to hue (0-360)
    let hue = angle;

    // Convert radius to saturation (0-100)
    let saturation = (r / radius) * 100;

    return `hsl(${hue}, ${saturation}%, ${l}%)`;
}

function drawColorWheel() {
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
                ctx.strokeStyle = getColorByAngleAndRadius(angle, r, 5); // Reduced brightness to 30% for unmatched hues/saturations
            }

            ctx.arc(center.x, center.y, r, (angle - 0.5) * (Math.PI / 180), (angle + 0.5) * (Math.PI / 180));
            ctx.stroke();
        }
    }
}

// Event listeners
document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName.toLowerCase() === 'a' && target.href.match(/\.(jpeg|jpg|gif|png)$/)) {
        e.preventDefault();
        imageUrlInput.value = target.href;
        analyzeImage();
    }
});

// Start the script by initializing UI elements
initializeUI();
