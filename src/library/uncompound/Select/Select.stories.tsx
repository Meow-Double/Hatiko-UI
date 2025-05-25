import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from './Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select
};

const selectProps: SelectProps = {
  items: ['item 1', 'item 2', 'item 3', 'item 4']
};

const SelectTemplate: StoryObj<typeof Select> = { render: (args) => <Select {...args} /> };

export const Default = { ...SelectTemplate };
Default.args = selectProps;

export default meta;