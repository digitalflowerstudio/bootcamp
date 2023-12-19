let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

console.log(getraenke);

let myDrinks = getraenke.sort();
console.log(myDrinks);

let output = document.querySelector("div");

output.innerHTML =
  "<ul>" +
  myDrinks
    .map((drinks) => {
      return "<li>" + drinks + "</li>";
    })
    .join("") +
  "</ul>";

// join verhindert, dass , zwischen den werten sind und die optik der liste stören - mit join wird eins tring ohne kommas erstellt und die optikt mit <li></li> nicht gestört
