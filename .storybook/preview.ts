import type { Preview } from '@storybook/react';
import '../src/hatiko-ui/assets/styles/index.css';
import '../src/assets/styles/index.css';

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