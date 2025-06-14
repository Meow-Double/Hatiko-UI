import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch
};

type Story = StoryObj<typeof Switch>;
const SwitchTemplate: Story = { render: (args) => <Switch {...args} /> };

export const Default = { ...SwitchTemplate };
export const DefaultChecked = { ...SwitchTemplate };
DefaultChecked.args = { checked: true };

export default meta;