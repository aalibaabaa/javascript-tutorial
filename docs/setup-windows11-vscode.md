# Einrichtung: Windows 11 & Visual Studio Code

Diese Anleitung führt dich Schritt für Schritt durch die Einrichtung deiner Entwicklungsumgebung für das JavaScript-Tutorial auf Windows 11.

## Voraussetzungen

- Windows 11 (64-Bit)
- Internetverbindung
- Administrator-Rechte auf deinem PC

---

## 1. Visual Studio Code installieren

- [ ] Öffne deinen Browser und gehe zu [https://code.visualstudio.com](https://code.visualstudio.com).
- [ ] Klicke auf **Download for Windows**.
- [ ] Führe den heruntergeladenen Installer aus (`VSCodeSetup-x64-*.exe`).
- [ ] Akzeptiere die Lizenzbedingungen.
- [ ] Wähle den Installationspfad (Standard: `C:\Users\<Benutzername>\AppData\Local\Programs\Microsoft VS Code`).
- [ ] Aktiviere folgende Optionen:
  - [x] **VSCode zum PATH hinzufügen**
  - [x] **"Mit Code öffnen" im Kontextmenü (Datei)**
  - [x] **"Mit Code öffnen" im Kontextmenü (Verzeichnis)**
- [ ] Klicke auf **Installieren** und warte, bis die Installation abgeschlossen ist.
- [ ] Starte VSCode.

---

## 2. Empfohlene VSCode-Erweiterungen installieren

- [ ] Öffne VSCode.
- [ ] Drücke `Strg+Shift+X`, um den Extensions-Bereich zu öffnen.
- [ ] Suche nach folgenden Erweiterungen und installiere sie:
  - [ ] **Prettier – Code formatter** (von Prettier)
  - [ ] **ESLint** (von Microsoft)
  - [ ] **Live Server** (von Ritwick Dey)
  - [ ] **GitLens** (von GitKraken)
  - [ ] **German Language Pack for VS Code** (von Microsoft, optional)

---

## 3. Projektordner anlegen

- [ ] Öffne den Windows Explorer.
- [ ] Navigiere zu `C:\`.
- [ ] Erstelle einen neuen Ordner namens `Projekte`.
- [ ] Erstelle darin den Unterordner `javascript-tutorial`.

Der vollständige Pfad lautet:
```
C:\Projekte\javascript-tutorial\
```

- [ ] Erstelle für jede Lektion einen Unterordner, z. B.:
```
C:\Projekte\javascript-tutorial\lesson-01\
C:\Projekte\javascript-tutorial\lesson-02\
...
C:\Projekte\javascript-tutorial\lesson-16\
```

---

## 4. Ordner in VSCode öffnen

- [ ] Starte VSCode.
- [ ] Klicke auf **Datei → Ordner öffnen…** (oder drücke `Strg+K Strg+O`).
- [ ] Navigiere zu `C:\Projekte\javascript-tutorial\`.
- [ ] Klicke auf **Ordner auswählen**.

---

## 5. Live Server starten

- [ ] Öffne eine HTML-Datei (z. B. `starter/index.html`) in VSCode.
- [ ] Klicke unten rechts in der Statusleiste auf **Go Live** (oder rechtsklicke auf die Datei → **Open with Live Server**).
- [ ] Dein Browser öffnet sich automatisch und zeigt die Seite an.
- [ ] Änderungen werden automatisch im Browser neu geladen.

---

## 6. Browser-Entwicklertools öffnen

- [ ] Öffne Google Chrome.
- [ ] Drücke `F12` oder `Strg+Shift+I`, um die DevTools zu öffnen.
- [ ] Klicke auf den Tab **Console**.
- [ ] Hier siehst du Ausgaben von `console.log()` und Fehlermeldungen.

---

## 7. Überprüfen der Einrichtung

- [ ] Öffne VSCode.
- [ ] Öffne das Terminal in VSCode: **Terminal → Neues Terminal** (oder `Strg+ö`).
- [ ] Gib folgendes ein und drücke Enter:
```
node --version
```
> Wenn Node.js nicht installiert ist, lade es von [https://nodejs.org](https://nodejs.org) herunter und installiere die **LTS-Version**.

---

## Problembehandlung

| Problem | Lösung |
|---|---|
| VSCode öffnet sich nicht | Installiere VSCode neu |
| Live Server startet nicht | Stelle sicher, dass die Erweiterung installiert ist |
| Browser zeigt keine Änderungen | Drücke `Strg+F5` für Hard-Refresh |
| `node` nicht gefunden | Node.js installieren und PC neu starten |

---

> ✅ Wenn all diese Schritte abgeschlossen sind, bist du bereit für Lektion 01!
