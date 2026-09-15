# The Surefire Christian Church of God — Web Application

## What this is, honestly

This is the **beginning of a migration** from the previous static HTML/CSS/JS
site to the Next.js/TypeScript/Tailwind stack requested — not a finished,
build-verified production app. That distinction matters, so read this before
assuming otherwise:

**This code has not been run.** The sandbox this was written in has no
network access (`npm install` returns a 403 from the registry), so nothing
here has been through `npm install`, `next build`, `tsc`, `eslint`, or
`vitest`. Every file was hand-written to be correct, and:

- The one piece of real business logic with actual branching (`lib/dates.ts`
  — the Night Vigil / "last Friday of the month" calculation and the
  live/upcoming service logic) was extracted and run standalone in plain
  Node during development. That process **found and fixed a real bug**: the
  original version rolled an in-progress overnight vigil to next month
  because it compared `now` against the *start* time instead of the *end*
  time. `tests/unit/dates.test.ts` encodes the four cases that catch this,
  written against Vitest's API — but nobody has run `vitest` on them, because
  Vitest isn't installed here. Run `npm run test` yourself before trusting
  them to be green.
- Every color/font/spacing class used across every component was
  cross-checked by hand against `tailwind.config.ts` for typos.
- Every `.tsx`/`.ts` file was checked for balanced braces/parens as a crude
  syntax sanity check — not a substitute for `tsc --noEmit`.

**First thing to do:** `npm install && npm run typecheck && npm run build`.
Fix whatever that surfaces — real TypeScript/Next.js version-drift issues are
likely, since this was written against current APIs from memory/training
data, not against a live compiler.

## What's actually built vs. scaffolded

| Area | Status |
|---|---|
| `types/`, `data/` | **Complete.** All content ported faithfully from the previous site's `assets/js/config.js` — church info, services, leadership, ministries, the full Empowerment ecosystem (9 departments), partnership content. Nothing invented. |
| `lib/` (dates, whatsapp, calendar, clipboard, utils, content repository) | **Complete** for the utilities a v1 needs. |
| Home page, Partner page | **Fully wired**, real data, real components. |
| Header / MobileNav / Footer | **Fully wired**, including real focus-trap/scroll-lock/Escape handling in `MobileNav.tsx`. |
| UI primitives (`Button`, `Card`, `Accordion`) | **Built**, only the three actually used so far — not all ~20 primitives listed in the original brief. Add more the same way, one file, one job. |
| Every other route (`/about`, `/ministries`, `/sermons`, `/events`, `/empowerment` + 9 department pages, `/grants` application flow, `/empowerment-assessment`, forms, search, command palette, gallery, testing suite) | **Not built.** These exist as real, working pages in the previous static site (`/mnt/user-data/outputs/surefire-update.zip` from earlier in this project) — porting each into this architecture is the same pattern demonstrated by Partner: a `data/*.ts` file (mostly already written), a typed component, a route file. |

## Why it stopped here

The full brief describes dozens of components, 30+ routes, a forms/validation
stack, a search index, and a testing suite — genuinely weeks of work for a
team with a working build pipeline to verify against as they go. Writing all
of it blind, with no compiler and no test runner to catch mistakes, would
mean shipping a much larger pile of *unverified* code — worse, not better.
The Partner and Home slices here are complete enough to show the intended
pattern for data, types, components, and composition; the fastest safe path
forward is to get this building locally, then extend page by page using that
same pattern.

## Architecture

```
app/            Next.js App Router routes (Server Components by default)
components/     ui/ (primitives) · layout/ · navigation/ · home/ · partner/
data/           Typed content — the single source of truth, ready for a future CMS swap
types/          Domain types shared across data and components
lib/            Framework-agnostic business logic (dates, WhatsApp, calendar, clipboard)
  lib/content/  Repository layer — components import from here, never from data/ directly,
                so swapping to a CMS later means rewriting lib/content/index.ts only
schemas/        Zod schemas for forms (client + server validation from one definition)
tests/unit/     Vitest tests for lib/ logic
```

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run lint
npm run test          # unit tests (Vitest)
npm run test:e2e      # Playwright — no tests written yet, add per 00AP
npm run build
```

## Environment variables

See `.env.example`. Nothing is required for the pages currently built —
WhatsApp links are constructed client-side from `data/church.ts`, no secrets
involved yet. Database/email/CMS vars are placeholders for when server-side
form persistence is actually needed (see `00P`/`00O` in the original brief —
don't add a database before something requires one).

## Content updates

Change facts in `data/*.ts` (typed, so a wrong shape fails at compile time,
not at runtime in front of a visitor). Never edit content inside a `.tsx`
file directly — if you find yourself doing that, the content belongs in
`data/` and the component should read it from there instead.

## Known gaps to close next, in a sensible order

1. Get a real `npm install` + `next build` running somewhere with network
   access; fix whatever version drift surfaces.
2. Port `/about`, `/leadership`, `/ministries`, `/services` — straightforward,
   the data is already fully typed and ported.
3. Port the Empowerment hub + 9 department routes using `data/empowerment.ts`
   (already complete) and the `[slug]` dynamic route pattern.
4. Build the Grant application as a real multi-step form with React Hook
   Form + Zod, following the `Input → validate → Review → WhatsApp hand-off`
   pattern already proven on the old static Grants page.
5. Prayer/Testimony/Counselling forms using `schemas/prayer.ts` as the
   template for the other two.
6. Only then: search, command palette, sermon/event systems (there's no
   sermon or event data yet — build the empty states first, honestly).
