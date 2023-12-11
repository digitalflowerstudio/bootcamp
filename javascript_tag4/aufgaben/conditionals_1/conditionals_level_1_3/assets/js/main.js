// function ageCheck() {
//   let age = document.querySelector("#ageInput").value;
//   let result = document.querySelector(".output");

//   if (age >= 18) {
//     result.textContent = "Volljährig";
//   } else {
//     result.textContent = "Minderjährig";
//   }
// }

function greaterThan() {
  let age = document.getElementById("input").value;
  let resultNew = document.querySelector(".outputNew");

  if (age >= 18) {
    resultNew.textContent = "Ja, du kannst Shisha rauchen!";
  } else {
    resultNew.textContent = "Du darfst noch nicht Shisha rauchen!";
  }
}
