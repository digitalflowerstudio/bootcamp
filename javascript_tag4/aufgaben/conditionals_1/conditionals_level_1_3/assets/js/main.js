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
