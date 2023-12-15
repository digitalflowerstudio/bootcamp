// Number()

const string1 = "10";
console.log(string1);
console.log(Number(string1));

// Boolean to Number => Nice to know

console.log(Number(true));
console.log(Number(false));

// toFixed()

const number1 = 10.3435346;
console.log(number1.toFixed(2));

// toString()

const number2 = 20;

console.log(number2);
console.log(number2.toString());
console.log(String(number2));

// Math Object Methoden

// Math.round()
console.log(Math.round(54.56456456));

// Math.ceil() rundet immer auf den nächsten integer auf

console.log(Math.ceil(33.99999));

// Math.floor()
// rundet immer auf den nächsten integer ab
console.log(Math.floor(33.99999));

// Math.random()

console.log(Math.random());
console.log(Math.ceil(Math.random() * 6));

const getRandomNumber = () => {
  const randomNumber = Math.random();
  const randomNumberTimes100 = randomNumber * 100;
  return Math.ceil(randomNumberTimes100);
};

console.log(getRandomNumber());
