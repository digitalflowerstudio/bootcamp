// Console.log()

console.log("Hello World");
// mit console.log() können wir uns Texte (strings) ausgeben lassen.

// Variable

// - const - Werte können nicht mehr geändert werden
// - let - Werte können noch einmal verändert werden
// var (obsolet)

// ? CONST

const trainerName = "Farid";

console.log(trainerName);

// ? LET

let score = 8;
console.log(score);

let num1 = 5;
console.log("Das ist Num1:", num1);

let num2 = 55;
console.log("Das ist Num2:", num2);

let num3 = 44;
console.log({num3});

num1 = 105;
console.log({num1});

const num4 = 300;
console.log('num4');

// kein let, da wir die variable schon in zeile 20 vor definiert haben
num1 = 105
console.log({num1});

// lässt sich nicht überschreiben da num4 eine constante ist
// num4 = 400;
// console.log({num4});

const addScore = num1 + num2;
console.log({addScore});

console.log('TEST ', num1 + num2);

// DatenTypen
// ? Numner - String - Boolean

// ? String
// String sind Textwerte
// Um ein String auszugeben, müssen wir "" oder ''

console.log("Das ist ein String");
console.log("Das ist auch ein String");
// Wird in der Konsole als weißer Text ausgebeben 

// ? Number
// Numerische Werte und werden LILA ausgegeben
console.log("NUMBERS");
console.log(10);
console.log(10 + 4); // Gibt 14 aus

console.log("10" + "4"); // Führt eine Zeichenketten-Kombination aus (Beim Plus rechnet er nicht zwingend)
console.log("4" * "2");
console.log("4" - '4');

console.log(4 + 20);


