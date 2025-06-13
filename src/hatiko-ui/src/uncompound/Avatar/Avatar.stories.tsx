import { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '@/library/storybook/images/image-3.jpg';

import { Avatar, AvatarProps } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar
};

const avatarProps: AvatarProps = {
  path: AvatarImg
};

type Story = StoryObj<typeof Avatar>;
const AvatarTemplate: Story = { render: (args) => <Avatar {...args} /> };

export const Default = { ...AvatarTemplate };
Default.args = avatarProps;

export default meta;