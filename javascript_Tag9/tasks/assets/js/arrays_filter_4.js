const numbers = [12, 25, 7, 18, 30, 5];

const smallNumbers = numbers.filter((nums) => nums < 20);

console.log(smallNumbers);

const multikulti = (num) => num * 2;

const multi = smallNumbers.map(multikulti);

console.log(multi);
