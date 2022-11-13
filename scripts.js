//functions for basic arithmetic
function add(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Only type numbers, plz";
  } else return a + b;
}

function subtract(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Only type numbers, plz";
  } else return a - b;
}

function multiply(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Only type numbers, plz";
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Only type numbers, plz";
  } else if (b == 0) {
    return "Impossible!";
  } else return a / b;
}
//function to coallesce arithmetic function into one place
function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else return "Operator Error";
}

//console.log(operate("-", 0, 3));

const display = document.querySelector(".display");

// const one = document.getElementById("one");
// const two = document.getElementById("two");

let displayValue;
//functions to display numbers clicked in display
//WILL ADD SOMETHING TO STORE NUMBER VALUE!!!!
function displayZero() {
  display.textContent = 0;
}
function displayOne() {
  display.textContent = 1;
  displayValue = 1;
}
function displayTwo() {
  display.textContent = 2;
  displayValue = 2;
}
function displayThree() {
  display.textContent = 3;
}
function displayFour() {
  display.textContent = 4;
}
function displayFive() {
  display.textContent = 5;
}
function displaySix() {
  display.textContent = 6;
}
function displaySeven() {
  display.textContent = 7;
}
function displayEight() {
  display.textContent = 8;
}
function displayNine() {
  display.textContent = 9;
}
function displayPlus() {
  display.textContent = "+";
}
function displayMinus() {
  display.textContent = "-";
}
function displayMultiply() {
  display.textContent = "*";
}
function displayDivide() {
  display.textContent = "/";
}
function displayClear() {
  display.textContent = "";
}

console.log(displayValue);
