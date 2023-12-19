let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const convertTemp = (fahrenheit) => {
  return fahrenheit.map((temp) => Math.round((temp - 32) / 1.8));
};

console.log(convertTemp(fahrenheit));
