# Lektion 08 – Schleifen

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-08\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: for, while, do-while, forEach |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 09 |

---

## Die for-Schleife

Die `for`-Schleife wird verwendet, wenn du weißt, wie oft der Code ausgeführt werden soll:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Durchlauf: " + i);
}
// Durchlauf: 0, 1, 2, 3, 4
```

**Struktur:** `for (Startwert; Bedingung; Schritt)`

---

## Rückwärts zählen

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// 5, 4, 3, 2, 1
```

---

## Arrays mit for durchlaufen

```javascript
let fruechte = ["Apfel", "Banane", "Kirsche"];

for (let i = 0; i < fruechte.length; i++) {
  console.log(fruechte[i]);
}
```

---

## Die while-Schleife

Die `while`-Schleife läuft, solange die Bedingung `true` ist:

```javascript
let zahl = 1;

while (zahl <= 5) {
  console.log(zahl);
  zahl++;
}
// 1, 2, 3, 4, 5
```

---

## Die do-while-Schleife

`do-while` wird mindestens einmal ausgeführt:

```javascript
let eingabe;

do {
  eingabe = prompt("Gib eine Zahl größer als 0 ein:");
} while (eingabe <= 0);

console.log("Deine Zahl: " + eingabe);
```

---

## forEach

`forEach` ist die modernere Art, Arrays zu durchlaufen:

```javascript
let zahlen = [10, 20, 30, 40];

zahlen.forEach(function(zahl) {
  console.log(zahl * 2);
});
// 20, 40, 60, 80
```

---

## for...of

```javascript
let farben = ["Rot", "Grün", "Blau"];

for (let farbe of farben) {
  console.log(farbe);
}
```

---

## break und continue

```javascript
// break: Schleife sofort beenden
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue: Aktuellen Durchlauf überspringen
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}
```

---

## Zusammenfassung

- [ ] `for`: wenn du die Anzahl der Durchläufe kennst.
- [ ] `while`: wenn du nicht weißt, wie oft die Schleife laufen soll.
- [ ] `forEach`: zum Durchlaufen von Arrays.
- [ ] `for...of`: moderne Art, Iterables zu durchlaufen.
- [ ] `break` beendet die Schleife; `continue` überspringt den aktuellen Durchlauf.
