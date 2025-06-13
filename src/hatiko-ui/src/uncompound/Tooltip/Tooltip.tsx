import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Tooltip.module.css';

export interface TooltipProps {
  title: string;
  children: ReactNode;
  className?: string;
}
export const TOOLTIP_TEST_IDS = {
  TOOLTIP: 'tooltip'
};

export const Tooltip = (props: TooltipProps) => {
  const { title, children, className } = props;

  return (
    <div className={clsx(styles.tooltip, className)} data-testid={TOOLTIP_TEST_IDS.TOOLTIP}>
      <span className={styles.title}>{title}</span>
      <div>{children}</div>
    </div>
  );
};