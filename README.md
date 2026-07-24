# andyplank.me — Personal Portfolio

A personal portfolio site built with **React + TypeScript + Vite + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
```

## Build & deploy

```bash
npm run build      # type-check + production build into dist/
npm run preview    # preview the production build locally
npm run deploy     # publish dist/ to GitHub Pages (gh-pages)
```

The site deploys to the custom domain `andyplank.me` via `public/CNAME`.

## Structure

```
src/
  components/   FadeInImage, Navbar, Hero, Section, About, Experience, Projects, Contact, Footer
  data/         experience.ts, projects.ts (typed content)
  assets/       images and icons
  types.ts      shared interfaces
  App.tsx       composes the page sections
  main.tsx      entry point
  index.css     Tailwind import + theme tokens
```
