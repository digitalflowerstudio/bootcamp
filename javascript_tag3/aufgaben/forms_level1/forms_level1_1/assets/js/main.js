function getInputValue(){
    const output = document.querySelector(".output");
    let numba = document.querySelector(".numba").value;
    output.innerHTML += `Your numba doubled is ${numba * 2}`
}