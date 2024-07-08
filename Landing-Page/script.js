// Add an event listener to the window object for the scroll event
window.addEventListener('scroll', function () {
    // Select the <header> element in the document
    const header = document.querySelector('header');

    // Check if the vertical scroll position (Y-axis) of the window is greater than 0
    if (window.scrollY > 0) {
        // If scrolled down (not at the top), change the background color of the header to '#555'
        header.style.backgroundColor = '#3880e7'; // Change background color on scroll
    } else {
        // If scrolled to the top (vertical scroll position is 0), revert the background color of the header to '#333'
        header.style.backgroundColor = '#333'; // Revert to original color when scrolled to the top
    }
});
