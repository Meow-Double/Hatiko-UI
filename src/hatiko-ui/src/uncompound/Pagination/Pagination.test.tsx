import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Pagination, PAGINATION_TEST_IDS, PaginationProps } from './Pagination';

const paginationProps = {
  page: 1,
  setPages: vitest.fn(),
  siblings: 2,
  totalPage: 10
} satisfies PaginationProps;

describe('Pagination', () => {
  test('should render component', () => {
    const { getByTestId } = render(<Pagination {...paginationProps} />);

    const pagination = getByTestId(PAGINATION_TEST_IDS.PAGINATION);

    expect(pagination).toBeInTheDocument();
  });
});