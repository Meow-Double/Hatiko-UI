import { Meta, StoryObj } from '@storybook/react';

import { Drawer, DrawerProps } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer
};

const drawerProps: DrawerProps = {
  children: 'drawer content',
  isOpen: true,
  closeDrawer: () => false,
  closeBtn: false
};

type Story = StoryObj<typeof Drawer>;

const DrawerTemplate: Story = { render: (args) => <Drawer {...args} /> };

export const Default = { ...DrawerTemplate };
Default.args = drawerProps;

export const WithTitle = {...DrawerTemplate};
WithTitle.args = { ...drawerProps, title: 'Modal title' };

export const WithTitleAndIcon = {...DrawerTemplate};
WithTitleAndIcon.args = { ...drawerProps, title: 'Modal title', closeBtn: true };


export default meta;