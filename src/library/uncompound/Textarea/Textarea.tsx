import { ComponentProps, useId } from 'react';
import clsx from 'clsx';

import styles from './Texarea.module.css';

type TextareaVariants = 'primary' | 'outline';

export interface TextareaProps extends ComponentProps<'textarea'> {
  variant: TextareaVariants;
  label?: string;
  error?: string;
}

export const TEXTAREA_TEST_IDS = {
  TEXTAREA: 'textarea',
  ERROR_TEXT: 'textarea_error_text',
  LABEL_TEXT: 'textarea-label_text'
};

export const Textarea = (props: TextareaProps) => {
  const { className, label, error, variant, ...otherProps } = props;
  const id = useId();

  return (
    <label htmlFor={id} className={styles.label}>
      {label && (
        <span className={styles.label_text} data-testid={TEXTAREA_TEST_IDS.LABEL_TEXT}>
          {label}
        </span>
      )}
      <textarea
        id={id}
        className={clsx(styles.textarea, styles[variant], className)}
        {...otherProps}
        data-testid={TEXTAREA_TEST_IDS.TEXTAREA}
      />
      {error && (
        <span className={styles.error_text} data-testid={TEXTAREA_TEST_IDS.ERROR_TEXT}>
          {error}
        </span>
      )}
    </label>
  );
};