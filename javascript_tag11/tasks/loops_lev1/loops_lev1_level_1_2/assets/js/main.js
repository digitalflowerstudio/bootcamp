let numArray = [];
let numArray2 = [];

// old for loop
for (i = 0; i < 11; i++) {
  numArray.push(i);
}
console.log(numArray);

//new for of loop

//            das ist array constructor
for (let i of Array(11)) {
  numArray2.push(numArray2.length);
}

console.log(numArray2);
