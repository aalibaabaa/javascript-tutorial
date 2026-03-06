// Lektion 06 – Objekte
// Musterlösung

// Aufgabe 1
let meinProfil = {
  name: "Anna",
  alter: 17,
  stadt: "Berlin",
  hobbys: ["Lesen", "Programmieren"],
  istSchueler: true
};
console.log(meinProfil.name);
console.log(meinProfil.alter);
console.log(meinProfil.stadt);
console.log(meinProfil.hobbys);
console.log(meinProfil.istSchueler);

// Aufgabe 2
meinProfil.alter = 18;
meinProfil.email = "anna@beispiel.de";
delete meinProfil.email;
console.log(meinProfil);

// Aufgabe 3
let buch = {
  titel: "Der kleine Prinz",
  autor: "Antoine de Saint-Exupéry",
  erscheinungsjahr: 1943,
  beschreiben: function() {
    return `${this.titel} von ${this.autor} (${this.erscheinungsjahr})`;
  }
};
console.log(buch.beschreiben());

// Aufgabe 4
let fruchtpreise = {
  Apfel: 0.99,
  Banane: 0.49,
  Kirsche: 2.99,
  Mango: 1.79
};
for (let frucht in fruchtpreise) {
  console.log(`${frucht} kostet ${fruchtpreise[frucht]} Euro`);
}

// Aufgabe 5 (Bonus)
let student = {
  name: "Max",
  adresse: {
    strasse: "Hauptstraße 5",
    plz: "20095",
    stadt: "Hamburg"
  }
};
console.log(student.adresse.stadt); // "Hamburg"
