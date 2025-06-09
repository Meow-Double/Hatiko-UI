import { fireEvent, render } from '@testing-library/react';

import { Radio, RADIO_TEST_IDS, RadioProps } from './Radio';

const radioprops = {
  title: 'title text'
} satisfies RadioProps;

describe('Radio', () => {
  test('should checked radio when clicked', () => {
    const { getByTestId } = render(<Radio {...radioprops} />);

    const radioInput = getByTestId(RADIO_TEST_IDS.INPUT);
    const radioLabel = getByTestId(RADIO_TEST_IDS.LABEL);

    expect(radioInput).not.toBeChecked();

    fireEvent.click(radioLabel);

    expect(radioInput).toBeChecked();
  });

  test('should render title when', () => {
    const { getByTestId } = render(<Radio {...radioprops} />);

    const radioTitle = getByTestId(RADIO_TEST_IDS.TITILE);

    expect(radioTitle).toHaveTextContent(radioprops.title);
  });
});

describe('Radio classNames', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Radio {...radioprops} className='radio_classname' />);

    const radioLabel = getByTestId(RADIO_TEST_IDS.LABEL);

    expect(radioLabel).toHaveClass('radio_classname');
  });
  test('should has className when provided', () => {
    const { queryByTestId } = render(<Radio {...radioprops} />);

    const radioLabel = queryByTestId(RADIO_TEST_IDS.LABEL);

    expect(radioLabel).not.toHaveClass('radio_classname');
  });
});