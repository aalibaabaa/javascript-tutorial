# Lektion 04 – Strings

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-04\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Strings und ihre Methoden |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 05 |

---

## Was sind Strings?

Strings sind Zeichenketten (Text). Du kannst sie mit einfachen, doppelten oder Backtick-Anführungszeichen schreiben:

```javascript
let s1 = "Hallo";
let s2 = 'Welt';
let s3 = `Hallo Welt`; // Template Literal
```

---

## String-Eigenschaften

```javascript
let text = "JavaScript";
console.log(text.length); // 10 (Anzahl der Zeichen)
```

---

## Template Literals

```javascript
let name = "Anna";
let alter = 17;
console.log(`Ich heiße ${name} und bin ${alter} Jahre alt.`);
// "Ich heiße Anna und bin 17 Jahre alt."
```

---

## Wichtige String-Methoden

```javascript
let text = "Hallo, Welt!";

// Groß-/Kleinschreibung
console.log(text.toUpperCase()); // "HALLO, WELT!"
console.log(text.toLowerCase()); // "hallo, welt!"

// Teilstring suchen
console.log(text.includes("Welt")); // true
console.log(text.indexOf("Welt"));  // 7

// Teilstring extrahieren
console.log(text.slice(7, 11));  // "Welt"
console.log(text.slice(-1));     // "!"

// Ersetzen
console.log(text.replace("Welt", "JavaScript")); // "Hallo, JavaScript!"

// Aufteilen
let satz = "Anna,Tom,Max";
console.log(satz.split(","));    // ["Anna", "Tom", "Max"]

// Leerzeichen entfernen
let leer = "  Hallo  ";
console.log(leer.trim());        // "Hallo"

// Beginnt/endet mit
console.log(text.startsWith("Hallo")); // true
console.log(text.endsWith("!"));       // true
```

---

## Zeichen an bestimmter Position

```javascript
let wort = "Hallo";
console.log(wort[0]);         // "H" (Indexierung beginnt bei 0)
console.log(wort.charAt(1));  // "a"
console.log(wort[wort.length - 1]); // "o" (letztes Zeichen)
```

---

## Zusammenfassung

- [ ] Strings können mit `"`, `'` oder `` ` `` geschrieben werden.
- [ ] Template Literals erlauben Variablen mit `${variable}`.
- [ ] `length` gibt die Anzahl der Zeichen zurück.
- [ ] Wichtige Methoden: `toUpperCase`, `toLowerCase`, `includes`, `indexOf`, `slice`, `replace`, `split`, `trim`.
