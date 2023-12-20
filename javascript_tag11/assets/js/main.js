// aufbau for loop

//for(statement1; statement2; statement3) {code}
// for(start/end; condition; after/before){code}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// achtung vor infinity loop

for (let i = 1; i <= 3; i++) {
  console.log("Außerhalb der Schleife");
  for (let j = 1; j <= 10; j++) {
    console.log(i);
  }
}

// for loop mit array

let country = ["germany", "england", "spain", "italy"];

for (let i = 0; i < country.length; i++) {
  console.log(i);
  console.log(country[i].toUpperCase());
}

// neue version = "for of" schleife => funktioniert nur mit array

let farben = ["grün", "rot", "blau", "gelb"];
for (let farbe of farben) {
  console.log(farbe);
}

const text = "Wurst ist lecker!";
for (let zeichen of text) {
  console.log(zeichen);
}

// verschiedene loops
// while = alt und wird kaum benutzt, algo wird innerhalb des scopes geschrieben

let doNumber = 0;
do {
  console.log("doNumber", doNumber);
  doNumber++;
} while (doNumber <= 10);

let number = 0;
while (number < 8) {
  number++;
  console.log(number);
}

let superArray = [10, 20, 30];
for (let i = 0; i < superArray.length; i++) {
  console.log(superArray[i] + 2);
}

for (let i of superArray) {
  console.log(i * 2);
}

const multiMap = superArray.map((num) => {
  return num * 2;
});

console.log(multiMap);

let numArr = [23, 1, 5, 67, 8];
numArr.sort((a, b) => {
  return a - b;
});

const newString = numArr.join("");
const stringArr = newString.split("");
stringArr.sort();

const neuNum = String(numArr);
console.log(neuNum);

const kommaWeg = neuNum.replaceAll(",", "");

console.log(kommaWeg);

let resultString = [];
for (let i = 0; i < kommaWeg.length; i++) {
  resultString.push(kommaWeg[i]);
}

console.log(resultString);

console.log(resultString.sort());
