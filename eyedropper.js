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
    const imageInputContainer = document.createElement('div');
    imageInputContainer.style.display = 'flex';
    imageInputContainer.style.flexDirection = 'column';
    imageInputContainer.style.flex = '1';
    imageInputContainer.style.display = 'flex'; // Added for centering
    imageInputContainer.style.justifyContent = 'center'; // Center horizontally
    imageInputContainer.style.alignItems = 'center'; // Center vertically
    // imageInputContainer.style.marginRight = '20px'; // Space between the two child containers

    // Create an image container
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    imageContainer.style.margin = '10px 0 10px 0';
    imageContainer.style.backgroundColor = 'transparent';
    imageInputContainer.appendChild(imageContainer);

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
        colorBoxesContainer.style.opacity = '1'; // Trigger the fade-in animation
        colorBoxesContainer.style.visibility = 'visible';
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
    
    // Create label for color boxes

    const label = document.createElement('label');
    label.innerText = 'Click to pick, right click to delete';
    label.style.color = '#fff';
    label.style.fontSize = '12px';
    label.style.marginTop = '10px';
    imageInputContainer.appendChild(label);

    container.appendChild(imageInputContainer);

    // Create a container for color boxes and label
    const colorContainer = document.createElement('div');
    colorContainer.style.display = 'flex';
    colorContainer.style.flexDirection = 'column';
    colorContainer.style.marginTop = '10px';
    container.appendChild(colorContainer);

    // Create a container for color boxes
    const colorBoxesContainer = document.createElement('div');
    colorBoxesContainer.id = 'colorBoxesContainer';
    colorBoxesContainer.style.display = 'flex'; // Changed to flex
    colorBoxesContainer.style.flexDirection = 'column'; // Stack category containers vertically
    colorBoxesContainer.style.overflowY = 'auto'; // Enable vertical scrolling
    colorBoxesContainer.style.padding = '20px';
    colorContainer.appendChild(colorBoxesContainer);

    addNewCategory(colorBoxesContainer);

    // create a copy to clipboard button
    const copyButton = document.createElement('button');
    copyButton.innerText = '📋';
    copyButton.style.fontSize = '16px';
    copyButton.style.color = '#fff';
    copyButton.style.position = 'absolute';
    copyButton.style.bottom = '20px';
    copyButton.style.right = '40px';
    copyButton.style.backgroundColor = 'transparent'; // Set button color to transparent
    copyButton.style.outline = 'none'; // Remove outline
    copyButton.style.border = 'none'; // Remove border
    copyButton.style.outline = 'none'; // Remove outline
    copyButton.style.cursor = 'pointer'; // Change cursor to pointer on hover
    colorBoxesContainer.appendChild(copyButton);
    // Add event listener to the copy button
    copyButton.addEventListener('click', function() {
        alert('This feature is coming soon');
        sendInitialEvent('copy_palette_clicked', 'eyedropperContainer');
    });

    const addCategoryButton = document.createElement('button');
    addCategoryButton.innerText = '+';
    addCategoryButton.style.fontSize = '16px';
    addCategoryButton.style.color = '#fff';
    addCategoryButton.style.position = 'absolute';
    addCategoryButton.style.bottom = '20px';
    addCategoryButton.style.right = '20px';
    addCategoryButton.style.backgroundColor = 'transparent'; // Set button color to transparent
    addCategoryButton.style.outline = 'none'; // Remove outline
    addCategoryButton.style.border = 'none'; // Remove border
    addCategoryButton.style.outline = 'none'; // Remove outline
    addCategoryButton.style.cursor = 'pointer'; // Change cursor to pointer on hover
    // Placeholder for future functionality
    addCategoryButton.onclick = function() {
        addNewCategory(colorBoxesContainer);
    };
    colorBoxesContainer.appendChild(addCategoryButton);

    // Append main container to the body
    document.body.appendChild(container);

    initializeDragAndDrop(container);
    activateEyedropperForImage();
}

function editTitle(titleElement, container) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = titleElement.innerText;
    input.style.fontSize = '16px';
    input.style.width = '100%'; // Take full width of the container
    input.style.marginBottom = '8px';

    // Replace the title with the input field
    container.replaceChild(input, titleElement);

    // Focus the input field and select the text
    input.focus();
    input.select();

    // Event listener for when the user finishes editing
    input.addEventListener('blur', function() {
        titleElement.innerText = input.value || 'Default'; // Use the new title or revert to 'Default' if empty
        container.replaceChild(titleElement, input);
    });

    // Also update title on pressing Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            input.blur(); // Trigger the blur event
        }
    });
}

function addNewCategory(container) {
    // Create a new category container
    const newCategoryName = 'New Category'; // Default name for new category
    const newCategoryContainer = createCategoryContainer(newCategoryName);
    newCategoryContainer.id = newCategoryName.toLowerCase().replace(/\s+/g, '-'); // Convert name to a valid id

    // Add double click event listener to edit the title of the new category
    const titleElement = newCategoryContainer.querySelector('div');
    titleElement.addEventListener('dblclick', function() {
        editTitle(titleElement, newCategoryContainer);
    });

    // Append the new category container to the main container
    container.appendChild(newCategoryContainer);
}
function createCategoryContainer(categoryName) {
    // Create the category container
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'category-container';
    categoryContainer.style.display = 'flex';
    categoryContainer.style.flexDirection = 'column';
    categoryContainer.style.marginBottom = '20px';

    // Create the title element
    const title = document.createElement('div');
    title.innerText = categoryName;
    title.style.color = '#fff';
    title.style.fontSize = '16px';
    title.style.marginBottom = '8px';
    title.style.borderBottom = '1.5px solid #ccc';
    title.style.paddingBottom = '5px';

    // Add double click event listener to edit the title
    title.addEventListener('dblclick', function() {
        editTitle(title, categoryContainer);
    });

    // Append the title to the category container
    categoryContainer.appendChild(title);

    // Create a container for color boxes within this category
    const colorBoxes = document.createElement('div');
    colorBoxes.style.display = 'grid';
    colorBoxes.style.gridTemplateColumns = 'repeat(5, 40px)';
    colorBoxes.style.gridAutoRows = '40px';
    colorBoxes.id = `${categoryName.toLowerCase().replace(/\s+/g, '-')}-color-boxes`;

    // Append the color boxes container to the category container
    categoryContainer.appendChild(colorBoxes);

    return categoryContainer;
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

async function extractImageFromPage(url) {
    const response = await fetch(url); // Fetch the page
    const text = await response.text(); // Get the page content as text
    const parser = new DOMParser(); // Create a DOM parser
    const doc = parser.parseFromString(text, 'text/html'); // Parse the page
    const imgElements = doc.querySelectorAll('img'); // Find all image elements
    // Return the first image's src attribute
    if (imgElements.length > 0) { 
        return imgElements[0].src; 
    }
    throw new Error('No images found');
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
    const flaskApiEndpoint = "https://coloora-400822.et.r.appspot.com/fetch-image"; //prod

    fetch(flaskApiEndpoint, {
        // Send the image URL to the Flask API
        method: 'POST', // Send a POST request
        headers: { 
            'Content-Type': 'application/json', // Send the image URL in JSON format
        },
        body: JSON.stringify({ imageURL: imageUrl }) // Send the image URL in the request body
    })
        // Get the response from the Flask API
        .then(response => response.json()) 
        .then(data => {
            if (data.success && data.dataURL) { // If the response is successful
                // Create an image element
                const img = new Image(); // Create a new image element
                img.src = data.dataURL; // Set the image source to the data URL
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

                    // Set the color box container height to the image height
                    colorBoxContainer.style.height = `${img.height}px`;
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
    const pixelDisplay = document.createElement('div');

    // Style the pixel display element
    pixelDisplay.style.width = '30px';
    pixelDisplay.style.height = '30px';
    pixelDisplay.style.position = 'absolute';
    pixelDisplay.style.border = '2px white solid';
    pixelDisplay.style.borderRadius = '25%';
    pixelDisplay.style.zIndex = '999999';
    pixelDisplay.style.visibility = 'hidden'; // Initially hidden
    document.body.appendChild(pixelDisplay);

    let isDragging = false;

    imageContainer.addEventListener('mousedown', function(event) {
        isDragging = true;
        const img = event.target;
        if (img instanceof HTMLImageElement) {
            updatePixelDisplay(event, img);
            animatePixelDisplay('expand'); 
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        animatePixelDisplay('shrink'); // Shrink animation
    });

    imageContainer.addEventListener('mousemove', function(event) {
        if (!isDragging) return;

        const img = event.target;
        if (img instanceof HTMLImageElement) {
            updatePixelDisplay(event, img); // Update the pixel display
        }
    });

    imageContainer.addEventListener('mouseleave', function() {
        pixelDisplay.style.visibility = 'hidden'; // Hide when cursor leaves the image
    });

    function updatePixelDisplay(event, img) {
        // Draw the image on a canvas
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get the color of the clicked pixel
        const x = event.offsetX;
        const y = event.offsetY;
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

        // Update the pixel display element
        pixelDisplay.style.backgroundColor = rgb;
        pixelDisplay.style.left = `${event.pageX + 10}px`;
        pixelDisplay.style.top = `${event.pageY - 30}px`;
        pixelDisplay.style.visibility = 'visible';
    }

    function animatePixelDisplay(animationType) {
        if (animationType === 'expand') {
            // Animate the pixel display
            pixelDisplay.animate([
                // Keyframes
                { transform: 'scale(.8)', opacity: 1 },
                { transform: 'scale(1.2)', opacity: 1 },
                { transform: 'scale(1)', opacity: 1 }
            ], {
                // Animation options
                duration: 100,
                easing: 'ease-out'
            });
        }
        else if (animationType === 'shrink') {
            // Shrink animation
            const animation = pixelDisplay.animate([
                { transform: 'scale(1)', opacity: 1 },
                { transform: 'scale(0.8)', opacity: 0.5 }
            ], {
                duration: 100,
                easing: 'ease-out'
            });
            // Use the finished promise to hide the element after the animation
            animation.finished.then(() => {
                pixelDisplay.style.visibility = 'hidden';
            });
        }
    }

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

            // Append the color box to the last category's color box container
            const categories = document.querySelectorAll('#colorBoxesContainer > .category-container');
            const lastCategoryColorBoxes = categories[categories.length - 1].lastChild;

            // Add right-click event to delete the color box
            colorBox.addEventListener('contextmenu', function (e) {
                e.preventDefault(); // Prevent the default context menu from appearing

                // Add reverse animation before removing the color box
                colorBox.animate([
                    { transform: 'scale(1)', opacity: 1 },
                    { transform: 'scale(1.1)', opacity: 1 },
                    { transform: 'scale(0.8)', opacity: 0 }
                ], {
                    duration: 150,
                    easing: 'ease-out'
                }).onfinish = function () {
                    lastCategoryColorBoxes.removeChild(colorBox); // Remove the color box
                    sendInitialEvent('removed_color_box', 'eyedropperContainer');
                };
            });

            
            lastCategoryColorBoxes.appendChild(colorBox); // Append the color box to the last category's color box container
            colorBoxesContainer.scrollTop = colorBoxesContainer.scrollHeight; // Scroll to the bottom

            // Add subtle pop animation
            colorBox.animate([
                { transform: 'scale(0.8)', opacity: 0 },
                { transform: 'scale(1.1)', opacity: 1 },
                { transform: 'scale(1)', opacity: 1 }
            ], {
                duration: 300,
                easing: 'ease-out'
            });

            console.log(rgb);
        }
    });
}

function shakeElement(element) {
    console.log('Shake function called');
    let shakes = 5;
    let distance = 2; // in pixels

    const originalStyle = {
        marginLeft: element.style.marginLeft,
        marginRight: element.style.marginRight
    };

    function animateShake() {
        if (shakes === 0) {
            // Reset to original styles
            element.style.marginLeft = originalStyle.marginLeft;
            element.style.marginRight = originalStyle.marginRight;
            return;
        }

        // Alternate direction for shaking effect
        const offset = (shakes % 2 === 0) ? distance : -distance;
        element.style.marginLeft = `${parseInt(element.style.marginLeft || 0, 10) + offset}px`;
        element.style.marginRight = `${parseInt(element.style.marginRight || 0, 10) - offset}px`;

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
