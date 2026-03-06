# Lektion 09 – Funktionen

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-09\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Funktionen deklarieren und aufrufen |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 10 |

---

## Was sind Funktionen?

Funktionen sind wiederverwendbare Code-Blöcke, die eine bestimmte Aufgabe ausführen.

---

## Funktionsdeklaration

```javascript
function begrueßen(name) {
  console.log("Hallo, " + name + "!");
}

begrueßen("Anna"); // "Hallo, Anna!"
begrueßen("Tom");  // "Hallo, Tom!"
```

---

## Rückgabewert

```javascript
function addieren(a, b) {
  return a + b;
}

let ergebnis = addieren(3, 5);
console.log(ergebnis); // 8
```

---

## Standardparameter

```javascript
function begrueßen(name = "Gast") {
  console.log("Hallo, " + name + "!");
}

begrueßen();       // "Hallo, Gast!"
begrueßen("Anna"); // "Hallo, Anna!"
```

---

## Funktionsausdrücke

```javascript
const multiplizieren = function(a, b) {
  return a * b;
};

console.log(multiplizieren(4, 5)); // 20
```

---

## Arrow Functions (Pfeilfunktionen)

```javascript
const quadrat = (x) => x * x;
console.log(quadrat(4)); // 16

const addieren = (a, b) => {
  return a + b;
};
console.log(addieren(3, 7)); // 10
```

---

## Scope (Geltungsbereich)

```javascript
let global = "Ich bin global";

function testScope() {
  let lokal = "Ich bin lokal";
  console.log(global); // "Ich bin global" (zugänglich)
  console.log(lokal);  // "Ich bin lokal"
}

testScope();
// console.log(lokal); // FEHLER! lokal ist nicht verfügbar
```

---

## Funktionen als Argumente

```javascript
function fuehreAus(funktion) {
  funktion();
}

fuehreAus(function() {
  console.log("Ich wurde ausgeführt!");
});
```

---

## Zusammenfassung

- [ ] Funktionen werden mit `function` deklariert.
- [ ] Parameter sind Platzhalter für Werte beim Aufruf.
- [ ] `return` gibt einen Wert zurück.
- [ ] Arrow Functions sind eine kürzere Schreibweise: `(a, b) => a + b`.
- [ ] Variablen in Funktionen sind lokal (Scope).
