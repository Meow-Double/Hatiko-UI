import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

type InputVariants = 'primary' | 'outline';

interface InputProps extends ComponentProps<'input'> {
  variant: InputVariants;
  label?: string;
  error?: string;
  endIcon?: ReactNode;
}

export const Input = (props: InputProps) => {
  const { variant, label, error, className, endIcon, type = 'text', ...otherProps } = props;

  const id = useId();

  return (
    <label className={styles.label} htmlFor={id}>
      {!!label && <span>{label}</span>}
      <div
        className={clsx(styles.icon_wrapper, styles[variant], className, {
          [styles.error]: !!error
        })}
      >
        <input type={type} id={id} className={styles.input} {...otherProps} />
        {!!endIcon && <span>{endIcon}</span>}
      </div>
      {!!error && <span className={styles.error_text}>{error}</span>}
    </label>
  );
};
