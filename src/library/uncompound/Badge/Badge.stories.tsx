import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge
};

const badgeProps: BadgeProps = {
  variant: 'success'
};

type Story = StoryObj<typeof Badge>;
const BadgeTemplate: Story = { render: (args) => <Badge {...args} /> };

export const Success = { ...BadgeTemplate };
Success.args = badgeProps;

export const Pending = { ...BadgeTemplate };
Pending.args = { ...badgeProps, variant: 'pending' };

export const Error = { ...BadgeTemplate };
Error.args = { ...badgeProps, variant: 'error' };

export const SuccessWithText = { ...BadgeTemplate };
SuccessWithText.args = { ...badgeProps, text: 'badge text' };

export const PendingWithText = { ...BadgeTemplate };
PendingWithText.args = { ...badgeProps, variant: 'pending', text: 'badge text' };

export const ErrorWithText = { ...BadgeTemplate };
ErrorWithText.args = { ...badgeProps, variant: 'error', text: 'badge text' };

export default meta;