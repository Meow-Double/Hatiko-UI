import { ComponentProps, useCallback, useId, useState } from 'react';
import clsx from 'clsx';

import { CheckboxProvider } from './context/CheckboxProvider';
import { useCheckboxContext } from './context/useCheckboxContext';

import styles from './Checkbox.module.css';
import { TickIcon } from '@/hatiko-ui/icons';

interface CheckboxCompoundProps extends ComponentProps<'label'> {
  className?: string;
}

export const CheckboxCompound = ({ children, className, ...props }: CheckboxCompoundProps) => {
  const id = useId();

  return (
    <CheckboxProvider values={{ id }}>
      <label htmlFor={id} className={clsx(styles.label, className)} {...props}>
        {children}
      </label>
    </CheckboxProvider>
  );
};

interface CheckboxItemProps extends ComponentProps<'input'> {
  getCheckboxState: (state: boolean) => void;
}

export const CheckboxItem = ({
  className,
  checked = false,
  getCheckboxState,
  type = 'checkbox',
  ...props
}: CheckboxItemProps) => {
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

interface CheckboxTextProps {
  text: string;
  className?: string;
}

export const CheckboxText = ({ text, className }: CheckboxTextProps) => {
  return <span className={clsx(styles.text, className)}>{text}</span>;
};

CheckboxCompound.displayName = 'CheckboxCompound';
CheckboxItem.displayName = 'CheckboxItem';
CheckboxText.displayName = 'CheckboxText';