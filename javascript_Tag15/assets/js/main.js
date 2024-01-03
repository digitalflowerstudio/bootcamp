// Wiederholung

// * Bsp1 kein clg in map und forEach

const numbers = [1, 2, 3, 4, 5];

const doubleNumberMitMap = numbers.map((number) => {
  return number * 2;
});

numbers.forEach((number) => {
  return number * 2;
});

// bsp2

const words = ["apple", "banana"];

const wordLenght = words.map((word) => word.length);
console.log(wordLenght);

// bsp3

const students = [
  { id: 1, name: "Max Mustermann" },
  { id: 2, name: "Maria Musterfrau" },
];

const names = students.map((el) => {
  return el.name.split(" ");
});

console.log(names);

// bsp4

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 500 },
];

const newArray = Object.entries();
