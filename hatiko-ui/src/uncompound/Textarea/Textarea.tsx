import { ComponentProps, useId } from 'react';
import clsx from 'clsx';

import styles from './Texarea.module.css';

type TextareaVariants = 'primary' | 'outline';

interface TextareaProps extends ComponentProps<'textarea'> {
  variant: TextareaVariants;
  label?: string;
  error?: string;
}

export const Textarea = (props: TextareaProps) => {
  const { className, label, error, variant, ...otherProps } = props;
  const id = useId();

  return (
    <label htmlFor={id} className={styles.label}>
      {label && <span className={styles.label_text}>{label}</span>}
      <textarea
        id={id}
        className={clsx(styles.textarea, styles[variant], className)}
        {...otherProps}
      />
      {error && <span className={styles.error_text}>{error}</span>}
    </label>
  );
};
