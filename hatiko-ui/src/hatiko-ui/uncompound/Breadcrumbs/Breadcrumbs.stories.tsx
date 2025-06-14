import { Meta, StoryObj } from '@storybook/react';


import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { RouterDecorator } from '@/hatiko-ui/config/storybook/decorators/RouterDecorator';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  decorators:[RouterDecorator]
};

const breadcrumbsProps: BreadcrumbsProps = {
  items: [
    {
      label: 'item 1',
      path: '/'
    },
    {
      label: 'item 2',
      path: '/'
    }
  ],
};

type Story = StoryObj<typeof Breadcrumbs>;
const BreadcrumbsTemplate: Story = { render: (args) => <Breadcrumbs {...args} /> };

export const Default = { ...BreadcrumbsTemplate };
Default.args = { ...breadcrumbsProps };

export default meta;