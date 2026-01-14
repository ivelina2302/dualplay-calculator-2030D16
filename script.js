// Get the display element so we can update it
const display = document.getElementById('display');

// 1. Adds numbers or operators to the screen
function appendToDisplay(input) {
    // If there's an error on screen, clear it before starting new
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

// 2. Clears everything (The AC button)
function clearDisplay() {
    display.value = "";
}

// 3. Deletes just the last character (The DEL button)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// 4. The math logic
function calculate() {
    try {
        // eval() takes a string like "2+2" and turns it into the number 4
        // We use .replace to make sure visual symbols like '×' work as '*'
        let result = eval(display.value.replace('×', '*').replace('÷', '/'));
        
        // Check if result is a valid number (handles things like 1/0)
        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
