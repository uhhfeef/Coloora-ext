function showLoadingGif(container, element) {
    var canvas = document.querySelector("canvas");
    console.log("entering showLoadingGif");

    // const colorWheelContainer = document.getElementById('colorWheelContainer');
    // const colorWheelElement = document.getElementById('colorWheel');

    const loadingGif = document.createElement('img');
    loadingGif.id = 'extensionLoadingGif';
    loadingGif.src = chrome.runtime.getURL('assets/gifs/loading-bar.gif');

    loadingGif.width = 50;
    loadingGif.height = 50;

    loadingGif.style.display = 'block';
    loadingGif.style.position = 'absolute';

    // Calculate the center_color_wheel position of the canvas
    const canvasRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Adjust gif's position based on canvas's position
    loadingGif.style.left = `${canvasRect.left - containerRect.left + (canvas.width / 2) - (loadingGif.width / 2)}px`;
    loadingGif.style.top = `${canvasRect.top - containerRect.top + (canvas.height / 2) - (loadingGif.height / 2)}px`;

    loadingGif.style.zIndex = '9999'; // Ensure it's on top

    colorWheelContainer.appendChild(loadingGif);

    console.log("GIF appended");
    console.log(chrome.runtime.getURL('assets/gifs/loading-bar.gif'));
}

function hideLoadingGif() {
    console.log("done loading")
    const gif = document.getElementById('extensionLoadingGif');
    if (gif) {
        gif.remove();
    }
}

export { showLoadingGif, hideLoadingGif };