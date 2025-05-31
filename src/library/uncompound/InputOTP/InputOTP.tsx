import { useState } from 'react';
import clsx from 'clsx';

import styles from './InputOTP.module.css';

export interface InputOTPProps {
  getValue: (value: string) => void;
  length?: number;
  className?: string;
}

export const InputOTP = (props: InputOTPProps) => {
  const { getValue, length = 4, className } = props;

  const [finalResult, setFinalResult] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1) {
      const nextSibling = e.target.nextElementSibling as HTMLInputElement;
      if (nextSibling) {
        setFinalResult(e.target.value);
        nextSibling.focus();
      }
    }

    setFinalResult((prev) => prev + e.target.value);

    if (finalResult.length >= 3) {
      getValue(finalResult);
    }
  };

  const handleKeyUP = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.code === 'Backspace' || e.which === 8) {
      if (target.value.length === 0) {
        const prevSibling = target.previousElementSibling as HTMLInputElement;
        if (prevSibling) {
          prevSibling.focus();
          prevSibling.select();
        }
      }
    }
  };

  return (
    <div className={styles.menu}>
      {[...new Array(length)].map((_, index) => (
        <input
          key={index}
          className={clsx(styles.otp_item, className)}
          type='text'
          onInput={handleInput}
          onKeyUp={handleKeyUP}
          inputMode='numeric'
          maxLength={1}
        />
      ))}
    </div>
  );
};