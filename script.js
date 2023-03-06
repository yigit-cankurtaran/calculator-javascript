// select elements
const screen = document.querySelector(".screen");
const keys = document.querySelector(".keys");

let prevValue = "";
let operator = "";
let currentValue = "";

// handle number button clicks
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const value = key.value;

    if (value === "clear") {
      prevValue = "";
      operator = "";
      currentValue = "";
      screen.innerText = "";
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      prevValue = currentValue;
      currentValue = "";
      operator = value;
    } else if (value === "=") {
      const result = calculate(
        parseFloat(prevValue),
        parseFloat(currentValue),
        operator
      );
      screen.innerText = result;
      prevValue = result;
      currentValue = "";
      operator = "";
    } else {
      currentValue += value;
      screen.innerText = currentValue;
    }
  }
});

// calculate function
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}
