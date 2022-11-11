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
