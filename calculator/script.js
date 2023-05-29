var display = document.getElementById("display");
var buttons = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var calculateButton = document.getElementById("calculate");
var clearButton = document.getElementById("clear");

// Add event listeners to number buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        display.value += this.textContent;
    });
}

// Add event listeners to operator buttons
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        display.value += this.textContent;
    });
}

// Calculate the expression
calculateButton.addEventListener("click", function () {
    try {
        var expression = display.value;
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
});

// Clear the display
clearButton.addEventListener("click", function () {
    display.value = "";
});

// Handle keyboard events
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    if (!isNaN(keyPressed) || keyPressed === ".") {
        display.value += keyPressed;
    } else {
        if (
            keyPressed === "+" ||
            keyPressed === "-" ||
            keyPressed === "*" ||
            keyPressed === "/"
        ) {
            display.value += keyPressed;
        } else if (
            keyPressed === "%" ||
            keyPressed === "Enter" ||
            keyPressed === "="
        ) {
            try {
                var expression = display.value;
                var result = eval(expression);
                display.value = result;
            } catch (error) {
                display.value = "Error";
            }
        } else if (keyPressed === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else if (
            keyPressed === "Escape" ||
            keyPressed === "c" ||
            keyPressed === "C"
        ) {
            display.value = "";
        } else {
            alert("Only numbers and operators are allowed");
        }
    }
});
