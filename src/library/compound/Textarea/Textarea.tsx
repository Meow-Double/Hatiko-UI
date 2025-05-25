import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { TextareaProvider } from './context/TextareaProvider';
import { useTextareaContext } from './context/useTextareaContext';

import styles from './Textarea.module.css';

type TextareaVariants = 'primary' | 'outline';

export interface TextareaProps extends ComponentProps<'textarea'> {
  variant: TextareaVariants;
}

export const Textarea = ({ className, variant, ...otherProps }: TextareaProps) => {
  const { id } = useTextareaContext();
  return (
    <textarea
      id={id}
      className={clsx(styles.textarea, styles[variant], className)}
      {...otherProps}
    />
  );
};

interface TextareaWrapperProps {
  children: ReactNode;
}

Textarea.displayName = 'Textarea';

Textarea.Wrapper = ({ children }: TextareaWrapperProps) => {
  const id = useId();

  return (
    <TextareaProvider values={{ id }}>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </TextareaProvider>
  );
};

interface TextareaLabelProps {
  label: string;
  className?: string;
}
Textarea.Label = ({ label, className }: TextareaLabelProps) => {
  return <span className={clsx(styles.label_text, className)}>{label}</span>;
};

interface TextareaErrorProps {
  error: string;
  className?: string;
}
Textarea.Error = ({ error, className }: TextareaErrorProps) => {
  return <span className={clsx(styles.error_text, className)}>{error}</span>;
};

