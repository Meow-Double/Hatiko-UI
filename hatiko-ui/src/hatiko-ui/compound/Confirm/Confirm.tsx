import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './Confirm.module.css';
import { Portal } from '@/hatiko-ui/auxiliary';

interface ConfirmCompoundProps {
  children: ReactNode;
  classNameOverlay?: string;
  classNameBody?: string;
  isOpen: boolean;
  lazy?: boolean;
}

export const ConfirmCompound = ({
  children,
  classNameOverlay,
  classNameBody,
  isOpen,
  lazy
}: ConfirmCompoundProps) => {
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
  className?: string;
}

export const ConfirmTitle = ({ title, className }: ConfirmTitleProps) => {
  return <h2 className={clsx(styles.title, className)}>{title}</h2>;
};

interface ConfirmButtonListProps {
  children: ReactNode;
  className?: string;
}

export const ConfirmButtonList = ({ children, className }: ConfirmButtonListProps) => {
  return <div className={clsx(styles.buttons, className)}>{children}</div>;
};

type ConfirmButtonTypes = 'truth' | 'lies';

interface ConfirmButtonProps {
  type: ConfirmButtonTypes;
  text?: string;
  getAnswer: (value: boolean) => void;
  className?: string;
}

export const ConfirmButton = ({ text, type, getAnswer, className }: ConfirmButtonProps) => {
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

ConfirmCompound.displayName = 'ConfirmCompound';
ConfirmTitle.displayName = 'ConfirmTitle';
ConfirmButtonList.displayName = 'ConfirmButtonList';
ConfirmButton.displayName = 'ConfirmButton';