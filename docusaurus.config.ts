import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  title: 'Educado Docs',
  tagline: 'Technical documentation for the mobile education platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fahnoee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/educado-docs/',

  // GitHub pages deployment config.
  organizationName: 'Fahnoee',
  projectName: 'educado-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ErasmusEgalitarian/educado-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Educado Docs',
      logo: {
        alt: 'Educado Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/ErasmusEgalitarian/educado-app',
          label: 'Frontend',
          position: 'right',
        },
        {
          href: 'https://github.com/ErasmusEgalitarian/educado-api',
          label: 'Backend',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Project Overview',
              to: '/docs/project-overview',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'Frontend (React Native)',
              href: 'https://github.com/ErasmusEgalitarian/educado-app',
            },
            {
              label: 'Backend (Node.js)',
              href: 'https://github.com/ErasmusEgalitarian/educado-api',
            },
          ],
        },
        {
          title: 'Design & Planning',
          items: [
            {
              label: 'Figma Design',
              href: 'https://www.figma.com/design/BCEVQYvMDrcBE9qqehr9HL/Mobile-Education-UI?node-id=8317-5085&p=f&t=cxNftnqrC0eM1STK-0',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Educado Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
