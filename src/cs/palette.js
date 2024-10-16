import { sendInitialEvent } from '../modules/gaAnalytics';
import { extractImageFromPage, analyzeImage } from '../modules/imageAnalysis';

sendInitialEvent('palette_loaded', 'colorBoxContainer');

// Initialization: Setting up the UI
console.log("palette  loaded!");
let imageUrlInputPalette = document.getElementById('imageUrl');
let analyzeButtonPalette = document.getElementById('analyzeButtonPalette');

function initializeUIPalette() {
    console.log("Initializing UI...");
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.className = 'coloora-container';
    container.id = 'paletteContainer';

    // Create close button (acts like a header)
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerText = 'X';
    closeButton.onclick = () => {
        document.body.removeChild(container);
    };
    container.appendChild(closeButton);

    // Create a new container for palette and button
    const paletteAndButtonContainer = document.createElement('div');
    paletteAndButtonContainer.className = 'palette-and-button-container';
    paletteAndButtonContainer.id = 'paletteAndButtonContainer';

    // Create palette container for color boxes
    const colorBoxContainer = document.createElement('div');
    colorBoxContainer.className = 'color-box-container';
    colorBoxContainer.id = 'colorBoxContainer';

    // Create a button for adding colors
    const addButton = document.createElement('button');
    addButton.className = 'add-button'; //fix this
    addButton.innerText = '+';
    addButton.onclick = () => {
        alert('Feature coming soon!');
        sendInitialEvent("auto_palette_add_color_29_11", "addButton"); // Calling the async function immediately
    };
    paletteAndButtonContainer.appendChild(colorBoxContainer);
    paletteAndButtonContainer.appendChild(addButton);
    container.appendChild(paletteAndButtonContainer);

    // Create and append five color boxes to the palette container
    for (let i = 0; i < 5; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.width = '40px';
        colorBox.style.height = '40px';
        colorBox.style.backgroundColor = 'grey'; // default color
        colorBoxContainer.appendChild(colorBox);
    }

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

    // Create a div for input and button to make them inline
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    // Create input for image URL
    imageUrlInputPalette = document.createElement('input');
    imageUrlInputPalette.className = 'image-url-input';
    imageUrlInputPalette.id = 'imageUrl';
    imageUrlInputPalette.type = 'text';
    imageUrlInputPalette.placeholder = 'Enter image URL';
    inputContainer.appendChild(imageUrlInputPalette);

    // Create analyze button
    analyzeButtonPalette = document.createElement('button');
    analyzeButtonPalette.id = 'analyzeButtonPalette';
    analyzeButtonPalette.innerText = 'Analyze Image';
    analyzeButtonPalette.onclick = function () {
        // analyzeImage(imageUrlInputPalette.value);/
        analyzeImage(
            imageUrlInputPalette.value,
            sendInitialEvent,
            "palette_generated",
            "analyzeButtonPalette", 
            sendImageForAnalysis
        );
        imageUrlInputPalette.value = '';
    };
    inputContainer.appendChild(analyzeButtonPalette);

    // Append inputContainer to main container
    container.appendChild(inputContainer);
    document.body.appendChild(container);

}

function sendImageForAnalysis(imageUrl) {
    console.log("Sending image URL to Flask API:", imageUrl);
    // showLoadingGif();

    // Endpoint where the Flask API is running.
    // const flaskApiEndpoint = "http://127.0.0.1:5000/generate-palette"; //demo
    const flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/generate-palette";


    fetch(flaskApiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageURL: imageUrl })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.palette) {
                console.log("Generated Palette:");
                const colorBoxes = document.querySelectorAll('.colorBox');
                data.palette.forEach((color, index) => {
                    const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                    console.log(`Color ${index + 1}: ${rgbColor}`);
                    colorBoxes[index].style.backgroundColor = rgbColor;
                });
            } else {
                console.log('entered error')
                console.error("Error:", data.error);
            }
        })
        .catch(error => {
            console.error("Network Error:", error);
        });
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
    let colorBoxContainer = document.getElementById('colorBoxContainer');
    console.log('inside toggle')

    if (!colorBoxContainer) {
        initializeUIPalette();
    } else {
        // Toggle the visibility of the UI
        colorBoxContainer.style.visibility = 'visible';
        colorBoxContainer.style.opacity = '1';
    }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "togglePalette") {
        console.log('inside chrome runtime message listener');
        toggleUI();
    }
});
