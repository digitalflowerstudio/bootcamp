function showDetails() {
  let result = document.querySelector("#masse");
  let selection = document.getElementById("mylist").value;
  switch (selection) {
    case "0":
      result.innerHTML =
        "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
      break;
    case "1":
      result.innerHTML =
        "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
      break;
    case "2":
      result.innerHTML =
        "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
      break;
    case "3":
      result.innerHTML =
        "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
      break;
    default:
      result.innerHTML = "GEH WEG!";
  }
}
