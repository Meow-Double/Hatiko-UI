import { Meta, StoryObj } from '@storybook/react';

import { Table, TableProps } from './Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table
};

const tableProps: TableProps<Record<string, string[]>> = {
  schema: {
    row1: ['column1', 'column2', 'column3', 'column4'],
    row2: ['column1', 'column2', 'column3', 'column4'],
    row3: ['column1', 'column2', 'column3', 'column4']
  }
};

type Story = StoryObj<typeof Table>;
const TableTemplate: Story = { render: (args) => <Table {...args} /> };

export const Default = { ...TableTemplate };
Default.args = tableProps;

export default meta;