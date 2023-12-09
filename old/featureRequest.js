window.onload = function () {
    document.getElementById('featureRequestLink').addEventListener('click', function () {
        console.log("clicked")
        const googleFormLink = 'https://forms.gle/geJTQToU3DM1qAUn6';
        window.open(googleFormLink, '_blank');
    });
};
