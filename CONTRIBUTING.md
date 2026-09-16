# Contributing to QA Chapter Hub

The current workflow is provisional. It explains how to prepare a change but does not establish mandatory reviewers, approval gates, ownership rules, or branch protection.

## Prepare a content change

1. Search for an existing canonical page.
2. Copy the closest file from `templates/` into the relevant directory under `src/content/docs/`.
3. Use a lowercase, hyphen-separated filename.
4. Replace all `TODO`, `Placeholder`, and `Example` markers unless they are deliberately visible.
5. Keep company standards separate from examples and personal experience.
6. Do not add secrets, sensitive findings, inappropriate personal data, videos, or heavy binary files.
7. Run `npm run validate`.

## Suggested GitHub path

Create a short-lived branch, commit the focused change, and open a pull request that explains its purpose, scope, owner, and validation. Ask an appropriate subject-matter expert to validate technical claims.

This is a suggested collaboration path until the team approves its contribution model.

## Add navigation

Pages are routed from their location in `src/content/docs/`. Add a discoverable page to the relevant sidebar group in `astro.config.mjs`. Use relative internal links so deployment under a GitHub Pages base path remains portable.

## Open governance decisions

- Required metadata beyond title and description.
- Content lifecycle states and definitions.
- Area owners and reviewer expectations.
- Review cycles and archival rules.
- `CODEOWNERS`, issue templates, and branch protection.
