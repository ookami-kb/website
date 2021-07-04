/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dart Code Metrics',
  tagline: '',
  url: 'https://github.com/dart-code-checker/dart-code-metrics', // TODO: update the link
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dart-code-checker',
  projectName: 'dart-code-metrics',
  themeConfig: {
    prism: {
      additionalLanguages: ['dart'],
    },
    navbar: {
      title: 'Dart Code Metrics',
      logo: {
        alt: 'Dart Code Metrics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/getting-started/overview',
          label: 'Getting started',
          position: 'right',
          activeBasePath: 'docs/getting-started',
        },
        {
          to: 'docs/rules/overview',
          label: 'Rules',
          position: 'right',
          activeBasePath: 'docs/rules',
        },
        {
          to: 'docs/metrics/overview',
          label: 'Metrics',
          position: 'right',
          activeBasePath: 'docs/metrics',
        },
        {
          to: 'docs/cli/overview',
          label: 'Commands',
          position: 'right',
          activeBasePath: 'docs/cli/overview',
        },
        {
          href: 'https://github.com/dart-code-checker/dart-code-metrics',
          label: 'GitHub',
          position: 'right',
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
              label: 'Telegram',
              href: 'https://t.me/DartCodeMetrics',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dart-code-checker/dart-code-metrics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dart Code Checker Team. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dart-code-checker/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
