const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultEl = document.getElementById("result");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");

let result;

let number1;
let number2;

num1.addEventListener("input", () => {
    number1 = Number(num1.value);
});

num2.addEventListener("input", () => {
    number2 = Number(num2.value);
});

plus.addEventListener("click", () => {
  result = number1 + number2;
});

minus.addEventListener("click", () => {
  result = number1 - number2;
});

multiply.addEventListener("click", () => {
  result = number1 * number2;
});

divide.addEventListener("click", () => {
  if (number1 !== 0 && number2 !== 0) {
    result = number1 / number2;
  } else {
    resultEl.textContent = "ERROR";
  }
});

equal.addEventListener("click", () => {
  resultEl.textContent = result;
});
