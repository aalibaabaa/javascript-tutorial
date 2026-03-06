// Lektion 14 – ES6+ Features
// Musterlösung

// Aufgabe 1
const verdreifachen = x => x * 3;
const begrueßen = name => `Hallo, ${name}!`;
const istUngerade = n => n % 2 !== 0;

console.log(verdreifachen(7));     // 21
console.log(begrueßen("Anna"));    // "Hallo, Anna!"
console.log(istUngerade(5));       // true

// Aufgabe 2
let auto = { marke: "BMW", modell: "3er", baujahr: 2021 };
let { marke, modell, baujahr } = auto;
console.log(marke, modell, baujahr); // BMW 3er 2021

let koordinaten = [48.1351, 11.5820];
let [breite, laenge] = koordinaten;
console.log(breite, laenge); // 48.1351 11.582

// Aufgabe 3
let norddeutschland = ["Hamburg", "Bremen", "Kiel"];
let sueddeutschland = ["München", "Stuttgart", "Nürnberg"];
let deutschland = [...norddeutschland, ...sueddeutschland];
console.log(deutschland);
let kopie = [...deutschland];
console.log(kopie);

// Aufgabe 4
let preise = [12.99, 4.99, 24.99, 7.49, 19.99];
let mitMwSt = preise.map(p => +(p * 1.19).toFixed(2));
let guenstig = preise.filter(p => p < 10);
let gesamtSumme = preise.reduce((sum, p) => sum + p, 0);

console.log(mitMwSt);
console.log(guenstig);          // [4.99, 7.49]
console.log(gesamtSumme.toFixed(2)); // 70.45

// Aufgabe 5 (Bonus)
let benutzer1 = { name: "Anna", adresse: { stadt: "Berlin" } };
let benutzer2 = { name: "Tom" };

console.log(benutzer1?.adresse?.stadt); // "Berlin"
console.log(benutzer2?.adresse?.stadt); // undefined

let stadt1 = benutzer1?.adresse?.stadt ?? "Unbekannt";
let stadt2 = benutzer2?.adresse?.stadt ?? "Unbekannt";
console.log(stadt1); // "Berlin"
console.log(stadt2); // "Unbekannt"
