# Teaching Guidelines – JavaScript-Tutorial (ASS)

Diese Richtlinien helfen dir dabei, das JavaScript-Tutorial effektiv und strukturiert zu unterrichten.

---

## Zielgruppe

- Anfänger ohne oder mit wenig Programmiererfahrung
- Alter: ab 14 Jahren
- Vorkenntnisse: Grundlegende PC-Kenntnisse, Umgang mit dem Browser

---

## Unterrichtsformat

Jede Lektion dauert **90 Minuten** und folgt dieser Struktur:

| Zeit | Aktivität |
|------|-----------|
| 0–20 Min | Theorie: Erklärung des Themas mit Beispielen |
| 20–60 Min | Übungen: Schüler arbeiten mit dem Starter-Code |
| 60–80 Min | Besprechung: Musterlösung gemeinsam durchgehen |
| 80–90 Min | Fragen & Ausblick auf die nächste Lektion |

---

## Allgemeine Grundsätze

### Du-Form verwenden

- Sprich die Schüler stets mit **du** an (nicht Sie).
- Beispiel: „Erstelle eine Variable …" statt „Erstellen Sie eine Variable …"

### Klare Sprache

- Vermeide unnötige Fachbegriffe am Anfang.
- Erkläre neue Begriffe sofort wenn du sie einführst.
- Verwende Analogien aus dem Alltag.

### Schrittweise vorgehen

- Zeige immer zuerst ein funktionierendes Beispiel.
- Erkläre jede Zeile Code, bevor du weitermachst.
- Baue Komplexität langsam auf.

---

## Vorbereitung vor dem Unterricht

- [ ] Stelle sicher, dass alle Schüler [VSCode und einen Browser eingerichtet haben](setup-windows11-vscode.md).
- [ ] Öffne den Starter-Code in `C:\Projekte\javascript-tutorial\lesson-XX\starter\`.
- [ ] Teste die Musterlösung in `C:\Projekte\javascript-tutorial\lesson-XX\solution\`.
- [ ] Bereite 2–3 eigene Beispiele zum Thema vor.
- [ ] Lies `lesson.md` und `exercises.md` vollständig durch.

---

## Während des Unterrichts

### Theoriephase (0–20 Min)

- [ ] Erkläre das Thema anhand von `lesson.md`.
- [ ] Zeige Live-Coding-Beispiele im Browser.
- [ ] Lass die Schüler mitschreiben oder mittippen.
- [ ] Stelle Verständnisfragen: „Was passiert hier?" / „Was erwartet ihr als Ergebnis?"

### Übungsphase (20–60 Min)

- [ ] Teile den Starter-Code aus (oder weise auf `C:\Projekte\javascript-tutorial\lesson-XX\starter\` hin).
- [ ] Lies jede Aufgabe aus `exercises.md` gemeinsam vor.
- [ ] Gib den Schülern Zeit, selbst zu arbeiten.
- [ ] Gehe durch die Reihen und hilf individuell.
- [ ] Gib Hinweise, aber zeige nicht sofort die Lösung.

### Besprechungsphase (60–80 Min)

- [ ] Besprecht die Aufgaben gemeinsam.
- [ ] Zeige die Musterlösung aus `solution/`.
- [ ] Erkläre alternative Lösungswege.
- [ ] Frage: „Wer hat es anders gelöst? Zeig mal!"

### Abschluss (80–90 Min)

- [ ] Fasse die wichtigsten Punkte zusammen.
- [ ] Beantworte offene Fragen.
- [ ] Gib einen Ausblick auf die nächste Lektion.
- [ ] Optionale Zusatzaufgaben für schnelle Schüler benennen.

---

## Tipps für den Unterricht

### Häufige Fehler der Schüler

| Fehler | Erklärung |
|--------|-----------|
| Fehlende Anführungszeichen bei Strings | `"Hallo"` statt `Hallo` |
| Groß-/Kleinschreibung | `console.log` ≠ `Console.Log` |
| Fehlende Semikolons | Optional in JS, aber konsistent sein |
| `=` statt `===` beim Vergleichen | Zuweisung vs. Vergleich erklären |
| `undefined` statt initialisierten Variablen | Variable erst deklarieren, dann verwenden |

### Motivationstipps

- Zeige früh sichtbare Ergebnisse (z. B. Text auf der Webseite ändern).
- Lobe kleine Fortschritte.
- Ermutige Schüler, Fehler zu machen – Fehler sind Teil des Lernens.
- Erkläre, wozu JavaScript im echten Leben verwendet wird.

---

## Ressourcen für Lehrkräfte

- [MDN Web Docs (Deutsch)](https://developer.mozilla.org/de/)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

---

## Lektionsübersicht

| Nr. | Thema | Neue Konzepte |
|-----|-------|---------------|
| 01 | Einführung & Einrichtung | Browser, DevTools, `console.log` |
| 02 | Variablen & Datentypen | `let`, `const`, `var`, Typen |
| 03 | Operatoren | Arithmetik, Vergleich, logisch |
| 04 | Strings | Methoden, Template Literals |
| 05 | Arrays | Index, Methoden (`push`, `pop`) |
| 06 | Objekte | Properties, Methoden |
| 07 | Kontrollfluss | `if`, `else`, `switch` |
| 08 | Schleifen | `for`, `while`, `forEach` |
| 09 | Funktionen | Deklaration, Parameter, Rückgabe |
| 10 | DOM-Manipulation | `getElementById`, `innerHTML` |
| 11 | Events | `addEventListener`, Event-Objekt |
| 12 | Formulare | Input-Werte, Validierung |
| 13 | Fetch & APIs | `fetch`, Promises, JSON |
| 14 | ES6+ Features | Arrow Functions, Destructuring |
| 15 | Styling & CSS-Integration | `classList`, CSS-Variablen |
| 16 | Abschlussprojekt | Alles kombiniert |

---

> 💡 **Hinweis:** Passe das Tempo dem Lernniveau der Gruppe an. Es ist besser, weniger Stoff gründlich zu verstehen als viel oberflächlich zu behandeln.
