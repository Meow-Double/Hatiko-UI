

import { useCallback, useState } from 'react';
import clsx from 'clsx';

import styles from './Dropdown.module.css';

interface DropdownProps {
  items: string[];
}


export const Dropdown = (props: DropdownProps) => {
    const {items} = props;
    const [isOpen, setIsOpen] = useState(false);

    const onToggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return <div>
      <button onClick={onToggleDropdown}><span></span></button>
      <ul className={clsx(styles.menu, {[styles.active]: isOpen})}>
        {items.map(item => 
          <li key={item} className={styles.item}>{item}</li>
            )}
      </ul>
    </div>
};