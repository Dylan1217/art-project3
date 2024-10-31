const element = document.getElementById('redirect-button');
const landing = document.getElementById('landing');
const mainContent = document.querySelector('.main-content'); // Get the main content wrapper

element.addEventListener('click', () => {
    // Fade out the landing page
    landing.classList.add('fade-out');

    // Wait for the fade-out to complete before showing the main content
    setTimeout(() => {
        landing.style.display = 'none'; // Hide the landing page
        mainContent.style.display = 'block'; // Show the main content
    }, 1000); // Match this timeout to the CSS transition duration
});