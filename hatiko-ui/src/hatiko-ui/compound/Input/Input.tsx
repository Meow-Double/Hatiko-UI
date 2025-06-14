import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { InputProvider } from './context/InputProvider';
import { useInputContext } from './context/useInputContext';

import styles from './Input.module.css';

interface InputCompoundProps extends ComponentProps<'label'> {
  children: ReactNode;
}

export const InputCompound = ({ children, className, ...other }: InputCompoundProps) => {
  const id = useId();

  return (
    <InputProvider values={{ id }}>
      <label htmlFor={id} className={clsx(styles.label, className)} {...other}>
        {children}
      </label>
    </InputProvider>
  );
};

type InputItemVariants = 'primary' | 'outline';

interface InputItemProps extends ComponentProps<'input'> {
  variant: InputItemVariants;
  error?: boolean;
}

export const InputItem = ({
  className,
  type = 'text',
  variant = 'primary',
  error,
  ...other
}: InputItemProps) => {
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

interface InputGroupProps {
  children: ReactNode;
  className?: string;
}

export const InputGroup = ({ children, className }: InputGroupProps) => {
  return <div className={clsx(styles.group, className)}>{children}</div>;
};

interface InputTextProps {
  text: string;
  className?: string;
}

export const InputText = ({ text, className }: InputTextProps) => {
  return <div className={clsx(styles.text, className)}>{text}</div>;
};

interface InputErrorTextProps {
  text: string;
  className?: string;
}

export const InputErrorText = ({ text, className }: InputErrorTextProps) => {
  return <div className={clsx(styles.error_text, className)}>{text}</div>;
};

InputCompound.displayName = 'InputCompound';
InputItem.displayName = 'Input';
InputGroup.displayName = 'InputGroup';
InputText.displayName = 'InputText';
InputErrorText.displayName = 'InputErrorText';