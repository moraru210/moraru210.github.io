# Portfolio Site — Alexandru Moraru

## What this is

A personal portfolio website built with Vite + React + TypeScript + Tailwind CSS (v3), deployed to GitHub Pages at **https://moraru210.github.io**.

The site was built from scratch based on the content in Alexandru's CV (MEng Imperial College London, SDE at AWS).

## Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v3 — dark theme, navy background (`#0a0e1a`), cyan accents
- **Deployment**: `gh-pages` npm package → pushes `dist/` to the `gh-pages` branch
- **Repo**: https://github.com/moraru210/moraru210.github.io

## Project structure

```
src/
  App.tsx               — root, assembles all sections
  index.css             — Tailwind directives + Google Fonts (Inter) + scrollbar styling
  components/
    Navbar.tsx          — sticky nav, scrolls to sections by ID, mobile hamburger menu
    Hero.tsx            — full-screen landing, name, subtitle, stats, social links
    Experience.tsx      — timeline of 4 jobs (AWS RDS, AWS L&R, BidFX, WTW)
    Projects.tsx        — 2-col card grid (4 projects: eBPF LB, Donarity, AI-Ops, Ironhide)
    Skills.tsx          — 6-category skill grid (Languages, Cloud, Systems, Frontend, AI, OSS)
    Education.tsx       — Imperial College card with grade badge, thesis, modules
    Contact.tsx         — email/LinkedIn/GitHub cards + availability panel
```

## Deploying changes

```bash
cd ~/Downloads/portfolio
npm run deploy          # builds then pushes dist/ to gh-pages branch
```

That's it — no CI needed. Changes are live at https://moraru210.github.io within ~1-2 minutes.

## Running locally

```bash
cd ~/Downloads/portfolio
npm run dev             # dev server at http://localhost:5173
npm run build           # production build to dist/
npm run preview         # preview production build at http://localhost:4173
```

## Things to pick up / improve

- Add a profile photo to the Hero section
- Link the eBPF load balancer thesis project to a real GitHub repo if it's public
- Add more personal projects as they're built
- Consider adding a blog section (would need a markdown parser like `react-markdown`)
- The Donarity GitHub link currently points to the profile root — update to the actual repo URL if public
- Mobile layout hasn't been tested on a real device — worth checking
