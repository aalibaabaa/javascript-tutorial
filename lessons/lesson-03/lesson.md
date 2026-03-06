# Lektion 03 – Operatoren

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-03\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Operatoren in JavaScript |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 04 |

---

## Arithmetische Operatoren

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraktion: 7
console.log(a * b);  // Multiplikation: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulo (Rest): 1
console.log(a ** b); // Potenz: 1000
```

---

## Zuweisungsoperatoren

```javascript
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 4;  // x = x % 4 → 2
```

## Inkrement und Dekrement

```javascript
let zahl = 5;
zahl++;  // zahl = zahl + 1 → 6
zahl--;  // zahl = zahl - 1 → 5
```

---

## Vergleichsoperatoren

```javascript
console.log(5 == "5");   // true  (nur Wert, NICHT empfohlen)
console.log(5 === "5");  // false (Wert UND Typ)
console.log(5 !== 3);    // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false
```

> **Tipp:** Verwende immer `===` statt `==`!

---

## Logische Operatoren

```javascript
let a = true;
let b = false;

console.log(a && b); // UND: false (beide müssen true sein)
console.log(a || b); // ODER: true (mindestens eines muss true sein)
console.log(!a);     // NICHT: false (dreht um)
```

---

## String-Verkettung (Konkatenation)

```javascript
let vorname = "Anna";
let nachname = "Müller";
let vollname = vorname + " " + nachname;
console.log(vollname); // "Anna Müller"
```

---

## Zusammenfassung

- [ ] Arithmetische Operatoren: `+`, `-`, `*`, `/`, `%`, `**`
- [ ] Zuweisungsoperatoren: `+=`, `-=`, `*=`, `/=`
- [ ] Vergleichsoperatoren: `===`, `!==`, `>`, `<`, `>=`, `<=`
- [ ] Logische Operatoren: `&&`, `||`, `!`
- [ ] Verwende `===` statt `==` für Vergleiche.
