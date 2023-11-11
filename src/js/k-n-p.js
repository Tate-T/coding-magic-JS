const choices = ["rock", "scissors", "paper"];
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const resultEl = document.querySelector(".k-n-p__result");
const comScore = document.querySelector(".k-n-p__computer-score");
const yourScore = document.querySelector(".k-n-p__your-score");
const scoreBtn = document.querySelector(".k-n-p__computer-choose");
let result = 0;
let yourChoice;

rock.addEventListener("click", () => {
    yourChoice = "rock";
});
scissors.addEventListener("click", () => {
    yourChoice = "scissors";
});
paper.addEventListener("click", () => {
    yourChoice = "paper";
});
scoreBtn.addEventListener("click", calculateResult);

function calculateResult() {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    if (yourChoice === computerChoice) {
        resultEl.textContent = "Нічия!";
        resultEl.style.color = "black";
    } else if (
        (yourChoice === "rock" && computerChoice === "scissors") ||
        (yourChoice === "scissors" && computerChoice === "paper") ||
        (yourChoice === "paper" && computerChoice === "rock")
    ) {
        resultEl.textContent = "Ви виграли!";
        resultEl.style.color = "#039900";
        yourScore.textContent = `Ви-${++result}`;
    } else {
        resultEl.textContent = "Комп’ютер виграв!";
        resultEl.style.color = "#900";
        comScore.textContent = `Комп'ютер-${++result}`;
    }

    yourChoice = null;
}