// Get the saved URL from localStorage
const savedUrl = localStorage.getItem('savedUrl');
const urlText = document.getElementById('saved-url');
const urlLink = document.getElementById('url-link');

// Check if a URL was saved
if (savedUrl) {
    urlText.textContent = `Your saved URL: ${savedUrl}`;
    urlLink.href = savedUrl; // Set the link to the saved URL
} else {
    urlText.textContent = 'No URL saved yet.';
    urlLink.style.display = 'none'; // Hide the link if no URL is saved
}
