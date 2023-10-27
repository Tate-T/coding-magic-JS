const input = document.querySelector(".time-calculator__input");
const button = document.querySelector(".time-calculator__btn");
const answer = document.querySelector(".time-calculator__answer");

button.addEventListener("click", () => {
  const seconds = parseInt(input.value);
  if (!isNaN(seconds)) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    let result = "";
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (hours >= 24) {
        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;
        result = `${days} дн.`;
        if (remainingHours > 0) {
          result += `${remainingHours}:${remainingMinutes
            .toString()
            .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
        } else {
          result += `${remainingMinutes}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
        }
      } else {
        result = `${hours}:${remainingMinutes
          .toString()
          .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
      }
    } else {
      result = `0:${remainingSeconds.toString().padStart(2, "0")}`;
    }
    answer.textContent = result;
  }
});
