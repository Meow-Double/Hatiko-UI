
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

interface ModalHeaderProps {
  children: ReactNode,
  className?:string
}

export const ModalHeader = ({children, className}: ModalHeaderProps) => {
    return <div className={clsx(styles.header, className)}>{children}</div>
}

interface ModalTitleProps {
  title: ReactNode,
  className?:string;
}

export const ModalTitle = ({title}: ModalTitleProps) => {
    return <div>{title}</div>
}
interface ModalCloseBtnProps {
  className?:string;
}

export const ModalCloseBtn = ({className}: ModalCloseBtnProps) => {

    const {closeModal} = useModalContext()

    return  <button
                  className={clsx(styles.close_btn, className)}
                  onClick={closeModal}
                >
      <CloseIcon />
    </button>
}

interface ModalContentProps {
children: ReactNode;
className?:string;
}

export const ModalContent = ({children, className}: ModalContentProps) => {
      return <div className={className}>{children}</div>
}


ModalCompound.displayName = "ModalCompound"
ModalHeader.displayName = "ModalHeader"
ModalTitle.displayName = "ModalTitle"
ModalCloseBtn.displayName = "ModalCloseBtn"
ModalContent.displayName = "ModalContent"