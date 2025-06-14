import { Meta, StoryObj } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination
};

const paginationProps: PaginationProps = {
  page: 1,
  setPages: (value: number) => {
    paginationProps.page = value;
  },
  siblings: 1,
  totalPage: 10
};

type Story = StoryObj<typeof Pagination>;
const PaginationTemplate: Story = { render: (args) => <Pagination {...args} /> };

export const Default = { ...PaginationTemplate };
Default.args = { ...paginationProps };

export const FifthPage = { ...PaginationTemplate };
FifthPage.args = { ...paginationProps, page: 5 };

export const TwoSibling = { ...PaginationTemplate };
TwoSibling.args = { ...paginationProps, page: 5, siblings: 2 };

export default meta;