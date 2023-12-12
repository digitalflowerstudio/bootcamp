function checkLand() {
  let input = document.getElementById("bundeslandInfo").value;
  let result = document.querySelector(".result");
  switch (input) {
    case "Bayern":
      result.innerHTML =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      result.innerHTML =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
  }
}
