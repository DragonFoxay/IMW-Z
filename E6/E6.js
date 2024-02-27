// Background color 1
document.addEventListener('DOMContentLoaded', function () {
    var green = document.getElementById('green');
    var plum = document.getElementById('plum');
    var blue = document.getElementById('blue');
    var interactionContainer = document.getElementById('interactionContainer');

    green.addEventListener('click', function () {
        interactionContainer.style.backgroundColor = getComputedStyle(green).backgroundColor;
    });

    plum.addEventListener('click', function () {
        interactionContainer.style.backgroundColor = getComputedStyle(plum).backgroundColor;
    });

    blue.addEventListener('click', function () {
        interactionContainer.style.backgroundColor = getComputedStyle(blue).backgroundColor;
    });
});

// Repeating text 2
document.addEventListener('DOMContentLoaded', function () {
    var loopContainer = document.getElementById('loopContainer');

    // Number of times to repeat the text
    var repeatCount = 10;

    // Text to be repeated
    var textToRepeat = ' Repeating Text ';  // Change this text as needed

    // Use a for loop to add repeating text to the container
    for (var i = 0; i < repeatCount; i++) {
        // Create a new span element
        var spanElement = document.createElement('span');

        // Set the text content of the span
        spanElement.textContent = textToRepeat + (i + 1 + "");  // Add 1 to start counting from 1

        // Append the span to the loopContainer
        loopContainer.appendChild(spanElement);
    }
});

// Condition color changer 3
document.addEventListener('DOMContentLoaded', function () {
    const square = document.getElementById('square');

    square.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'rgb(255, 166, 0)';
    });

    square.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'lightsalmon';
    });
});

// Size increasing text 4
document.addEventListener('DOMContentLoaded', function () {
    var increaseText = document.getElementById('increaseText');

    // Initial font size
    var fontSize = 10;  // Adjust this value as needed

    // Set interval to increase font size every second (you can adjust the interval)
    var intervalId = setInterval(function () {
        // Increase font size
        fontSize += 2;  // Adjust the increment as needed

        // Set the new font size
        increaseText.style.fontSize = fontSize + 'px';

        // Stop the interval after a certain font size (optional)
        if (fontSize >= 80) {
            clearInterval(intervalId);
        }
    }, 1000);  // Change the interval duration in milliseconds as needed
});

// Number of characters 5
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    var inputText = document.getElementById('inputText');
    var textLength = document.getElementById('text-length');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the current value of the input field
        var inputValue = inputText.value;

        // Update the text length display
        textLength.textContent = 'Number of characters: ' + inputValue.length;
    });
});

// Message to console 6
console.log("Printing a message to the console so it isn't lonely :)");