const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const tableContainer = document.getElementById("table-container");

const table = document.createElement("table");

const headerRow = table.createTHead().insertRow();
for (const key in singers[0]) {
  const th = document.createElement("th");
  th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  headerRow.appendChild(th);
}

const tbody = table.createTBody();
singers.forEach((singer) => {
  const row = tbody.insertRow();
  for (const key in singer) {
    const cell = row.insertCell();
    if (key === "period_active") {
      const periodActive = singer[key];
      const periodString = `${periodActive.start} - ${periodActive.end}`;
      cell.textContent = periodString;
    } else {
      cell.textContent = singer[key];
    }
  }
});

tableContainer.appendChild(table);
