# Lektion 02 – Variablen & Datentypen

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-02\`  
**Dauer:** 90 Minuten

---

## Was sind Variablen?

Variablen sind Behälter, die Werte speichern. In JavaScript gibt es drei Schlüsselwörter zur Variablendeklaration:

| Schlüsselwort | Beschreibung |
|---------------|--------------|
| `let` | Variable, die verändert werden kann (empfohlen) |
| `const` | Konstante, die nicht verändert werden kann |
| `var` | Alte Schreibweise (wird nicht mehr empfohlen) |

```javascript
let alter = 17;
const name = "Anna";
var stadt = "Berlin"; // veraltet
```

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Variablen und Datentypen |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 03 |

---

## Datentypen in JavaScript

### 1. String (Text)

```javascript
let name = "Anna";
let begruessung = 'Hallo!';
let satz = `Ich heiße ${name}`; // Template Literal
```

### 2. Number (Zahl)

```javascript
let alter = 17;
let preis = 9.99;
let temperatur = -5;
```

### 3. Boolean (Wahrheitswert)

```javascript
let istAngemeldet = true;
let hatBezahlt = false;
```

### 4. Undefined

```javascript
let x; // wurde deklariert, aber kein Wert zugewiesen
console.log(x); // undefined
```

### 5. Null

```javascript
let ergebnis = null; // kein Wert vorhanden (absichtlich leer)
```

---

## Typen prüfen mit `typeof`

```javascript
let zahl = 42;
let text = "Hallo";
let wahrheit = true;

console.log(typeof zahl);    // "number"
console.log(typeof text);    // "string"
console.log(typeof wahrheit); // "boolean"
```

---

## Werte verändern

```javascript
let punkte = 0;
punkte = 10;         // Zuweisung
punkte = punkte + 5; // Erhöhen
console.log(punkte); // 15

const MAX = 100;
// MAX = 200; // FEHLER! const kann nicht verändert werden
```

---

## Zusammenfassung

- [ ] `let` deklariert eine veränderliche Variable.
- [ ] `const` deklariert eine unveränderliche Konstante.
- [ ] Die wichtigsten Datentypen sind: `string`, `number`, `boolean`, `undefined`, `null`.
- [ ] Mit `typeof` kannst du den Typ einer Variable prüfen.
