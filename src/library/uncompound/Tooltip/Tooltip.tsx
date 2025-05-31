import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Tooltip.module.css';

export interface TooltipProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Tooltip = (props: TooltipProps) => {
  const { title, children, className } = props;

  return (
    <div className={clsx(styles.tooltip, className)}>
      <span className={styles.title}>{title}</span>
      <div>{children}</div>
    </div>
  );
};