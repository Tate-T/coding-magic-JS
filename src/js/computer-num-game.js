const input = document.querySelector(".num-game__input");
const numBtn = document.querySelector(".num-game__btn");
const answer = document.querySelector(".num-game__text");
let min = 1;
let max = 2;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

numBtn.addEventListener("click", () => {
    const num = parseInt(input.value);

    if(num === randomNum){
        answer.textContent = `Вітаю, ви вгадали число! ${num} `;
        answer.style.color = "#039900";
    }else{
        answer.textContent = `Ви програли, комп’ютер загадав ${randomNum}`;
        answer.style.color = "#900";
    }
})