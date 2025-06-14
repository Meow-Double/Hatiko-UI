

import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { ArrowDownIcon } from '../../icons';

import styles from './Dropdown.module.css';

type DropdownItem = {
  link: string;
  text:string;
  id:number | string;
}

export interface DropdownProps {
  items: Array<DropdownItem>;
  title:string
  classNameMenu?: string;
  classNameShowBar?: string;
}

export const DROPDOWN_TEST_IDS = {
  ACTIVE_TEXT: 'dropdown-active_text',
  DROPDOWN: 'dropdown',
  ACTIVE_BTN: 'dropdown-active_btn',
  ITEM_BTN: 'dropdown-item_btn',
  MENU: 'dropdown-menu'
};

export const Dropdown = (props: DropdownProps) => {
  const { items, classNameMenu, classNameShowBar, title } = props;

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className={styles.dropdown} 
    data-testid={DROPDOWN_TEST_IDS.DROPDOWN}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
        data-testid={DROPDOWN_TEST_IDS.ACTIVE_BTN}
      >
        <span 
        data-testid={DROPDOWN_TEST_IDS.ACTIVE_TEXT}
        >{title}</span>
        <span className={clsx(styles.icon_block, {[styles.active_icon]: isOpen})}>
          <ArrowDownIcon className={styles.icon} />
        </span>
      </button>
      <ul
        className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}
        data-testid={DROPDOWN_TEST_IDS.MENU}
      >
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.link} className={styles.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};