let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
let numArray3 = [36, 324, 122, 62, 98, 88, 99, 1000];

// normale function
numArray2.sort(function (a, b) {
  return a - b;
});
console.log(numArray2);

// arrow function
numArray3.sort((a, b) => a - b);
console.log(numArray3);
