import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import { Confirm, CONFIRM_TEST_IDS, ConfirmProps } from './Confirm';

import styles from './Confirm.module.css';

const confirmProps = {
  closeWindow: vitest.fn(),
  getAnswer: vitest.fn(),
  isOpen: false,
  title: 'confirm title'
} satisfies ConfirmProps;

describe('Confirm', () => {
  test('should render confirm when opened', () => {
    const { getByTestId } = render(<Confirm {...confirmProps} isOpen />);

    const overlay = getByTestId(CONFIRM_TEST_IDS.OVERLAY);

    expect(overlay).toHaveClass(styles.active);
  });
  test('should render confirm when not opened', () => {
    const { getByTestId } = render(<Confirm {...confirmProps} />);

    const overlay = getByTestId(CONFIRM_TEST_IDS.OVERLAY);

    expect(overlay).not.toHaveClass(styles.active);
  });

  test('should not render confirm when lazy true', () => {
    const { queryByTestId } = render(<Confirm {...confirmProps} lazy />);

    const overlay = queryByTestId(CONFIRM_TEST_IDS.OVERLAY);

    expect(overlay).not.toBeInTheDocument();
  });
});