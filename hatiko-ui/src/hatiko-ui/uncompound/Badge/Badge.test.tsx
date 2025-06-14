import { render } from '@testing-library/react';

import { Badge, BADGE_TEST_IDS, BadgeProps } from './Badge';

import styles from './Badge.module.css';

const badgeProps = {
  variant: 'success',
  text: 'badge_text'
} satisfies BadgeProps;

describe('Badge', () => {
  test('should display text when provided', () => {
    const { getByTestId } = render(<Badge {...badgeProps} />);

    const badge = getByTestId(BADGE_TEST_IDS.BADGE);

    expect(badge).toHaveTextContent(badgeProps.text);
  });
});

describe('Badge variant', () => {
  test('should correct show success variant when provided', () => {
    const { getByTestId } = render(<Badge {...badgeProps} variant='success' />);

    const badge = getByTestId(BADGE_TEST_IDS.BADGE);

    expect(badge).toHaveClass(styles['success']);
  });

  test('should correct show pending variant when provided', () => {
    const { getByTestId } = render(<Badge {...badgeProps} variant='pending' />);

    const badge = getByTestId(BADGE_TEST_IDS.BADGE);

    expect(badge).toHaveClass(styles['pending']);
  });

  test('should correct show error variant when provided', () => {
    const { getByTestId } = render(<Badge {...badgeProps} variant='error' />);

    const badge = getByTestId(BADGE_TEST_IDS.BADGE);

    expect(badge).toHaveClass(styles['error']);
  });
});