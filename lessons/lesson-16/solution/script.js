// Lektion 16 – Abschlussprojekt: To-Do-App
// Musterlösung

// Aufgaben aus localStorage laden
let aufgaben = JSON.parse(localStorage.getItem("aufgaben")) || [];

// Aktueller Filter
let aktiverFilter = "alle";

// Aufgaben speichern
function aufgabenSpeichern() {
  localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}

// Zaehler aktualisieren
function zaehlerAktualisieren() {
  let offene = aufgaben.filter(a => !a.erledigt).length;
  document.getElementById("aufgaben-zaehler").textContent =
    offene + (offene === 1 ? " offene Aufgabe" : " offene Aufgaben");
}

// Aufgaben anzeigen
function aufgabenAnzeigen(filter) {
  let liste = document.getElementById("aufgaben-liste");
  liste.innerHTML = "";

  let gefilterteListe = aufgaben.filter(function(aufgabe) {
    if (filter === "offen") return !aufgabe.erledigt;
    if (filter === "erledigt") return aufgabe.erledigt;
    return true;
  });

  gefilterteListe.forEach(function(aufgabe) {
    let eintrag = document.createElement("li");
    eintrag.className = "aufgaben-item" + (aufgabe.erledigt ? " erledigt" : "");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = aufgabe.erledigt;
    checkbox.addEventListener("change", function() {
      aufgabeUmschalten(aufgabe.id);
    });

    let text = document.createElement("span");
    text.className = "aufgaben-text";
    text.textContent = aufgabe.text;

    let loeschenBtn = document.createElement("button");
    loeschenBtn.className = "loeschen-btn";
    loeschenBtn.textContent = "🗑";
    loeschenBtn.addEventListener("click", function() {
      aufgabeLoeschen(aufgabe.id);
    });

    eintrag.appendChild(checkbox);
    eintrag.appendChild(text);
    eintrag.appendChild(loeschenBtn);
    liste.appendChild(eintrag);
  });

  zaehlerAktualisieren();
}

// Aufgabe hinzufügen
function aufgabeHinzufuegen() {
  let eingabe = document.getElementById("aufgabe-eingabe");
  let text = eingabe.value.trim();

  if (text === "") return;

  aufgaben.push({
    id: Date.now(),
    text: text,
    erledigt: false
  });

  eingabe.value = "";
  aufgabenSpeichern();
  aufgabenAnzeigen(aktiverFilter);
}

// Aufgabe löschen
function aufgabeLoeschen(id) {
  aufgaben = aufgaben.filter(a => a.id !== id);
  aufgabenSpeichern();
  aufgabenAnzeigen(aktiverFilter);
}

// Aufgabe umschalten
function aufgabeUmschalten(id) {
  let aufgabe = aufgaben.find(a => a.id === id);
  if (aufgabe) aufgabe.erledigt = !aufgabe.erledigt;
  aufgabenSpeichern();
  aufgabenAnzeigen(aktiverFilter);
}

// Event-Listener
document.getElementById("hinzufuegen-btn").addEventListener("click", aufgabeHinzufuegen);

document.getElementById("aufgabe-eingabe").addEventListener("keydown", function(event) {
  if (event.key === "Enter") aufgabeHinzufuegen();
});

document.querySelectorAll(".filter-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("aktiv"));
    btn.classList.add("aktiv");
    aktiverFilter = btn.dataset.filter;
    aufgabenAnzeigen(aktiverFilter);
  });
});

// Initiale Anzeige
aufgabenAnzeigen(aktiverFilter);
