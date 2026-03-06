# Lektion 16 – Abschlussprojekt

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-16\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Projektvorstellung, Planung |
| 20–70 Min | Eigenständige Entwicklung des Projekts |
| 70–85 Min | Präsentation und Besprechung |
| 85–90 Min | Ausblick & Weiterlernen |

---

## Projektbeschreibung

Im Abschlussprojekt erstellst du eine vollständige **Aufgabenverwaltung (To-Do-App)** mit folgenden Funktionen:

1. **Aufgaben hinzufügen** – Der Benutzer gibt eine Aufgabe ein und klickt auf „Hinzufügen".
2. **Aufgaben anzeigen** – Alle Aufgaben werden in einer Liste angezeigt.
3. **Aufgaben abhaken** – Erledigte Aufgaben werden durchgestrichen.
4. **Aufgaben löschen** – Jede Aufgabe kann einzeln gelöscht werden.
5. **Filterung** – Zeige alle / offene / erledigte Aufgaben.
6. **Persistenz** – Aufgaben werden im `localStorage` gespeichert.

---

## Verwendete Konzepte

In diesem Projekt kombinierst du alles, was du in den Lektionen 01–15 gelernt hast:

| Konzept | Lektion |
|---------|---------|
| HTML-Struktur | 01 |
| Variablen und Typen | 02 |
| Arrays und Objekte | 05, 06 |
| DOM-Manipulation | 10 |
| Events | 11 |
| Formularverarbeitung | 12 |
| ES6+ Features | 14 |
| CSS-Integration | 15 |

---

## Datenstruktur

Jede Aufgabe wird als Objekt gespeichert:

```javascript
{
  id: 1234567890,      // Einzigartiger Zeitstempel
  text: "Einkaufen",   // Aufgabentext
  erledigt: false      // Status
}
```

---

## localStorage

```javascript
// Speichern
localStorage.setItem("aufgaben", JSON.stringify(aufgabenListe));

// Laden
let gespeichert = localStorage.getItem("aufgaben");
let aufgabenListe = gespeichert ? JSON.parse(gespeichert) : [];
```

---

## Schrittweiser Aufbau

- [ ] Schritt 1: HTML-Struktur erstellen (Formular, Liste, Buttons)
- [ ] Schritt 2: Aufgabe hinzufügen (Event, Array, DOM)
- [ ] Schritt 3: Aufgaben rendern (forEach, createElement)
- [ ] Schritt 4: Aufgabe als erledigt markieren (toggle, classList)
- [ ] Schritt 5: Aufgabe löschen (filter, neu rendern)
- [ ] Schritt 6: Filterung implementieren
- [ ] Schritt 7: localStorage hinzufügen

---

## Erweiterungsideen

- Drag & Drop zum Neuordnen der Aufgaben
- Prioritäten (Hoch/Mittel/Niedrig)
- Fälligkeitsdaten
- Dunkles/Helles Design
- Aufgaben mit Kategorien
