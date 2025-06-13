import { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.css';

type ButtonVariants = 'primary' | 'outline';

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: ReactNode;
}

export const BUTTON_TEST_IDS = {
  WRAPPER:"button-wrapper",
  CHILDREN: 'button-children',
  LOADER: 'button-loader',
  START_ICON: 'button-start_icon',
  END_ICON: 'button-end_icon'
};

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant,
    startIcon,
    endIcon,
    loading,
    type = 'button',
    className,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      disabled={!!loading}
      className={clsx(styles.btn, styles[variant], className)}
      {...otherProps}
       data-testid={BUTTON_TEST_IDS.WRAPPER}
    >
      {startIcon && <span data-testid={BUTTON_TEST_IDS.START_ICON}>{startIcon}</span>}
      {!loading && <span data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>}
      {!!loading && <span data-testid={BUTTON_TEST_IDS.LOADER}>{loading}</span>}
      {endIcon && <span data-testid={BUTTON_TEST_IDS.END_ICON}>{endIcon}</span>}
    </button>
  );
};
