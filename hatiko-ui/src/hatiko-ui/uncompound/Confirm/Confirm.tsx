import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Portal } from '@/library/auxiliary';

import styles from './Confirm.module.css';

export interface ConfirmProps {
  title: string;
  classNameOverlay?: string;
  classNameBody?: string;
  getAnswer: (answer: boolean) => void;
  isOpen: boolean;
  closeWindow: () => void;
  lazy?: boolean;
}

export const CONFIRM_TEST_IDS = {
  OVERLAY: 'confirm-overlay'
};

export const Confirm = (props: ConfirmProps) => {
  const { title, classNameOverlay, classNameBody, getAnswer, isOpen, closeWindow, lazy } = props;
  const [isMounted, setIsMounted] = useState(false);

  const onTruth = () => {
    getAnswer(true);
    closeWindow();
  };

  const onFalse = () => {
    getAnswer(false);
    closeWindow();
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div
        className={clsx(styles.overlay, classNameOverlay, { [styles.active]: isOpen })}
        data-testid={CONFIRM_TEST_IDS.OVERLAY}
      >
        <div className={clsx(styles.confirm, classNameBody)}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.buttons}>
            <button className={styles.btn} onClick={onTruth}>
              yes
            </button>
            <button className={styles.btn} onClick={onFalse}>
              no
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};