# Lektion 06 – Objekte

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-06\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Objekte erstellen und verwenden |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 07 |

---

## Was sind Objekte?

Ein Objekt ist eine Sammlung von **Eigenschaften** (Properties). Jede Eigenschaft hat einen **Schlüssel** (Key) und einen **Wert** (Value).

```javascript
let person = {
  name: "Anna",
  alter: 17,
  stadt: "Berlin",
  istSchueler: true
};
```

---

## Eigenschaften abrufen

```javascript
// Punkt-Notation
console.log(person.name);  // "Anna"
console.log(person.alter); // 17

// Klammer-Notation
console.log(person["name"]);  // "Anna"
console.log(person["stadt"]); // "Berlin"
```

---

## Eigenschaften hinzufügen und ändern

```javascript
// Neue Eigenschaft hinzufügen
person.email = "anna@beispiel.de";

// Eigenschaft ändern
person.alter = 18;

console.log(person);
```

---

## Eigenschaften löschen

```javascript
delete person.email;
console.log(person.email); // undefined
```

---

## Methoden in Objekten

Objekte können auch Funktionen enthalten (Methoden):

```javascript
let auto = {
  marke: "VW",
  modell: "Golf",
  baujahr: 2020,
  beschreiben: function() {
    return `${this.marke} ${this.modell} (${this.baujahr})`;
  }
};

console.log(auto.beschreiben()); // "VW Golf (2020)"
```

---

## Objekte durchlaufen

```javascript
let person = { name: "Tom", alter: 20, stadt: "Hamburg" };

for (let schluessel in person) {
  console.log(schluessel + ": " + person[schluessel]);
}
// name: Tom
// alter: 20
// stadt: Hamburg
```

---

## Verschachtelte Objekte

```javascript
let schule = {
  name: "Muster-Gymnasium",
  adresse: {
    strasse: "Schulweg 1",
    plz: "10115",
    stadt: "Berlin"
  },
  schuelerZahl: 800
};

console.log(schule.adresse.stadt); // "Berlin"
```

---

## Zusammenfassung

- [ ] Objekte speichern Daten als Schlüssel-Wert-Paare.
- [ ] Eigenschaften abrufen mit `.` (Punkt-Notation) oder `[]` (Klammer-Notation).
- [ ] Eigenschaften können hinzugefügt, geändert und gelöscht werden.
- [ ] Objekte können Methoden (Funktionen) enthalten.
- [ ] Mit `for...in` kannst du alle Eigenschaften durchlaufen.
