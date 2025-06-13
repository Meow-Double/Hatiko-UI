import { useState } from 'react';

import styles from './Switch.module.css';

export interface SwitchProps {
  getState?: (value: boolean) => void;
  className?: string;
  checked?: boolean;
}

export const SWITCH_TEST_IDS  = {
  SWITCH:"switch",
  BUTTON:"switch-button"
}

export const Switch = (props: SwitchProps) => {
  const { className, getState, checked: defaultChecked = false } = props;

  const [isCecked, setIsChecked] = useState<boolean>(defaultChecked);

  const changeSwitch = () => {
    setIsChecked((prev) => !prev);

    if (getState) {
      getState(!isCecked);
    }
  };

  return (
    <div className={className} data-testid={SWITCH_TEST_IDS.SWITCH}>
      <input type='checkbox' className={styles.input} checked={isCecked} />
      <button 
        className={styles.switch} 
        onClick={changeSwitch} 
        data-testid={SWITCH_TEST_IDS.BUTTON}
      >
        <span className={styles.decor} />
      </button>
    </div>
  );
};