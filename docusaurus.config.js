// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Naspen',
  tagline: 'Forever in progress.',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://naspen.mov',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theNaspenGrove', // Usually your GitHub org/user name.
  projectName: 'NaspenSite', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/Wiki',
          tagsBasePath: '/Tags',
          path: 'Content/Wiki',
        },
        blog: {
          routeBasePath: '/Blog',
          tagsBasePath: '/Tags',
          path: 'Content/Blog',
          blogTitle: 'The Naspen Blog',
          blogDescription: 'A place for Natalie to share her thoughts and ideas.',
          showReadingTime: false,
          tags: 'tags.yml',
          onInlineTags: 'throw' 
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Community-Server-Wiki',
        path: 'Content/Community-Server/Wiki',
        routeBasePath: '/Community-Server/Wiki',
        tagsBasePath: '/Tags',
        sidebarPath: './CommunityServerSidebar.js',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'Community-Server-Blog',
        path: 'Content/Community-Server/Blog',
        routeBasePath: '/Community-Server/Blog',
        tagsBasePath: '/Tags',
        showReadingTime: false,
        blogTitle: 'The Naspen Grove Community Server Blog',
        blogDescription: 'Updates, announcements, and more from the Naspen Grove Community Server.',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'https://data.naspen.mov/motm-img/format=webp',
      navbar: {
        title: 'Naspen',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dark-logo-no-bg.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: '/Blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/Community-Rules', 
            label: 'Community Rules', 
            position: 'left'
          },
          {
            type: 'dropdown',
            to: '/Community-Server', 
            label: 'Community Server', 
            position: 'right',
            items:[
              {
                label: 'CS Wiki',
                href: '/Community-Server/Wiki',
              },
              {
                label: 'CS Blog',
                href: '/Community-Server/Blog',
              },
            ]
          },
        
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.naspen.mov',
              },
              {
                label: 'GitHub Org',
                href: 'https://github.com/theNaspenGrove',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/theNaspenGrove/NaspenSite',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <code style="background-color:#ce7738; color:#1c1c1c; padding:2px 5px 2px 5px">The Naspen Grove</code> <br/> Built with Docusaurus and Love <span style="color:red">♥</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
