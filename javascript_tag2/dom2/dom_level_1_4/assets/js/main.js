document.getElementById("info").innerHTML =
  "<h1>Hello World</h1>" + "<h2>How are you?</h2>";

document.getElementById("container").innerHTML = "<p>start of the element</p>";

function magic() {
  let outPut = document.getElementById("myText").value;
  document.getElementById("wurst").innerHTML = outPut;
}

function moreMagic() {
  let hahEinsss = (document.getElementById("wurst").innerHTML +=
    "<h1>WURSTSALAT IST EINE H1</h1>" + '<br>');
}

function thePowerOfNow() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.getElementById(
    "wurst"
  ).innerHTML += `<br>zeit und tag ist ${currentDateTime}`;
}

function funcyTime() {
  magic();
  thePowerOfNow();
  moreMagic();
}
