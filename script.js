let num1;
let num2;
let operator;

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
