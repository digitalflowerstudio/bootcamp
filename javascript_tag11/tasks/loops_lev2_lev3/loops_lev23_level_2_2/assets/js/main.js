const loopMe = () => {
  let count = Number(document.getElementById("numberInput").value);
  let output = document.querySelector(".output");
  let loopy = [];
  if (count > 0) {
    for (i = 1; i <= count; i++) {
      loopy.push("o");
    }
    output.textContent = "L" + loopy.join("") + "p";
  } else {
    output.textContent = "No loop without an O baby";
  }
};
