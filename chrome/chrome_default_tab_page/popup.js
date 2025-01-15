document.getElementById('save-url-btn').addEventListener('click', function() {
    const statusMessage = document.getElementById('status-message');
    
    // Get the current URL
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const currentUrl = tabs[0].url;

        // Save URL to local storage (or wherever you want)
        localStorage.setItem('savedUrl', currentUrl);

        // Display the saved message
        statusMessage.textContent = `URL saved: ${currentUrl}`;
        statusMessage.style.color = "#5cb85c"; // Green color to show success
    });
});
