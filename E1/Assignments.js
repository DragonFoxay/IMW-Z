$(document).ready(function () {
    // Function to generate a random number between min and max
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to update position of the orb
    function updatePosition($orb) {
        // Get current position and velocity of the orb
        var positionX = parseInt($orb.css('left'));
        var positionY = parseInt($orb.css('top'));
        var velocity = $orb.data("velocity");

        // Update position based on velocity
        positionX += velocity.x;
        positionY += velocity.y;

        // Get dimensions of the main container
        var containerWidth = $(".main-container").width();
        var containerHeight = $(".main-container").height();

        // Check collision with horizontal walls
        if (positionY <= 0 || positionY + $orb.height() >= containerHeight) {
            velocity.y *= -1; // Reverse direction
        }

        // Check collision with vertical walls
        if (positionX <= 0 || positionX + $orb.width() >= containerWidth) {
            velocity.x *= -1; // Reverse direction
        }

        // Set new position
        $orb.css({
            top: positionY,
            left: positionX
        });

        // Update velocity data
        $orb.data("velocity", velocity);

        // Call the function recursively
        requestAnimationFrame(function () {
            updatePosition($orb);
        });
    }

    // Function to initialize orb
    function initializeOrb($orb) {
        // Get dimensions of the main container
        var containerWidth = $(".main-container").width();
        var containerHeight = $(".main-container").height();

        // Set random position within the container
        var positionX = randomInRange(0, containerWidth - $orb.width());
        var positionY = randomInRange(0, containerHeight - $orb.height());
        $orb.css({
            top: positionY,
            left: positionX
        });

        // Set random velocity
        var velocityX = randomInRange(-3, 3); // Change speed as needed
        var velocityY = randomInRange(-3, 3); // Change speed as needed
        $orb.data("velocity", { x: velocityX, y: velocityY });
    }

    // Make orbs draggable and throwable
    $(".orb").draggable({
        containment: "parent", // Restrict dragging within the parent container
        start: function (event, ui) {
            // Stop the orb animation when dragged
            $(this).data("velocity", { x: 0, y: 0 });
        },
        drag: function (event, ui) {
            // Get the velocity of the orb based on the drag distance
            var deltaX = ui.position.left - ui.originalPosition.left;
            var deltaY = ui.position.top - ui.originalPosition.top;
            $(this).data("velocity", { x: deltaX / 10, y: deltaY / 10 });
        },
        stop: function (event, ui) {
            // Start the animation when dragging stops
            updatePosition($(this));
        }
    });

    // Initialize and start animation for each orb
    $(".orb").each(function () {
        initializeOrb($(this));
        updatePosition($(this));
    });

    // Event listener for refresh button
    $(".refresh-button").click(function () {
        // Remove previous orbs
        $(".orb").remove();

        // Add new orbs
        $("<div class='orb' id='orb1'></div>").appendTo(".main-container");
        $("<div class='orb' id='orb2'></div>").appendTo(".main-container");

        // Make new orbs draggable and start animation
        $(".orb").draggable({
            containment: "parent",
            start: function (event, ui) {
                $(this).data("velocity", { x: 0, y: 0 });
            },
            drag: function (event, ui) {
                var deltaX = ui.position.left - ui.originalPosition.left;
                var deltaY = ui.position.top - ui.originalPosition.top;
                $(this).data("velocity", { x: deltaX / 10, y: deltaY / 10 });
            },
            stop: function (event, ui) {
                updatePosition($(this));
            }
        });

        $(".orb").each(function () {
            initializeOrb($(this));
            updatePosition($(this));
        });
    });
});
