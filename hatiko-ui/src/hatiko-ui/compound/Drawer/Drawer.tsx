

import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { DrawerProvider } from './context/DrawerProvider';
import { useDrawerContext } from './context/useDrawerContext';

import styles from './Drawer.module.css';
import { Portal } from '@/hatiko-ui/auxiliary';
import { CloseIcon } from '@/hatiko-ui/icons';

export interface DrawerCompoundProps {
  children: ReactNode
  classNameOverlay?: string;
  classNameBody?: string;
  isOpen: boolean;
  closeDrawer: () => void;
  lazy?: boolean;
}


export const DrawerCompound = (props: DrawerCompoundProps) => {
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

interface DrawerHeaderProps {
  children: ReactNode,
  className?:string
}

export const DrawerHeader = ({children, className}: DrawerHeaderProps) => {
    return <div className={clsx(styles.header, className)}>{children}</div>
}


interface DrawerTitleProps {
  title: ReactNode,
  className?:string;
}

export const DrawerTitle = ({title, className}: DrawerTitleProps) => {
    return <div className={className}>{title}</div>
}

interface DrawerCloseBtnProps {
  className?:string;
}


export const DrawerCloseBtn = ({className}: DrawerCloseBtnProps) => {

    const {closeDrawer} = useDrawerContext()

    return  <button
                  className={clsx(styles.close_btn, className)}
                  onClick={closeDrawer}
                >
      <CloseIcon />
    </button>
}

interface DrawerContentProps {
  children: ReactNode;
  className?:string;
}

export const DrawerContent = ({children, className}: DrawerContentProps) => {
      return <div className={className}>{children}</div>
}


DrawerCompound.displayName = "DrawerCompound"
DrawerHeader.displayName = 'ModalHeader';
DrawerTitle.displayName = 'ModalTitle';
DrawerCloseBtn.displayName = 'ModalCloseBtn';
DrawerContent.displayName = 'ModalContent';