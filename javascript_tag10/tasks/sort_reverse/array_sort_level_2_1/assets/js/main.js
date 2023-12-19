const inverterApp = (inputString) => {
  inverterAppArr = inputString
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return inverterAppArr.join(" ");
};

console.log(inverterApp("Florian"));
console.log(inverterApp("Sergio"));
console.log(inverterApp("Regallager"));
console.log(inverterApp("Reliefpfeiler"));
console.log(inverterApp("Rentner"));
console.log(inverterApp("Ella mag alle Bohnen"));
console.log(inverterApp("ennaH has nesaH han"));
