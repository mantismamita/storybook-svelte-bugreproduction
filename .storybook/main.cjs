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
    interactionsDebugger: true,
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
};
