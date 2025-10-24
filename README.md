# Mudinha (Ionic/Angular)

Mudinha is a plant care and marketplace app built with Ionic + Angular. It provides separate pages for Home, My Plants, Marketplace, Care, Add Plant, Personal Info, and Auth screens, with a global navigation menu.

## Prerequisites
- Node.js and npm
- Ionic CLI: `npm i -g @ionic/cli`
- Angular CLI: `npm i -g @angular/cli`

## Getting Started
- Install deps: `npm install`
- Run dev server: `ionic serve`
- Open: `http://localhost:8100`

## Project Structure
Key paths under `src/app/`:
- `home/` – Home page
- `plants/` – My Plants
- `marketplace/` – Marketplace
- `care/` – Care & Tips
- `add-plant/` – Add Plant form
- `personal-info/` – Personal info form
- `login/`, `sign-up/`, `recover/` – Auth screens
- `app-routing.module.ts` – Global routes
- `app.component.html` – Global layout and menu

## Routing
Routes are defined per-page using Angular routing modules and aggregated in `src/app/app-routing.module.ts`. Common paths:
- `/home` – Home
- `/plants` – My Plants
- `/marketplace` – Marketplace
- `/care` – Care
- `/add-plant` – Add Plant
- `/personal-info` – Personal Info
- `/login`, `/sign-up`, `/recover` – Auth flows

## Navigation (Navbar/Menu)
Mudinha uses Ionic’s side menu for global navigation:
- Global menu: `src/app/app.component.html` contains `<ion-menu>` with `routerLink` items to the main pages.
- Page headers: Each page should include `<ion-header>` with an `<ion-menu-button>` inside `<ion-toolbar>` to open the side menu.

Example header snippet to add on pages:
```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Page Title</ion-title>
  </ion-toolbar>
</ion-header>
```

## Page Templates (Best Practice)
Each page HTML should be an Ionic component template, not a full document. Use:
- `<ion-header>` for the toolbar and title
- `<ion-content>` for page body

Avoid including `<!DOCTYPE html>`, `<html>`, `<head>`, or `<body>` in page templates. Those belong to `src/index.html`.

## Scripts
- Start: `npm start` or `ionic serve`
- Build: `ionic build` (outputs to `www/`)
- Test: `npm test`
- Lint: `npm run lint`

## Notes
- If you see pages with full HTML documents, refactor them to the Ionic component pattern shown above.
- Tabs (`tabs/`, `tab1/`, `tab2/`, `tab3/`) are available but the side menu is the primary navigation in this app.