## Starten der App

- `yarn` in den Projects ausführen (Wichtig! Auch das Common Project!)
- Bitte zunächst die Api starten (siehe Api -> README.md)

- `yarn` in den Projects ausführen (Wichtig! Auch das Common Project!)
- Kopiere die .env.example nach .env
- Setzte die korrekten Einstellungen in der neuen .env (Falls nichts geändert wurde, nur die IP-Adressen)
- `yarn start:dev` (für Windows `npm run start:dev:win`)
- Die Docker-Container sollte nun gebuildet und gestartet werden

### Initales Ausführen der Migrations

> Beim ersten Ausführen, wird die Datenbank nicht automatisch erstellt. Die Migrations müssen initial ausgeführt werden

In einem neuen Terminal Fenster `npm run typeorm:migration:run` (für Windows `typeorm:win:migration:run`) ausführen
Die Datenbank sollte nun mit den entsprechenden Tabellen befüllt sein.

### Erreichbarkeit API und DB

- API Port 5002
- DB Port 4599
- Dev DB Name "kitaToDo"
- Dev DB Passwort "kita123"
