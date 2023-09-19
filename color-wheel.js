const canvas = document.getElementById('colorWheel');
const ctx = canvas.getContext('2d');
const center = { x: canvas.width / 2, y: canvas.height / 2 };
const radius = Math.min(center.x, center.y);
const imageUrlInput = document.getElementById('imageUrl');
const analyzeButton = document.getElementById('analyzeButton');
const corsProxy = "https://cors-anywhere.herokuapp.com/";

analyzeButton.addEventListener('click', analyzeImage);

function analyzeImage() {
    const imageUrl = imageUrlInput.value;

    // Ask the background script to fetch the image for you
    console.log("Sending image URL to background:", imageUrl);

    chrome.runtime.sendMessage({ action: "fetchImage", imageUrl: imageUrl }, response => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
        }
        if (response.status === "success") {
            const dataURL = response.dataURL;
            if (dataURL) {



                let img = new Image();
                img.src = response.dataURL;

                img.onload = function () {
                    const downsampledCanvas = document.createElement('canvas');
                    downsampledCanvas.width = 150;  // Adjust for desired downsampling.
                    downsampledCanvas.height = 150; // Adjust based on aspect ratio and desired downsampling.
                    const ctx = downsampledCanvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, downsampledCanvas.width, downsampledCanvas.height);

                    const colorData = analyzeColors(ctx, downsampledCanvas.width, downsampledCanvas.height);
                    drawColorWheel();  // Draw the base color wheel first
                    updateColorWheel(colorData);  // Then update with analyzed hues and saturations
                }
            } else {
                console.error("Received data is not a Blob. Type:", typeof response.imageBlob);
            }

        } else {
            console.error(response.error);
        }
    });
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
drawColorWheel();
