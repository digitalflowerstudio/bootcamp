const boxes = document.getElementsByClassName("card");
console.log(boxes);

const red = "red";
const blue = "blue";
const orange = "orange";
const purple = "purple";
const black = "black";

const changeColor = (boxIndex, color) => {
  if (boxIndex >= 0 && boxIndex < boxes.length) {
    boxes[boxIndex].style.backgroundColor = color;
  }
};

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (event) {
    const boxIndex = Array.from(boxes).indexOf(event.target);

    switch (boxIndex) {
      case 0:
        changeColor(boxIndex, red);
        break;
      case 1:
        changeColor(boxIndex, blue);
        break;
      case 2:
        changeColor(boxIndex, orange);
        break;
      case 3:
        changeColor(boxIndex, purple);
        break;
      case 4:
        changeColor(boxIndex, black);
        break;
      default:
        break;
    }
  });
}
