const text = "Susi is back from codingschool'";

let output = document.querySelector(".output");

let var1 = text.substring(0, 4);
let var2 = text.substring(5, 7);
let var3 = text.substring(24, 30);

output.innerHTML = `${var1}<br>${var2}<br>${var3}<br>${var1} ${var2} ${var3}`;
