import { render } from '@testing-library/react';

import { SearchIcon } from '@/library/icons';

import { Button, BUTTON_TEST_IDS, ButtonProps } from './Button';

import styles from './Button.module.css';

const buttonProps = {
  children: 'Button text',
  variant: 'primary'
} satisfies ButtonProps;

describe('Button', () => {
  test('should display loader when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} loading={'loading...'} />);

    const loader = getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });

  test('should display provided children', () => {
    const { getByTestId } = render(<Button {...buttonProps} />);

    const button = getByTestId(BUTTON_TEST_IDS.WRAPPER);

    expect(button).toHaveTextContent(buttonProps.children);
  });

  test('should has className when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} className='button_class' />);

    const button = getByTestId(BUTTON_TEST_IDS.WRAPPER);

    expect(button).toHaveClass('button_class');
  });
});

describe('Button variant', () => {
  test('should correct show primary variant when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} variant='primary' />);

    const button = getByTestId(BUTTON_TEST_IDS.WRAPPER);

    expect(button).toHaveClass(styles['primary']);
  });

  test('should correct show outline variant when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} variant='outline' />);

    const button = getByTestId(BUTTON_TEST_IDS.WRAPPER);

    expect(button).toHaveClass(styles['outline']);
  });
});

describe('Button startIcon', () => {
  test('should display startIcon when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} startIcon={<SearchIcon />} />);

    const startIcon = getByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });

  test('should not display startIcon when provided', () => {
    const { queryByTestId } = render(<Button {...buttonProps} />);

    const startIcon = queryByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});

describe('Button endIcon', () => {
  test('should display endIcon when provided', () => {
    const { getByTestId } = render(<Button {...buttonProps} endIcon={<SearchIcon />} />);

    const startIcon = getByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(startIcon).toBeInTheDocument();
  });

  test('should not display endIcon when provided', () => {
    const { queryByTestId } = render(<Button {...buttonProps} />);

    const endIcon = queryByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(endIcon).not.toBeInTheDocument();
  });
});