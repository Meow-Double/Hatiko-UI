
import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Radio.module.css';

export interface RadioProps extends ComponentProps<'input'> {
  title?: string;
  id?: string;
}

export const RADIO_TEST_IDS = {
  INPUT:"radio-input",
  LABEL:"radio-label",
  TITILE:"radio-title"
}

export const Radio = (props:RadioProps) => {
    const {title,value,onChange, type="radio", className, id, ...otherProps} = props;
    
  return (
    <label 
      htmlFor={id} 
      className={clsx(styles.label, className)} 
      data-testid={RADIO_TEST_IDS.LABEL}
    >
      <div>
        <input 
            className={styles.input} 
            type={type} 
            id={id} 
            value={value} 
            onChange={onChange}
            data-testid={RADIO_TEST_IDS.INPUT}
            {...otherProps}
        />
        <span className={styles.radio}/>
      </div>
      <span data-testid={RADIO_TEST_IDS.TITILE}>{title}</span>
    </label>
  );
};