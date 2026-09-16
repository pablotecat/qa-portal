// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/** @param {string} name */
const readEnv = (name) => process.env[name]?.trim() || undefined;
const [owner, repositoryName] = (readEnv('GITHUB_REPOSITORY') ?? '/').split('/');
const isAccountPage = repositoryName === `${owner}.github.io`;
const site = readEnv('SITE_URL') ?? (owner ? `https://${owner}.github.io` : undefined);
const base = readEnv('BASE_PATH') ?? (repositoryName && !isAccountPage ? `/${repositoryName}` : '/');
const repositoryUrl =
  readEnv('REPOSITORY_URL') ??
  (owner && repositoryName ? `https://github.com/${owner}/${repositoryName}` : undefined);

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'QA Chapter Hub',
      description: 'A collaborative, docs-as-code knowledge hub for quality assurance.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'QA Chapter Hub',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/global.css'],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      lastUpdated: true,
      expressiveCode: {
        styleOverrides: { borderRadius: '0.25rem' },
      },
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0b1f26' } },
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'light dark' } },
      ],
      ...(repositoryUrl && {
        social: [{ icon: 'github', label: 'GitHub repository', href: repositoryUrl }],
        editLink: { baseUrl: `${repositoryUrl}/edit/main/` },
      }),
      sidebar: [
        { label: 'Home', slug: 'index' },
        {
          label: 'Direction',
          items: [
            { label: 'QA Standards & Strategy', slug: 'qa-standards' },
            { label: 'Roadmap & Proposals', slug: 'roadmap' },
          ],
        },
        {
          label: 'Practice Library',
          items: [
            { label: 'Testing Practices', slug: 'testing-practices' },
            { label: 'Functional & Exploratory', slug: 'testing-practices/functional-exploratory' },
            { label: 'Test Automation', slug: 'testing-practices/test-automation' },
            { label: 'API, Integration & Contract', slug: 'testing-practices/api-integration-contract' },
            { label: 'Performance & Load', slug: 'testing-practices/performance-load' },
            { label: 'Security Testing', slug: 'testing-practices/security' },
            { label: 'Accessibility Testing', slug: 'testing-practices/accessibility' },
            { label: 'Guides & Best Practices', slug: 'guides' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Code, Tools & Repositories', slug: 'code-tools' },
            { label: 'Templates & Checklists', slug: 'templates' },
            { label: 'Meetings & Decisions', slug: 'meetings-decisions' },
          ],
        },
        { label: 'Contribute', slug: 'contribute' },
      ],
    }),
  ],
});
