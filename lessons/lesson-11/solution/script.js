// Lektion 11 – Events
// Musterlösung

// Aufgabe 1
document.getElementById("klick-button").addEventListener("click", function() {
  document.getElementById("ausgabe").textContent = "Button wurde geklickt!";
});

// Aufgabe 2
let zaehler = 0;
document.getElementById("zaehler-button").addEventListener("click", function() {
  zaehler++;
  document.getElementById("zaehler-ausgabe").textContent = "Zähler: " + zaehler;
});

// Aufgabe 3
let hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", function() {
  hoverBox.style.backgroundColor = "orange";
});
hoverBox.addEventListener("mouseout", function() {
  hoverBox.style.backgroundColor = "lightgray";
});

// Aufgabe 4
document.addEventListener("keydown", function(event) {
  console.log("Taste gedrückt: " + event.key);
  document.getElementById("taste-ausgabe").textContent = event.key;
});
