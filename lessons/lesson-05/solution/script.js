// Lektion 05 – Arrays
// Musterlösung

// Aufgabe 1
let lieblingsfarben = ["Rot", "Blau", "Grün", "Lila"];
console.log(lieblingsfarben[0]);                       // "Rot"
console.log(lieblingsfarben[lieblingsfarben.length - 1]); // "Lila"
console.log(lieblingsfarben.length);                   // 4

// Aufgabe 2
lieblingsfarben.push("Orange");
console.log(lieblingsfarben); // [..., "Orange"]
lieblingsfarben.pop();
console.log(lieblingsfarben); // ohne "Orange"
lieblingsfarben.unshift("Schwarz");
console.log(lieblingsfarben); // ["Schwarz", ...]

// Aufgabe 3
let staedte = ["Berlin", "Hamburg", "München", "Köln", "Frankfurt"];
console.log(staedte.includes("München")); // true
console.log(staedte.indexOf("Hamburg"));  // 1
console.log(staedte.slice(0, 3));         // ["Berlin", "Hamburg", "München"]

// Aufgabe 4
let zahlen = [7, 2, 9, 1, 5, 3];
zahlen.sort((a, b) => a - b);
console.log(zahlen); // [1, 2, 3, 5, 7, 9]

// Aufgabe 5 (Bonus)
let einkaufsliste = [];
einkaufsliste.push("Äpfel");
einkaufsliste.push("Brot");
einkaufsliste.push("Milch");
einkaufsliste.push("Käse");
einkaufsliste.push("Eier");
einkaufsliste.forEach(function(produkt) {
  console.log(produkt);
});
einkaufsliste.shift();
console.log(einkaufsliste); // ohne "Äpfel"
