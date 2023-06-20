const digits = document.getElementsByClassName("digit");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const operators = document.getElementsByClassName("operator");

let num1;
let num2;
let operator = "";
let displayValue = 0;
let numToggle = false;

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", function() {
        displayValue = displayValue*10 + parseInt(digits[i].textContent);
        screen.textContent = displayValue;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if(operator == "") {
            num1 = displayValue;
            displayValue = 0;
            operator = operators[i].textContent;
        }
        else {
            num2 = displayValue; 
            displayValue = operate(num1, num2, operator);
            screen.textContent = displayValue;
            num1 = displayValue;
            displayValue = 0;
            operator = operators[i].textContent;

        }
    });
}

clear.addEventListener("click", function() {
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    operator = "";
    screen.textContent = displayValue;
});

equals.addEventListener("click", function() {
    num2 = displayValue;
    displayValue = operate(num1, num2, operator);
    screen.textContent = displayValue;
    operator = "";
});




function add(a,b) {
	return a + b;
};
function subtract(a,b) {
  return a - b;
};

function multiply(a,b) {
  return a * b;
};

function divide(a,b) {
    if(b==0) {
        return "Invalid";
    }
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator=="+") {
        return add(num1,num2);
    }
    else if (operator=="-") {
        return subtract(num1,num2);
    }
    else if (operator=="X") {
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}
