import { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/library/storybook/decorators/RouterDecorator';

import { NavigationMenu, NavigationMenuProps } from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/Navigation Menu',
  component: NavigationMenu,
  decorators: [RouterDecorator]
};

const navigationMenuProps: NavigationMenuProps = {
  title: 'Stories navigation menu',
  items: [
    { id: 1, path: '#!', text: 'Stories 1' },
    { id: 2, path: '#!', text: 'Stories 2' }
  ]
};

type Story = StoryObj<typeof NavigationMenu>;
const NavigationMenuTemplate: Story = { render: (args) => <NavigationMenu {...args} /> };

export const Default = { ...NavigationMenuTemplate };
Default.args = navigationMenuProps;

export default meta;