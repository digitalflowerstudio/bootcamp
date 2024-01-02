let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let Metall = [];

edelMetallPreise.forEach((el) => {
  Metall.push(el.name);
});

console.log(Metall);

let mapMetall = edelMetallPreise.map((el) => {
  return el.name;
});

console.log(mapMetall);

let preiseGram = edelMetallPreise.map((el) => {
  return el.preiseGramEuro;
});

console.log(preiseGram);

let veraenderung = edelMetallPreise.map((el) => {
  return el.veraenderung;
});

console.log(veraenderung);

let bigEnough = (value) => {
  return value >= 50;
};

const filteredPrices = preiseGram.filter(bigEnough);

console.log(filteredPrices);

// Table erstellen

const table = document.createElement("table");
table.style.borderCollapse = "collapse";

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Name", "Preise (Gram/Euro)", "Veraenderung"];

headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.appendChild(document.createTextNode(headerText));
  th.style.textAlign = "left";
  th.style.border = "1px solid black";
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

edelMetallPreise.forEach((metall) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.appendChild(document.createTextNode(metall.name));
  nameCell.style.border = "1px solid black";
  row.appendChild(nameCell);

  const preiseCell = document.createElement("td");
  preiseCell.appendChild(document.createTextNode(metall.preiseGramEuro));
  preiseCell.style.border = "1px solid black";
  row.appendChild(preiseCell);

  const veraenderungCell = document.createElement("td");
  veraenderungCell.appendChild(document.createTextNode(metall.veraenderung));
  veraenderungCell.style.border = "1px solid black";
  row.appendChild(veraenderungCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
