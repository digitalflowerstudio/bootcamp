const baby = document.querySelector("#baby");
const gopnik = document.querySelector("#gopnik");
let richtung = 1; //1 gleich rechts rum, -1 gleich links rum
let isWalking = false;
let speed = 3; // startgeschwindigkeit
let tick;

let babyWalk = () => {
  isWalking = !isWalking;

  if (isWalking) {
    tick = setInterval(moveBaby, 16);
  } else {
    clearInterval(tick);
  }
};

let moveBaby = () => {
  const fensterBreite = window.innerWidth;
  const katzenBreite = baby.width;

  let aktuellePosition = parseInt(baby.style.left) || 0;

  if (aktuellePosition >= fensterBreite - katzenBreite && richtung === 1) {
    // Position an die rechte Bildschirmseite setzen
    baby.style.left = fensterBreite - katzenBreite + "px";

    // Richtungswechsel
    richtung = -1;
    baby.style.transform = `scaleX(${richtung})`;
  } else if (aktuellePosition <= 0 && richtung === -1) {
    // Set the position to 0 to avoid glitches
    baby.style.left = "0px";

    // Richtungswechsel
    richtung = 1;
    baby.style.transform = `scaleX(${richtung})`;
  } else {
    baby.style.left = aktuellePosition + richtung * speed + "px";
  }
};

let pause = () => {
  isWalking = !isWalking;

  if (isWalking) {
    tick = setInterval(moveBaby, 16);
  } else {
    clearInterval(tick);
  }
};

let turn = () => {
  richtung = richtung === 1 ? -1 : 1;
  baby.style.transform = `scaleX(${richtung})`;
};

let babySpeed = () => {
  if (isWalking) {
    speed = speed === 3 ? 10 : 3; //wechseln zwischen schnell und normal
  }
};
