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
