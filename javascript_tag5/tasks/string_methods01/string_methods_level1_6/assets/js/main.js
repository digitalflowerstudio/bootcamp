let text = "Sam is good at codingschool";

let output = document.querySelector(".output");

let school = text.slice(-6);
let good = text.slice(4, 14);
let sam = text.slice(0, 3);
let bad = good.replace("good", "bad");
let susi = sam.replace("Sam", "Susi");
let tennis = school.replace("school", "tennis");

output.innerHTML = `${sam} ${bad} ${school}<br>${susi} ${good} ${school}<br>${sam} ${good} ${tennis}`;
