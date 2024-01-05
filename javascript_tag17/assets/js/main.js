// API

// json = javascript object notation

// pending: request done, but no answer yet
// fulfilled: request done, answer received
// rejected: request done and denied

// fetch promises
// then daten bekommen - return response json
// then daten nicht bekommen -  return error
// then daten verarbeiten

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.products);
    const productsAusDemJson = data.products;
    console.log(productsAusDemJson);
    productsAusDemJson.forEach((product) => {
      const productTitle = product.title;
      const productDescr = product.description;
      const productImg = product.images[0];
      const productPrice = product.price;
      const productId = product.id;
      let productItem = document.createElement("div");
      let h2 = document.createElement("h2");
      h2.textContent = productTitle;
      productItem.appendChild(h2);
      const img = document.createElement("img");
      img.setAttribute("src", productImg);
      img.setAttribute("alt", productTitle);
      productItem.appendChild(img);
      let moreInfoBtn = document.createElement("button");
      moreInfoBtn.textContent = "More Information";
      moreInfoBtn.addEventListener("click", () => {
        fetch(`https://dummyjson.com/products/${productId}`)
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      });
      productItem.appendChild(moreInfoBtn);
      document.querySelector("#products").appendChild(productItem);
    });
  })
  .catch((error) => console.log("Die Küche brennt!", error));

// response muss immer zu json umgewandelt werden

// local fetch

fetch("./assets/data/fakeData.json")
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
