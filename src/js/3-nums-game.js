const input1 = document.querySelector("input[name='number1']"); 
const input2 = document.querySelector("input[name='number2']"); 
const input3 = document.querySelector("input[name='number3']"); 
const result = document.querySelector(".number_result"); 
 
let number1 = ""; 
let number2 = ""; 
let number3 = ""; 
let maxNumber = ""; 
 
input1.addEventListener("change", handleInput1); 
input2.addEventListener("change", handleInput2); 
input3.addEventListener("change", handleInput3); 
 
function checkResult() { 
  if ( 
    isNaN(number1) === true || 
    isNaN(number2) === true || 
    isNaN(number3) === true 
  ) { 
    alert("Введіть три числа"); 
    result.textContent = "Найбільше число, яке ви ввели - буде тут"; 
  } else if (number1 && number2 && number3) { 
    maxNumber = Math.max(number1, number2, number3); 
    result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}` 
  } else { 
    result.textContent = "Найбільше число, яке ви ввели - буде тут"; 
  } 
} 
 
function handleInput1(event) { 
  number1 = event.currentTarget.value; 
  checkResult(); 
} 
 
function handleInput2(event) { 
  number2 = event.currentTarget.value; 
  checkResult(); 
} 
 
function handleInput3(event) { 
  number3 = event.currentTarget.value; 
  checkResult(); 
}