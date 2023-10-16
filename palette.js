// Initialization: Setting up the UI
console.log("palette  loaded!");
let imageUrlInput = document.getElementById('imageUrl');
let analyzeButton = document.getElementById('analyzeButton');

function initializeUI() {
    console.log("Initializing UI...");
    // Create a container for the color wheel
    const container = document.createElement('div');
    container.id = 'colorWheelContainer';
    container.style.height = '60px';
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
    container.style.display = 'flex';
    container.style.justifyContent = 'flex-end'; // Center children horizontally
    container.style.alignItems = 'center';
    container.style.flexDirection = 'column';  // Stack children vertically

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

    // Create a div for input and button to make them inline
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.marginTop = 'auto';
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
    document.body.appendChild(container);

}

// Adopt Content Script Behavior
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "generatePalette") {
        initializeUI();
    }
});
