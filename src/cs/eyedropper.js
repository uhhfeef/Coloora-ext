import { sendInitialEvent } from '../modules/gaAnalytics';
import { fetchImageData, extractImageFromPage, analyzeImage } from '../modules/imageAnalysis';

var zoomLevel = 1; // Initial zoom level
var zoomCenterX = 0; // Initial zoom center X
var zoomCenterY = 0; // Initial zoom center Y

function initializeEyedropper() {
    console.log("Initializing UI...");

    // Create a main container
    const container = document.createElement('div');
    container.className = 'coloora-container';
    container.id = 'eyedropperContainer';

    // Create close button (acts like a header)
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button'; 
    closeButton.innerText = 'X';
    closeButton.onclick = () => {
        document.body.removeChild(container);
    };
    container.appendChild(closeButton);

    // Create a container for image, input link, and button
    const imageInputContainer = document.createElement('div');
    imageInputContainer.className = 'image-input-container';
    
    // Create an image container
    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    imageInputContainer.appendChild(imageContainer);

    // Set up the image container as a drop zone
    imageContainer.textContent = 'Drag and drop image URL here';

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

        // Check for different types of data
        if (e.dataTransfer.types.includes('text/uri-list')) {
            // Handle URI list (common for links)
            const url = e.dataTransfer.getData('text/uri-list');
            console.log('Dropped URL:', url);
            // Display the image in the container
            imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

            // Analyze the image
            analyzeImage(
                url,
                sendInitialEvent,
                'loaded_image_eyedropper', 
                'eyedropperContainer',
                sendImageForAnalysis
            );
        } else if (e.dataTransfer.types.includes('text/html')) {
            // Handle HTML (common for rich content)
            const htmlContent = e.dataTransfer.getData('text/html');
            const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
            const imgSrc = doc.querySelector('img') ? doc.querySelector('img').src : null;
            if (imgSrc) {
                console.log('Extracted Image URL from HTML:', imgSrc);
                // Display the image in the container
                imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

                // Analyze the image
                analyzeImage(
                    url,
                    sendInitialEvent,
                    'loaded_image_eyedropper', 
                    'eyedropperContainer',
                    sendImageForAnalysis
                );
            }
        } else if (e.dataTransfer.types.includes('text/plain')) {
            // Handle plain text (fallback)
            const url = e.dataTransfer.getData('text/plain');
            console.log('Extracted URL from text:', url);
            // Display the image in the container
            imageContainer.innerHTML = `<img src="${url}" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">`;

            // Analyze the image
            analyzeImage(
                url,
                sendInitialEvent,
                'loaded_image_eyedropper', 
                'eyedropperContainer',
                sendImageForAnalysis
            );
        }
       
        // Animate the visibility of colorBoxesContainer
        colorBoxesContainer.style.opacity = '1'; // Trigger the fade-in animation
        // colorBoxesContainer.style.visibility = 'visible';
        imageContainer.style.border = 'none';
        const img = imageContainer.querySelector('img');
        if (img) {
            // Prevent dragging of the image
            img.addEventListener('mousedown', function(event) {
                event.preventDefault();
            });
        }
    });

    // Create label for color boxes
    const label = document.createElement('label');
    label.className = 'label';
    label.innerText = 'Click to pick, right click to delete\nZoom in and out with mouse wheel';
    imageInputContainer.appendChild(label);
    container.appendChild(imageInputContainer);

    // Create a container for color boxes and label
    const colorContainer = document.createElement('div');
    colorContainer.className = 'color-container';
    container.appendChild(colorContainer);

    // Create a container for color boxes
    const colorBoxesContainer = document.createElement('div');
    colorBoxesContainer.className = 'color-boxes-container';
    colorBoxesContainer.id = 'colorBoxesContainer';
    colorContainer.appendChild(colorBoxesContainer);

    addNewCategory(colorBoxesContainer);

    // create a b/w filter to clipboard button
    const greyscaleButton = document.createElement('button');
    greyscaleButton.className = 'label-button'
    greyscaleButton.id = 'greyscaleButton';
    greyscaleButton.innerText = '◐';
    colorBoxesContainer.appendChild(greyscaleButton);
    // Add event listener to the greyscale button
    greyscaleButton.addEventListener('click', function() {
        toggleGrayscale();
        sendInitialEvent('greyscale_clicked', 'eyedropperContainer');
    });

    // create a copy to clipboard button
    const copyButton = document.createElement('button');
    copyButton.className = 'label-button'
    copyButton.innerText = '📋';
    copyButton.style.fontSize = '16px';
    copyButton.style.bottom = '20px';
    copyButton.style.right = '40px';
    colorBoxesContainer.appendChild(copyButton);
    // Add event listener to the copy button
    copyButton.addEventListener('click', function() {
        sendInitialEvent('copy_palette_clicked', 'eyedropperContainer');
        copyButton.innerText = '✅'; // Change the button text to a tick symbol
        copyColorBoxesAsImage();

        setTimeout(function() {
            copyButton.innerText = '📋'; // Revert the button text to the original symbol
        }, 1500); // Delay for 2 seconds (2000 milliseconds)
    });

    // Create a button to add a new category
    const addCategoryButton = document.createElement('button');
    addCategoryButton.className = 'label-button'
    addCategoryButton.id = 'addCategoryButton'; 
    addCategoryButton.innerText = '+';
    addCategoryButton.style.fontSize = '20px';
    addCategoryButton.style.bottom = '20px';
    addCategoryButton.style.right = '20px';
    // Placeholder for future functionality
    addCategoryButton.onclick = function() {
        addNewCategory(colorBoxesContainer);
        sendInitialEvent('added_category', 'addCategoryButton');
    };
    colorBoxesContainer.appendChild(addCategoryButton);

    // Append main container to the body
    document.body.appendChild(container);

    initializeDragAndDrop(container);
    activateEyedropperForImage();
}

function editTitle(titleElement, container) {
    const input = document.createElement('input');
    input.className = 'category-title-input';
    input.type = 'text';
    input.value = titleElement.innerText;

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

    // Create the title element
    const title = document.createElement('div');
    title.className = 'category-title';
    title.innerText = categoryName;

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

function copyColorBoxesAsImage() {
    const colorBoxesContainer = document.getElementById('colorBoxesContainer');
    const categories = colorBoxesContainer.getElementsByClassName('category-container');
    
    // Calculate the size of the canvas
    let canvasWidth = 200; // Adjust as needed
    let canvasHeight = colorBoxesContainer.scrollHeight;

    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext('2d');

    // Draw color boxes and category names on the canvas
    let yOffset = 0;
    for (const category of categories) {
        // Draw category name
        const categoryName = category.querySelector('div').innerText;
        ctx.fillStyle = '#000'; // Text color
        ctx.font = '16px Arial'; // Adjust font style as needed
        ctx.fillText(categoryName, 0, yOffset + 16); // Adjust text position as needed
        yOffset += 30; // Adjust space for category name
    
        // Draw color boxes
        const colorBoxes = category.querySelectorAll('div[id$="-color-boxes"] > div > input');
        let xOffset = 0;
        let rowHeight = 40;
        for (const box of colorBoxes) {
            const color = box.style.backgroundColor;
            ctx.fillStyle = color;
            ctx.fillRect(xOffset, yOffset, 40, 40);
            xOffset += 40; 
    
            // Move to next row if end of current row is reached
            if (xOffset + 40 > canvas.width) {
                xOffset = 0;
                yOffset += rowHeight; 
            }
        }
        yOffset += rowHeight + 20; // Space after each category
    }
    
    // Convert the canvas to a blob and copy to clipboard
    canvas.toBlob(function(blob) {
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item])
            .then(() => console.log("Color boxes with category names copied as image to clipboard"))
            .catch(err => console.error("Error copying image to clipboard", err));
    });
}

function sendImageForAnalysis(imageUrl) {
    fetchImageData(imageUrl, (dataUrl) => {
        handleImageLoad(dataUrl, 'imageContainer', 'colorBoxesContainer');
        // Additional success logic if needed
    }, (error) => {
        console.error(error);
        // Additional error handling logic if needed
    });
}

function handleImageLoad(dataUrl, imageContainerId, colorBoxContainerId) {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
        updateImageDimensions(img, imageContainerId);
        setupImageInteraction(img, colorBoxContainerId);
    };
}

function updateImageDimensions(img, imageContainerId) {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const halfViewportHeight = window.innerHeight / 2;
    const imageContainer = document.getElementById(imageContainerId);

    img.height = img.naturalHeight > halfViewportHeight ? halfViewportHeight : img.naturalHeight;
    img.width = img.height * aspectRatio;
    imageContainer.style.width = `${img.width}px`;
    imageContainer.style.height = `${img.height}px`;
    imageContainer.innerHTML = ''; // Clear the container
    const imageHolder = document.createElement('div');
    imageHolder.id = 'image';
    imageHolder.appendChild(img);
    imageContainer.appendChild(imageHolder);
}

function setupImageInteraction(img, colorBoxContainerId) {
    const colorBoxContainer = document.getElementById(colorBoxContainerId);
    colorBoxContainer.style.height = `${img.height}px`;
    img.addEventListener('wheel', handleWheelEvent); // Add event listener for zooming
}

function activateEyedropperForImage() {
    const imageContainer = document.getElementById('imageContainer'); 
    const pixelDisplay = document.createElement('div');
    pixelDisplay.className = 'pixel-display';

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

        const img = event.target; // Get the image element

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
            const hexColor = rgbToHex(rgb); // Convert RGB to HEX

            const colorBoxContainer = document.createElement('div');
            colorBoxContainer.className = 'color-box-container';

            // Create a new color box
            const colorBox = document.createElement('input');
            colorBox.className = 'color-box';
            colorBox.type = 'color';
            colorBox.value = hexColor;
            colorBox.style.backgroundColor = rgb;
                
            // Append the color box to the last category's color box container
            const categories = document.querySelectorAll('#colorBoxesContainer > .category-container');
            const lastCategoryColorBoxes = categories[categories.length - 1].lastChild;

            colorBox.addEventListener('input', function() {
                this.style.backgroundColor = this.value;
            });

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
                    lastCategoryColorBoxes.removeChild(colorBoxContainer); // Remove the color box
                    sendInitialEvent('removed_color_box', 'eyedropperContainer');
                };
            });

            colorBoxContainer.appendChild(colorBox);
            lastCategoryColorBoxes.appendChild(colorBoxContainer); // Append the color box to the last category's color box container
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

            // Event listener for mouse enter (hover)
            colorBoxContainer.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(0.8)'; // Scales down the box
            });

            // Event listener for mouse leave
            colorBoxContainer.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)'; // Returns to original scale
            });

            colorBoxContainer.addEventListener('click', function(event) {
                // Check if the color box container was clicked
                console.log('Color box container clicked');
                sendInitialEvent('clicked_color_box', 'eyedropperContainer');
            });
        }
    });
}

function handleWheelEvent(event) {
    event.preventDefault();

    const delta = event.deltaY || event.detail || event.wheelDelta;
    const zoomFactor = 0.1;

    // Update zoom level
    if (delta < 0) {
        zoomLevel *= (1 + zoomFactor);
    } else {
        zoomLevel /= (1 + zoomFactor);
    }

    const minZoomLevel = 1;
    const maxZoomLevel = Infinity;
    zoomLevel = Math.max(minZoomLevel, Math.min(zoomLevel, maxZoomLevel));

    // Calculate the center of the zoom based on the mouse position
    const rect = this.getBoundingClientRect();
    const zoomCenterX = (event.clientX - rect.left) / rect.width;
    const zoomCenterY = (event.clientY - rect.top) / rect.height;

    // Apply the zoom transformation
    this.style.transformOrigin = `${zoomCenterX * 100}% ${zoomCenterY * 100}%`;
    this.style.transform = `scale(${zoomLevel})`;
}

// JavaScript to toggle grayscale
function toggleGrayscale() {
    const image = document.getElementById('image'); // Assuming the image has an ID 'image'

    // Check if the image already has grayscale applied
    if (image.style.filter === 'grayscale(100%)') {
        image.style.filter = ''; // Remove the grayscale filter
    } else {
        image.style.filter = 'grayscale(100%)'; // Apply the grayscale filter
    }
}

function rgbToHex(rgb) {
    let [r, g, b] = rgb.match(/\d+/g).map(Number);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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

// This function will create the UI if it does not exist, or toggle its visibility
function toggleUI() {
    let eyedropperContainer = document.getElementById('eyedropperContainer');
    console.log('inside toggle')

    if (!eyedropperContainer) {
        initializeEyedropper();
        sendInitialEvent('custom_palette_loaded', 'eyedropperContainer');
    } else {
        // return; // Terminate the function
        eyedropperContainer.style.visibility = 'visible';
    }
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleEyedropper") {
        console.log('inside chrome runtime message listener');
        toggleUI();
    }
});

