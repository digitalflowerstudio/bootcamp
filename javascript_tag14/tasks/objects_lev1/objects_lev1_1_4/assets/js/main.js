let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

neueHaustiere = [...unsereHaustiere];
console.log(neueHaustiere);

neueHaustiere[0].names[0] = "Pumpy";
neueHaustiere[0].names[1] = "Bucky";
neueHaustiere[0].names[2] = "Spike";

neueHaustiere[1].names[0] = "Luffy";
neueHaustiere[1].names[1] = "Zorro";
neueHaustiere[1].names[2] = "Nami";

console.log(neueHaustiere);
