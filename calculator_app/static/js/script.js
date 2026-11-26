
let display = document.getElementById("display");

// Add numbers and operators
function appendValue(value) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last entered character
function deleteLast() {
    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate the result
function calculate() {

    try {

        let expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Evaluate the mathematical expression
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        // Handle invalid results
        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}
