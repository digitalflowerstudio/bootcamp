let count = 0;
let button = document.getElementById("clickMe");

button.addEventListener("click", function () {
  count += 1;
  button.innerHTML = `Click me ${count}`;
});
