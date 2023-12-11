// function ageCheck() {
//   let age = document.querySelector("#ageInput").value;
//   let result = document.querySelector(".output");

//   if (age >= 18) {
//     result.textContent = "Volljährig";
//   } else {
//     result.textContent = "Minderjährig";
//   }
// }

// function greaterThan() {
//   event.preventDefault();
//   let outputNew = document.querySelector(".outputNew");

//   let result = "";

//   if (document.getElementById("input").value >= 18) {
//     result = true;
//   } else {
//     result = false;
//   }

//   switch (result) {
//     case true:
//       console.log("alt genug");
//       outputNew.innerHTML = "Du bist alt genug";
//     case false:
//       console.log("zu jung");
//       outputNew.innerHTML = "Du bist zu jung";
//   }
// }

const formular = document.querySelector("form");

function greaterThan() {
  event.preventDefault();

  let decision = "";
  let output = document.querySelector(".output");

  if (document.getElementById("input").value >= 18) {
    decision = true;
    console.log(decision);
    output.textContent = "alt genug";
  } else {
    decision = false;
    console.log(decision);
    output.textContent = "zu jung";
  }
}
