import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Portal } from '../../auxiliary';
import { CloseIcon } from '../../icons';

import styles from './Modal.module.css';

export interface ModalProps {
  children: ReactNode;
  classNameOverlay?: string;
  classNameBody?: string;
  title?: ReactNode;
  closeBtn?: boolean;
  isOpen: boolean;
  closeModal: () => void;
  lazy?: boolean;
}

export const MODAL_TEST_IDS = {
  TITLE: 'modal-title',
  CLOSE_BUTTON: 'modal-close_button',
  OVERLAY: 'modal-overlay',
  BODY: 'modal-body'
};

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    closeModal,
    classNameOverlay,
    classNameBody,
    title,
    closeBtn = true,
    lazy
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  const onClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
        onClick={closeModal}
        data-testid={MODAL_TEST_IDS.OVERLAY}
      >
        <div
          onClick={onClickContent}
          className={clsx(styles.body, classNameBody)}
          data-testid={MODAL_TEST_IDS.BODY}
        >
          {(!!title || closeBtn) && (
            <div className={styles.header}>
              {!!title && <div data-testid={MODAL_TEST_IDS.TITLE}>{title}</div>}
              {closeBtn && (
                <button
                  className={styles.close_btn}
                  onClick={closeModal}
                  data-testid={MODAL_TEST_IDS.CLOSE_BUTTON}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};