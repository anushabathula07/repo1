// Select elements
const countDisplay = document.getElementById('count');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

// Initialize the counter variable
let count = 10;

// Function to update the display and color
function updateDisplay() {
    countDisplay.textContent = count;
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
}

// Add event listeners
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();
