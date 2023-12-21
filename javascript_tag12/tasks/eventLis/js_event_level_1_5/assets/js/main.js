let text = document.getElementById("clickMe").innerHTML;
let count = 0;
let button = document.getElementById("clickMe");

button.addEventListener("click", function () {
  count += 1;
  button.innerHTML = text.replace(text, `Click me ${count}`);
});
