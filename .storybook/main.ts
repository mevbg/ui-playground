import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  stories: [
    './stories/introduction/**/*.@(story|stories).@(mdx)',
    './stories/documentation/**/*.@(story|stories).@(mdx)',
    './stories/design/tokens/**/*.@(story|stories).@(mdx)',
    './stories/overlays/**/*.@(story|stories).@(ts)',
    '../**/components/**/*.@(story|stories).@(ts)'
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', 'storybook-addon-pseudo-states'],
  docs: {
    defaultName: 'Documentation'
  },
  staticDirs: ['./public', '../public'],
  core: {
    disableTelemetry: true
  },
  viteFinal: async (config) => {
    // Add Vue plugin
    config.plugins?.push(vue({}));

    // Add SVG loader
    config.plugins?.push(svgLoader());

    config.server = {
      ...config.server,
      allowedHosts: ['localhost', '127.0.0.1', 'development.playground.mev.bg']
    };

    // Add aliases with absolute paths
    config.resolve = {
      ...config.resolve,

      alias: {
        ...config.resolve?.alias,

        '#root': resolve(__dirname, '..'),
        '#storybook': resolve(__dirname, '.'),
        '#design': resolve(__dirname, '../design'),
        '#public': resolve(__dirname, '../public'),
        '#utils': resolve(__dirname, '../app/utils'),

        '#core': resolve(__dirname, '../app/core'),
        '#common': resolve(__dirname, '../app/common'),

        // Module aliases
        '#search': resolve(__dirname, '../app/modules/search')
      }
    };

    return config;
  }
};
export default config;
