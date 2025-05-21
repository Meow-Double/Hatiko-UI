import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

type InputVariants = 'primary' | 'outline';

export interface InputProps extends ComponentProps<'input'> {
  variant: InputVariants;
  label?: string;
  error?: string;
  endIcon?: ReactNode;
}

export const INPUT_TEST_IDS = {
  LABEL: 'input-label',
  LABEL_TEXT: 'input-label_text',
  ERROR_TEXT: 'input-error_text',
  END_ICON: 'input-end_icon',
  ICON_WRAPPER: 'input-icon_wrapper'
};

export const Input = (props: InputProps) => {
  const { variant, label, error, className, endIcon, type = 'text', ...otherProps } = props;

  const id = useId();

  return (
    <label className={styles.label} htmlFor={id} data-testid={INPUT_TEST_IDS.LABEL}>
      {!!label && <span data-testid={INPUT_TEST_IDS.LABEL_TEXT}>{label}</span>}
      <div
        className={clsx(styles.icon_wrapper, styles[variant], className, {
          [styles.error]: !!error
        })}
        data-testid={INPUT_TEST_IDS.ICON_WRAPPER}
      >
        <input type={type} id={id} className={styles.input} {...otherProps} />
        {!!endIcon && <span data-testid={INPUT_TEST_IDS.END_ICON}>{endIcon}</span>}
      </div>
      {!!error && (
        <span className={styles.error_text} data-testid={INPUT_TEST_IDS.ERROR_TEXT}>
          {error}
        </span>
      )}
    </label>
  );
};