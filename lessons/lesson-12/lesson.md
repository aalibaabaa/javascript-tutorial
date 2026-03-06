# Lektion 12 – Formulare

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-12\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Formulare mit JavaScript verarbeiten |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 13 |

---

## Formulardaten lesen

```javascript
let nameInput = document.getElementById("name");
let wert = nameInput.value;
console.log(wert);
```

---

## Formular-Submit verarbeiten

```javascript
let formular = document.getElementById("mein-formular");

formular.addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das Standard-Senden des Formulars

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  console.log("Name: " + name);
  console.log("E-Mail: " + email);
});
```

---

## Eingaben validieren

```javascript
formular.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();

  if (name === "") {
    document.getElementById("fehler").textContent = "Bitte gib deinen Namen ein.";
    return;
  }

  document.getElementById("fehler").textContent = "";
  console.log("Formular abgeschickt: " + name);
});
```

---

## Verschiedene Input-Typen

```javascript
// Text
let text = document.getElementById("text-input").value;

// Checkbox
let checkbox = document.getElementById("meine-checkbox").checked;

// Radio Buttons
let radio = document.querySelector('input[name="farbe"]:checked');
let ausgewaehlt = radio ? radio.value : null;

// Select (Dropdown)
let select = document.getElementById("mein-select").value;

// Number
let zahl = document.getElementById("zahl-input").valueAsNumber;
```

---

## Eingabefeld leeren

```javascript
document.getElementById("name").value = "";
```

---

## Live-Validierung (input-Event)

```javascript
let eingabe = document.getElementById("passwort");

eingabe.addEventListener("input", function() {
  if (eingabe.value.length < 8) {
    document.getElementById("hinweis").textContent = "Mindestens 8 Zeichen!";
  } else {
    document.getElementById("hinweis").textContent = "✓ Gut!";
  }
});
```

---

## Zusammenfassung

- [ ] `.value` liest den aktuellen Wert eines Eingabefelds.
- [ ] `event.preventDefault()` verhindert das Standard-Formularverhalten.
- [ ] `.trim()` entfernt Leerzeichen am Anfang und Ende.
- [ ] `.checked` liest den Status einer Checkbox.
- [ ] Validierung schützt vor ungültigen Eingaben.
