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

function greaterThan() {
  event.preventDefault();

  let result = "";
  let output = document.querySelector(".output");

  if (document.getElementById("input").value >= 18) {
    result = true;
    console.log(result);
    output.textContent = "alt genug";
  } else {
    result = false;
    console.log(result);
    output.textContent = "zu jung";
  }
}
