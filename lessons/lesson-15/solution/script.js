// Lektion 15 – Styling & CSS-Integration
// Musterlösung

// Aufgabe 1
let farbBox = document.getElementById("farb-box");
farbBox.style.backgroundColor = "cornflowerblue";
farbBox.style.color = "white";
farbBox.style.fontSize = "18px";
farbBox.style.padding = "20px";

// Aufgabe 2
document.getElementById("toggle-button").addEventListener("click", function() {
  document.getElementById("ziel-element").classList.toggle("hervorgehoben");
});

// Aufgabe 3
let darkBtn = document.getElementById("dark-mode-btn");
darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  let istDark = document.body.classList.contains("dark-mode");
  darkBtn.textContent = istDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Aufgabe 4
let farben = ["#3498db", "#e74c3c"];
let aktuellerIndex = 0;
document.getElementById("farbe-wechseln").addEventListener("click", function() {
  aktuellerIndex = (aktuellerIndex + 1) % farben.length;
  document.documentElement.style.setProperty("--hauptfarbe", farben[aktuellerIndex]);
});
