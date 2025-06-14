import { fireEvent, render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Range, RANGE_TEST_IDS, RangeProps } from './Range';

const rangeProps = {
  min: 1,
  max: 100,
  step: 1
} satisfies RangeProps;

describe('Range', () => {
  test('should correctly render', () => {
    const { getByTestId } = render(<Range {...rangeProps} />);

    const range = getByTestId(RANGE_TEST_IDS.RANGE);

    expect(range).toBeInTheDocument();
  });

  test('should change value whne onChange', () => {
    const { getByTestId } = render(<Range {...rangeProps}  />);

    const range = getByTestId(RANGE_TEST_IDS.INPUT) as HTMLInputElement;

    fireEvent.change(range, { target: { value: '50' } });

    expect(Number(range.value)).toBe(50);

  });

  test('should calls getCurrentValue with change value', () => {
    const onChange = vitest.fn();
    const { getByTestId } = render(<Range {...rangeProps} getCurrentValue={onChange}/>);

    const range = getByTestId(RANGE_TEST_IDS.INPUT);

    fireEvent.change(range, { target: { value: '30' } });

    expect(onChange).toHaveBeenCalledWith(30);
  });
});