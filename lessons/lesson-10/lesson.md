# Lektion 10 – DOM-Manipulation

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-10\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Was ist das DOM? Elemente auswählen und verändern |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 11 |

---

## Was ist das DOM?

Das **Document Object Model (DOM)** ist eine Baumstruktur, die den Inhalt einer HTML-Seite als JavaScript-Objekte darstellt. Mit JavaScript kannst du das DOM verändern.

---

## Elemente auswählen

```javascript
// Einzelnes Element nach ID
let ueberschrift = document.getElementById("meine-id");

// Erstes Element nach CSS-Selektor
let absatz = document.querySelector(".meine-klasse");

// Alle Elemente nach CSS-Selektor
let alle = document.querySelectorAll("p");

// Alle Elemente nach Klasse
let klasseListe = document.getElementsByClassName("meine-klasse");

// Alle Elemente nach Tag-Name
let alleAbsaetze = document.getElementsByTagName("p");
```

---

## Inhalte ändern

```javascript
let element = document.getElementById("titel");

// Textinhalt ändern (nur Text, kein HTML)
element.textContent = "Neuer Titel";

// HTML-Inhalt ändern (kann HTML enthalten)
element.innerHTML = "<strong>Neuer Titel</strong>";
```

---

## Attribute ändern

```javascript
let bild = document.getElementById("mein-bild");
bild.src = "neues-bild.jpg";
bild.alt = "Ein neues Bild";

let link = document.querySelector("a");
link.href = "https://example.com";
```

---

## Stile ändern

```javascript
let box = document.getElementById("meine-box");
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.fontSize = "20px";
box.style.padding = "10px";
```

---

## Klassen hinzufügen und entfernen

```javascript
let element = document.getElementById("mein-element");
element.classList.add("aktiv");
element.classList.remove("inaktiv");
element.classList.toggle("versteckt"); // Hinzufügen oder Entfernen je nach Status
console.log(element.classList.contains("aktiv")); // true
```

---

## Neue Elemente erstellen

```javascript
// Element erstellen
let neuerAbsatz = document.createElement("p");
neuerAbsatz.textContent = "Ich bin neu!";

// Zum DOM hinzufügen
document.body.appendChild(neuerAbsatz);
```

---

## Elemente entfernen

```javascript
let element = document.getElementById("loeschen");
element.remove();
```

---

## Zusammenfassung

- [ ] Das DOM repräsentiert HTML als Objekte.
- [ ] Elemente auswählen: `getElementById`, `querySelector`, `querySelectorAll`.
- [ ] Inhalte ändern: `textContent`, `innerHTML`.
- [ ] Stile ändern: `element.style.property`.
- [ ] Klassen: `classList.add`, `remove`, `toggle`, `contains`.
- [ ] Elemente erstellen: `createElement`, `appendChild`.
