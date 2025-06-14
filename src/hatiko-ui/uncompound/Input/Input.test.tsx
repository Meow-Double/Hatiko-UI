import { render } from '@testing-library/react';

import { SearchIcon } from '@/library/icons';

import { Input, INPUT_TEST_IDS, InputProps } from './Input';

import styles from './Input.module.css';

const inputProps = {
  variant: 'primary'
} satisfies InputProps;

describe('Input', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} className='input_class' />);

    const inputIconWrapper = getByTestId(INPUT_TEST_IDS.ICON_WRAPPER);

    expect(inputIconWrapper).toHaveClass('input_class');
  });
});

describe('Input variant', () => {
  test('should correct show primary variant when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} variant='primary' />);

    const inputIconWrapper = getByTestId(INPUT_TEST_IDS.ICON_WRAPPER);

    expect(inputIconWrapper).toHaveClass(styles['primary']);
  });
  test('should correct show outline variant when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} variant='outline' />);

    const inputIconWrapper = getByTestId(INPUT_TEST_IDS.ICON_WRAPPER);

    expect(inputIconWrapper).toHaveClass(styles['outline']);
  });
});

describe('Input endIcon', () => {
  test('should display endIcon when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} endIcon={<SearchIcon />} />);

    const endIcon = getByTestId(INPUT_TEST_IDS.END_ICON);

    expect(endIcon).toBeInTheDocument();
  });

  test('should not display endIcon when provided', () => {
    const { queryByTestId } = render(<Input {...inputProps} />);

    const endIcon = queryByTestId(INPUT_TEST_IDS.END_ICON);

    expect(endIcon).not.toBeInTheDocument();
  });
});

describe('Input label', () => {
  test('should display label when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} label='input_label' />);

    const labelText = getByTestId(INPUT_TEST_IDS.LABEL_TEXT);

    expect(labelText).toBeInTheDocument();
  });

  test('should display label when provided', () => {
    const { queryByTestId } = render(<Input {...inputProps} />);

    const labelText = queryByTestId(INPUT_TEST_IDS.LABEL_TEXT);

    expect(labelText).not.toBeInTheDocument();
  });
});

describe('Input error', () => {
  test('should display error text when provided', () => {
    const { getByTestId } = render(<Input {...inputProps} error='input_error' />);

    const errorText = getByTestId(INPUT_TEST_IDS.ERROR_TEXT);

    expect(errorText).toBeInTheDocument();
  });

  test('should not display error text when provided', () => {
    const { queryByTestId } = render(<Input {...inputProps} />);

    const errorText = queryByTestId(INPUT_TEST_IDS.ERROR_TEXT);

    expect(errorText).not.toBeInTheDocument();
  });
});