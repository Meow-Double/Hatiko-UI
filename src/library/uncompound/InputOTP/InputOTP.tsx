

import { FormEvent, useState } from 'react';

import styles from './InputOTP.module.css';

interface InputOTPProps {
  getValue: (value: string) => void
}

export const InputOTP = (props:InputOTPProps ) => {
  const {getValue} = props;

  const [finalResult, setFinalResult] = useState("");


  const handleInput = (e: FormEvent<HTMLInputElement>) => {

    if(e.target.value.length === 1){
       const nextSibling = e.target.nextElementSibling;
      if (nextSibling) {
        setFinalResult(e.target.value)
        nextSibling.focus();
      }
    }

    // if(finalResult.length >= 4){
    //  getValue(finalResult.join(""))
    // }

     setFinalResult((prev) => prev + e.target.value);

    if(finalResult.length >= 3){
      getValue(finalResult);
    }
  }

  const handleKeyUP = (e: KeyboardEvent) => {
    if(e.code === "Backspace" || e.which === 8){
            if (e.target.value.length === 0) {
                 const prevSibling = e.target.previousElementSibling;
                   if (prevSibling) {
            prevSibling.focus();
            prevSibling.select();
        }
            }
    }
      
  }


  return (
    <div className={styles.menu}>
      <input data-index={1}   type="text"  
      onInput={handleInput} onKeyUp={handleKeyUP}   
      inputMode="numeric"    maxLength={1} className={styles.otp_item}/>
      <input data-index={2}     type="text"  
      onKeyUp={handleKeyUP}  onInput={handleInput}       
      inputMode="numeric"   maxLength={1} className={styles.otp_item}/>
      <input data-index={3}  type="text"  
      onKeyUp={handleKeyUP}   onInput={handleInput}       
      inputMode="numeric"   maxLength={1} className={styles.otp_item}/>
      <input data-index={4}    type="text"  
      onKeyUp={handleKeyUP}  onInput={handleInput}      
       inputMode="numeric"   maxLength={1} className={styles.otp_item}/>
    </div>
  );
};
