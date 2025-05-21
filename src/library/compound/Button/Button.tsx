import { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonPropsVariants = 'primary' | 'outline';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant: ButtonPropsVariants;
}

export const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.btn, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

interface ButtonIconProps {
  icon: ReactNode;
}

Button.displayName = 'Button';

Button.Icon = ({ icon }: ButtonIconProps) => {
  return icon && icon;
};