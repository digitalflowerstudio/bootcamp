const text = "Susi is going to codingschool";

let output = document.querySelector(".output");

let var1 = text.slice(0, 4);
let var2 = text.slice(5, 7);
let var3 = text.slice(5, 16);
let var4 = text.slice(-6);
output.innerHTML = `${var1}<br>${var2}<br>${var3} ${var4}<br>${var4}<br>${var1} ${var2} ${var4}`;
