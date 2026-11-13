<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Reelly website

Marketing site for reelly.io, migrated 1:1 from Webflow to Next.js (App Router) for hosting on Vercel.

Structure
- Every Webflow page is a route in `src/app/<url>/page.tsx` (same URLs as the old site).
- A page is a list of section components in `src/app/<url>/_sections/` — edit text and markup there.
- Blocks shared by many pages (navbars, footer…) live in `src/components/webflow/`.
- Styles: the original Webflow stylesheet is `public/legacy/webflow.css`, page custom CSS is in `public/legacy/css/`. Tailwind utilities are available for new work (no preflight, so Webflow styles are untouched).
- Images, fonts and videos from the Webflow CDN are in `public/cdn/`.
- `src/components/LegacyWebflow.tsx` runs the original Webflow runtime (interactions, sliders, dropdowns, forms) and the site's integrations: GTM, Mixpanel, Meta Pixel, Wized, Finsweet, Weglot. Each page lists its scripts in the `page.scripts` array; custom code from Webflow is in `public/legacy/js/inline-*.js`.

Migration rules
- Keep class names when editing Webflow markup; webflow.css and the interactions depend on them.
- When a section is rebuilt as a clean React component, remove the scripts it no longer needs from that page's `scripts` list.
- Use plain `<a>` links between legacy pages (the Webflow runtime needs a full page load).
- The product app (sign in/up) is a separate site: soft.reelly.io.
