# FLEMDEK NIG. LIMITED

Website for FLEMDEK NIG. LIMITED — Electrical & Mechanical Engineering Services.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16.3.0 (App Router, Turbopack) |
| UI | React 19.2.8 |
| Language | TypeScript 5.9.3 (strict) |
| Styling | Tailwind CSS 4.3.3 (CSS-first `@theme`, no `tailwind.config`) |
| Linting | ESLint 9 with `eslint-config-next` |
| Fonts | Manrope (display) and Inter (text) via `next/font/google` |
| Utilities | `clsx`, `tailwind-merge` |

## Getting started

```bash
npm install
npm run dev
```

The development server runs on **http://localhost:8000**.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Development server on port 8000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build on port 8000 |
| `npm run lint` | ESLint |
| `npm run typecheck` | `next typegen` followed by `tsc --noEmit` |
| `npm run validate` | Typecheck, lint, and build in sequence |

## Project structure

```
src/
  app/
    fonts.ts      Font definitions exposed as CSS variables
    globals.css   Design tokens (@theme), base layer, foundation utilities
    layout.tsx    Root layout, metadata and viewport
    page.tsx      Foundation specimen sheet
  components/
    layout/       Container and Section layout primitives
  lib/
    company.ts    Verified company data
    utils.ts      cn() class-merging helper
```

## Design system

`src/app/globals.css` is the single source of truth for the visual system. Colour,
typography, radius, elevation, container width and breakpoint tokens are declared in
the `@theme` block, from which Tailwind generates the corresponding utilities.
Components consume these semantic tokens rather than raw hex values or ad-hoc sizes.

The type scale is fluid between a 320px and a 1440px viewport, so type interpolates
continuously instead of stepping at breakpoints.

`src/app/page.tsx` currently renders a foundation specimen sheet — an internal
reference that displays every token for verification in a browser. It is not the
FLEMDEK website and is replaced when page composition begins.

## Company data

Company facts live in `src/lib/company.ts` and come from records supplied by the
client. Values in that file must not be inferred, rounded, or embellished; marketing
copy belongs in section components instead.
