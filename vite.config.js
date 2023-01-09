import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $src: path.resolve('src'),
      $lib: path.resolve('src/lib'),
      $stories: path.resolve('src/stories'),
      $utils: path.resolve('src/utils'),
      $decorators: path.resolve('src/decorators'),
      $helpers: path.resolve('src/lib/helpers'),
      $assets: path.resolve('src/lib/assets'),
      $types: path.resolve('src/types.ts'),
    },
  },
};

export default config;
