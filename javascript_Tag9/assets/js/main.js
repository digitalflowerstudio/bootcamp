// String, Number, Boolean

const string = "Ich bin ein String";
const number = 2433;
const boolean = true;

// Array
let team = ["Alex", "John", "Kim", "Jimmy", "Tommy"];
console.log(team);

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";

let teamArr = [player1, player2, player3];
console.log(teamArr);

// Index
// So können wir auf einzelne Elemente zugreifen, indem wir eine Zahl in eine eckige Klammer reinschreiben

console.log(team[1]); // John
console.log(team[4]); // Tommy

// indexOf()
// Sucht in einem Array nach dem Suchwort und gibts uns dann den Index zurück

console.log(team.indexOf("John")); // 1
console.log(team.indexOf("Jimmy")); // 3

team[0] = "Julia";
team[2] = "Frank";
console.log(team);

// Dynamisch
console.log(team.indexOf("Julia")); // index = 0
team[team.indexOf("Julia")] = "Nina";

const searchUser = () => {
  let user = document.getElementById("user").value;
  console.log(user);
  let newUser = document.getElementById("newUser").value;
  console.log(newUser);

  if (team.includes(team.indexOf(user))) {
    team[team.indexOf(user)] = newUser;
  } else {
    console.log("User nicht gefunden!");
  }
};

// * lenght
console.log(team.length); // 5

console.log(team[team.lenght - 1]); // gibt immer das letzte kind eines arrays zurück

let mitarbeiter = ["Jimmy", "Johanna", "Christian", "Jannik", "Steffen"];
console.log(mitarbeiter);

// *pop() - entfernt das letzte element
console.log("%c -------pop------", "color: red");

let popMitarbeiter = mitarbeiter.pop();
console.log(popMitarbeiter);

console.log(mitarbeiter);

// shift() - entfernt das erste element

let shiftMitarbeiter = mitarbeiter.shift();
console.log(shiftMitarbeiter);

// * push() - die methode fügt an der letzten stelle ein element hinzu und gibt uns die neue länge vom array zurück

let pushMitarbeiter = mitarbeiter.push("Lisa");
console.log(pushMitarbeiter);
console.log(mitarbeiter);

// unshift() - fügt an der ersten stelle eines arrays ein element hinzu

let unshiftMitarbeiter = mitarbeiter.unshift("Timo");
console.log(unshiftMitarbeiter);
console.log(mitarbeiter);

// join()
// mit join können wir ein array zu einem string umwandeln

let heros = ["Batman", "Spiderman", "Ironman", "Thor"];

console.log(heros.join(" "));

const ul = document.querySelector("ul");
ul.innerHTML = "<li>" + heros.join("</li><li>") + "</li>";

//filter

const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);

//callback function
const batman = heros.filter((batman) => batman === "Batman");
console.log(batman);

const getSpieler = () => {
  const spieler = document.getElementById("spieler").value;
  const result = heros.filter((character) => character === spieler).join("");
  console.log(result);
  if (result) {
    console.log(result);
  } else {
    console.log("Der Spieler wurde nicht gefunden");
  }
};

// wiederholung

//push

const fruits =
