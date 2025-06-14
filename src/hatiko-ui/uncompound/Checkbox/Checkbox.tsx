import { ComponentProps, useCallback, useId, useState } from 'react';
import clsx from 'clsx';

import { TickIcon } from '../../icons';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label?: string;
  className?: string;
  getCheckboxState?: (state: boolean) => void;
}

export const CHECKBOX_TEST_IDS = {
  LABEL: 'checkbox-label',
  LABEL_TEXT: 'checkbox-label_text',
  TICK_ICON: 'checkbox-tick_icon'
};

export const Checkbox = (props: CheckboxProps) => {
  const { label, className, getCheckboxState, checked = false, ...otherProps } = props;
  const [isActive, setIsActive] = useState(checked);

  const id = useId();

  const onChange = useCallback(() => {
    setIsActive(!isActive);

    if (getCheckboxState) {
      getCheckboxState(!isActive);
    }
  }, [isActive, getCheckboxState]);

  return (
    <label
      htmlFor={id}
      className={clsx(styles.label, className)}
      data-testid={CHECKBOX_TEST_IDS.LABEL}
    >
      <input
        onChange={onChange}
        onKeyDown={onChange}
        id={id}
        type='checkbox'
        className={styles.input}
        checked={checked}
        {...otherProps}
      />
      <span className={styles.checkbox}>
        {isActive && <TickIcon className={styles.icon} data-testid={CHECKBOX_TEST_IDS.TICK_ICON} />}
      </span>
      {label && <span data-testid={CHECKBOX_TEST_IDS.LABEL_TEXT}>{label}</span>}
    </label>
  );
};