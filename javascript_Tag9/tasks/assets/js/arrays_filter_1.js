const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((nums) => nums % 2 === 0);

console.log(evenNumbers);

let unEvenNumbers = numbers.filter((nums) => nums % 2 !== 0);

console.log(unEvenNumbers);
