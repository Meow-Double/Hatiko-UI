import { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio
};


type Story = StoryObj<typeof Radio>;
const RadioTemplate: Story = { render: (args) => <Radio {...args} /> };

export const Default = { ...RadioTemplate };
export const Active = { ...RadioTemplate };
Active.args = { checked: true };

export const WithTitle = { ...RadioTemplate };
WithTitle.args = { title: 'Title for radio' };
export const ActiveWithTitle = { ...RadioTemplate };
ActiveWithTitle.args = { checked: true, title: 'Title for radio' };

export default meta;