const heroArr = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

const myHeros = heroArr.filter((hero) => hero !== null && hero !== undefined);

console.log(heroArr);
console.log(myHeros);
