let currentNum = "";
let previousNum = "";
let operator = "";
let answer = "";

const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");
const clear = document.querySelector(".clear-btn");
const equals = document.querySelector(".equals");
const numbers = document.querySelectorAll(".calc-btn");
const operators = document.querySelectorAll(".operator");

//functions to display numbers clicked in display
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

//function to clear display
clear.addEventListener("click", function (e) {
  currentDisplay.textContent = "";
  currentNum = "";
  operator = "";
  previousNum = "";
  answer = "";
});

//function to make operator store in variable and display
operators.forEach((op) =>
  op.addEventListener("click", function (e) {
    operator = e.target.textContent;
    currentDisplay.textContent = operator;
    previousNum = currentNum;
    currentNum = "";
  })
);

//evaluates answer
equals.addEventListener("click", function (e) {
  answer = operate(Number(previousNum), operator, Number(currentNum));

  currentDisplay.textContent = Math.round(answer * 1000000) / 1000000;
  currentNum = answer;
});

//function to coallesce arithmetic function into one place
function operate(num1, op, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  } else return "Operator Error";
}

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

console.log(previousNum);
console.log(operator);
console.log(currentNum);
