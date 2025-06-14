import { ChangeEvent, CSSProperties, useState } from 'react';

import styles from './Range.module.css';

export interface RangeProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  getCurrentValue?: (value: number) => void;
}

export const RANGE_TEST_IDS = {
  RANGE: 'range',
  INPUT: 'range-input'
};

export const Range = (props: RangeProps) => {
  const { min = 1, max = 100, step = 1, getCurrentValue, defaultValue } = props;
  const [value, setValue] = useState<number>(defaultValue ?? 1);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);
    setValue(Number(currentValue));
    if (getCurrentValue) {
      getCurrentValue(currentValue);
    }
  };

  const newValue = Math.round(value / step) * step;
  const percent = ((Number(newValue) - Number(min)) / (Number(max) - Number(min))) * 100;

  const rangeStyles: CSSProperties = {
    background: `linear-gradient(to right, var(--primary-color) 
    ${percent}%, var(--white-color) ${percent}%)`
  };

  return (
    <div className={styles.field} data-testid={RANGE_TEST_IDS.RANGE}>
      <span className={styles.min_count}>{min}</span>
      <input
        className={styles.input}
        style={rangeStyles}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChangeValue}
        data-testid={RANGE_TEST_IDS.INPUT}
      />
      <span className={styles.max_count}>{max}</span>
    </div>
  );
};