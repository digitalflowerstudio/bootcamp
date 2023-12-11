const output = document.querySelector(".output");
let outputValue = 0;

function superFunc(value){
    outputValue = outputValue + value;
    output.innerHTML = outputValue;
}

function superFuncZwei(){
    outputValue = outputValue * 2;
    output.innerHTML = outputValue;
}

function reset(){
    outputValue = 0;
    output.innerHTML = outputValue;
}