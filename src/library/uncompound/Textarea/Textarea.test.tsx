import { render } from '@testing-library/react';

import { Textarea, TEXTAREA_TEST_IDS, TextareaProps } from './Textarea';

import styles from './Texarea.module.css';

const textareaProps = {
  variant: 'primary'
} satisfies TextareaProps;

describe('Textarea', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Textarea {...textareaProps} className='textarea_class' />);

    const textarea = getByTestId(TEXTAREA_TEST_IDS.TEXTAREA);

    expect(textarea).toHaveClass('textarea_class');
  });
});

describe('Textarea variant', () => {
  test('should correct show primary variant when provided', () => {
    const { getByTestId } = render(<Textarea {...textareaProps} variant='primary' />);

    const textarea = getByTestId(TEXTAREA_TEST_IDS.TEXTAREA);

    expect(textarea).toHaveClass(styles['primary']);
  });

  test('should correct show outline variant when provided', () => {
    const { getByTestId } = render(<Textarea {...textareaProps} variant='outline' />);

    const textarea = getByTestId(TEXTAREA_TEST_IDS.TEXTAREA);

    expect(textarea).toHaveClass(styles['outline']);
  });
});

describe('Textarea label', () => {
  test('should display label text when provided', () => {
    const { getByTestId } = render(<Textarea {...textareaProps} label='textarea_label' />);

    const labelText = getByTestId(TEXTAREA_TEST_IDS.LABEL_TEXT);

    expect(labelText).toBeInTheDocument();
  });

  test('should not display label text when provided', () => {
    const { queryByTestId } = render(<Textarea {...textareaProps} />);

    const labelText = queryByTestId(TEXTAREA_TEST_IDS.LABEL_TEXT);

    expect(labelText).not.toBeInTheDocument();
  });
});

describe('Textarea error', () => {
  test('should display error text when provided', () => {
    const { getByTestId } = render(<Textarea {...textareaProps} error='textarea_error' />);

    const errorText = getByTestId(TEXTAREA_TEST_IDS.ERROR_TEXT);

    expect(errorText).toBeInTheDocument();
  });

  test('should not display error text when provided', () => {
    const { queryByTestId } = render(<Textarea {...textareaProps} />);

    const errorText = queryByTestId(TEXTAREA_TEST_IDS.ERROR_TEXT);

    expect(errorText).not.toBeInTheDocument();
  });
});