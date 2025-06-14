import { Meta, StoryObj } from '@storybook/react';

import { Linkify, LinkifyProps } from './Linkify';

const meta: Meta<typeof Linkify> = {
  title: 'UI/Linkify',
  component: Linkify
};

const linkifyProps: LinkifyProps = {
  children:
    'Hatiko-ui ( https://github.com/Meow-Double/Hatiko-UI ) - a library of UI components for React'
};

type Story = StoryObj<typeof Linkify>;

const LinkifyTemplate: Story = { render: (args) => <Linkify {...args} /> };

export const Default = { ...LinkifyTemplate };
Default.args = linkifyProps;

export default meta;