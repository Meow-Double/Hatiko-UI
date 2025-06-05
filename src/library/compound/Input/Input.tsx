import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { InputProvider } from './context/InputProvider';
import { useInputContext } from './context/useInputContext';

import styles from './Input.module.css';

interface InputLabelProps extends ComponentProps<'label'> {
  children: ReactNode;
}

export const InputLabel = ({ children, className, ...other }: InputLabelProps) => {
  const id = useId();

  return (
    <InputProvider values={{ id }}>
      <label htmlFor={id} className={clsx(styles.label, className)} {...other}>
        {children}
      </label>
    </InputProvider>
  );
};

InputLabel.displayName = 'InputLable';

type InputVariants = 'primary' | 'outline';

interface InputProps extends ComponentProps<'input'> {
  variant: InputVariants;
  error: boolean;
}

export const Input = ({
  className,
  type = 'text',
  variant = 'primary',
  error,
  ...other
}: InputProps) => {
  const { id } = useInputContext();
  return (
    <input
      id={id}
      className={clsx(styles.input, styles[variant], className, { [styles.error]: error })}
      type={type}
      {...other}
    />
  );
};

Input.displayName = 'Input';

interface InputGroupProps {
  children: ReactNode;
}

export const InputGroup = ({ children }: InputGroupProps) => {
  return <div className={styles.group}>{children}</div>;
};

interface InputTextProps {
  text: string;
  className?: string;
}

export const InputText = ({ text, className }: InputTextProps) => {
  return <div className={clsx(styles.text, className)}>{text}</div>;
};

InputText.displayName = 'Input';

interface InputErrorTextProps {
  text: string;
  className?: string;
}

export const InputErrorText = ({ text, className }: InputErrorTextProps) => {
  return <div className={clsx(styles.error_text, className)}>{text}</div>;
};

InputErrorText.displayName = 'InputErrorText';