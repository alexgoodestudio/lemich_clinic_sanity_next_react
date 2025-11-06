## Lemich Clinic — Copilot instructions (concise)

This file tells AI coding assistants how to be immediately productive in this repository. Keep guidance specific and evidence-based — reference files below when making changes.

- Project type: Next.js 14 App Router app (see `app/`) with an embedded Sanity CMS. Primary server is Next; Sanity content is consumed at runtime via `lib/sanity.js`.
- Key files:
  - `package.json` — scripts: `dev`, `build`, `start`, `lint` (use `npm run dev` to develop).
  - `app/` — Next App Router routes and layouts. `app/studio/[[...index]]/page.jsx` mounts Sanity Studio at `/studio` (so run Next dev to open Studio).
  - `lib/sanity.js` — primary Sanity client + helpers (see `getTeamMembers`, `getBlogPosts`, `getBlogPost`, and `urlFor`).
  - `sanity/config.js` / `sanity.config.js` and `sanity/schemas/` — schema definitions (teamMember, blogPost).
  - `components/` — UI building blocks. Layout is implemented using Bootstrap classes here; prefer editing these files when changing layout behavior.
  - `app/globals.css` — global CSS. Tailwind is used only for color utilities in this project; do NOT refactor layout to Tailwind.
  - `public/images/`, `public/staffimages/`, `public/fonts/` — static assets and naming conventions (staff images use lastName based filenames, e.g. `lemich-min.jpeg`).

Important patterns & conventions
- Layout vs styling: Bootstrap 5 is the canonical layout system (container/row/col, spacing). Tailwind is intentionally used only for colors (bg-*, text-*, border-*). Keep that separation when adding or editing styles.
- Sanity integration:
  - Runtime uses env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` and optionally `SANITY_API_TOKEN` (see `lib/sanity.js` and `sanity.config.js`).
  - Content helpers are in `lib/sanity.js` (use `getTeamMembers()` and `getBlogPosts()` when needing canonical queries).
  - Team members are ordered/sorted by the `order` field in the Sanity schema — don't infer ordering elsewhere.
  - Image URLs are generated with `urlFor(source)` (do not hard-code CDN URLs).
- Sanity Studio access: The Studio is embedded at `/studio` via `app/studio/`. To edit CMS content locally, run `npm run dev` and open `http://localhost:3000/studio`. (Note: README/SETUP_GUIDE mention `npm run studio`, but this repo embeds Studio — prefer dev + /studio route. If you need native Sanity CLI commands, use `npx sanity` or install `@sanity/cli`.)
- Blog fetching: code expects `published == true` and sorts by `date` desc (see `getBlogPosts`). Keep those filters when adding features that consume blog data.

Developer workflows (quick)
- Install: `npm install`
- Dev (Next + embedded Studio): `npm run dev` → Open `http://localhost:3000` and `http://localhost:3000/studio`
- Build for production: `npm run build` then `npm start` (or deploy to Vercel). Add `NEXT_PUBLIC_SANITY_*` variables in hosting settings.
- Lint: `npm run lint`

Debugging tips (repo-specific)
- Missing images: Check `public/staffimages/` and `public/images/` for exact filenames (case-sensitive). Team member images map to `lastName` in the Sanity entry.
- Sanity content not appearing: verify env vars and that the item is `published` in Sanity. Restart dev server after changing `.env.local`.
- Studio not at /studio: if `/studio` 404s, confirm `app/studio/[[...index]]/page.jsx` exists and that dev server is running.

What to change where (concrete examples)
- Change layout markup: edit `components/Nav.js`, `components/Hero.js`, `components/Footer.js`.
- Change Sanity schema: edit `sanity/schemas/*.js` and redeploy schemas if you use Sanity CLI. For local editing, update `sanity/schemas` and push content via the embedded Studio.
- Add helper query: add query functions to `lib/sanity.js` and reuse them in `app/blog/*` or `app/team/*` pages.

AI agent prompt examples (short)
- "Add an optional subtitle to the Team page header — update `app/team/page.js` and `components/Hero.js`; keep Bootstrap layout and add a Tailwind color class for the subtitle text." 
- "Create a `getActiveTeamMembers` helper in `lib/sanity.js` that fetches only documents with `active == true` and use it in `app/team/page.js` to drive the team list." 

Notes and caveats
- The README and SETUP_GUIDE contain many useful instructions. There is a small mismatch: docs mention `npm run studio` but Studio is embedded under `/studio`. Prefer running `npm run dev` in this repo.
- Keep Backwards compatibility: many components mirror an original site; avoid refactors that change visible DOM structure without explicit design intent.

If something is unclear, ask for the target change and whether to modify Sanity schemas, frontend components, or both.
