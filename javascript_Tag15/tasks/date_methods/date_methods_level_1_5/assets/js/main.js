const nameVomMonat = (dateInput) => {
  const date = new Date(dateInput);
  const monthName = date.toLocaleDateString("de", { month: "long" });
  return monthName;
};

console.log(nameVomMonat("2001-3-4")); // März
console.log(nameVomMonat("2019-12-24")); // Dezember
console.log(nameVomMonat("1410-07-15")); // Juli im Mittelalter
