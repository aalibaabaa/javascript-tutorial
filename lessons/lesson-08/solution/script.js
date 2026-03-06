// Lektion 08 – Schleifen
// Musterlösung

// Aufgabe 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Aufgabe 2
let lieblingsfilme = ["Matrix", "Inception", "Interstellar", "The Dark Knight", "Forrest Gump"];
for (let i = 0; i < lieblingsfilme.length; i++) {
  console.log(lieblingsfilme[i]);
}
lieblingsfilme.forEach(function(film) {
  console.log(film);
});

// Aufgabe 3
let summe = 0;
let n = 1;
while (n <= 100) {
  summe += n;
  n++;
}
console.log(summe); // 5050

// Aufgabe 4
for (let i = 1; i <= 20; i++) {
  if (i === 15) break;
  if (i % 3 === 0) continue;
  console.log(i);
}

// Aufgabe 5 (Bonus)
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}
