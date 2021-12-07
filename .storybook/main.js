const path = require('path');
const resolvePath = _path => path.join(process.cwd(), _path);

module.exports = {
  // stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@emotion/core': resolvePath('node_modules/@emotion/react'),
      '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
      'emotion-theming': resolvePath('node_modules/@emotion/react'),
      // '@assets': path.resolve(__dirname, '../assets'),
    };
    return config;
  },
};
