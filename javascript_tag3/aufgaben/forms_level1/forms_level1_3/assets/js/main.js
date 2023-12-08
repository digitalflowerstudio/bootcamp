function calcResult(){
    const output = document.querySelector(".output");
    let ageOne = document.querySelector(".ageOne").value;
    let ageTwo = document.querySelector(".ageTwo").value;
    output.innerHTML += `The difference in age is ${ageOne - ageTwo}`;
}