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

sendInitialEvent('custom_palette_loaded', 'eyedropperContainer');

// Initialization: Setting up the UI
console.log("eyedropper base  loaded!");
let imageUrlInputEyedropper = document.getElementById('imageUrl');
let analyzeButtonEyedropper = document.getElementById('analyzeButtonEyedropper');

function initializeEyedropper() {
    console.log("Initializing UI...");

    // Create a main container
    const container = document.createElement('div');
    container.id = 'eyedropperContainer';
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999';
    container.style.backgroundColor = '#2a2a2a';
    container.style.border = '1px solid #000';
    container.style.padding = '20px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between'; // To place child containers side by side

    // Create close button (acts like a header)
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

    // Create a container for image, input link, and button
    const imageInputContainer = document.createElement('div');
    imageInputContainer.style.display = 'flex';
    imageInputContainer.style.flexDirection = 'column';
    imageInputContainer.style.flex = '1';
    imageInputContainer.style.display = 'flex'; // Added for centering
    imageInputContainer.style.justifyContent = 'center'; // Center horizontally
    imageInputContainer.style.alignItems = 'center'; // Center vertically
    imageInputContainer.style.marginRight = '20px'; // Space between the two child containers

    // Create an image container
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    imageContainer.style.marginTop = '10px';
    imageContainer.style.backgroundColor = 'transparent';
    imageContainer.style.paddingBottom = '10px';
    imageInputContainer.appendChild(imageContainer);

    // Prevent mousedown event from propagating from the image to the container
    imageContainer.addEventListener('mousedown', function (e) {
        if (e.target.tagName === 'IMG') {
            e.stopPropagation();
        }
    });

    // Create a div for input and button to make them inline
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.marginTop = 'auto';

    // Create input for image URL
    imageUrlInputEyedropper = document.createElement('input');
    imageUrlInputEyedropper.id = 'imageUrl';
    imageUrlInputEyedropper.type = 'text';
    imageUrlInputEyedropper.placeholder = 'Enter image URL';
    imageUrlInputEyedropper.style.flex = '1';
    imageUrlInputEyedropper.style.marginRight = '10px';
    inputContainer.appendChild(imageUrlInputEyedropper);

    // Create analyze button
    const analyzeButtonEyedropper = document.createElement('button');
    analyzeButtonEyedropper.id = 'analyzeButtonEyedropper';
    analyzeButtonEyedropper.innerText = 'Analyze Image';
    analyzeButtonEyedropper.onclick = function () {
        analyzeImage(imageUrlInputEyedropper.value);
        colorBoxesContainer.style.visibility = 'visible';
    };
    inputContainer.appendChild(analyzeButtonEyedropper);

    // Append inputContainer to imageInputContainer
    imageInputContainer.appendChild(inputContainer);
    container.appendChild(imageInputContainer);

    // Create a container for color boxes
    const colorBoxesContainer = document.createElement('div');
    colorBoxesContainer.id = 'colorBoxesContainer';
    colorBoxesContainer.style.gridTemplateColumns = 'repeat(5, 40px)'; // 5 boxes in a row, each 40px wide
    colorBoxesContainer.style.gridAutoRows = '40px'; // Each row is 40px high
    colorBoxesContainer.style.gap = '0px'; // No gap between boxes
    colorBoxesContainer.style.display = 'none';
    colorBoxesContainer.style.border = '2px solid #8f9aa6';
    colorBoxesContainer.style.borderRadius = '6px'
    colorBoxesContainer.style.padding = '20px';
    colorBoxesContainer.style.overflowY = 'auto'; // Enable vertical scrolling
    container.appendChild(colorBoxesContainer);

    // Append main container to the body
    document.body.appendChild(container);

    initializeDragAndDrop(container);
    activateEyedropperForImage();
}

function initializeDragAndDrop(container) {
    let isDragging = false;
    let initialMouseX, initialMouseY;
    let initialContainerX, initialContainerY;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Record the initial mouse position
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;

        // Record the initial position of the container
        initialContainerX = container.getBoundingClientRect().left + (container.offsetWidth / 2);
        initialContainerY = container.getBoundingClientRect().top;

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp); // Change this line
    });

    function onMouseMove(e) {
        if (!isDragging) return;

        // Calculate the movement
        let dx = e.clientX - initialMouseX;
        let dy = e.clientY - initialMouseY;

        // Apply the movement to the container's position
        container.style.left = `${initialContainerX + dx}px`;
        container.style.top = `${initialContainerY + dy}px`;
    }

    function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp); // And this line
        isDragging = false;
    }
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
        shakeElement(imageUrlInputEyedropper);
        return; // Terminate the function
    }
    imageUrlInputEyedropper.value = '';

    if (!imageUrl.match(/\.(jpeg|jpg|gif|png)(\?|$)/)) {
        extractImageFromPage(imageUrl)
            .then(directImageUrl => {
                sendInitialEvent('loaded_image_eyedropper', 'eyedropperContainer');
                sendImageForAnalysisEyedropper(directImageUrl);
            })
            .catch(error => {
                shakeElement(imageUrlInputEyedropper);
                console.error('Failed to extract direct image URL:', error);
            });
    } else {
        sendInitialEvent('loaded_image_eyedropper', 'eyedropperContainer');
        sendImageForAnalysisEyedropper(imageUrl);
    }
}

function sendImageForAnalysisEyedropper(imageUrl) {
    console.log("Sending image URL to Flask API:", imageUrl);
    // showLoadingGif();

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
                // Create an image element
                const img = new Image();
                img.src = data.dataURL;
                img.onload = function () {
                    // Calculate the aspect ratio
                    const aspectRatio = img.naturalWidth / img.naturalHeight;

                    // Get half the viewport height
                    const halfViewportHeight = window.innerHeight / 2;

                    // Get the image container
                    const imageContainer = document.getElementById('imageContainer');

                    // If the image's natural height exceeds half the viewport height, adjust its dimensions
                    if (img.naturalHeight > halfViewportHeight) {
                        img.height = halfViewportHeight;
                        img.width = halfViewportHeight * aspectRatio;
                    } else {
                        img.width = img.naturalWidth;
                        img.height = img.naturalHeight;
                    }

                    // Set the image container dimensions
                    imageContainer.style.width = `${img.width}px`;
                    imageContainer.style.height = `${img.height}px`;

                    // Remove any previous images
                    imageContainer.innerHTML = '';

                    // Append the new image
                    imageContainer.appendChild(img);
                }
            }
            else {
                console.error("Error:", data.error);
            }
        })
        .catch(error => {
            console.error("Network Error:", error);
        });
}

function activateEyedropperForImage() {
    const imageContainer = document.getElementById('imageContainer');

    imageContainer.addEventListener('click', function (event) {
        sendInitialEvent('created_color_box', 'eyedropperContainer');

        const img = event.target;

        // Ensure the clicked element is an image
        if (img instanceof HTMLImageElement) {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Get the color of the clicked pixel
            const x = event.offsetX;
            const y = event.offsetY;
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            console.log(pixel); // This will log [R, G, B, A]
            const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

            // Create a new color box
            const colorBox = document.createElement('div');
            colorBox.style.width = '40px';
            colorBox.style.height = '40px';
            colorBox.style.backgroundColor = rgb;

            // Add right-click event to delete the color box
            colorBox.addEventListener('contextmenu', function (e) {
                e.preventDefault(); // Prevent the default context menu from appearing
                colorBoxesContainer.removeChild(colorBox); // Remove the color box
                sendInitialEvent('removed_color_box', 'eyedropperContainer');

            });

            // Append the color box to the container
            colorBoxesContainer.appendChild(colorBox);
            colorBoxesContainer.style.display = 'grid';

            console.log(rgb);
        }
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
    if (request.action === "createEyedropperBase") {
        initializeEyedropper();
    }
});
