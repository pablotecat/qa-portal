# Content model

The portal uses Markdown or MDX pages in `src/content/docs/`. Frontmatter is validated by `src/content.config.ts`.

## Metadata

| Field | Current rule | Purpose |
| --- | --- | --- |
| `title` | Required | Page and navigation title |
| `description` | Required | Search and page metadata |
| `owner` | Optional | Accountable maintainer or group |
| `status` | Optional, unrestricted | Lifecycle state after vocabulary approval |
| `tags` | Optional string list | Discovery and future filtering |
| `scope` | Optional | Applicable organization, project, or technology scope |
| `created` | Optional string | Record creation date |
| `lastReviewed` | Optional string | Most recent content review date |
| `reviewCycle` | Optional string | Agreed review cadence or trigger |
| `relatedLinks` | Optional string list | Canonical related resources |

Only `title` and `description` are required initially. Date formats, status values, controlled tags, ownership syntax, and review cycles remain decisions for the QA team. This avoids encoding an unapproved governance model.

## Conventions

- Use lowercase, hyphen-separated filenames and stable URLs.
- Put reusable page structures in the top-level `templates/` directory.
- Mark incomplete or illustrative content as `TODO`, `Placeholder`, or `Example`.
- Link to externally hosted recordings and large files.
- Do not store secrets, sensitive findings, or inappropriate personal data.
