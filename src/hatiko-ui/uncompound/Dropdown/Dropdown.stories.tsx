import { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '../../config/storybook/decorators/RouterDecorator';

import { Dropdown, DropdownProps } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  decorators: [RouterDecorator]
};

const dropdownProps: DropdownProps = {
  title: 'Food menu',
  items: [
    {
      id: 1,
      text: 'Pizzas',
      link: '/menu/pizzas'
    },
    {
      id: 2,
      text: 'Desserts',
      link: '/menu/desserts'
    }
  ]
};

type Story = StoryObj<typeof Dropdown>;

const DropdownTemplate: Story = { render: (args) => <Dropdown {...args} /> };

export const Default = { ...DropdownTemplate };
Default.args = dropdownProps;

export default meta;