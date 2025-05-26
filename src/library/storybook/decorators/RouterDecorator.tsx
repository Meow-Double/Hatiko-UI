import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from 'storybook/internal/types';

export const RouterDecorator = (ComponentStory: PartialStoryFn) => {
  return (
    <BrowserRouter>
      <ComponentStory />
    </BrowserRouter>
  );
};