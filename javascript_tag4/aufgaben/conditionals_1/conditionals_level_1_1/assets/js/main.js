function ageCheck() {
  let age = document.querySelector("#ageInput").value;
  let result = document.querySelector(".output");

  if (age >= 18) {
    result.textContent = "Volljährig";
  } else {
    result.textContent = "Minderjährig";
  }
}
