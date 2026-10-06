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
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#2f69ff' } },
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
            {
              label: 'Testing Practices',
              items: [
                { label: 'Overview', slug: 'testing-practices' },
                { label: 'Functional & Exploratory', items: [{ label: 'Overview', slug: 'testing-practices/functional-exploratory' }] },
                { label: 'Test Automation', items: [{ label: 'Overview', slug: 'testing-practices/test-automation' }] },
                { label: 'API, Integration & Contract', items: [{ label: 'Overview', slug: 'testing-practices/api-integration-contract' }] },
                { label: 'Performance & Load', items: [{ label: 'Overview', slug: 'testing-practices/performance-load' }] },
                { label: 'Security Testing', items: [{ label: 'Overview', slug: 'testing-practices/security' }] },
                { label: 'Accessibility Testing', items: [{ label: 'Overview', slug: 'testing-practices/accessibility' }] },
                { label: 'Test Plans & Reports', items: [{ label: 'Overview', slug: 'testing-practices/test-plan-reports' }] },
              ],
            },
            { label: 'Guides & Best Practices', items: [{ label: 'Overview', slug: 'guides' }] },
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
