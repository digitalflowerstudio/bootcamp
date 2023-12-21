const pick = document.getElementById("select");
const output = document.querySelector(".output");
pick.addEventListener("change", (event) => {
  output.textContent = `Du hast ${pick.selectedOptions[0].textContent} ausgewählt!`;
});
