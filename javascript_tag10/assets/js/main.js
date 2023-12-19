// slice methode array
// erstellt ein neues array, welches eine kopie eines teils des ursprübglichen arrays darstellt

let fruits = ["Banane", "Apfel", "Orange", "Mango"];
let obstsalat = fruits.slice(1, 3);
console.log(fruits);
console.log(obstsalat);

fruits.sort();
console.log(fruits);

// sort()
// Sortiert die Elemente eines Arrays und gibt das sortierte Array zurück

let numbers = [23, 1, 5, 67, 9];
numbers.sort();
console.log(numbers);

// splice()

let myHero = ["Deadpool", "Ironman", "Batman", "Aragorn"];
myHero.splice(2, 0, "Boromir"); // erster wert wo eingesetzt wird, zweiter wert wieviele von hinten gelöscht werden
console.log(myHero);

// reverse()

let number2 = [4, 8, 10, 5, 1];
number2.reverse();
console.log(number2);

// map
let myNumArr = [1, 2, 3, 4, 5];
console.log(myNumArr);
let multi = myNumArr.map(
  (valuesOfOriginalArray) => valuesOfOriginalArray * valuesOfOriginalArray
);
console.log(multi);

// for Each (erstellt kein neues array)
let tiere = ["Hund", "Katze", "Maus"];
tiere.forEach((pet, index) => {
  console.log(index + pet);
});

let num = [1, 2, 3];

// i = index / arr = array

num.forEach((element, index, array) => {
  console.log("index", +index);
  console.log("gesamtes array", array);
  console.log("Element", +element);
});

num.forEach((el, i, arr) => {
  console.log("index", +i);
  console.log("gesamtes array", arr);
  console.log("Element", +el);
});

let num2 = [1, 2, 3, 4, 5];

const mapForEach = (num2) => {
  let double = num2.map((num) => num * num);

  double.forEach((doubleNum) => {
    console.log("Verdoppelte Nummer" + doubleNum);
  });
};

console.log(num2);
mapForEach(num2);

const evenOdd = (pizza) => {
  let dubble = pizza.map((num) => num * 3);
  console.log(dubble);

  dubble.forEach((dubbleNum) => {
    console.log("verdoppelte Nummer:" + dubbleNum);

    if (dubbleNum % 2 == 0) {
      console.log("Nummer ist gerade");
    } else {
      console.log("Nummer ist ungerade!");
    }
  });
};

evenOdd(num2);
