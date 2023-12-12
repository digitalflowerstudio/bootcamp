const output = document.querySelector("#output");
const minPW = 8;
function checkPass() {
  const userInput = document.querySelector("#password").value;
  let checkLen = userInput.length;
  let final = checkLen >= minPW ? "safe" : "unsafe";
  output.innerHTML = final;
}
