const digits = document.getElementsByClassName("digit");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
let num1;
let num2;
let operator;
let displayValue = 0;

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", function() {
        displayValue = displayValue*10 + parseInt(digits[i].textContent);
        screen.textContent = displayValue;
    });
}
clear.addEventListener("click", function() {
    displayValue = 0;
    screen.textContent = displayValue;
});


function add(a,b) {
	return a + b;
};
function subtract(a,b) {
  return a - b;
};

function multiply(a,b) {
  return a * b
};

function divide(a,b) {
    return a / b
}

function operate(num1, num2, operator) {
    if (operator=="add") {
        return add(num1,num2);
    }
    else if (operator=="subtract") {
        return subtract(num1,num2);
    }
    else if (operator=="multiply") {
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}
