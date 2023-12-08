console.log("works");

function getInputValue() {
  const output = document.querySelector(".output");

  let name = document.querySelector(".name").value;

  let age = document.querySelector(".num").value;

  let range = document.querySelector(".range").value;

  let checkbox = document.querySelector(".checkbox").checked;

  //checkbox gets checked and not value

  let date = document.querySelector(".bday").value;

  console.log(name, age, range, checkbox, date);

  output.innerHTML += name + " " + age + " " + range + " " + checkbox + " " + date;
}

function getDark(){
    console.log("dark mode ist da");
    const myBody = document.querySelector("body");
    myBody.classList.toggle("dark"); // true oder false
}

function addClass(){
    const headLine = document.querySelector(".myAdd");
    headLine.classList.add("big");
}

function removeClass(){
    const headLine2 = document.querySelector(".remove");
    headLine2.classList.remove("remove")
}