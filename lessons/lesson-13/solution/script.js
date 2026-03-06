// Lektion 13 – Fetch & APIs
// Musterlösung

// Aufgabe 1
async function ladeErstenBenutzer() {
  let antwort = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let benutzer = await antwort.json();
  console.log("Name: " + benutzer.name);
  console.log("E-Mail: " + benutzer.email);
}
ladeErstenBenutzer();

// Aufgabe 2 & 4
async function ladePosts() {
  let laden = document.getElementById("laden");
  laden.style.display = "block";

  let antwort = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await antwort.json();

  laden.style.display = "none";

  let liste = document.getElementById("post-liste");
  posts.slice(0, 5).forEach(function(post) {
    let eintrag = document.createElement("li");
    eintrag.textContent = post.title;
    liste.appendChild(eintrag);
  });
}
ladePosts();

// Aufgabe 3
async function ladeMitFehler() {
  try {
    let antwort = await fetch("https://jsonplaceholder.typicode.com/nichtvorhanden");
    if (!antwort.ok) {
      throw new Error("Status: " + antwort.status);
    }
  } catch (fehler) {
    document.getElementById("fehler").textContent = "Fehler beim Laden: " + fehler.message;
  }
}
ladeMitFehler();

// Aufgabe 5 (Bonus)
async function ladeBenutzer() {
  let antwort = await fetch("https://jsonplaceholder.typicode.com/users");
  let benutzer = await antwort.json();

  let container = document.getElementById("benutzer-liste");
  benutzer.forEach(function(b) {
    let karte = document.createElement("div");
    karte.className = "benutzer-karte";
    karte.innerHTML = `<strong>${b.name}</strong><br>${b.email}`;
    container.appendChild(karte);
  });
}
ladeBenutzer();
