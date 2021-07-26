/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dart Code Metrics',
  tagline: 'Static analysis tool that helps analyse and improve code quality.',
  url: 'https://github.com/dart-code-checker/dart-code-metrics', // TODO: update the link
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dart-code-checker',
  projectName: 'dart-code-metrics',
  trailingSlash: false,
  themeConfig: {
    prism: {
      defaultLanguage: 'dart',
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
          to: 'docs/getting-started/introduction',
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
          title: 'Docs',
          items: [
            {
              label: 'Rules',
              to: 'docs/rules/overview',
            },
            {
              label: 'Metrics',
              to: 'docs/metrics/overview',
            },
            {
              label: 'Configuration',
              to: 'docs/getting-started/configuration',
            },
            {
              label: 'GitHub Action',
              href: 'https://github.com/dart-code-checker/dart-code-metrics-action',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/search?q=%23dartcodemetrics&src=typed_query',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/DartCodeMetrics',
            },
            {
              label: 'Pub',
              href: 'https://pub.dev/packages/dart_code_metrics',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dart-code-checker/dart-code-metrics',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // TODO(incendial): add blog later
            // {
            //   label: 'Blog',
            //   to: 'docs/getting-started/introduction',
            // },
            {
              label: 'Official lint package',
              href: 'https://pub.dev/packages/lints',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dart Code Checker Team. <a href="https://storyset.com/people">Illustrations by Storyset</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dart-code-checker/website/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
