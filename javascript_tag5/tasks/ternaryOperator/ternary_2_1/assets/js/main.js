let output = document.querySelector("#output");
let errorMSG = document.querySelector("#error");

function sendMsg(event) {
  event.preventDefault();
  let userMSG = document.querySelector("#message").value;

  let check =
    userMSG != ""
      ? (() => {
          output.innerHTML = userMSG;
        })()
      : (() => {
          output.innerHTML = "";
          errorMSG.innerHTML = "please write a msg";
        })();
}
