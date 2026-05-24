# Ujjwal Karan — Portfolio

A polished developer portfolio built with React, Vite, TanStack Start, and Vercel-compatible SSR.

---

## 🚀 What is this?

This repository is a personal portfolio website that showcases projects, experience, skills, and contact links. It is built as a modern SSR-capable React app with Vite and is configured to deploy cleanly on Vercel.

## ✨ Why this setup?

- **React 19.2** for modern UI rendering
- **TanStack Start + Router** for fast SSR and client-side navigation
- **Vite** for optimized build and dev experience
- **Vercel-compatible deployment** with a custom API-based SSR wrapper
- **Static asset support** for built `/assets/*` files via `api/ssr.ts`

## 🧩 Key features

- Server-side rendered homepage and routes
- Built-in asset routing for Vercel deployment
- Skill badges and icon-rich sections
- Experience, projects, contact, and education layout
- Tailwind-based styling with responsive design

## 🚀 Quick start

```bash
npm install
npm run dev
```

Open the local dev server shown in the terminal.

## 📦 Build commands

- Standard build:

```bash
npm run build
```

- Vercel build:

```bash
npm run vercel-build
```

## 🧪 Local Vercel preview

```bash
npm run vercel-build
npx vercel dev --listen 3002
```

Then visit `http://localhost:3002`.

## 📁 Important files

- `src/` — application source
  - `routes/` — route definitions and pages
  - `components/ui/` — reusable UI components
  - `server.ts` — SSR entry used by TanStack Start
  - `start.ts` — client bootstrap
- `api/ssr.ts` — Vercel SSR handler + static asset server
- `vite.config.ts` — shared Vite / TanStack Start configuration
- `vercel.json` — Vercel routing setup
- `package.json` — scripts, dependencies, Node engine

## 🚀 Vercel deployment notes

The app is configured to deploy to Vercel using `npm run vercel-build`. The `vercel.json` routes all non-API requests to `api/ssr`, and `/assets/*` is handled through the same SSR wrapper so built CSS and JS files resolve correctly.

If you push this repo to GitHub and connect it to Vercel, use:

- Build command: `npm run vercel-build`
- Output directory: `dist/client`
- Node version: `>=22.12.0`

## 💡 Notes

- The portfolio uses a custom `api/ssr.ts` wrapper to ensure Vercel serves both SSR HTML and static assets correctly.
- Use `npm run vercel-build` before `npx vercel dev` to ensure the built asset output exists.

---

## 📫 Want to update content?

Edit the pages under `src/routes` and the component layout in `src/components/ui`.

Happy building!
