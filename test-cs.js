console.log('testcs loaded');

function handleImages() {
    console.log('content loaded');
    // Get all image elements on the page
    const images = document.querySelectorAll('img');

    // Iterate over each image
    images.forEach(img => {
        // Create a button for each image
        const btn = document.createElement('button');
        btn.innerText = "Color Wheel";
        btn.style.position = 'absolute';
        btn.style.background = 'blue';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        btn.style.zIndex = '1000'; // Ensure it's above other elements

        // Position the button relative to the image
        const rect = img.getBoundingClientRect();
        btn.style.top = `${rect.top + window.scrollY}px`;
        btn.style.left = `${rect.left + window.scrollX}px`;

        // Add click event to the button
        btn.addEventListener('click', function() {
            const imageUrl = img.src;

            
        });

        // Append the button to the body
        document.body.appendChild(btn);
    });
}

// Check if the document is already loaded
if (document.readyState === "loading") {
    // If not, wait for the DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", handleImages);
} else {
    // If it's already loaded, run the function immediately
    handleImages();
}
