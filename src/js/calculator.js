// inputs
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("equal");
// symbols
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiply = document.getElementById("*");
const divide = document.getElementById("/");
const equal = document.getElementById("=");

let sum;

plus.addEventListener("click", () => {
    sum = parseFloat(num1.value) + parseFloat(num2.value);
});

minus.addEventListener("click", () => {
    sum = parseFloat(num1.value) - parseFloat(num2.value);
});

multiply.addEventListener("click", () => {
    sum = parseFloat(num1.value) * parseFloat(num2.value);
});

divide.addEventListener("click", () => {
   if(parseFloat(num1.value) !== 0 && parseFloat(num2.value) !== 0){
       sum = parseFloat(num1.value) / parseFloat(num2.value);
   }else{
    result.textContent = "ERROR"
   }
});

equal.addEventListener("click", () => {
    result.textContent = sum;
});