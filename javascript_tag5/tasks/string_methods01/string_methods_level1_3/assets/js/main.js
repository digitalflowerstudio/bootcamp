let text =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

let searchOne = text.search(";");
console.log(searchOne);

let searchTwo = text.search("green");
console.log(searchTwo);

let searchThree = text.search("blue");
console.log(searchThree);

// blue with lowercase b is not in the string and therfore it's value is -1
