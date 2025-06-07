
import { ChangeEvent, CSSProperties, ReactNode, useState } from 'react';

import { RangeProvider } from './context/RangeProvider';
import { useRangeContext } from './context/useRangeContext';

import styles from './Range.module.css';

interface RangeProps {
  children: ReactNode;
  min?:number;
  max?:number;
  step?:number;

}

export const Range = ({children,min=1, max=100, step=1 }: RangeProps) => {
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
  const [value, setValue] = useState<number>(defaultValue ?? 1);
  const {max, min, step} = useRangeContext();

   const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      const currentValue = Number(e.target.value)
      setValue(Number(currentValue));
      if(getCurrentValue){
        getCurrentValue(currentValue)
      }
    };
  

    const newValue = Math.round(value / step) * step;
    const percent = ((Number(newValue) - Number(min)) / ((Number(max) - Number(min))) * 100);

    const rangeStyles: CSSProperties = {
      background: 
      `linear-gradient(to right, var(--primary-color) 
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


Range.displayName = "Range"
RangeMinText.displayName = "RangeMinText"
RangeMaxText.displayName = "RangeMaxText"
RangeLine.displayName = "RangeLine"