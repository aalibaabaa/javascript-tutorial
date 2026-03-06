# Lektion 01 – Einführung & Einrichtung

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-01\`  
**Dauer:** 90 Minuten

---

## Was ist JavaScript?

JavaScript ist eine Programmiersprache, die direkt im Webbrowser läuft. Mit JavaScript kannst du:

- Webseiten interaktiv machen
- Auf Benutzereingaben reagieren
- Inhalte dynamisch ändern
- Daten laden und anzeigen

JavaScript läuft zusammen mit HTML (Struktur) und CSS (Aussehen) im Browser.

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Was ist JavaScript? Wie funktioniert der Browser? |
| 20–60 Min | Übungen: Starter-Code öffnen und erste Schritte |
| 60–80 Min | Besprechung: Musterlösung gemeinsam durchgehen |
| 80–90 Min | Fragen & Ausblick auf Lektion 02 |

---

## Dein erstes JavaScript-Programm

### HTML und JavaScript verbinden

JavaScript wird in HTML entweder direkt in `<script>`-Tags geschrieben oder als externe Datei eingebunden:

```html
<!-- Direkt in HTML -->
<script>
  console.log("Hallo, Welt!");
</script>

<!-- Als externe Datei -->
<script src="script.js"></script>
```

### Die Browser-Konsole

Die **Konsole** ist dein wichtigstes Werkzeug beim Lernen:

1. Öffne Google Chrome.
2. Drücke `F12` (oder `Strg+Shift+I`).
3. Klicke auf den Tab **Console**.
4. Schreibe hier direkt JavaScript-Code!

```javascript
console.log("Hallo, Welt!");
// Ausgabe: Hallo, Welt!

console.log(42);
// Ausgabe: 42

console.log(2 + 3);
// Ausgabe: 5
```

### `alert()` und `prompt()`

```javascript
// Zeigt ein Dialogfenster
alert("Willkommen!");

// Fragt den Benutzer nach einer Eingabe
let name = prompt("Wie heißt du?");
console.log("Hallo, " + name + "!");
```

---

## Kommentare

Kommentare werden vom Browser ignoriert und helfen dir, deinen Code zu erklären:

```javascript
// Das ist ein einzeiliger Kommentar

/*
  Das ist ein
  mehrzeiliger Kommentar
*/
```

---

## Wichtige Begriffe

| Begriff | Bedeutung |
|---------|-----------|
| Browser | Programm zum Anzeigen von Webseiten (Chrome, Firefox) |
| Konsole | Bereich in den DevTools für Ausgaben und Fehler |
| `console.log()` | Gibt einen Wert in der Konsole aus |
| `alert()` | Zeigt ein Popup-Fenster an |
| `prompt()` | Öffnet ein Eingabefenster |
| Kommentar | Notizen im Code, die nicht ausgeführt werden |

---

## Zusammenfassung

- [ ] JavaScript läuft im Browser.
- [ ] Du verbindest JavaScript über `<script src="script.js"></script>` mit HTML.
- [ ] `console.log()` gibt Werte in der Konsole aus.
- [ ] Die Browser-Konsole öffnest du mit `F12`.
- [ ] Kommentare beginnen mit `//` (einzeilig) oder `/* */` (mehrzeilig).
