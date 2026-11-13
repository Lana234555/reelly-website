<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Reelly website

Marketing site for reelly.io, migrated from Webflow to Next.js on Vercel.
- Navigation and the page list: `src/lib/site.ts`
- Blog posts: Markdown files in `content/blog/` (front matter: title, date, category)
- Old Webflow URLs are kept with redirects in `next.config.ts`
- The product app (sign in/up) is a separate site: soft.reelly.io
