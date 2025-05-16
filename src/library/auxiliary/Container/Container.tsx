import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Container.module.css';

type ContainerVariants = 'default';

interface ContainerProps {
  children: ReactNode;
  variant?: ContainerVariants;
}

export const Container = ({ children, variant = 'default' }: ContainerProps) => {
  return <div className={clsx(styles.container, styles[variant])}>{children}</div>;
};
