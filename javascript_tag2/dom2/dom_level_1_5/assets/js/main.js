function showURL() {
    let currentURL = window.location.href;
    let showURL = document.getElementById('showURL')
    showURL.innerHTML += (`Die aktuelle URL ist ${currentURL}`)
}