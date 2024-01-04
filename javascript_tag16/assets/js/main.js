// BOM
// Browser Object Model

// Größe des Browserfensters

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.screen.height);
console.log(window.screen.width);

console.log("screen.availWidth", window.screen.availWidth);
console.log("screen.availHeight", window.screen.availHeight);

let myWindow;

const openWindow = () => {
  myWindow = window.open("https://google.com", "_self");
};

// _self, _blank, _parent

// x, y achse

const myScroll = () => window.scroll(0, 100);

// window.location

console.log(window.location.origin); //origin
console.log(window.location.pathname); //pathname
console.log(window.location.host); //host
console.log(window.location.protocol); //protocol

//reload

function myReload() {
  window.location.reload();
}

// navigieren

function aboutPage() {
  window.location.pathname = "./javascript_tag16/assets/html/about.html";
}

let goBack = () => window.history.back();
let goForward = () => window.history.forward();

// * js timing event

const welcome = document.createElement("div");
welcome.style.height = "50px";
welcome.style.width = "250px";
welcome.style.backgroundColor = "red";
welcome.style.color = "white";
welcome.textContent = "Hello Guys!";
welcome.style.display = "none";
document.body.appendChild(welcome);

let sayHello = () => {
  console.log("Hallo guten morgen");
  welcome.style.display = "block";
};

setTimeout(sayHello, 5000);

const myTimer = () => {
  //   let clock = document.createElement("div");
  //   document.body.appendChild(clock);
  const clock = document.querySelector("#clock");
  const now = new Date();
  clock.innerHTML = now.toLocaleTimeString();
};

let timerVariable = setInterval(myTimer, 1000);

let clearMyInterval = () => clearInterval(backgroundColorChange);

const train = document.querySelector("#train");
let leftPos = 0;
let trainInterval;

let startTrain = () => {
  let animationTrain = () => {
    leftPos += 10;
    train.style.left = `${leftPos}px`;
  };
  trainInterval = setInterval(animationTrain, 100);
};

let stopTrain = () => clearInterval(trainInterval);

const backgroundInterval = () => {
  const color = () => Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
};

const backgroundColorChange = setInterval(backgroundInterval, 1000);
