const body = document.querySelector("body");

document.getElementById("grauTaste").addEventListener("click", (event) => {
  body.style.backgroundColor = "grey";
});

document.getElementById("weissTaste").addEventListener("click", (event) => {
  body.style.backgroundColor = "white";
});

document.getElementById("blauTaste").addEventListener("click", (event) => {
  body.style.backgroundColor = "blue";
});

document.getElementById("gelbTaste").addEventListener("click", (event) => {
  body.style.backgroundColor = "yellow";
});
