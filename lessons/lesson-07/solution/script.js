// Lektion 07 – Kontrollfluss (if/else)
// Musterlösung

// Aufgabe 1
let alter = 17;
if (alter >= 18) {
  console.log("Du darfst eintreten.");
} else {
  console.log("Du bist noch nicht volljährig.");
}

// Aufgabe 2
let punkte = 75;
if (punkte >= 90) {
  console.log("Sehr gut");
} else if (punkte >= 75) {
  console.log("Gut");
} else if (punkte >= 60) {
  console.log("Befriedigend");
} else if (punkte >= 50) {
  console.log("Ausreichend");
} else {
  console.log("Nicht bestanden");
}

// Aufgabe 3
let tag = "Mittwoch";
switch (tag) {
  case "Samstag":
  case "Sonntag":
    console.log("Wochenende!");
    break;
  default:
    console.log("Werktag");
}

// Aufgabe 4
let temperatur = 22;
let wetter = temperatur >= 20 ? "Warm" : "Kalt";
console.log(wetter); // "Warm"

// Aufgabe 5 (Bonus): FizzBuzz
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
