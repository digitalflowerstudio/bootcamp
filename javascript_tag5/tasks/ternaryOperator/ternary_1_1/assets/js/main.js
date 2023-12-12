function ageCheck() {
  let result = document.querySelector(".result");
  let age = document.querySelector("#ageInput").value;
  let check =
    age >= 18
      ? (result.innerHTML = "Alt genug!")
      : (result.innerHTML = "Zu jung!");
}
