const words = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
// sobald ich mehrzeilige funktionen mit { } habe brauche ich return um die werte zwischenzuspeichern

const result = words.filter((word) => word.length > 6);
console.log(result);

const arrowFunc = () => {
  const result = words.filter((word) => {
    return word.length > 6;
  });
  return result;
};

console.log(arrowFunc());

function normalFunc() {
  const result = words.filter((word) => {
    return word.length > 6;
  });
  return result;
}

console.log(normalFunc());
