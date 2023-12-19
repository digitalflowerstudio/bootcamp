let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let cleanData = (input) => {
  return input.map((item) => {
    const punktIndex = item.indexOf(".");
    return punktIndex !== -1 ? item.slice(0, punktIndex) : "invalid";
  });
};

console.log(cleanData(album));
