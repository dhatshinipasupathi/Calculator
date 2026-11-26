# Calculator
Ex.No:06 JavaScript Calculator
Date:
AIM
To design and develop a simple calculator using HTML, CSS, and JavaScript to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

ALGORITHM
Create an HTML page to design the calculator interface.
Create a display field to show the numbers and calculation results.
Create buttons for digits from 0 to 9 and arithmetic operators.
Use CSS to arrange and style the calculator buttons and display.
Write JavaScript functions to handle button clicks.
Store the entered numbers and operators in the calculator display.
Use JavaScript to evaluate the arithmetic expression.
Display the calculated result on the calculator screen.
Provide a clear button to reset the calculator.
Test the calculator with different arithmetic operations.
## PROGRAM:
### HTML:

{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Smart Calculator</title>

    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>

<body>

    <div class="calculator">

        <div class="header">
            <h2>Smart Calculator</h2>
            <p>Simple & Easy Calculations</p>
        </div>

        <input type="text" id="display"
               placeholder="0" readonly>

        <div class="buttons">

            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="delete" onclick="deleteLast()">DEL</button>
            <button class="operator" onclick="appendValue('/')">÷</button>
            <button class="operator" onclick="appendValue('*')">×</button>

            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button class="operator" onclick="appendValue('-')">−</button>

            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button class="operator" onclick="appendValue('+')">+</button>

            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button class="equal" onclick="calculate()">=</button>

            <button class="zero" onclick="appendValue('0')">0</button>
            <button onclick="appendValue('.')">.</button>

        </div>

        <p class="footer">Designed with HTML, CSS & JavaScript</p>

    </div>

    <script src="{% static 'js/script.js' %}"></script>

</body>
</html>
### JS:

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

### OUTPUT:
<img width="1120" height="550" alt="Screenshot 2026-11-26 150507" src="https://github.com/user-attachments/assets/94045dd5-a314-4add-bf0b-9f075b902b68" />

### RESULT:
Thus, a JavaScript-based calculator was successfully designed and developed to perform basic arithmetic operations using HTML, CSS, and JavaScript.
