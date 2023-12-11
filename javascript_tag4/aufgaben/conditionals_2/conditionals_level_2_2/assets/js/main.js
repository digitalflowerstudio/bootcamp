function checkAirQuality() {
  let airQuality = document.querySelector("#rangeAQI").value;
  let output = document.querySelector(".output");

  if (airQuality <= 50) {
    output.textContent =
      "level of health concern - good level of health effect - little or no risk";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (airQuality >= 50 && airQuality <= 100) {
    output.textContent =
      "level of health concern - moderate level of health effect - acceptable quality";
    document.querySelector("body").style.backgroundColor = "yellow";
  } else {
    output.textContent = "BIOHAZARD!";
    document.querySelector("body").style.backgroundColor = "red";
  }
}
