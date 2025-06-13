import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Portal } from '@/library/auxiliary';

import styles from './Confirm.module.css';

interface ConfirmProps {
  children: ReactNode;
  classNameOverlay?: string;
  classNameBody?: string;
  isOpen: boolean;
  lazy?: boolean;
}

export const Confirm = ({
  children,
  classNameOverlay,
  classNameBody,
  isOpen,
  lazy
}: ConfirmProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={clsx(styles.overlay, classNameOverlay, { [styles.active]: isOpen })}>
        <div className={clsx(styles.confirm, classNameBody)}>{children}</div>
      </div>
    </Portal>
  );
};

interface ConfirmTitleProps {
  title: string;
}
export const ConfirmTitle = ({ title }: ConfirmTitleProps) => {
  return <h2 className={styles.title}>{title}</h2>;
};

interface ConfirmButtonWrapperProps {
  children: ReactNode;
}

export const ConfirmButtonList = ({ children }: ConfirmButtonWrapperProps) => {
  return <div className={styles.buttons}>{children}</div>;
};

type ConfirmButtonTypes = 'truth' | 'lies';

interface ConfirmButtonProps {
  type: ConfirmButtonTypes;
  text?: string;
  getAnswer: (value: boolean) => void;
  className?: string;
}

export const ConfirmButton = ({ text, type, getAnswer,className }: ConfirmButtonProps) => {
  const onClick = () => {
    const answerValue = type === 'truth' ? true : false;
    getAnswer(answerValue);
  };

  return (
    <button type='button' onClick={onClick} className={clsx(styles.btn, className)}>
      {text ? text : type}
    </button>
  );
};

Confirm.displayName = 'Confirm';
ConfirmTitle.displayName = 'ConfirmTitle';
ConfirmButtonList.displayName = 'ConfirmButtonList';
ConfirmButton.displayName = 'ConfirmButton';