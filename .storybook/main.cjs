// https://github.com/michaelwooley/storybook-experimental-vite
const {
  mergeConfig
} = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const preprocess = require('svelte-preprocess');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf', '@storybook/addon-a11y', '@storybook/addon-interactions', {
    name: '@storybook/addon-postcss',
    // awaiting discord response for potential issue
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }],
  framework: '@storybook/sveltekit',
  staticDirs: ['../static'],
  features: {
    // On-demand store does not work for .svelte stories, only CSF.
    // Requires all stories to be loaded in bulk.
    // REFERENCE https://storybook.js.org/docs/svelte/configure/overview#feature-flags
    storyStoreV7: false
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
