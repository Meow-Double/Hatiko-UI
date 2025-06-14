import { ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsProps } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs
};

const tabsProps: TabsProps<Record<string, ReactNode>> = {
  schema: {
    HatikoUI:
      'HatikoUI is a library that provides you with ready-made UI components. You can use them in your projects or rewrite them to suit your needs....',
    Author: (
      <>
        <p>Author Github:</p>
        <a
          href='https://github.com/Meow-Double'
          target='_blank'
          className='tabs_link'
          rel='noreferrer'
        >
          https://github.com/Meow-Double
        </a>
      </>
    )
  },
  classNameContent: 'tabs'
};

type Story = StoryObj<typeof Tabs>;
const TabsTemplate: Story = { render: (args) => <Tabs {...args} /> };

export const Default = { ...TabsTemplate };
Default.args = tabsProps;

export default meta;