const liste = document.querySelector("#myList");
const first = liste.firstElementChild.innerHTML;
const last = liste.lastElementChild.innerHTML;
const next = liste.firstElementChild.nextElementSibling.innerHTML;
const prev = liste.lastElementChild.previousElementSibling.innerHTML;
const output = document.getElementById("output");

let displayContent = (element) => {
  output.textContent = element;
};

const ButtonGrp = document.querySelector(".unten").children;
const ButtonArr = Array.from(ButtonGrp);

ButtonArr.forEach((button) => {
  button.addEventListener("click", function (event) {
    const buttonIndex = ButtonArr.indexOf(event.target);

    switch (buttonIndex) {
      case 0:
        displayContent(first);
        break;
      case 2:
        displayContent(last);
        break;
      case 4:
        displayContent(next);
        break;
      case 6:
        displayContent(prev);
        break;
      default:
        break;
    }
  });
});
