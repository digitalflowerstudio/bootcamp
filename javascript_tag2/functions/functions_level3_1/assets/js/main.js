const mainHeadline = document.getElementById('superHeading');
console.log(mainHeadline);

const body = document.querySelector('body');

const ballOne = document.querySelector('.ball1')
console.log(ballOne);

const ballTwo = document.querySelector('.ball2')
console.log(ballOne);

const ballThree = document.querySelector('.ball3')
console.log(ballOne);

const ballFour = document.querySelector('.ball4')
console.log(ballOne);

function ballinOne(){
    mainHeadline.style.color = 'palegoldenrod';
    body.style.backgroundColor = 'cyan';
}

function ballinTwo(){
    mainHeadline.style.color = 'red';
    body.style.backgroundColor = 'blue';
}

function ballinThree(){
    mainHeadline.style.color = 'gold';
    body.style.backgroundColor = 'green';
}

function ballinFour(){
    mainHeadline.style.color = 'aqua';
    body.style.backgroundColor = 'purple';
}