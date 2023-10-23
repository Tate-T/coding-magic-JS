const form = document.querySelector(".number_form")
const button = document.querySelector(".number_button")
const result = document.querySelector(".number_result")

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formData = event.target.elements
  const number1 = formData.number1.value
  const number2 = formData.number2.value
  const number3 = formData.number3.value  
  if(isNaN(number1) === false && isNaN(number2) === false && isNaN(number3) === false && number1 && number2 && number3) {
   const maxNumber = Math.max(number1, number2, number3)
   result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`
  } else {
    alert("Введіть три числа")
    result.textContent = ""
  }
  form.reset();
}