const input = document.querySelector("time-calculator__input");
const btn = document.querySelector("time-calculator__btn");
const answer = document.querySelector("time-calculator__answer");

btn.addEventListener("click", () => {
  const seconds = parseInt(input.value);
  if (!isNaN(seconds)) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    let result = "";
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const remainderMinutes = minutes % 60;
      if (hours >= 24) {
        const days = Math.floor(hours / 24);
        const remainderHours = hours % 24;
        result = `${days} дн.`;
        if (remainderHours > 0) {
          result += `${remainderHours}:${remainderMinutes
            .toString()
            .padStart(2, "0")}:${remainderSeconds.toString().padStart(2, "0")}`;
        } else {
          result += `${remainderMinutes}:${remainderSeconds
            .toString()
            .padStart(2, "0")}`;
        }
      } else {
        result = `${hours}:${remainderMinutes
          .toString()
          .padStart(2, "0")}:${remainderSeconds.toString().padStart(2, "0")}`;
      }
    } else {
      result = `0:${remainderSeconds.toString().padStart(2, "0")}`;
    }
    answer.textContent = result;
  }
});
