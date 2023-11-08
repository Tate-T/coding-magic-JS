const input = document.querySelector(".year-game__input");
const gameBtn = document.querySelector(".year-game__btn");
const answer = document.querySelector(".year-game__text");

gameBtn.addEventListener("click", () => {
    if(input.value % 4 === 0){
        answer.textContent = "Ви народилися у високосний рік!";
        answer.style.color = "#039900";
    }else{
        answer.textContent = "Ви народилися не у високосний рік!";
        answer.style.color = "#900";
    }
})