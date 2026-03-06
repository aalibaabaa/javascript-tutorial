// Lektion 03 – Operatoren
// Musterlösung

// Aufgabe 1
let a = 15;
let b = 4;
console.log(a + b);  // 19
console.log(a - b);  // 11
console.log(a * b);  // 60
console.log(a / b);  // 3.75
console.log(a % b);  // 3
console.log(a ** b); // 50625

// Aufgabe 2
let punkte = 100;
punkte += 50;
console.log(punkte); // 150
punkte -= 30;
console.log(punkte); // 120
punkte *= 2;
console.log(punkte); // 240

// Aufgabe 3
console.log(10 === 10);   // true
console.log(10 === "10"); // false (unterschiedliche Typen)
console.log(25 > 30);     // false
console.log(5 <= 5);      // true

// Aufgabe 4
let istVolljährig = false;
let hatAusweis = true;
console.log(istVolljährig && hatAusweis); // false
console.log(istVolljährig || hatAusweis); // true

// Aufgabe 5 (Bonus)
let zahl1 = 20;
let zahl2 = 6;
console.log(zahl1 + zahl2); // 26
console.log(zahl1 - zahl2); // 14
console.log(zahl1 * zahl2); // 120
console.log(zahl1 / zahl2); // 3.333...
