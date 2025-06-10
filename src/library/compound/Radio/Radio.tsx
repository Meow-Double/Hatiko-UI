import { ComponentProps, ReactNode, useId } from 'react';
import clsx from 'clsx';

import { RadioProvider } from './context/RadioProvider';
import { useRadioContext } from './context/useRadioContext';

import styles from './Radio.module.css';

interface RadioCompoundProps {
  children: ReactNode;
  className?: string;
  name?: string;
}

export const RadioCompound = ({ children, className, name }: RadioCompoundProps) => {
  const id = useId();

  return (
    <RadioProvider values={{ id, name }}>
      <label htmlFor={id} className={clsx(styles.label, className)}>
        {children}
      </label>
    </RadioProvider>
  );
};

interface RadioTitleProps {
  title: string;
  className?: string;
}

export const RadioTitle = ({ title, className }: RadioTitleProps) => {
  return <span className={className}>{title}</span>;
};

type RadioItemProps = ComponentProps<'input'>;

export const RadioItem = ({ type = 'radio', ...props }: RadioItemProps) => {
  const { id, name } = useRadioContext();

  return (
    <div>
      <input name={name} className={styles.input} type={type} id={id} {...props} />
      <span className={styles.radio} />
    </div>
  );
};


RadioCompound.displayName = "RadioCompound"
RadioTitle.displayName = "RadioTitle"
RadioItem.displayName = "RadioItem"