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
    if (clientId !== "e5924d98-1f91-4479-84e8-1befece37a1c") {
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
sendInitialEvent('palette_loaded', 'paletteContainer');

// Initialization: Setting up the UI
console.log("palette  loaded!");
let imageUrlInputPalette = document.getElementById('imageUrl');
let analyzeButtonPalette = document.getElementById('analyzeButtonPalette');

function initializeUIPalette() {
    console.log("Initializing UI...");
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.id = 'paletteContainer';
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999';
    container.style.backgroundColor = 'rgba(50, 50, 50, 0.5)'; // Semi-transparent background
    container.style.border = '1px solid #000';
    container.style.padding = '20px 30px 10px 30px';
    container.style.paddingRight = '30px';  // Set paddingRight after the general padding
    container.style.paddingLeft = '30px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.8)';
    container.style.display = 'flex';
    container.style.flexDirection = 'column'; // Stack children vertically 
    container.style.backdropFilter = 'blur(30px)'; // Apply blur effect

    // Create close button (acts like a header)
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px'; // Position from the top
    closeButton.style.right = '5px'; // Position from the right
    closeButton.style.margin = '0 auto'; // Center the button horizontally
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

    // Create a new container for palette and button
    const paletteAndButtonContainer = document.createElement('div');
    paletteAndButtonContainer.id = 'paletteAndButtonContainer';
    paletteAndButtonContainer.style.display = 'flex';
    paletteAndButtonContainer.style.justifyContent = 'space-between';
    paletteAndButtonContainer.style.alignItems = 'center'; // Align items vertically
    paletteAndButtonContainer.style.width = '100%';
    paletteAndButtonContainer.style.marginTop = '10px';
    paletteAndButtonContainer.style.marginBottom = '10px';

    // Create palette container for color boxes
    const paletteContainer = document.createElement('div');
    paletteContainer.id = 'paletteContainer';
    paletteContainer.style.display = 'flex';
    paletteContainer.style.justifyContent = 'space-between';
    paletteContainer.style.width = '100%';
    paletteContainer.style.marginTop = '10px';
    paletteContainer.style.marginBottom = '10px';

    // Create a button for adding colors
    const addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.style.fontSize = '20px';
    addButton.style.width = '40px';
    addButton.style.height = '40px';
    addButton.style.backgroundColor = 'transparent';
    addButton.style.color = 'white';
    addButton.style.border = 'none';
    addButton.style.cursor = 'pointer';
    addButton.onclick = () => {
        alert('Feature coming soon!');
        sendInitialEvent("auto_palette_add_color_29_11", "addButton"); // Calling the async function immediately
    };
    paletteAndButtonContainer.appendChild(paletteContainer);
    paletteAndButtonContainer.appendChild(addButton);
    container.appendChild(paletteAndButtonContainer);

    // Create and append five color boxes to the palette container
    for (let i = 0; i < 5; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.width = '40px';
        colorBox.style.height = '40px';
        colorBox.style.backgroundColor = 'grey'; // default color
        paletteContainer.appendChild(colorBox);
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
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.marginTop = 'auto';
    inputContainer.style.marginBottom = '10px';

    // Create input for image URL
    imageUrlInputPalette = document.createElement('input');
    imageUrlInputPalette.id = 'imageUrl';
    imageUrlInputPalette.type = 'text';
    imageUrlInputPalette.placeholder = 'Enter image URL';
    imageUrlInputPalette.style.flex = '1';
    imageUrlInputPalette.style.marginRight = '10px';
    inputContainer.appendChild(imageUrlInputPalette);

    // Create analyze button
    analyzeButtonPalette = document.createElement('button');
    analyzeButtonPalette.id = 'analyzeButtonPalette';
    analyzeButtonPalette.innerText = 'Analyze Image';
    analyzeButtonPalette.onclick = function () {
        analyzeImage(imageUrlInputPalette.value);
    };
    inputContainer.appendChild(analyzeButtonPalette);

    // Append inputContainer to main container
    container.appendChild(inputContainer);
    document.body.appendChild(container);

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
    if (!imageUrl) {
        shakeElement(imageUrlInputPalette);
        return; // Terminate the function
    }
    imageUrlInputPalette.value = '';

    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
        extractImageFromPage(imageUrl)
            .then(directImageUrl => {
                sendInitialEvent("palette_generated", "analyzeButtonPalette"); // Calling the async function immediately
                sendImageForAnalysis(directImageUrl);
            })
            .catch(error => {
                shakeElement(imageUrlInputPalette);
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        sendInitialEvent("palette_generated", "analyzeButtonPalette"); // Calling the async function immediately
        sendImageForAnalysis(imageUrl);
    }
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

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "generatePalette") {
        initializeUIPalette();
    }
});
