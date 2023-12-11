const meikeHeight = 168;
const meikeAge = 34;

const johnHeight = 168;
const johnAge = 34;

function calcWinner(age, height) {
  x = age * 5 + height;
  return x;
}

const meike = calcWinner(meikeAge, meikeHeight);
console.log("Score Meike " + meike);

const john = calcWinner(johnAge, johnHeight);
console.log("Score John " + john);

if (john > meike) {
  console.log("John wins! Their points are " + john);
} else if (meike > john) {
  console.log("Meike wins! Their points are" + meike);
} else {
  console.log("It's a draw!");
}
