// Lektion 04 – Strings
// Musterlösung

// Aufgabe 1
let begruessung = "Hallo, JavaScript!";
console.log(begruessung.length);       // 18
console.log(begruessung.toUpperCase()); // "HALLO, JAVASCRIPT!"
console.log(begruessung.toLowerCase()); // "hallo, javascript!"

// Aufgabe 2
let vorname = "Anna";
let alter = 17;
let hobbys = "Programmieren";
console.log(`Ich heiße ${vorname}, bin ${alter} und mag ${hobbys}.`);

// Aufgabe 3
let satz = "Der schnelle braune Fuchs springt.";
console.log(satz.includes("Fuchs"));  // true
console.log(satz.indexOf("braune"));  // 14
console.log(satz.slice(20, 25));      // "Fuchs"
console.log(satz.replace("Fuchs", "Hund")); // "Der schnelle braune Hund springt."

// Aufgabe 4
let vollname = "  anna müller  ";
let bereinigt = vollname.trim();
let formatiert = bereinigt.charAt(0).toUpperCase() + bereinigt.slice(1);
console.log(formatiert); // "Anna müller"

// Aufgabe 5 (Bonus)
let einkaufsliste = "Äpfel,Bananen,Milch,Brot";
let items = einkaufsliste.split(",");
console.log(items[0]); // Äpfel
console.log(items[1]); // Bananen
console.log(items[2]); // Milch
console.log(items[3]); // Brot
