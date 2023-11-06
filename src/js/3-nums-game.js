const input1 = document.querySelector("input[name='number1']")
const input2 = document.querySelector("input[name='number2']")
const input3 = document.querySelector("input[name='number3']")
const result = document.querySelector(".number_result")

let number1 = "";
let number2 = "";
let number3 = "";
let maxNumber = "";

input1.addEventListener("change", handleInput1)
input2.addEventListener("change", handleInput2)
input3.addEventListener("change", handleInput3)

function checkResult() {
    if(isNaN(number1) === true || isNaN(number2) === true || isNaN(number3) === true) {
      alert("Введіть три числа")
      result.textContent = ""
    } else {
      result.textContent = ""
    }
    if (number1 && number2 && number3){
      maxNumber = Math.max(number1, number2, number3)
      result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`
    }else {
      result.textContent = ""
    }
}

function handleInput1(event) {
  number1 = event.currentTarget.value
  checkResult()
}

function handleInput2(event) {
  number2 = event.currentTarget.value
  checkResult()
}

function handleInput3(event) {
  number3 = event.currentTarget.value
  checkResult()
}

// allInput.addEventListener("change", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = event.target.elements
//   const number1 = formData.number1.value
//   const number2 = formData.number2.value
//   const number3 = formData.number3.value  
//   if(event.key === "Enter" && isNaN(number1) === false && isNaN(number2) === false && isNaN(number3) === false && number1 && number2 && number3) {
//    const maxNumber = Math.max(number1, number2, number3)
//    result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`
//   } else {
//     alert("Введіть три числа")
//     result.textContent = ""
//   }
//   form.reset();
// }