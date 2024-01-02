let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return (
      "<p>Name:" +
      " " +
      this.vorname +
      " " +
      this.nachname +
      "</p>" +
      "<p>Alter:" +
      " " +
      this.alter +
      "</p>" +
      "<p>Familienstand:" +
      " " +
      this.familienstand +
      "</p>" +
      "<p>Groesse:" +
      " " +
      this.groesse +
      "</p>"
    );
  },
};

document.getElementById("person").innerHTML += person.profil();
