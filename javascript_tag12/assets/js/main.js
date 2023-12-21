// event & eventlistener

// aufbau

//welches element soll beobachtet werden? element selektieren

// event listener hinzufügen
// myBtn.addEventListener()

// 3 event definieren
//myBtn.addEventListener("click")

const myBtn = document.querySelector("#say-hi-btn");
const textOutput = document.querySelector("#text_output");

myBtn.addEventListener("click", () => {
  textOutput.innerHTML = "<h1>Hallo vom EventListener!</h1>";
});

// mouserOver

const textInput = document.querySelector("#text-input");
textInput.addEventListener("mouseover", () => {
  console.log("Die Maus wurde über mich bewegt!");
  textInput.style.border = "3px solid red";
});

// mouseout

textInput.addEventListener("mouseout", () => {
  console.log("Die Maus hat mich verlassen");
  textInput.style.border = "3px solid blue";
});

//change

const selectInput = document.querySelector("#select-input");
const selectOutput = document.querySelector("#select-output");

selectInput.addEventListener("change", () => {
  console.log("Ich wurde geändert!");
  selectOutput.innerHTML = selectInput.value;
});

// keypress

const username = document
  .querySelector("#username")
  .addEventListener("keypress", () => {
    const user = document.querySelector("#user");
    user.style.backgroundColor = "red";
    user.style.color = "blue";
  });

// keyup
const logKey = (event) => {
  console.log(event.code);
};

const hacker = document
  .querySelector("#hacker")
  .addEventListener("keyup", logKey);
const log = document.querySelector("#log");

// externer eventlistener - wir können die function erst einmal auslagern damit wir das ganze genereller halten können

const liste = document.querySelector("#myList");
console.log(liste);

const firstChildvonMeinerListe = liste.firstElementChild.innerHTML;
console.log(firstChildvonMeinerListe);

const lastChild = liste.lastElementChild;

const geschwisterElementVomAnfang = liste.firstElementChild.nextElementSibling;
console.log(geschwisterElementVomAnfang);

// html collection

const liElementToHTMLCollection = liste.children;
console.log(liElementToHTMLCollection);

const liElementArray = Array.from(liste.children);
console.log(liElementToHTMLCollection);

liElementArray.forEach((singleElement) => {
  singleElement.style.color = "purple";
});

liElementArray[0].innerHTML = "Salat";

const zugriffAufDasParentElement = liste.parentElement;
console.log(zugriffAufDasParentElement);

// childElementCount length

console.log(liste.childElementCount);
console.log(liste.children.length);

// create element

const firstAuto = document.createElement("li");
firstAuto.textContent = "Benz";
console.log(firstAuto);

const fliessBand = document.querySelector("#fliessband");
fliessBand.appendChild(firstAuto); //append am ende hinzufügen

const secondAuto = document.createElement("li");
secondAuto.textContent = "Tesla";

fliessBand.appendChild(secondAuto);

const thirdAuto = document.createElement("li");
thirdAuto.textContent = "BMW";

fliessBand.prepend(thirdAuto); //prepend am anfang hinzufügen

let imageVomDom = document.createElement("img");

imageVomDom.setAttribute("src", "html.de");

document.body.appendChild(imageVomDom);
