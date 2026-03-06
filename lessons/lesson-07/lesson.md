# Lektion 07 – Kontrollfluss (if/else)

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-07\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: if, else, else if, switch |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 08 |

---

## if / else

Mit `if` kannst du Code nur ausführen, wenn eine Bedingung erfüllt ist.

```javascript
let alter = 17;

if (alter >= 18) {
  console.log("Du darfst eintreten.");
} else {
  console.log("Du bist noch nicht volljährig.");
}
// Ausgabe: Du bist noch nicht volljährig.
```

---

## else if

```javascript
let punkte = 75;

if (punkte >= 90) {
  console.log("Sehr gut");
} else if (punkte >= 75) {
  console.log("Gut");
} else if (punkte >= 60) {
  console.log("Befriedigend");
} else {
  console.log("Nicht bestanden");
}
// Ausgabe: Gut
```

---

## switch

`switch` eignet sich gut, wenn du viele exakte Werte prüfen möchtest:

```javascript
let tag = "Montag";

switch (tag) {
  case "Montag":
    console.log("Start der Woche!");
    break;
  case "Freitag":
    console.log("Bald Wochenende!");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Wochenende!");
    break;
  default:
    console.log("Ein normaler Tag.");
}
```

---

## Ternärer Operator

Kurzform für einfache if/else:

```javascript
let alter = 20;
let status = alter >= 18 ? "Erwachsener" : "Minderjähriger";
console.log(status); // "Erwachsener"
```

---

## Truthy und Falsy

In JavaScript gelten diese Werte als **falsy** (wie `false`):
- `false`, `0`, `""`, `null`, `undefined`, `NaN`

Alle anderen Werte gelten als **truthy**:

```javascript
if ("Hallo") {
  console.log("Strings sind truthy"); // wird ausgeführt
}
if (0) {
  console.log("0 ist falsy"); // wird NICHT ausgeführt
}
```

---

## Zusammenfassung

- [ ] `if` führt Code aus, wenn eine Bedingung `true` ist.
- [ ] `else if` prüft eine weitere Bedingung.
- [ ] `else` wird ausgeführt, wenn keine Bedingung zutrifft.
- [ ] `switch` eignet sich für viele exakte Wertvergleiche.
- [ ] Der ternäre Operator `? :` ist eine Kurzform für if/else.
