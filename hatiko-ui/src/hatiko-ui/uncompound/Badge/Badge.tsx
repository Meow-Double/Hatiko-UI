import clsx from 'clsx';

import styles from './Badge.module.css';

type BageVariants = 'success' | 'error' | 'pending';

export interface BadgeProps {
  variant: BageVariants;
  className?: string;
  text?: string;
}

export const BADGE_TEST_IDS = {
  BADGE: 'badge'
};

export const Badge = (props: BadgeProps) => {
  const { variant, text, className } = props;

  return (
    <div
      className={clsx(styles.badge, styles[variant], className)}
      data-testid={BADGE_TEST_IDS.BADGE}
    >
      {text || variant}
    </div>
  );
};