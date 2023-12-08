function calcAge(){
    const output = document.querySelector(".output");
    let birthYear = document.querySelector(".birthYear").value
    output.innerHTML += `I'm a supercomputer so I calculated that your age must be ${2023 - birthYear}`
}