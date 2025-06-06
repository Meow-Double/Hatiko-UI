

import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Portal } from '@/library/auxiliary';
import { CloseIcon } from '@/library/icons';

import { DrawerProvider } from './context/DrawerProvider';
import { useDrawerContext } from './context/useDrawerContext';

import styles from './Drawer.module.css';

export interface DrawerProps {
  children: ReactNode
  classNameOverlay?: string;
  classNameBody?: string;
  isOpen: boolean;
  closeDrawer: () => void;
  lazy?: boolean;
}


export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isOpen,
    closeDrawer,
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
        closeDrawer();
      }
    },
    [closeDrawer]
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
      <DrawerProvider values={{closeDrawer}}>
        <div
        className={clsx(styles.overlay, classNameOverlay, { [styles.active]: isOpen })}
        onClick={closeDrawer}
      >
          <div
          onClick={onClickContent}
          className={clsx(styles.body, classNameBody)}
        >{children}
          </div>
        </div>
      </DrawerProvider>
    </Portal>
  );
};


export const DrawerHeader = ({children}: {children: ReactNode}) => {
    return <div className={styles.header}>{children}</div>
}

export const DrawerTitle = ({title}: {title: ReactNode}) => {
    return <div>{title}</div>
}

export const DrawerCloseBtn = () => {

    const {closeDrawer} = useDrawerContext()

    return  <button
                  className={styles.close_btn}
                  onClick={closeDrawer}
                >
      <CloseIcon />
    </button>
}


export const DrawerContent = ({children}: {children: ReactNode}) => {
      return <div>{children}</div>
}


Drawer.displayName = "Drawer"
DrawerHeader.displayName = 'ModalHeader';
DrawerTitle.displayName = 'ModalTitle';
DrawerCloseBtn.displayName = 'ModalCloseBtn';
DrawerContent.displayName = 'ModalContent';