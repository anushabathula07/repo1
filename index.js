// Select elements

let count = 0; // Initialize the counter variable
const countDisplay = document.getElementById("count"); // Get the element that displays the count
const MAX_COUNT = 10;
const MIN_COUNT = 0;

function updateDisplay() {
    countDisplay.textContent = count; // Update the display with the current count
}

function increase() {
    if (count < MAX_COUNT) {
        count++; // Increment only if less than 10
        updateDisplay();
    }
}

function decrease() {
    if (count > MIN_COUNT) {
        count--; // Decrement only if greater than 0
        updateDisplay();
    }
}

function reset() {
    count = 0; // Set count to 0
    updateDisplay();
}

// Initial display update
updateDisplay();
