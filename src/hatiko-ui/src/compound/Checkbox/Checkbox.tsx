import { ComponentProps, useCallback, useId, useState } from 'react';
import clsx from 'clsx';

import { TickIcon } from '@/library/icons';

import { CheckboxProvider } from './context/CheckboxProvider';
import { useCheckboxContext } from './context/useCheckboxContext';

import styles from './Checkbox.module.css';

export interface CheckboxLabelProps extends ComponentProps<'label'> {
  className?: string;
}

export const CheckboxLabel = ({ children, className, ...props }: CheckboxLabelProps) => {
  const id = useId();

  return (
    <CheckboxProvider values={{ id }}>
      <label htmlFor={id} className={clsx(styles.label, className)} {...props}>
        {children}
      </label>
    </CheckboxProvider>
  );
};
CheckboxLabel.displayName = 'CheckboxLabel';

interface CheckboxProps extends ComponentProps<'input'> {
  getCheckboxState: (state: boolean) => void;
}

export const Checkbox = ({
  className,
  checked = false,
  getCheckboxState,
  type = 'checkbox',
  ...props
}: CheckboxProps) => {
  const [isActive, setIsActive] = useState(checked);
  const { id } = useCheckboxContext();

  const onChange = useCallback(() => {
    setIsActive(!isActive);

    if (getCheckboxState) {
      getCheckboxState(!isActive);
    }
  }, [isActive, getCheckboxState]);

  return (
    <div className={clsx(styles.inner, className)}>
      <input
        onChange={onChange}
        onKeyDown={onChange}
        id={id}
        type={type}
        className={styles.input}
        checked={checked}
        {...props}
      />
      <span className={styles.checkbox}>{isActive && <TickIcon className={styles.icon} />}</span>
    </div>
  );
};
Checkbox.displayName = 'Checkbox';

interface CheckboxTextProps {
  text: string;
  className?: string;
}

export const CheckboxText = ({ text, className }: CheckboxTextProps) => {
  return <span className={clsx(styles.text, className)}>{text}</span>;
};

CheckboxText.displayName = 'CheckboxText';