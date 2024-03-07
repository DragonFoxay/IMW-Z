// Function to position the circle half off the screen
function positionCircle() {
    const containerWidth = $('.container').width(); // Get container width
    const containerHeight = $('.container').height(); // Get container height
    const circleSize = 100; // Circle size
    const offset = 50; // Offset to position the circle half off the screen

    // Calculate position for the circle
    const circleTop = -offset;
    const circleRight = containerWidth - offset - circleSize;

    // Set position for the circle using jQuery
    $('.circle').css({
        top: circleTop + 'px',
        right: circleRight + 'px'
    });
}

// Call the function to position the circle when the DOM has fully loaded
$(document).ready(function () {
    positionCircle();
});
