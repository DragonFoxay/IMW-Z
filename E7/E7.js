$(document).ready(function () {
    var isBoxAnimated = false;

    // Function to generate a random HSL color with high saturation
    function randomHighSaturationColor() {
        var hue = Math.floor(Math.random() * 360);
        var saturation = 90;
        var lightness = 50;
        return "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    }

    // Effects - Fade Box
    $('#fadeBtn').click(function () {
        $('.box').fadeOut(1000).fadeIn(1000);
    });

    // Effects - Slide Box
    $('#slideBtn').click(function () {
        $('.box').slideUp(1000).slideDown(1000);
    });

    // Effects - Animate Box
    $('#animateBtn').click(function () {
        if (!isBoxAnimated) {
            $('.box').animate({
                width: '200px',
                height: '200px',
                opacity: 0.5,
                borderRadius: '50%'
            }, 1000);
            isBoxAnimated = true;
        } else {
            $('.box').stop().animate({
                width: '100px',
                height: '100px',
                opacity: 1,
                borderRadius: '10px'
            }, 1000);
            isBoxAnimated = false;
        }
    });

    // Events - Click
    $('#clickBtn').click(function () {
        alert('Button clicked!');
    });

    // Events - Hover
    $('#hoverBtn').hover(function () {
        alert('Hovered over the button, Hi!');
    });

    // Events - Keyboard Events
    $(document).keydown(function (event) {
        console.log('Key pressed: ' + event.key);
    });

    // Manipulation - Append Box
    $('#addBoxBtn').click(function () {
        var newBox = $('<div class="box"></div>');
        $('.container').append(newBox);
        newBox.draggable(); // Make the new box draggable
    });

    // Manipulation - Remove Box
    $('#removeBtn').click(function () {
        $('.box:last').remove();
    });

    // Make all existing boxes draggable
    $('.box').draggable();

    // Change color of the box
    $("#colorBtn").click(function () {
        var colors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $(".box").css("background-color", randomHighSaturationColor());
    });

    // Change background color of the page
    $("#changeBgBtn").click(function () {
        var colors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $("body").css("background", randomColor);
    });
});
