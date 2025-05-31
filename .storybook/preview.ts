import type { Preview } from '@storybook/react';
import '../src/assets/styles/index.css';
import '../src/library/assets/styles/index.css';
import '../src/library/storybook/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;