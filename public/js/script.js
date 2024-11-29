// Function to toggle the navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

// Function to adjust the top margin of the next section based on the navbar height
function adjustNextSectionPadding() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    const nextSection = document.querySelector('.signup-section');
    nextSection.style.marginTop = `0`;
    nextSection.style.paddingTop = `${navbarHeight}px`;
}

// Call the function on page load
window.addEventListener('load', adjustNextSectionPadding);

// Optionally, call it again if the window is resized (useful for responsiveness)
window.addEventListener('resize', adjustNextSectionPadding);


const activityList = document.querySelector('.activity-list');
let autoScrollInterval;

// Function to duplicate the items once the scroll reaches the end
function duplicateActivities() {
    const items = document.querySelectorAll('.activity-item');
    items.forEach(item => {
        const clonedItem = item.cloneNode(true); // Clone each item
        activityList.appendChild(clonedItem); // Append the cloned item to the end
    });
}

// Function to auto-scroll the activity list
function autoScroll() {
    activityList.scrollLeft += 1; // Scroll by 1px every 10ms

    // Check if the user has reached the end of the container
    if (activityList.scrollLeft + activityList.clientWidth >= activityList.scrollWidth) {
        duplicateActivities(); // Duplicate the activities when the end is reached
    }
}

// Function to start auto-scrolling
function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 10); // Adjust the scroll speed by changing the interval
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval); // Clear the interval to stop scrolling
}

// Start the auto-scrolling when the page loads
startAutoScroll(); // Starts scrolling automatically

// Select all the activity items to listen for hover events
const activityItems = document.querySelectorAll('.activity-item');

// Loop through each activity item and add event listeners for hover behavior
activityItems.forEach(item => {
    // Stop scrolling when hovering over an activity item
    item.addEventListener('mouseenter', () => {
        stopAutoScroll();
    });
    
    // Restart scrolling when the mouse leaves the activity item
    item.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
});




