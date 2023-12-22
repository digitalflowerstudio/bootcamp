// neues thema

const allArticle = document.querySelectorAll("#my-article"); // gibt nodelist zurücl
const allInfo = document.querySelectorAll(".infoText"); //gibt nodelist zurück
console.log(allInfo);

const myFirstChild = allInfo[0];
console.log(myFirstChild.textContent);

allInfo[1].style.color = "purple";

allInfo.forEach((pTag) => {
  pTag.style.color = "red";
});

const selectElement = document.querySelectorAll("#select-test");
selectElement[1].addEventListener("change", (event) => {
  console.log(event.target.value);
});

// spread operator
// das gehört zum array damit können wir eine version von unserem array kopieren und danach mit kopiertem version arbeiten

const ogArray = [1, 2, 3];
const copyOgArray = [...ogArray, 4];
console.log(copyOgArray);
