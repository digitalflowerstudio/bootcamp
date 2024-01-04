console.log("Start: Warten für 3 Sekunden..");

const showText = () => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet!");
};

setTimeout(showText, 3000);

let counter = 11;
let second = setInterval(function () {
  counter--;
  console.log(counter);
  if (counter <= 1) {
    clearInterval(second);
    console.log("Endlich Feierabend!");
  }
}, 1000);
