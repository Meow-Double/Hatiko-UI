import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '../../icons/index';

import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button
};

const buttonProps: ButtonProps = {
  variant: 'primary',
  children: 'button',
  loading: false
};

const buttonIcon = <Icons.SearchIcon />;

type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Primary = { ...ButtonTemplate };
Primary.args = buttonProps;

export const Outline = { ...ButtonTemplate };
Outline.args = { ...buttonProps, variant: 'outline' };

export const PrimaryStartIcon = { ...ButtonTemplate };
PrimaryStartIcon.args = { ...buttonProps, startIcon: buttonIcon };

export const PrimaryEndIcon = { ...ButtonTemplate };
PrimaryEndIcon.args = { ...buttonProps, endIcon: buttonIcon };

export const OutlineStartIcon = { ...ButtonTemplate };
OutlineStartIcon.args = { ...buttonProps, variant: 'outline', startIcon: buttonIcon };

export const OutlineEndIcon = { ...ButtonTemplate };
OutlineEndIcon.args = { ...buttonProps, variant: 'outline', endIcon: buttonIcon };

export default meta;