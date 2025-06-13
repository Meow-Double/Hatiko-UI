import { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipProps } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip
};

const tooltipProps: TooltipProps = {
  children: 'tooltip label',
  title: "It's a tooltip component"
};

type Story = StoryObj<typeof Tooltip>;
const TooltipTemplate: Story = { render: (args) => <Tooltip {...args} /> };

export const Default = { ...TooltipTemplate };
Default.args = { ...tooltipProps, className: 'tooltip' };

export default meta;