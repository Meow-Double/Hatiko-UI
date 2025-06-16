import { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/hatiko-ui/config/storybook/decorators/RouterDecorator';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

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