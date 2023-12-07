// // Console.log()

// console.log("Hello World");
// // mit console.log() können wir uns Texte (strings) ausgeben lassen.

// // Variable

// // - const - Werte können nicht mehr geändert werden
// // - let - Werte können noch einmal verändert werden
// // var (obsolet)

// // ? CONST

// const trainerName = "Farid";

// console.log(trainerName);

// // ? LET

// let score = 8;
// console.log(score);

// let num1 = 5;
// console.log("Das ist Num1:", num1);

// let num2 = 55;
// console.log("Das ist Num2:", num2);

// let num3 = 44;
// console.log({num3});

// num1 = 105;
// console.log({num1});

// const num4 = 300;
// console.log('num4');

// // kein let, da wir die variable schon in zeile 20 vor definiert haben
// num1 = 105
// console.log({num1});

// // lässt sich nicht überschreiben da num4 eine constante ist
// // num4 = 400;
// // console.log({num4});

// const addScore = num1 + num2;
// console.log({addScore});

// console.log('TEST ', num1 + num2);

// // DatenTypen
// // ? Numner - String - Boolean

// // ? String
// // String sind Textwerte
// // Um ein String auszugeben, müssen wir "" oder ''

// console.log("Das ist ein String");
// console.log("Das ist auch ein String");
// // Wird in der Konsole als weißer Text ausgebeben 

// // ? Number
// // Numerische Werte und werden LILA ausgegeben
// console.log("NUMBERS");
// console.log(10);
// console.log(10 + 4); // Gibt 14 aus

// console.log("10" + "4"); // Führt eine Zeichenketten-Kombination aus (Beim Plus rechnet er nicht zwingend)
// console.log("4" * "2");
// console.log("4" - '4');

// // NaN steht für Not a Number

// console.log(4 + 20);

// // ? Boolean
// // Werden auch LILA ausgegeben und sie haben nur zwei mögliche werte: true oder false
// console.log(true);
// console.log(false);

// // Konventionen
// // ? Selbsterklärend, nicht zu kurz / nicht zu lang / dürfen nicht mit zahlen anfang
// // z.B 2Pac besser als twoPac - immer auch camelCase

// // ! CASE SENSITIVE

// // Underscore

// let my_first_variable;

// // PascalCase

// let MyFirstVariable;

// // CamelCase

// let myFirstVariable;

// // Was nicht geht:
// // ! let nein-nein-so-nicht
// // ! let kannichtsonichtlesen
// // ! let $bittesoauchnicht;

// // String Concatination
// console.log('String Concatination');

// const firstName = "Wade";
// const secondName = "Winston";
// const lastName = "Wilson";

// let state = "New York";
// let leer = ' ';

// console.log('Ich bin' + leer + firstName + leer + secondName + leer + lastName + leer + 'und lebe in' + leer + state);
// console.log(`Ich bin ${firstName} ${secondName} ${lastName} und ich lebe in ${state}`);

// // Arithmetische Operatoren

// let x = 5;
// let y = 3;
// let z = 15;

// //addieren
// console.log(x + y);
// //subtrahieren
// console.log(x - y);
// //dividieren
// console.log(x / y);
// //multiplizieren
// console.log(x * y);

// // Modulo % = Restwert (teilen und dann restwert)
// console.log(15 % 5);
// console.log(5 % 2);
// console.log(15 % 4);

// // increment - mit ++ können wird der wert um eins erhöht / ein + gerechnet

// let zahl1 = 2
// console.log({zahl1});
// zahl1++;
// zahl1++;
// console.log({zahl1});

// decrement -- wird eins vom vorherigen wert abgezogen 

// let zahl2 = 5;
// console.log({zahl2});
// zahl2--; //wird um 1 reduziert
// zahl2--; //wird um 1 reduziert
// console.log({zahl2}); // gibt uns 3


// Output
//documentwrite

// document.write("hallo leute")
// document.write("<h2>Ich bin eine Headline</h2>")

// window.alert("WARNING!!!")

// Input
// window.prompt("Wie alt bist du?")

// window.confirm("Stimme zu")

// let confirm = window.confirm("Stimmen Sie den Cookies zu?")
// console.log(confirm);


// # Comparison / Vergleichen

// - == vergleicht die Werte
// - === vergleicht die Werte und Datentypen

console.log(3 == '3'); //true
console.log(3 == '3'); //false
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(6 == '7'); // false

// != nicht gleicher Wert
// !== nicht gleichert Wert und Datentypen

console.log(3 != 3);
console.log(3 !== 3);
console.log('3 !== 3');

// - > größer als
// - < kleiner als
// - >= größer gleich
// - <= kleiner gleich

console.log(3 > 2); //false
console.log(4 < 6); // true

console.log('A' > 'B'); //false
console.log('B' > 'a'); //false


// Elemente Selektieren

// - getElementByID

const mainHeadline = document.getElementById('main-headline')
console.log(mainHeadline);
console.log(mainHeadline.innerHTML);

// - querySelector()

// const secondaryHeadline = document.querySelector('#secondary-headline')
// console.log(secondaryHeadline); // ID mit raute

//mit class

const secondaryHeadline = document.querySelector('.myHeadline') // class with .
console.log(secondaryHeadline);

// direkt mit element

const secondaryHeadline3 = document.querySelector('h2')

console.log(secondaryHeadline3);
console.log(secondaryHeadline3.innerHTML);

// innerHTML

mainHeadline.innerHTML = 'ich bin der neue, hahaha'

secondaryHeadline3.innerHTML = 'moin'
secondaryHeadline3.innerHTML += ' Leute'

// CSS

mainHeadline.style.backgroundColor = 'red'
mainHeadline.style.color = 'white'

// Unterschied zwischen document.write() und .innerHTML

let divContainer = document.querySelector('#div-container')
divContainer.innerHTML = '<p>Ich bin ein P Tag</p>' // schreibt innerhalb des angesprochen elements und ermöglicht es uns ein neues element zu erstellen
document.write('<p>Ich bin ein P tag</p>') // schreibt immer am ende
divContainer.innerHTML += '<p>Ich bin noch ein P tag</p>' // += neues element hinzugefügt


// ! Funktion
// eine funktion ist wie rein rezept was man weitergeben kann, sie kriegt immer einen input

function sayHello(){
    console.log('Hello Leute'); // funktion schreiben
}

sayHello() // funktion aufrufen

function log(firstName, lastName){
    console.log(`Hallo du bist eingeloggt ${firstName} ${lastName}`);
}

log('Max', 'Mustermann')

function addMe (num1, num2) {
    console.log(num1 * num2);
}

addMe (3,5)

let num5 = 5;
let num6 = 10;

//number1 und 2 sind parameter (unsere zutaten)
function plusMe(number1, number2){
    divContainer.innerHTML += '<p>' + number1 + number2 + '</p>' // das plus zwischen den numbers kann auch * oder / oder - sein
}

// plusMe(10, 100)
plusMe (num5, num6)

// wiederholung

let meinErstesKind = document.querySelector('.mein-erstes-kind');
meinErstesKind.innerHTML = 'hallo papa';

let meinZweitesKind = document.getElementById('mein-zweites-kind');
meinZweitesKind.innerHTML = 'hallo papa farid'

meinZweitesKind.innerHTML += ' wie geht es dir?'

let mySection = document.querySelector('section')
console.log(mySection);
mySection.innerHTML += "<p>HALLOOO PAPA</p>"

function babyMaker(){
    mySection.innerHTML += '<p>Ich bin das vierte kind</p>'
}

babyMaker()

function subTractor(nummerEins, nummerZwei){
    console.log(nummerEins - nummerZwei);
}

subTractor(10, 7) // = 3








