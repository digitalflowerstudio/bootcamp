function weather() {
  let output = document.querySelector(".output");
  let quality = document.querySelector("#WeatherQuality").value;
  if (quality >= 8) {
    output.textContent = "SUPER! :))))";
  } else if (quality >= 6 && quality <= 7) {
    output.textContent = "GUT! :)";
  } else if (quality >= 3 && quality <= 5) {
    output.textContent = "OKAY! :-/";
  } else {
    output.textContent = "SCHLECHT! :(";
  }
}
