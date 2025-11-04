## Copilot / AI assistant instructions — aamirlatif1.github.io

This is a small, single-page static personal website. The canonical content is `index.html`. Use the guidance below to be productive quickly and avoid breaking navigation or styling.

Key facts (quick):
- Project type: static HTML site (single-page). Entry: `index.html`.
- Main CSS: `style/main.css`. Tailwind sources live under `tailwind/` (if you change Tailwind files you must run the CLI to regenerate `style/main.css`).
- Images: `image/` (referenced with relative paths). Learning examples: `js-learning/` and `js/`.

Editing rules the repo follows:
- Edit copy/structure in `index.html`. Small styling tweaks go to `style/main.css` unless you're actively using Tailwind sources.
- Preserve in-page anchor ids (e.g., `about`, `education`, `experience`). If you must rename an id, update the corresponding nav `<a href="#...">` entries.
- Keep `js-learning/` and `js/` scripts separate from the production page — do not import learning scripts into `index.html`.

Build & local preview (explicit commands, PowerShell):
- No CI detected. To regenerate `style/main.css` from Tailwind sources (from repo root):

  cd tailwind; npx tailwindcss -i ./style.css -o ../style/main.css --minify

  # or for development watch mode:
  cd tailwind; npx tailwindcss -i ./style.css -o ../style/main.css --watch

- For a quick preview you can open `index.html` in a browser or serve it with a static server, e.g. `npx http-server` or VS Code Live Server.

Project-specific conventions & gotchas:
- Anchor ids sometimes contain `&` (example: `licenses&certifications`). Prefer hyphenated ids (`licenses-certifications`) when normalizing and update nav links accordingly.
- Images are referenced as `image/<name>`. If you move an image, update all references. Prefer adding `alt` text and `loading="lazy"` for non-critical images.
- Keep edits minimal: avoid adding runtime frameworks (React/Vue) to this repo — it is intentionally simple and static.

Integration points & where to look:
- `index.html` — canonical source of content, nav, and page sections.
- `style/main.css` — production stylesheet. If this is edited directly, no build step is required.
- `tailwind/` — optional Tailwind source files; maintainers may expect you to run the CLI locally if you change these.
- `js/` and `js-learning/` — distinct; `js/` contains small helper scripts, `js-learning/` contains lesson examples.

Example edits (safe patterns):
- Change hero image: replace `image/hero.png`, keep the same filename or update `src` in `index.html`.
- Small layout tweak: edit `style/main.css`. For Tailwind-source changes, run the Tailwind command above.

When to ask the maintainer:
- Before adding npm deps, CI, or build tooling. Before importing learning scripts into the main page.

If you update this file: keep it short, add only project-discoverable instructions, and update the Build section when adding or changing tooling.

Questions you can answer for maintainers (useful to add to this file later):
- Do you prefer Tailwind sources maintained in-repo or generated locally only?  
- Should I normalize all ids (remove `&`) and update nav anchors across the site?

---
If any section is unclear or you want the PR to also include small fixes (image alts, id normalization, or a sample Tailwind npm script), tell me and I'll prepare a focused patch.