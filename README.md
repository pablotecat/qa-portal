# QA Chapter Hub

A static, docs-as-code knowledge portal for the QA chapter. The application uses [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/) and is designed for GitHub Pages without a backend.

All current practice content is placeholder structure awaiting QA authorship and approval.

## Requirements

- Node.js 22.12 or later.
- npm 10 or later.

## Local development

```sh
npm install
npm run dev
```

Astro prints the local URL when the development server starts.

## Validation

```sh
npm run validate
```

This runs Astro's content and type checks, builds the production site, validates Starlight's internal links, and creates the local Pagefind search index.

To inspect the production output locally:

```sh
npm run preview
```

## Project structure

```text
src/content/docs/   Published Markdown and MDX pages
src/components/     Reusable presentation for content records
src/styles/         Portal theme and responsive styles
templates/          Source templates copied by contributors
docs/               Project decisions and maintenance notes
.github/workflows/  GitHub Pages deployment
```

## Configuration

`astro.config.mjs` derives the GitHub Pages site URL, repository base path, repository link, and edit links from GitHub Actions. Optional environment variables override that behavior:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Full deployed origin, such as `https://example.github.io` |
| `BASE_PATH` | Repository path, such as `/qa-chapter-hub`, or `/` for a custom domain |
| `REPOSITORY_URL` | Canonical repository URL used for source and edit links |

Copy `.env.example` to `.env` only when local overrides are needed. Never commit `.env` files or secrets.

## GitHub Pages

The deployment workflow runs for pushes to `main` and can also be started manually. In the repository settings, select **GitHub Actions** as the Pages source.

For a standard personal Pages repository, no variables are required. For a private enterprise Pages URL or custom domain, configure `SITE_URL` and `BASE_PATH` as repository variables.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and start from a file in [`templates/`](templates/). The final review, approval, ownership, and archival processes are intentionally not enforced until the QA team approves them.
