const countDiv = document.getElementById("count");
const message = document.querySelector(".message");

let counter = 11;
let countdown = () => {
  let tick = setInterval(() => {
    counter--;
    countDiv.textContent = `${counter}`;
    if (counter <= 0) {
      clearInterval(tick);
      message.style.animation = "fadeOut 1s ease-out forwards";
    }
  }, 1000);
};

countdown();
