import { Meta, StoryObj } from '@storybook/react';

import { Confirm, ConfirmProps } from './Confirm';

const meta: Meta<typeof Confirm> = {
  title: 'UI/Confirm',
  component: Confirm
};

const confirmProps: ConfirmProps = {
  isOpen: true,
  closeWindow: () => {},
  title: 'Confirm window',
  getAnswer: () => {}
};

type Story = StoryObj<typeof Confirm>;

const ConfirmTemplate: Story = { render: (args) => <Confirm {...args} /> };

export const Default = { ...ConfirmTemplate };
Default.args = confirmProps;

export default meta;