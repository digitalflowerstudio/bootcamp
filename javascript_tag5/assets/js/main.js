let firstname = "Magda";
firstname = "Daniel";
console.log(firstname);

function toggleStyle() {
  let body = document.querySelector("body");
  body.classList.toggle("chanch-bg");
}

// Für was benötigen wir return false in form? Damit die Seite nicht neu geladen wird!

let user = "John";
let output = document.querySelector(".ifoutput");

if (user === "John") {
  output.innerHTML = "";
}
