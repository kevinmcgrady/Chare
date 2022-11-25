const path = require('path');

module.exports = {
  stories: [
    '../src/atomic/**/*.stories.mdx',
    '../src/atomic/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atomic': path.resolve(__dirname, '../src/atomic'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@assets': path.resolve(__dirname, '../public/assets'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@urls': path.resolve(__dirname, '../src/urls'),
    };

    return config;
  },
};
