const zeit = document.querySelector(".zeit");
let counter = 100;
let countdown = () => {
  let tick = setInterval(() => {
    counter--;
    zeit.textContent = `${counter}%`;
    if (counter <= 0) {
      clearInterval(tick);
    }
  }, 20);
};
const button = document
  .querySelector("#btn")
  .addEventListener("click", countdown);
