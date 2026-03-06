# Lektion 13 – Fetch & APIs

**Pfad:** `C:\Projekte\javascript-tutorial\lesson-13\`  
**Dauer:** 90 Minuten

---

## Zeitplan

| Zeit | Inhalt |
|------|--------|
| 0–20 Min | Theorie: Promises, async/await, fetch |
| 20–60 Min | Übungen: Starter-Code bearbeiten |
| 60–80 Min | Besprechung: Musterlösung |
| 80–90 Min | Fragen & Ausblick auf Lektion 14 |

---

## Was ist eine API?

Eine **API (Application Programming Interface)** ist eine Schnittstelle, über die Programme miteinander kommunizieren. Viele Webdienste stellen APIs bereit, über die du Daten abrufen kannst.

---

## Was ist fetch?

`fetch` ist eine JavaScript-Funktion, mit der du HTTP-Anfragen an APIs stellen kannst.

---

## Promises

Eine `Promise` ist ein Versprechen, dass eine asynchrone Operation irgendwann abgeschlossen wird:

```javascript
fetch("https://api.example.com/daten")
  .then(function(antwort) {
    return antwort.json(); // JSON-Antwort lesen
  })
  .then(function(daten) {
    console.log(daten);
  })
  .catch(function(fehler) {
    console.error("Fehler:", fehler);
  });
```

---

## async/await

`async/await` ist eine modernere, lesbarere Schreibweise für Promises:

```javascript
async function ladeDaten() {
  try {
    let antwort = await fetch("https://api.example.com/daten");
    let daten = await antwort.json();
    console.log(daten);
  } catch (fehler) {
    console.error("Fehler:", fehler);
  }
}

ladeDaten();
```

---

## JSONPlaceholder – Beispiel-API

Für Übungen verwenden wir JSONPlaceholder (kostenlose Test-API):

```javascript
async function ladeBenutzer() {
  let antwort = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let benutzer = await antwort.json();
  console.log(benutzer.name);  // "Leanne Graham"
  console.log(benutzer.email);
}

ladeBenutzer();
```

---

## Daten im DOM anzeigen

```javascript
async function ladePosts() {
  let antwort = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await antwort.json();

  let liste = document.getElementById("post-liste");
  posts.slice(0, 5).forEach(function(post) {
    let eintrag = document.createElement("li");
    eintrag.textContent = post.title;
    liste.appendChild(eintrag);
  });
}

ladePosts();
```

---

## HTTP-Statuscodes

| Code | Bedeutung |
|------|-----------|
| 200 | OK – Anfrage erfolgreich |
| 404 | Not Found – Ressource nicht gefunden |
| 500 | Internal Server Error – Serverfehler |

```javascript
let antwort = await fetch("https://api.example.com/daten");
if (!antwort.ok) {
  throw new Error("Fehler: " + antwort.status);
}
```

---

## Zusammenfassung

- [ ] `fetch()` stellt HTTP-Anfragen.
- [ ] `.json()` konvertiert die Antwort in ein JavaScript-Objekt.
- [ ] `async/await` macht asynchronen Code lesbarer.
- [ ] `try/catch` fängt Fehler ab.
- [ ] Überprüfe `response.ok` für den Statuscode.
