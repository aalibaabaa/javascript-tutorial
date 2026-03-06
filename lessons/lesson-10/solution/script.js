// Lektion 10 – DOM-Manipulation
// Musterlösung

// Aufgabe 1
let titel = document.getElementById("titel");
titel.textContent = "JavaScript ist toll!";

// Aufgabe 2
let inhalt = document.getElementById("inhalt");
inhalt.style.backgroundColor = "lightblue";
inhalt.style.fontSize = "18px";

// Aufgabe 3
let box = document.getElementById("box");
box.classList.add("hervorgehoben");
console.log(box.classList.contains("hervorgehoben")); // true

// Aufgabe 4
let neuerEintrag = document.createElement("li");
neuerEintrag.textContent = "Neuer Eintrag";
document.getElementById("meine-liste").appendChild(neuerEintrag);

// Aufgabe 5 (Bonus)
let alleAbsaetze = document.querySelectorAll("p");
alleAbsaetze.forEach(function(absatz) {
  absatz.style.color = "darkblue";
});
