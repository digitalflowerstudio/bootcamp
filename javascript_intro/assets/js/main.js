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

// NaN steht für Not a Number

console.log(4 + 20);

// ? Boolean
// Werden auch LILA ausgegeben und sie haben nur zwei mögliche werte: true oder false
console.log(true);
console.log(false);

// Konventionen
// ? Selbsterklärend, nicht zu kurz / nicht zu lang / dürfen nicht mit zahlen anfang
// z.B 2Pac besser als twoPac - immer auch camelCase

// ! CASE SENSITIVE

// Underscore

let my_first_variable;

// PascalCase

let MyFirstVariable;

// CamelCase

let myFirstVariable;

// Was nicht geht:
// ! let nein-nein-so-nicht
// ! let kannichtsonichtlesen
// ! let $bittesoauchnicht;

// String Concatination
console.log('String Concatination');

const firstName = "Wade";
const secondName = "Winston";
const lastName = "Wilson";

let state = "New York";
let leer = ' ';

console.log('Ich bin' + leer + firstName + leer + secondName + leer + lastName + leer + 'und lebe in' + leer + state);
console.log(`Ich bin ${firstName} ${secondName} ${lastName} und ich lebe in ${state}`);

// Arithmetische Operatoren

let x = 5;
let y = 3;
let z = 15;

//addieren
console.log(x + y);
//subtrahieren
console.log(x - y);
//dividieren
console.log(x / y);
//multiplizieren
console.log(x * y);

// Modulo % = Restwert (teilen und dann restwert)
console.log(15 % 5);
console.log(5 % 2);
console.log(15 % 4);

// increment - mit ++ können wird der wert um eins erhöht / ein + gerechnet

let zahl1 = 2
console.log({zahl1});
zahl1++;
zahl1++;
console.log({zahl1});

// decrement -- wird eins vom vorherigen wert abgezogen 

let zahl2 = 5;
console.log({zahl2});
zahl2--; //wird um 1 reduziert
zahl2--; //wird um 1 reduziert
console.log({zahl2}); // gibt uns 3


// Output
//documentwrite

document.write("hallo leute")
document.write("<h2>Ich bin eine Headline</h2>")

// window.alert("WARNING!!!")

// Input
// window.prompt("Wie alt bist du?")

// window.confirm("Stimme zu")

let confirm = window.confirm("Stimmen Sie den Cookies zu?")
console.log(confirm);











