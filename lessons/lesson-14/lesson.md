# Lektion 14 – ES6+ Features

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-14\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Moderne JavaScript-Features |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 15 |

---

## Arrow Functions

```javascript
// Klassisch
function addieren(a, b) { return a + b; }

// Arrow Function
const addieren = (a, b) => a + b;
const quadrat = x => x * x; // Ein Parameter: keine Klammern nötig
const hallo = () => console.log("Hallo!"); // Keine Parameter
```

---

## Template Literals

```javascript
let name = "Anna";
let alter = 17;
console.log(`Ich heiße ${name} und bin ${alter} Jahre alt.`);

// Mehrzeilig
let html = `
  <div>
    <h1>${name}</h1>
    <p>Alter: ${alter}</p>
  </div>
`;
```

---

## Destructuring

```javascript
// Array Destructuring
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Objekt Destructuring
let person = { name: "Anna", alter: 17, stadt: "Berlin" };
let { name, alter } = person;
console.log(name, alter); // "Anna" 17

// Mit Umbenennung
let { name: vorname } = person;
console.log(vorname); // "Anna"
```

---

## Spread-Operator (`...`)

```javascript
// Arrays zusammenführen
let a = [1, 2, 3];
let b = [4, 5, 6];
let zusammen = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// Objekte zusammenführen
let basis = { name: "Anna", alter: 17 };
let erweitert = { ...basis, stadt: "Berlin" };
```

---

## Rest-Parameter (`...`)

```javascript
function summe(...zahlen) {
  return zahlen.reduce((a, b) => a + b, 0);
}

console.log(summe(1, 2, 3, 4, 5)); // 15
```

---

## Kurzschreibweise für Objekte

```javascript
let name = "Anna";
let alter = 17;

// Alt
let person = { name: name, alter: alter };

// Neu (Kurzschreibweise)
let person = { name, alter };
```

---

## Optional Chaining (`?.`)

```javascript
let benutzer = {
  profil: {
    name: "Anna"
  }
};

console.log(benutzer?.profil?.name);   // "Anna"
console.log(benutzer?.adresse?.stadt); // undefined (kein Fehler!)
```

---

## Nullish Coalescing (`??`)

```javascript
let name = null;
let anzeigeName = name ?? "Gast";
console.log(anzeigeName); // "Gast"

let alter = 0;
let anzeigenAlter = alter ?? 18;
console.log(anzeigenAlter); // 0 (0 ist kein null/undefined)
```

---

## Array-Methoden: map, filter, reduce

```javascript
let zahlen = [1, 2, 3, 4, 5];

// map: Jeden Wert transformieren
let verdoppelt = zahlen.map(x => x * 2); // [2, 4, 6, 8, 10]

// filter: Werte filtern
let gerade = zahlen.filter(x => x % 2 === 0); // [2, 4]

// reduce: Zu einem Wert zusammenfassen
let summe = zahlen.reduce((acc, x) => acc + x, 0); // 15
```

---

## Zusammenfassung

- [ ] Arrow Functions: `(a, b) => a + b`
- [ ] Template Literals: `` `${variable}` ``
- [ ] Destructuring: `let { name, alter } = person`
- [ ] Spread: `[...a, ...b]` / Rest: `(...args) => {}`
- [ ] Optional Chaining: `obj?.property`
- [ ] Nullish Coalescing: `value ?? default`
- [ ] Array-Methoden: `map`, `filter`, `reduce`
