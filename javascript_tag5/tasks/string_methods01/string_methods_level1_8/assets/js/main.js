const text1 = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";

let output = document.querySelector(".output");

let school = text1.slice(-6);
console.log(school);

let going = text1.slice(4, 15);
console.log(going);

let sam = text1.slice(0, 4);
console.log(sam);

output.innerHTML = `${sam} ${going} ${school.concat(
  " and to the movie theater"
)}<br>${sam} ${going.concat(
  " the movie theater"
)}<br>${susi} ${and} ${sam.concat(
  " are going to"
)} ${school}<br>${susi} ${and} ${sam.concat(
  " are going to gym and to the movie theater"
)}<br>${susi.concat(" is going to school and to the movie theater")}`;
