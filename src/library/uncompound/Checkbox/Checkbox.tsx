import { ComponentProps, useCallback, useId, useState } from 'react';
import clsx from 'clsx';

import { TickIcon } from '../../icons';

import styles from './Checkbox.module.css';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label?: string;
  className?: string;
  getCheckboxState?: (state: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, className, getCheckboxState, ...otherProps } = props;
  const [isActive, setIsActive] = useState(false);

  const id = useId();

  const onChange = useCallback(() => {
    setIsActive(!isActive);

    if (getCheckboxState) {
      getCheckboxState(!isActive);
    }
  }, [isActive, getCheckboxState]);

  return (
    <label htmlFor={id} className={clsx(styles.label, className)}>
      <input
        onChange={onChange}
        onKeyDown={onChange}
        id={id}
        type='checkbox'
        className={styles.input}
        {...otherProps}
      />
      <span className={styles.checkbox}>{isActive && <TickIcon className={styles.icon} />}</span>
      {label && <span>{label}</span>}
    </label>
  );
};