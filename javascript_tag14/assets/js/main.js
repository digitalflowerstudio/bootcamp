const input = document.querySelector; // input ist oft ein objekt (key und value)

const user = {
  name: "Jim",
  alter: 60,
  beruf: "Verkäufer",
  hobbies: ["zocken", "lesen", "sport"],
  adresse: {
    stadt: "hamburg",
    straße: "musterstr.",
    plz: "203489",
  },
  auto: false,
}; //objekt ist immer mit geschweifte klammer, mit komma getrennt

console.log(user.alter); //punktoperator
console.log(user.beruf);
console.log(user.adresse.stadt);
console.log(user["alter"]);
console.log(user);
user.alter = 40;
user.name = "Florian";
console.log(user);

//parameter

user.hobbies.forEach((pizza) => {
  console.log(pizza);
});

delete user.auto;
user.auto = "Tesla";
user.verheiratet = true;

const admin = {};

admin.name = "Bwayla";
admin.job = "Microsoft Developer";
admin.age = 30;

console.log(admin);

// methoden in objekten

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};

console.log(calculator.add(1, 3));
console.log(calculator.sub(5, 3));

const spieler = {
  name: "Ironman",
  class: "Hero",
  level: 100,
  spell: ["heilen", "fliegen", "lazer"],
  login: () => {
    console.log(spieler.name + " " + "ist eingeloggt"); //arrow function kein "this"
  },
  castSpell: function () {
    console.log("castingSpell" + this.spell[0]); //alte function kann this
  },
};

console.log(spieler);
spieler.login();
spieler.castSpell();

// objekt methoden = > object.key() - erstellt ein array mit allen key vom object

const keysVomSpielerObject = Object.keys(spieler);
console.log(keysVomSpielerObject);

// object.entries = gibt array zurück

const entries = Object.entries(spieler);
console.log(entries);

// bei arrays hatten for-of loop
// bei objects haben wir for-in loop

for (let akey in spieler) {
  console.log(akey); // veraltet, forEach besser
}

// spread operator

const user2 = {
  name: "Hanna",
  age: 30,
};

const newArray = Object.values(user2);
console.log(newArray);
