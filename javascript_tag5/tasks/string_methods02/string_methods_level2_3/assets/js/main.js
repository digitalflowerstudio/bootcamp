function highlightText() {
  let searchTerm = document.getElementById("search-input").value;
  let articleContent = document.getElementById("article").innerHTML;

  // RegExp ist eine regular expression. Man kann ihr flas geben. gi steht für global und i - das heisst es such nach allen instanzen des suchbegriffs und i bedeutet, dass es case INsensitiv ist, das heisst es ist egal ob groß oder klein
  let regex = new RegExp(searchTerm, "gi");
  // jede instanz des suchbegriffes wird als argument match gespeichert und dann via return in einen span gepackt mit dem style highlight aus der css,
  let highlightedContent = articleContent.replace(regex, function (match) {
    return '<span class="highlight">' + match + "</span>";
  });

  //alle matches werden dann in higlightedContent gespeichert und am ende können wir den ganzen text im article mit dem gehighlighteten text ersetzen
  document.getElementById("article").innerHTML = highlightedContent;
}
