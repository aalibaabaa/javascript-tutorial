# Lektion 05 – Arrays

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-05\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Arrays erstellen und verwenden |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 06 |

---

## Was sind Arrays?

Ein Array ist eine geordnete Liste von Werten. Arrays können beliebige Datentypen enthalten.

```javascript
let fruechte = ["Apfel", "Banane", "Kirsche"];
let zahlen = [1, 2, 3, 4, 5];
let gemischt = ["Hallo", 42, true, null];
```

---

## Elemente abrufen (Index)

```javascript
let fruechte = ["Apfel", "Banane", "Kirsche"];
console.log(fruechte[0]); // "Apfel" (Index beginnt bei 0)
console.log(fruechte[1]); // "Banane"
console.log(fruechte[2]); // "Kirsche"
console.log(fruechte[fruechte.length - 1]); // "Kirsche" (letztes Element)
```

---

## Array-Eigenschaften und Methoden

```javascript
let farben = ["Rot", "Grün", "Blau"];

// Länge
console.log(farben.length); // 3

// Element hinzufügen (am Ende)
farben.push("Gelb");
console.log(farben); // ["Rot", "Grün", "Blau", "Gelb"]

// Element entfernen (am Ende)
farben.pop();
console.log(farben); // ["Rot", "Grün", "Blau"]

// Element hinzufügen (am Anfang)
farben.unshift("Schwarz");
console.log(farben); // ["Schwarz", "Rot", "Grün", "Blau"]

// Element entfernen (am Anfang)
farben.shift();
console.log(farben); // ["Rot", "Grün", "Blau"]

// Element suchen
console.log(farben.indexOf("Grün")); // 1
console.log(farben.includes("Rot")); // true

// Teilarray
console.log(farben.slice(0, 2)); // ["Rot", "Grün"]

// Sortieren
let zahlen = [3, 1, 4, 1, 5, 9, 2, 6];
zahlen.sort((a, b) => a - b);
console.log(zahlen); // [1, 1, 2, 3, 4, 5, 6, 9]

// Array umdrehen
farben.reverse();
console.log(farben); // ["Blau", "Grün", "Rot"]

// Arrays zusammenführen
let a = [1, 2];
let b = [3, 4];
let zusammen = a.concat(b);
console.log(zusammen); // [1, 2, 3, 4]
```

---

## Array durchlaufen

```javascript
let tiere = ["Hund", "Katze", "Vogel"];

// forEach
tiere.forEach(function(tier) {
  console.log(tier);
});

// for-Schleife
for (let i = 0; i < tiere.length; i++) {
  console.log(tiere[i]);
}
```

---

## Zusammenfassung

- [ ] Arrays speichern mehrere Werte in einer Variable.
- [ ] Index beginnt bei `0`.
- [ ] Methoden: `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes`, `slice`, `sort`, `reverse`, `concat`.
- [ ] Arrays können mit `forEach` oder `for` durchlaufen werden.
