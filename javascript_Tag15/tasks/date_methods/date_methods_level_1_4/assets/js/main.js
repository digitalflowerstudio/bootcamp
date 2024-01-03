const tageImMonat = (jahr, monat) => new Date(jahr, monat, 0).getDate();

console.log(tageImMonat(2016, 1)); // 31
console.log(tageImMonat(2016, 2)); // 29 schaltjahr ole ole
console.log(tageImMonat(2017, 2)); // 28
console.log(tageImMonat(2017, 12)); // 31
