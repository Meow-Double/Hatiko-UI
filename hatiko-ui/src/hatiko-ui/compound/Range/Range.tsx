
import { ChangeEvent, CSSProperties, ReactNode, useState } from 'react';

import { RangeProvider } from './context/RangeProvider';
import { useRangeContext } from './context/useRangeContext';

import styles from './Range.module.css';

interface RangeCompoundProps {
  children: ReactNode;
  min?:number;
  max?:number;
  step?:number;

}

export const RangeCompound = ({children,min=1, max=100, step=1 }: RangeCompoundProps) => {
  return <RangeProvider values={{min, max, step}}>
    <div className={styles.field}>{children}</div>
  </RangeProvider>
};


export const RangeMinText = () => {
  const {min} = useRangeContext()
  return  <span className={styles.min_count}>{min}</span>
}


export const RangeMaxText = () => {
    const {max} = useRangeContext()
  return  <span className={styles.max_count}>{max}</span>
}

interface RangeLineProps {
  defaultValue?:number;
   getCurrentValue?: (value: number) => void;
}

export const RangeLine = ({defaultValue, getCurrentValue}:RangeLineProps ) => {
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

  return    <input
        className={styles.input}
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