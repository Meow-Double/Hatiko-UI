import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { TextareaProvider } from './context/TextareaProvider';
import { useTextareaContext } from './context/useTextareaContext';

import styles from './Textarea.module.css';

interface TextareaCompoundProps {
  children: ReactNode;
}

export const TextareaCompound = ({ children }: TextareaCompoundProps) => {
  const id = useId();

  return (
    <TextareaProvider values={{ id }}>
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </TextareaProvider>
  );
};

type TextareaItemVariants = 'primary' | 'outline';

interface TextareaItemProps extends ComponentProps<'textarea'> {
  variant: TextareaItemVariants;
}

export const TextareaItem = ({ className, variant, ...otherProps }: TextareaItemProps) => {
  const { id } = useTextareaContext();
  return (
    <textarea
      id={id}
      className={clsx(styles.textarea, styles[variant], className)}
      {...otherProps}
    />
  );
};

interface TextareaTextProps {
  label: string;
  className?: string;
}

export const TextareaText = ({ label, className }: TextareaTextProps) => {
  return <span className={clsx(styles.label_text, className)}>{label}</span>;
};

interface TextareaErrorTextProps {
  error: string;
  className?: string;
}

export const TextareaErrorText = ({ error, className }: TextareaErrorTextProps) => {
  return <span className={clsx(styles.error_text, className)}>{error}</span>;
};

TextareaCompound.displayName = 'TextareaCompound';
TextareaItem.displayName = 'TextareaItem';
TextareaText.displayName = 'TextareaText';
TextareaErrorText.displayName = 'TextareaErrorText';