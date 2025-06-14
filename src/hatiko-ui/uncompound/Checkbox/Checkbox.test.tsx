import { fireEvent, render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Checkbox, CHECKBOX_TEST_IDS, CheckboxProps } from './Checkbox';

const checkboxProps = {
  getCheckboxState: vitest.fn()
} satisfies CheckboxProps;

describe('Checkbox', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Checkbox {...checkboxProps} className='checkbox_class' />);

    const labelText = getByTestId(CHECKBOX_TEST_IDS.LABEL);

    expect(labelText).toHaveClass('checkbox_class');
  });

  test('should get active state when checkbox clicked', () => {
    const { getByTestId } = render(<Checkbox {...checkboxProps} checked={false} />);

    const label = getByTestId(CHECKBOX_TEST_IDS.LABEL);
    
    fireEvent.click(label);

    expect(checkboxProps.getCheckboxState).toHaveBeenCalledWith(true);

    fireEvent.click(label);

    expect(checkboxProps.getCheckboxState).toHaveBeenCalledWith(false);
  });

  test('should has toggle active class when checkbox clicked', () => {
    const { getByTestId, queryByTestId } = render(<Checkbox {...checkboxProps} />);

    const label = getByTestId(CHECKBOX_TEST_IDS.LABEL);
    let tickeIcon = queryByTestId(CHECKBOX_TEST_IDS.TICK_ICON);

    expect(tickeIcon).not.toBeInTheDocument();

    fireEvent.click(label);

    tickeIcon = queryByTestId(CHECKBOX_TEST_IDS.TICK_ICON);

    expect(tickeIcon).toBeInTheDocument();
  });
});

describe('Checkbox label text', () => {
  test('should display label text when provided', () => {
    const { getByTestId } = render(<Checkbox {...checkboxProps} label='label_text' />);

    const labelText = getByTestId(CHECKBOX_TEST_IDS.LABEL_TEXT);

    expect(labelText).toBeInTheDocument();
  });

  test('should not display label text when provided', () => {
    const { queryByTestId } = render(<Checkbox {...checkboxProps} />);

    const labelText = queryByTestId(CHECKBOX_TEST_IDS.LABEL_TEXT);

    expect(labelText).not.toBeInTheDocument();
  });
});