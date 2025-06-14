import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from './Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select
};

const selectProps: SelectProps = {
  items: ['item 1', 'item 2', 'item 3', 'item 4']
};

type Story = StoryObj<typeof Select>;

const SelectTemplate: Story = { render: (args) => <Select {...args} /> };

export const Default = { ...SelectTemplate };
Default.args = selectProps;

export default meta;