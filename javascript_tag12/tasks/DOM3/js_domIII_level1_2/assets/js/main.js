const changeColor = () => {
  const items = document.getElementsByClassName("example");
  const itemsArr = Array.from(items);
  itemsArr.forEach((item) => {
    let currentColor = item.style.backgroundColor;
    if (currentColor === "") {
      item.style.backgroundColor = "darkgrey";
    } else if ((currentColor = "darkgrey")) {
      item.style.backgroundColor = "";
    }
  });
};
