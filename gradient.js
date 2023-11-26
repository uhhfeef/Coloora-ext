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

// sendInitialEvent('gradient_loaded', 'gradientContainer');

// Initialization: Setting up the UI
console.log("gradient base  loaded!");
let imageUrlInputGradient = document.getElementById('imageUrl');
let analyzeButtonGradient = document.getElementById('analyzeButtonEyedropper');

function initializeGradient() {
    console.log("Initializing UI...");

    // Create a main container
    const container = document.createElement('div');
    container.id = 'gradientContainer';
    container.style.position = 'fixed';
    container.style.top = '10%';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '99999';
    container.style.backgroundColor = 'rgba(50, 50, 50, 0.5)'; // Semi-transparent background
    container.style.border = '0.5px solid #000';
    container.style.padding = '20px';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.8)';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between'; // To place child containers side by side
    container.style.backdropFilter = 'blur(30px)'; // Apply blur effect

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
    const imageInputContainerGradient = document.createElement('div');
    imageInputContainerGradient.style.display = 'flex';
    imageInputContainerGradient.style.flexDirection = 'column';
    imageInputContainerGradient.style.flex = '1';
    imageInputContainerGradient.style.display = 'flex'; // Added for centering
    imageInputContainerGradient.style.justifyContent = 'center'; // Center horizontally
    imageInputContainerGradient.style.alignItems = 'center'; // Center vertically
    // imageInputContainerGradient.style.marginRight = '20px'; // Space between the two child containers

    // Create an image container
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    imageContainer.style.margin = '10px 0 10px 0';
    imageContainer.style.backgroundColor = 'transparent';
    imageInputContainerGradient.appendChild(imageContainer);

    // Set up the image container as a drop zone
    imageContainer.textContent = 'Drag and drop image URL here';
    imageContainer.style.fontSize = '14px';
    imageContainer.style.color = '#fff';   
    imageContainer.style.padding = '20px';
    imageContainer.style.border = '2px dashed #ccc';
    imageContainer.style.transition = 'background-color 0.3s'; // Add transition for smooth animation
    imageContainer.style.display = 'flex'; // Add flex display
    imageContainer.style.justifyContent = 'center'; // Center horizontally
    imageContainer.style.alignItems = 'center'; // Center vertically

    // Prevent dragging of the image container
    imageContainer.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    // Handle drag over event
    imageContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        imageContainer.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; // Semi-transparent grey overlay
        imageContainer.style.border = '2px dashed #ccc';
    });

    // Handle drag leave event
    imageContainer.addEventListener('dragleave', function(e) {
        imageContainer.style.backgroundColor = 'transparent'; // Remove overlay
        imageContainer.style.borderColor = '#ccc';
        imageContainer.style.border = 'none';
    });

    // Handle drop event
    imageContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        imageContainer.style.backgroundColor = 'transparent'; // Remove overlay

        // Get the URL from the dropped item
        const url = e.dataTransfer.getData('text');
        
        // Display the image in the container
        imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

        // Analyze the image
        analyzeImage(url);
        // Animate the visibility of colorBoxesContainer
        imageContainer.style.border = 'none';
        const img = imageContainer.querySelector('img');
        if (img) {
            // Prevent dragging of the image
            img.addEventListener('mousedown', function(event) {
                event.preventDefault();
            });
        }
    });

    // Create a div for input and button to make them inline
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    
    // // Create label for color boxes

    // const label = document.createElement('label');
    // label.innerText = 'Click to pick, right click to delete';
    // label.style.color = '#fff';
    // label.style.fontSize = '12px';
    // label.style.marginTop = '10px';
    // imageInputContainerGradient.appendChild(label);

    container.appendChild(imageInputContainerGradient);

    // Create a container for color boxes and label
    const colorContainer = document.createElement('div');
    colorContainer.style.display = 'flex';
    colorContainer.style.flexDirection = 'column';
    colorContainer.style.marginTop = '10px';
    container.appendChild(colorContainer);
    
    // colorBoxesContainer.style.height = '200px';

    // Append main container to the body
    document.body.appendChild(container);

    initializeDragAndDrop(container);
}


function initializeDragAndDrop(container) {
    let isDragging = false;
    let initialMouseX, initialMouseY;
    let initialContainerX, initialContainerY;

    container.addEventListener('mousedown', (e) => {
        // Check if the target element is the image element
        if (e.target.tagName.toLowerCase() === 'img') {
            return;
        }

        isDragging = true;

        // Record the initial mouse position
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;

        // Record the initial position of the container
        initialContainerX = container.getBoundingClientRect().left + (container.offsetWidth / 2);
        initialContainerY = container.getBoundingClientRect().top;

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
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
        document.removeEventListener('mouseup', onMouseUp);
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
    // imageUrlInputEyedropper.value = '';

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

                    const colorBoxContainer = document.getElementById('colorBoxesContainer');

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

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "createGradient") {
        // initializeGradient();
        alert("Feature coming soon");
        sendInitialEvent('gradient_clicked', 'gradientContainer');
    }
});

