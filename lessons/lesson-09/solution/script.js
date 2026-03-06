// Lektion 09 – Funktionen
// Musterlösung

// Aufgabe 1
function begrueßen(name) {
  console.log("Hallo, " + name + "!");
}
begrueßen("Anna");
begrueßen("Tom");
begrueßen("Max");

// Aufgabe 2
function berechneFlaeche(breite, hoehe) {
  return breite * hoehe;
}
let flaeche = berechneFlaeche(5, 8);
console.log(flaeche); // 40

// Aufgabe 3
function rabattPreis(preis, rabatt = 10) {
  return preis * (1 - rabatt / 100);
}
console.log(rabattPreis(100));     // 90 (10% Rabatt)
console.log(rabattPreis(100, 20)); // 80 (20% Rabatt)

// Aufgabe 4
const verdoppeln = (x) => x * 2;
const istGerade = (n) => n % 2 === 0;
const begruessung = (name) => `Hallo, ${name}!`;

console.log(verdoppeln(7));      // 14
console.log(istGerade(8));       // true
console.log(begruessung("Lisa")); // "Hallo, Lisa!"

// Aufgabe 5 (Bonus)
const addieren = (a, b) => a + b;
const subtrahieren = (a, b) => a - b;
const multiplizieren = (a, b) => a * b;
const dividieren = (a, b) => a / b;

console.log(addieren(10, 5));      // 15
console.log(subtrahieren(10, 5));  // 5
console.log(multiplizieren(10, 5)); // 50
console.log(dividieren(10, 5));    // 2
