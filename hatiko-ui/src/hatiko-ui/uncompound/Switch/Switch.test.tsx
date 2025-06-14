import { fireEvent, render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Switch, SWITCH_TEST_IDS } from './Switch';

describe('Switch', () => {
  test('should calls ', () => {
    const switchGetValue = vitest.fn();

    const { getByTestId } = render(<Switch getState={switchGetValue} />);

    const switchButton = getByTestId(SWITCH_TEST_IDS.BUTTON);

    fireEvent.click(switchButton);

    expect(switchGetValue).toHaveBeenCalled();
  });
});

describe('Switch classNames', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Switch className='switch_classname' />);

    const switchComponent = getByTestId(SWITCH_TEST_IDS.SWITCH);

    expect(switchComponent).toHaveClass('switch_classname');
  });

  test('should has not className when provided', () => {
    const { queryByTestId } = render(<Switch />);

    const switchComponent = queryByTestId(SWITCH_TEST_IDS.SWITCH);

    expect(switchComponent).not.toHaveClass('switch_classname');
  });
});