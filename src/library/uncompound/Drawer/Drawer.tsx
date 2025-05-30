
import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '../../icons';

import styles from './Drawer.module.css';

export interface DrawerProps {
    children: ReactNode;
    isOpen:boolean;
    closeDrawer: () => void;
    title?:ReactNode;
    closeBtn?:boolean;
    lazy?:boolean;
    classNameOverlay?: string;
    classNameBody?: string;
}

export const DRAWER_TEST_IDS = {
      TITLE: 'drawer-title',
  CLOSE_BUTTON: 'drawer-close_button',
  OVERLAY: 'drawer-overlay',
  BODY: 'drawer-body'
}

export const Drawer = (props: DrawerProps) => {
    const {
        children, 
        closeDrawer, 
        isOpen, 
        title,
        lazy, 
        closeBtn=true, 
        classNameOverlay, 
        classNameBody
    } = props;

    const [isMounted, setIsMounted] = useState(false)
    
    const onClickContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === "Escape"){
            closeDrawer()
        }
    }, [closeDrawer])

    useEffect(() => {
        if(isOpen){
            window.addEventListener("keydown", onKeyDown)
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [onKeyDown, isOpen]);

     useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

    if(lazy && !isMounted) return null

    return <div 
        className={
            clsx(styles.overlay, 
                classNameOverlay, 
                {[styles.active]:isOpen }
        )} 
        onClick={closeDrawer}
        data-testid={DRAWER_TEST_IDS.OVERLAY}
        >
      <div 
        className={clsx(styles.body, classNameBody)} 
        onClick={onClickContent} 
        data-testid={DRAWER_TEST_IDS.BODY}
        >
        {(!!title || closeBtn) && (
          <div className={styles.header}>
            {!!title && <div data-testid={DRAWER_TEST_IDS.TITLE}>{title}</div>}
            {closeBtn && (
            <button 
              className={styles.close_btn} 
              onClick={closeDrawer} 
              data-testid={DRAWER_TEST_IDS.CLOSE_BUTTON}
            >
              <CloseIcon />
            </button>
              )}
          </div>
          )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
};