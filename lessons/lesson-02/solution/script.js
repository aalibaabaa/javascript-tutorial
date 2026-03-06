// Lektion 02 – Variablen & Datentypen
// Musterlösung

// Aufgabe 1: Variablen deklarieren
let vorname = "Anna";
let alter = 17;
const geburtsstadt = "Berlin";
console.log(vorname);      // "Anna"
console.log(alter);        // 17
console.log(geburtsstadt); // "Berlin"

// Aufgabe 2: Datentypen mit typeof prüfen
let text = "Hallo";
let zahl = 42;
let wahrheit = true;
console.log(typeof text);    // "string"
console.log(typeof zahl);    // "number"
console.log(typeof wahrheit); // "boolean"

// Aufgabe 3: Variablen verändern
let punkte = 0;
punkte = 10;
console.log(punkte); // 10
punkte = punkte + 5;
console.log(punkte); // 15

// Aufgabe 4: const vs. let
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable.
console.log(PI);

// Aufgabe 5 (Bonus): Selbstbeschreibung
let hobby = "Programmieren";
let wohnort = "München";
console.log(`Ich heiße ${vorname}, bin ${alter} Jahre alt und lebe in ${wohnort}.`);
