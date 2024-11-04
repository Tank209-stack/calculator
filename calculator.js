
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let firstNumber = null;
let operator = "";
let secondNumber = null;
let buttons = document.querySelectorAll("button");
let hasDecimal = false
let display = document.querySelector(".display");
let displayValue = [];

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) {
                return "Not a valid number";
            }
            return divide(a, b);
        default:
            return null;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
            // Handles . button
        if (value === "."){
            if(!hasDecimal){
                displayValue.push(value)
                display.textContent = displayValue.join('')
                hasDecimal = true
            }
            return;
        }

        // If the button is a number
        if (!isNaN(value)) {
            displayValue.push(value);
            display.textContent = displayValue.join('');
        }

        // If the button is an operator
        if (['+', '-', '*', '/'].includes(value)) {
            if (firstNumber === null) {
                firstNumber = parseFloat(displayValue.join(''));
            } else if(displayValue.length > 0){
                secondNumber = parseFloat(displayValue.join(''));
                firstNumber = calculate(firstNumber, operator, secondNumber);
                display.textContent = firstNumber; // Show result after previous operation
            }
            operator = value; // Set the current operator
            displayValue = []; // Clear the display value for the next number
        }

        // Handle equals button
        if (value === "=") {
            if (firstNumber !== null && operator && displayValue.length > 0) {
                secondNumber = parseFloat(displayValue.join(''));
                const result =Math.round(calculate(firstNumber, operator, secondNumber));
                display.textContent = result; // Show result
                firstNumber = result; // Set firstNumber to result for further calculations
                operator = ""; // Reset operator
                displayValue = []; // Clear display value
            }
        }

        
        // Handle AC button
        if (value === "AC") {
            firstNumber = null;
            operator = "";
            secondNumber = null;
            displayValue = [];
            display.textContent = ""; // Clear the display
        }
        // Handle C button
            if ( value === "C"){
                    displayValue.pop()
                    display.textContent = displayValue.join('')
            }
        
    });

});