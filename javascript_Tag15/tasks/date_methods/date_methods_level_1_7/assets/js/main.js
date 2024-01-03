const weekendChecker = (dateInput) => {
  const [monat, tag, jahr] = dateInput.split(".").map(Number);
  const datumObject = new Date(jahr, monat - 1, tag);
  const tagDerWoche = datumObject.getDay();

  return tagDerWoche > 0 && tagDerWoche < 6
    ? "Wochentag :(((((("
    : "Wochenende Baby!!!!";
};

console.log(weekendChecker("12.15.2019"));
console.log(weekendChecker("2.16.2001"));
console.log(weekendChecker("2.1.2020"));
console.log(weekendChecker("2.29.2020"));
