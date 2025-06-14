import { fireEvent, render } from '@testing-library/react';
import { vitest } from 'vitest';

import { InputOTP, INPUTOTP_TEST_IDS, InputOTPProps } from './InputOTP';

const inputOTPProps = {
  getValue: vitest.fn()
} satisfies InputOTPProps;

describe('InputOTP', () => {
  test('should calls getValue with change value', () => {
    const getValueFn = vitest.fn();

    const { getAllByTestId } = render(<InputOTP getValue={getValueFn} />);

    const inputs = getAllByTestId(INPUTOTP_TEST_IDS.INPUT);

    inputs.forEach((input, index) => {
      fireEvent.input(input, { target: { value: index } });
    });

    expect(getValueFn).toHaveBeenCalledTimes(inputs.length)
  });
});


describe('InputOTP classNames', () => {
  test('should has className when provided', () => {
    const { getAllByTestId } = render(
      <InputOTP {...inputOTPProps} className='inputOTP_classname' />
    );

    const inputs = getAllByTestId(INPUTOTP_TEST_IDS.INPUT);

    inputs.forEach((input) => {
      expect(input).toHaveClass('inputOTP_classname');
    });
  });

  test('should has not className when provided', () => {
    const { queryAllByTestId } = render(<InputOTP {...inputOTPProps} />);

    const inputs = queryAllByTestId(INPUTOTP_TEST_IDS.INPUT);

    inputs.forEach((input) => {
      expect(input).not.toHaveClass('inputOTP_classname');
    });
  });
});