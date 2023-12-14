// # return
// Das Return Statement beendet eine function und gibt uns einen wert zurück
// sobald eine function auf das return statement trifft wird der code nicht mehr weiter ausgeführt

// jede geschweifte klammer ist ein scope
// in jedem scope darf man nur einmal return schreiben

function add(num1, num2) {
  if (num1 === 3) {
    //scope1
    return "nee, mit 3 kann ich nicht rechnen";
  }
  return num1 + num2;
  console.log("wieso bin ich ausgegraut");
}

const addFunc = add(2, 5);
console.log(addFunc);

// klassische func kann auch deklariert werden
const mySecFunc = function (num1, num2) {
  return num1 * num2;
};

console.log(mySecFunc(2, 5));

const user = "magda@super-code.de";
const user2 = "florian@hotmail.com";

const getName = function (email) {
  if (email.includes("@")) {
    // sucht index von @ symbol
    const atIndex = email.indexOf("@");
    // slice wird von anfang bis @
    const name = email.slice(0, atIndex);

    return name;
  } else {
    return "falsche mail";
  }
};

console.log(getName(user));
console.log(getName(user2));

let num = 19;
let num2 = 20;

function geradeUngerade(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(geradeUngerade(num));

const tester = geradeUngerade(num2)
  ? `Die Zahl ${num2} ist gerade` //true
  : `Die Zahl ${num2} ist ungerade`; //false

console.log(tester);

// Arrow Function
// vorteile
// kürzere schreibweise
// möglichkeit das wir in eine zeile schreiben können

function funcAlt() {
  console.log("ich bin die alte function");
}

funcAlt();

const newFunc = () => {
  console.log("ich bin die neue function");
};

newFunc();

// Die neue Kurzschreibform

const kurzFunc = () =>
  console.log("ich bin eine func die in einer zeile ausgeführt wird");

// scope
// globaler scope
// der global scope ist quasi unsere komplette js datei
// wenn etwas im global scope definiert ist, kann ich von überall darauf zugreifen

const firstName = "Alex";

const greet = () => {
  console.log(`Hallo ${firstName}`);
};

greet();

// local scope
// der lokale scope kann nur innerhalb des funktionskörper verwendet werden

const greet2 = () => {
  const firstName = "Sebastian";
  console.log(`Hallo ${firstName}`);
};
