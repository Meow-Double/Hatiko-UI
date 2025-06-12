import { render } from '@testing-library/react';

import { Table, TABLE_TEST_IDS, TableProps } from './Table';

const tableProps = {
  schema: {
    row1: ['column1', 'column2'],
    row2: ['column1', 'column2']
  }
} satisfies TableProps<Record<string, string[]>>;

describe('Table', () => {
  test('should render component', () => {
    const { getByTestId } = render(<Table {...tableProps} />);

    const table = getByTestId(TABLE_TEST_IDS.TABLE);

    expect(table).toBeInTheDocument();
  });
});

describe('Table', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Table {...tableProps} className='table_className' />);

    const table = getByTestId(TABLE_TEST_IDS.TABLE);

    expect(table).toHaveClass('table_className');
  });

  test('should has not className when provided', () => {
    const { queryByTestId } = render(<Table {...tableProps} />);

    const table = queryByTestId(TABLE_TEST_IDS.TABLE);

    expect(table).not.toHaveClass('table_className');
  });
});