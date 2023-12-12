const text = "Sam is going to codingschool";
let output = document.querySelector(".output");

let sam = text.slice(0, 4);
console.log(sam);
let school = text.slice(-6);
console.log(school);
let schoolUp = school.toUpperCase();
let going = text.slice(4, 15);
console.log(going);
let SAM = sam.toUpperCase();
console.log(SAM);
let samLower = SAM.toLocaleLowerCase();
console.log(samLower);
let GOING = going.toUpperCase();
console.log(GOING);
let case1 = going.replace("is going to", "Is Going To");
let case2 = school.replace("school", "School");

output.innerHTML = `${SAM} ${going} ${schoolUp}<br>${samLower} ${GOING} ${school}<br>${sam} ${case1} ${case2}`;
