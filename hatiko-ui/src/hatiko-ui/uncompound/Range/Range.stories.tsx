import { Meta, StoryObj } from '@storybook/react';

import { Range, RangeProps } from './Range';

const meta: Meta<typeof Range> = {
  title: 'UI/Range',
  component: Range
};

const rangeProps: RangeProps = { defaultValue: 50 };

type Story = StoryObj<typeof Range>;
const RangeTemplate: Story = { render: (args) => <Range {...args} /> };

export const Default = { ...RangeTemplate };
Default.args = { ...rangeProps };

export const ProgressMin = { ...RangeTemplate };
ProgressMin.args = { ...rangeProps, defaultValue: 0 };

export const ProgressMax = { ...RangeTemplate };
ProgressMax.args = { ...rangeProps, defaultValue: 100 };

export default meta;