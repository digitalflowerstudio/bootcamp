const output = document.querySelector(".output");
let outputValue = 0;

function superFunc(value) {
  outputValue = outputValue + value;
  output.innerHTML = outputValue;
}

function superFuncZwei() {
  outputValue = outputValue * 2;
  output.innerHTML = outputValue;
}

function reset() {
  outputValue = 0;
  output.innerHTML = outputValue;
}

// ! Conditional Statements

/* 

if (hier kommt eine bedignung rein) {
    hier kommt code rein, wenn die bedingung erfüllt ist
} 

else if (hier kommt eine zusätzliche bedingung rein) {
    hier kommt code für die weitere bedingung rein
} 

else {
    wenn die Bedingung nicht erfüllt ist, dann passiert dieser code
}

*/

function reichSein() {
  let reich = document.querySelector("#reich").value;
  console.log(reich);

  let entscheidung = document.querySelector("#entscheidung");
  if (reich === "yes") {
    entscheidung.textContent = "Ja, du wirst reich!";
  } else {
    entscheidung.textContent = "Nein, du bleibst arm :(";
  }
}

// Einfache Überprüfung

// function checkAge() {
//   let age = document.querySelector("#ageInput").value;
//   let output = document.querySelector("#message");

//   if (age >= 60) {
//     output.innerHTML = "Du bist stein alt!";
//   } else if (age < 18 || age > 60) {
//     output.innerHTML = "Entweder zu jung oder zu alt!";
//   } else if (age >= 18) {
//     output.innerHTML = "Du bist Volljährig!";
//   } else {
//     output.innerHTML = "Bitte gib dein alter an!"
//   }
// }

function checkAge() {
  let age = document.querySelector("#ageInput").value;
  let output = document.querySelector("#message");
  let checked = document.querySelector("#checked").checked;

  if (age >= 30 && age <= 80 && checked) {
    output.innerHTML = "Du bist ALT und hast zugestimmt!";
  } else if (age >= 18 && age <= 30 && checked) {
    output.innerHTML = "Du bist volljährig und hast zugestimmt";
  } else if (age < 18) {
    output.innerHTML = "Entweder zu jung oder keine Zustimmung";
  } else if (!checked) {
    output.innerHTML = "Keine Zustimmung";
  } else {
    output.innerHTML = "Ein anderer Fall";
  }
}
