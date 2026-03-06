# Lektion 15 – Styling & CSS-Integration

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-15\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: JavaScript und CSS kombinieren |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 16 |

---

## Inline-Styles mit JavaScript

```javascript
let box = document.getElementById("meine-box");
box.style.backgroundColor = "cornflowerblue";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "8px";
box.style.fontSize = "18px";
```

> **Hinweis:** CSS-Eigenschaften mit Bindestrich werden in camelCase geschrieben:  
> `background-color` → `backgroundColor`, `border-radius` → `borderRadius`

---

## CSS-Klassen dynamisch verwalten

```javascript
let element = document.querySelector(".karte");

// Klasse hinzufügen
element.classList.add("aktiv");

// Klasse entfernen
element.classList.remove("inaktiv");

// Klasse umschalten (toggle)
element.classList.toggle("sichtbar");

// Prüfen ob Klasse vorhanden
if (element.classList.contains("aktiv")) {
  console.log("Element ist aktiv");
}
```

---

## CSS-Variablen mit JavaScript

```css
/* In styles.css */
:root {
  --hauptfarbe: #3498db;
  --hintergrund: #f0f0f0;
}
```

```javascript
// CSS-Variable lesen
let wurzel = document.documentElement;
let farbe = getComputedStyle(wurzel).getPropertyValue("--hauptfarbe");
console.log(farbe.trim()); // "#3498db"

// CSS-Variable setzen
wurzel.style.setProperty("--hauptfarbe", "#e74c3c");
```

---

## Animationen mit JavaScript

```javascript
let box = document.getElementById("animierte-box");

// Klasse für Animation hinzufügen
box.addEventListener("click", function() {
  box.classList.add("animiert");

  // Nach Animation Klasse entfernen
  setTimeout(function() {
    box.classList.remove("animiert");
  }, 500);
});
```

---

## Dark Mode umschalten

```javascript
let darkModeButton = document.getElementById("dark-mode-btn");

darkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  let istDark = document.body.classList.contains("dark-mode");
  darkModeButton.textContent = istDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
```

---

## Zusammenfassung

- [ ] `element.style.property` setzt Inline-Stile (camelCase).
- [ ] `classList` verwaltet CSS-Klassen dynamisch.
- [ ] CSS-Variablen können mit `setProperty` gesetzt werden.
- [ ] `classList.toggle` schaltet Klassen um.
- [ ] JavaScript und CSS zusammen ermöglichen interaktive Designs.
