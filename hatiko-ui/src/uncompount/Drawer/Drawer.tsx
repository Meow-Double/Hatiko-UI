
import { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '../../icons';

import styles from './Drawer.module.css';

interface DrawerProps {
    children: ReactNode;
    isOpen:boolean;
    closeDrawer: () => void;
    title?:ReactNode;
    closeBtn?:boolean;
    lazy?:boolean;
  classNameOverlay?: string;
  classNameBody?: string;
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
        >
      <div className={clsx(styles.body, classNameBody)} onClick={onClickContent}>
        {(!!title || closeBtn) && (
          <div className={styles.header}>
            {!!title && <div>{title}</div>}
            {closeBtn && (
            <button className={styles.close_btn} onClick={closeDrawer}>
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