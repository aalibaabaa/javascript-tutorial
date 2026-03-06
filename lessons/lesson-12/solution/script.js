// Lektion 12 – Formulare
// Musterlösung

let formular = document.getElementById("mein-formular");
let fehlerMeldung = document.getElementById("fehler-meldung");
let ausgabe = document.getElementById("ausgabe");

formular.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let agbAkzeptiert = document.getElementById("agb").checked;

  fehlerMeldung.textContent = "";
  ausgabe.textContent = "";

  if (name === "") {
    fehlerMeldung.textContent = "Name darf nicht leer sein.";
    return;
  }
  if (!email.includes("@")) {
    fehlerMeldung.textContent = "Ungültige E-Mail-Adresse.";
    return;
  }
  if (!agbAkzeptiert) {
    fehlerMeldung.textContent = "Bitte AGB akzeptieren.";
    return;
  }

  ausgabe.textContent = `Hallo, ${name}! Deine Nachricht wurde gesendet.`;
  formular.reset();
  document.getElementById("zeichenzahl").textContent = "0 Zeichen";
});

// Aufgabe 3: Live-Zeichenzähler
let nachricht = document.getElementById("nachricht");
nachricht.addEventListener("input", function() {
  document.getElementById("zeichenzahl").textContent = nachricht.value.length + " Zeichen";
});
