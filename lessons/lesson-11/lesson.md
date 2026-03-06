# Lektion 11 – Events

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-11\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Events und Event-Listener |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 12 |

---

## Was sind Events?

Events (Ereignisse) sind Aktionen, die im Browser auftreten – z. B. ein Klick, eine Tastatureingabe oder das Laden der Seite.

---

## Event-Listener hinzufügen

```javascript
let button = document.getElementById("mein-button");

button.addEventListener("click", function() {
  console.log("Button wurde geklickt!");
});
```

---

## Das Event-Objekt

```javascript
button.addEventListener("click", function(event) {
  console.log(event.type);   // "click"
  console.log(event.target); // Das geklickte Element
});
```

---

## Häufige Event-Typen

| Event | Beschreibung |
|-------|--------------|
| `click` | Mausklick |
| `dblclick` | Doppelklick |
| `mouseover` | Maus fährt über Element |
| `mouseout` | Maus verlässt Element |
| `keydown` | Taste wird gedrückt |
| `keyup` | Taste wird losgelassen |
| `input` | Eingabe in ein Textfeld |
| `change` | Wert eines Feldes ändert sich |
| `submit` | Formular wird abgeschickt |
| `load` | Seite oder Element wurde geladen |

---

## Tastatur-Events

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Taste gedrückt: " + event.key);
});
```

---

## Maus-Events

```javascript
let bereich = document.getElementById("bereich");

bereich.addEventListener("mouseover", function() {
  bereich.style.backgroundColor = "yellow";
});

bereich.addEventListener("mouseout", function() {
  bereich.style.backgroundColor = "";
});
```

---

## Event-Listener entfernen

```javascript
function meineHandlerFunktion() {
  console.log("Geklickt!");
}

button.addEventListener("click", meineHandlerFunktion);
button.removeEventListener("click", meineHandlerFunktion);
```

---

## Zusammenfassung

- [ ] Events reagieren auf Benutzeraktionen.
- [ ] `addEventListener("event", funktion)` registriert einen Event-Listener.
- [ ] Das Event-Objekt liefert Informationen über das Ereignis.
- [ ] Häufige Events: `click`, `input`, `keydown`, `mouseover`, `submit`.
