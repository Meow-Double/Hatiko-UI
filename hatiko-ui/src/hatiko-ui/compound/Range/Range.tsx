
import { ChangeEvent, CSSProperties, ReactNode, useState } from 'react';

import { RangeProvider } from './context/RangeProvider';
import { useRangeContext } from './context/useRangeContext';

import styles from './Range.module.css';
import clsx from 'clsx';

interface RangeCompoundProps {
  children: ReactNode;
  min?:number;
  max?:number;
  step?:number;
  className?:string
}

export const RangeCompound = ({children,min=1, max=100, step=1, className }: RangeCompoundProps) => {
  return <RangeProvider values={{min, max, step}}>
    <div className={clsx(styles.field, className)}>{children}</div>
  </RangeProvider>
};

interface RangeMinTextProps {
  className?:string
}

export const RangeMinText = ({className}:RangeMinTextProps) => {
  const {min} = useRangeContext()
  return  <span className={clsx(styles.min_count, className)}>{min}</span>
}

interface RangeMaxTextProps {
  className?:string
}

export const RangeMaxText = ({className}:RangeMaxTextProps) => {
  const {max} = useRangeContext()
  return  <span className={clsx(styles.max_count, className)}>{max}</span>
}

interface RangeLineProps {
  defaultValue?:number;
  getCurrentValue?: (value: number) => void;
  className?:string
}

export const RangeLine = ({defaultValue, getCurrentValue, className}:RangeLineProps ) => {
  const {max, min, step} = useRangeContext();
  const [value, setValue] = useState<number>(defaultValue ?? 1);



  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);
    setValue(Number(currentValue));
    if (getCurrentValue) {
      getCurrentValue(currentValue);
    }
  };
  
const newValue = Math.ceil(value / step) * step; 
const percent = Math.max(2, Math.round(((newValue - min) / (max - min)) * 100));


    const rangeStyles: CSSProperties = {
      background: `linear-gradient(to right, var(--primary-color) 
    ${percent}%, var(--white-color) ${percent}%)`
    };

  return  <input
            className={clsx(styles.input, className)}
            style={rangeStyles}
            type='range'
            value={value}
            onChange={onChangeValue}
          />
}

RangeCompound.displayName = "RangeCompound"
RangeMinText.displayName = "RangeMinText"
RangeMaxText.displayName = "RangeMaxText"
RangeLine.displayName = "RangeLine"