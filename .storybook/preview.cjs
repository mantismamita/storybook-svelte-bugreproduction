import '../src/assets/styles/reset.css';
import '../src/assets/styles/global.css';

import customViewports from './customViewports';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}
