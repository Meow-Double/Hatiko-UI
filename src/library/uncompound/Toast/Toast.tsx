import { useCallback, useEffect } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '@/library/icons';

import styles from './Toast.module.css';

export type ToastVariants = 'success' | 'danger' | 'info' | 'warning';
type PositionTypes = 'bottom_right';

export type ToastListTypes = {
  id: number;
  title?: string;
  description: string;
  variant: ToastVariants;
};

export interface ToastProps {
  toastList: Array<ToastListTypes>;
  position?: PositionTypes;
  clearToasts: (toasts: ToastListTypes[]) => void;
  durationDelete?: number;
}

export const TOAST_TEST_IDS = {
  ITEM: 'toast-item'
};

export const Toast = (props: ToastProps) => {
  const { toastList, position = 'bottom_right', clearToasts, durationDelete = 2000 } = props;

  const deleteToasts = useCallback(
    (id: number) => {
      const toastListItems = toastList.filter((toast) => toast.id !== id);
      clearToasts(toastListItems);
    },
    [toastList, clearToasts]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToasts(toastList[0].id);
      }
    }, durationDelete);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToasts, durationDelete]);

  return (
    <div className={clsx(styles.container, styles[position])}>
      {toastList.map((toast, index) => (
        <div
          key={`${toast.id}-${index}`}
          className={clsx(styles.notification, styles[toast.variant])}
          data-testid={TOAST_TEST_IDS.ITEM}
        >
          <div className={styles.header}>
            <p className={styles.title}>{toast.title ? toast.title : toast.variant}</p>
            <button onClick={() => deleteToasts(toast.id)} className={styles.btn_close}>
              <CloseIcon />
            </button>
          </div>
          <p className={styles.desc}>{toast.description}</p>
        </div>
      ))}
    </div>
  );
};