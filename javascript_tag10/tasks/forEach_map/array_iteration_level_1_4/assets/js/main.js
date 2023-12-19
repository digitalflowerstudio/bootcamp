let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const convertTemp = (input) => {
  return input.map((temp) => Math.round((temp - 32) / 1.8));
};

console.log(convertTemp(fahrenheit));
