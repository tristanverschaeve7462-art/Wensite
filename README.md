# Elektro-Verschaeve

Statische website, gebaseerd op de aangeleverde ZIP. Geen package-installatie, buildstap, externe lettertypen of API-sleutels nodig.

## Lokaal starten

```sh
cd /workspace/Wensite
python3 -m http.server 8000 --bind 127.0.0.1
```

Controleer intern met `curl --fail http://127.0.0.1:8000/`.

`index.html` bevat de inhoud, `styles.css` de responsive vormgeving en `script.js` het mobiele menu en de e-mailvoorbereiding. De bedrijfsfoto's en originele huisstijlbestanden staan in `assets/`.

Het contactformulier opent een mailto-link in het e-mailprogramma van de bezoeker. Het verzendt zelf geen berichten en slaat geen gegevens op. Een geconfigureerd e-mailprogramma is nodig; bellen en rechtstreeks mailen blijven beschikbaar.

Voor publicatie: upload index.html, styles.css, script.js en assets/ samen naar een statische webhost. Hosting, domeininstellingen en automatische e-mailverzending zijn niet ingericht.
