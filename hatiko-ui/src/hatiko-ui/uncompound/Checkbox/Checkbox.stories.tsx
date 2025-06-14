import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox
};

const checkboxProps: CheckboxProps = { checked: false };

type Story = StoryObj<typeof Checkbox>;

const CheckboxTemplate: Story = {
  render: (args) => <Checkbox {...args} />
};

export const Default = { ...CheckboxTemplate };
Default.args = checkboxProps;

export const WithLabel = { ...CheckboxTemplate };
WithLabel.args = { ...checkboxProps, label: 'checkbox label' };

export const DefaultActive = { ...CheckboxTemplate };
DefaultActive.args = { checked: true };

export const ActiveWithLabel = { ...CheckboxTemplate };
ActiveWithLabel.args = { checked: true, label: 'checkbox label' };

export default meta;