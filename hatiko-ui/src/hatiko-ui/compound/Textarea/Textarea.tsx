import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { TextareaProvider } from './context/TextareaProvider';
import { useTextareaContext } from './context/useTextareaContext';

import styles from './Textarea.module.css';

interface TextareaCompoundProps extends ComponentProps<'label'> {
  children: ReactNode;
}

export const TextareaCompound = ({ children, className, ...props }: TextareaCompoundProps) => {
  const id = useId();

  return (
    <TextareaProvider values={{ id }}>
      <label htmlFor={id} className={clsx(styles.label, className)} {...props}>
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
  text: string;
  className?: string;
}

export const TextareaText = ({ text, className }: TextareaTextProps) => {
  return <span className={clsx(styles.label_text, className)}>{text}</span>;
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