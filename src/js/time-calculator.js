// const input = document.querySelector(".time-calculator__input");
// const button = document.querySelector(".time-calculator__btn");
// const answer = document.querySelector(".time-calculator__answer");

// button.addEventListener("click", () => {
//   const seconds = parseInt(input.value);
//   if (!isNaN(seconds)) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     let result = "";
//     if (minutes >= 60) {
//       const hours = Math.floor(minutes / 60);
//       const remainingMinutes = minutes % 60;
//       if (hours >= 24) {
//         const days = Math.floor(hours / 24);
//         const remainingHours = hours % 24;
//         result = `${days} дн.`;
//         if (remainingHours > 0) {
//           result += `${remainingHours}:${remainingMinutes
//             .toString()
//             .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
//         } else {
//           result += `${remainingMinutes}:${remainingSeconds
//             .toString()
//             .padStart(2, "0")}`;
//         }
//       } else {
//         result = `${hours}:${remainingMinutes
//           .toString()
//           .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
//       }
//     } else {
//       result = `0:${remainingSeconds.toString().padStart(2, "0")}`;
//     }
//     answer.textContent = result;
//   }
// });

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");

btn.addEventListener("click", () => {
  const minutes = parseInt(input.value);
  if (isNaN(minutes)) {
    answer.textContent = "Невірне введення";
    answer.style.color = "#900";
    return;
  }

  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const mins = minutes % 60;

  let result = "";
  if (days > 0) {
    result += `${days}дн. `;
  }
  if (hours < 10) {
    result += `0${hours}:`;
  } else {
    result += `${hours}:`;
  }
  if (mins < 10) {
    result += `0${mins}:`;
  } else {
    result += `${mins}:`;
  }

  answer.textContent = result.slice(0, -1);
});
