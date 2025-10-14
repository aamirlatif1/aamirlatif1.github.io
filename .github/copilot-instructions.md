# Copilot / AI assistant instructions for aamirlatif1.github.io

- Project type: simple static personal website (single-page HTML + CSS). Main entry: `index.html`.
- Primary styling: `style/main.css` (linked from `index.html`). There's an optional Tailwind setup in `tailwind/` where `tailwind/style.css` imports Tailwind and `tailwind/package.json` lists `tailwindcss` and `@tailwindcss/cli` as dependencies.

What to do first
- Edit content in `index.html` for text changes, links, structure; update `style/main.css` for visual tweaks.
- If you see `tailwind/` changes, note that a build step is required to generate the final CSS. No build script is present in `package.json` — assume maintainer runs Tailwind CLI manually.

Project-specific patterns and conventions
- Single static page: changes are typically made directly in `index.html` and `style/main.css`.
- Images live in `image/` and are referenced relatively (e.g., `<img src="image/hero.png">`). Preserve relative paths when moving or renaming images.
- Minimal JS: there is no JavaScript in the repository; don't add heavy frameworks for small UI tweaks.

Build / dev workflows
- No automated build or CI detected. For Tailwind development, run the Tailwind CLI manually from the `tailwind/` folder. Example (assume `npx` or global `tailwindcss` available):

  - Generate output CSS:
    tailwindcss -i ./style.css -o ../style/main.css --minify

  - For local iterative development (watch):
    tailwindcss -i ./style.css -o ../style/main.css --watch

- The site is static and can be previewed by opening `index.html` in a browser or using a static file server (e.g., `npx http-server` or VS Code Live Server).

Editing guidance for AI agents
- Keep changes minimal and localized: prefer small, easily-reviewable edits to `index.html` and `style/main.css` rather than introducing build tooling.
- Respect current markup structure: the header, nav, and section `id`s (e.g., `about`, `education`, `experience`, `projects`, `skills`) are used for in-page anchors—maintain them.
- When modifying images, update `image/` and ensure `index.html` references use the same relative path.
- Avoid adding Node or large toolchain files unless requested. If adding scripts, include a brief `README.md` note describing how to run them.

Files to reference for common tasks
- `index.html` — single-page content and structure
- `style/main.css` — primary styling
- `tailwind/style.css` and `tailwind/package.json` — optional Tailwind source and declared dependencies

Edge cases and tests
- There are no automated tests. For visual checks, open `index.html` in a browser after edits.
- If large CSS rearrangements are performed, recommend adding a brief screenshot or description in the PR to aid reviewer verification.

When to ask the maintainer
- If a change requires a new build step (e.g., adding Tailwind directives) or new dependencies, ask before adding `package.json` scripts or CI.
- If you plan to introduce JavaScript or external libraries for interactivity, confirm the requirement and preferred approach (vanilla JS vs framework).

If you update this file
- Merge any existing guidance from repository root `README.md` if present.
- Keep this file concise (~20-50 lines) and update the "Build / dev workflows" section if new tooling is added.

---
Please review these instructions. Tell me if you'd like me to include explicit Tailwind CLI commands tailored to your local environment or add a simple `package.json` scripts section for convenience.