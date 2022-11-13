let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");
const clear = document.querySelector(".clear-btn");
const equals = document.querySelector(".equals");
const numbers = document.querySelectorAll(".calc-btn");
const operators = document.querySelectorAll(".operator");
//functions to display numbers clicked in display
//WILL ADD SOMETHING TO STORE NUMBER VALUE!!!!

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentNum;
  })
);

function handleNumber(num) {
  if (currentNum.length < 10) {
    currentNum += num;
  }
}

clear.addEventListener("click", function (e) {
  currentDisplay.textContent = "";
  currentNum = "";
});

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
