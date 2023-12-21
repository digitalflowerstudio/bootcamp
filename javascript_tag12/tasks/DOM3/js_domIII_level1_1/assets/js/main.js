const myList = document.querySelector("#myList");

const addItem = () => {
  const inputItems = document.querySelector("#inputText").value;

  if (inputItems !== "") {
    const li = document.createElement("li");
    li.textContent = inputItems;
    myList.appendChild(li);
    document.querySelector("#inputText").value = "";
    return;
  } else {
    return;
  }
};
