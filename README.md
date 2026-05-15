# Meetfy Frontend

Frontend aplikacji Meetfy stworzony w technologii React + Vite.

## Wymagania

Do uruchomienia projektu wymagany jest:

- Docker Desktop
- git

## Pobranie projektu

```bash
git clone https://github.com/mpilarsky/meetfy.git
cd meetfy
```

## Uruchomienie aplikacji (pierwsze)

```bash
docker compose up -d --build
```

## Uruchomienie aplikacji

```bash
docker compose up -d
```

Albo użycie Docker Desktop (przycisk Play)

## Zatrzymanie aplikacji

```bash
docker compose down
```

Albo użycie Docker Desktop (przycisk Stop)

## Aktualizacja projektu

Po pobraniu nowych zmian z repozytorium zaleca się ponowne uruchomienie projektu z opcją przebudowania obrazu:

```bash
git pull
docker compose up -d --build
```

Opcja --build zapewnia ponowną instalację zależności, jeśli zmienił się plik package.json lub package-lock.json.

## Technologie

Projekt wykorzystuje:

React
Vite
Docker
Docker Compose