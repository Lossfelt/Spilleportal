# Levin's Spill - Retro Spillportal

En enkel retro-stilisert portal for spillsamlingen din med 8-bit vibe.

## Oppsett

### 1. Opprett GitHub Repository
1. Gå til GitHub.com
2. Klikk på "New repository"
3. Gi den et navn (f.eks. `levins-spill`)
4. Velg "Public"
5. Klikk "Create repository"

### 2. Last opp filene
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DITT-BRUKERNAVN/levins-spill.git
git push -u origin main
```

### 3. Aktiver GitHub Pages
1. Gå til repository settings
2. Scroll ned til "Pages" i venstre meny
3. Under "Source", velg "main" branch
4. Klikk "Save"
5. Vent noen minutter, så vil siden være tilgjengelig på `https://DITT-BRUKERNAVN.github.io/levins-spill/`

## Tilpasning

### Legg til spillene dine
Åpne `index.html` og oppdater:
- Spilltitler i `<h2 class="game-title">`
- Beskrivelser i `<p class="game-description">`
- Lenker i `<a href="#" class="play-button">` - bytt ut `#` med URL til spillene dine

### Legg til bilder
1. Opprett en `images/` mappe
2. Legg til screenshots av spillene dine (game1.png, game2.png, osv.)
3. Bildene vil automatisk vises i kortene

### Endre farger
Åpne `style.css` og juster:
- `#00ff00` - grønn (hovedfarge)
- `#ff00ff` - magenta (effekter)
- `#00ffff` - cyan (titler)
- `#0a0a0a` - bakgrunn

## Funksjoner
- 🎮 Retro 8-bit design
- 📱 Responsiv (fungerer på mobil)
- ✨ Hover-effekter
- 🎨 Glitch-animasjon på tittel
- 🥚 Easter egg: Prøv Konami Code (↑↑↓↓←→←→BA)

## Teknologi
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Press Start 2P)
