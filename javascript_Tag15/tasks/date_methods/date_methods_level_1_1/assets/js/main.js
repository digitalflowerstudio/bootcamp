const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);
const body = document.querySelector("body");
body.innerHTML = `<p>${date1} = <strong>new Date("September 2, 2019 09:00:00")</strong></p><p>${date2} = <strong>new Date("0)</strong></p><p>${date3} = <strong>new Date(31556908800)</strong></p><p>${date4} = <strong>new Date(86400000)</strong></p>`;
