function fahrrad() {
  console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad(); //blank
obj1.fahrrad(); // Merida
obj2.fahrrad(); // Scott
