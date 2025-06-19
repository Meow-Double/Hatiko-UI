
import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Portal } from '../../auxiliary';
import { CloseIcon } from '../../icons';

import { ModalProvider } from './context/ModalProvider';
import { useModalContext } from './context/useModalContext';

import styles from './Modal.module.css';

interface ModalCompoundProps {
  children: ReactNode;
  classNameOverlay?: string;
  classNameBody?: string;
  isOpen: boolean;
  closeModal: () => void;
  lazy?: boolean;
}


export const ModalCompound = (props: ModalCompoundProps) => {
  const {
    children,
    isOpen,
    closeModal,
    classNameOverlay,
    classNameBody,
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
      <ModalProvider values={{closeModal}}>
        <div
        className={clsx(styles.overlay, classNameOverlay, { [styles.active]: isOpen })}
        onClick={closeModal}
      >
          <div
          onClick={onClickContent}
          className={clsx(styles.body, classNameBody)}
        >{children}
          </div>
        </div>
      </ModalProvider>
    </Portal>
  );
};


export const ModalHeader = ({children}: {children: ReactNode}) => {
    return <div className={styles.header}>{children}</div>
}

export const ModalTitle = ({title}: {title: ReactNode}) => {
    return <div>{title}</div>
}

export const ModalCloseBtn = () => {

    const {closeModal} = useModalContext()

    return  <button
                  className={styles.close_btn}
                  onClick={closeModal}
                >
      <CloseIcon />
    </button>
}


export const ModalContent = ({children}: {children: ReactNode}) => {
      return <div>{children}</div>
}


ModalCompound.displayName = "ModalCompound"
ModalHeader.displayName = "ModalHeader"
ModalTitle.displayName = "ModalTitle"
ModalCloseBtn.displayName = "ModalCloseBtn"
ModalContent.displayName = "ModalContent"