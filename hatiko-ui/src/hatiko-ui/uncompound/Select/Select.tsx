import { useState } from 'react';
import clsx from 'clsx';

import { ArrowDownIcon } from '../../icons';

import styles from './Select.module.css';

export interface SelectProps {
  items: string[];
  classNameMenu?: string;
  classNameShowBar?: string;
  getActiveItem?: (value: string) => void;
}

export const SELECT_TEST_IDS = {
  ACTIVE_TEXT: 'select-active_text',
  SELECT: 'select',
  ACTIVE_BTN: 'select-active_btn',
  ITEM_BTN: 'select-item_btn',
  MENU: 'select-menu'
};

export const Select = (props: SelectProps) => {
  const { items, classNameMenu, classNameShowBar, getActiveItem } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(items[0]);

  const onSelectItem = (item: string) => {
    setActiveItem(item);

    setIsOpen(false);

    if (getActiveItem) {
      getActiveItem(item);
    }
  };

  return (
    <div className={styles.select} data-testid={SELECT_TEST_IDS.SELECT}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
        data-testid={SELECT_TEST_IDS.ACTIVE_BTN}
      >
        <span data-testid={SELECT_TEST_IDS.ACTIVE_TEXT}>{activeItem}</span>
        <span>
          <ArrowDownIcon className={styles.icon} />
        </span>
      </button>
      <ul
        className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}
        data-testid={SELECT_TEST_IDS.MENU}
      >
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => onSelectItem(item)}
              disabled={item === activeItem}
              className={clsx(styles.btn, styles.option_btn)}
              data-testid={SELECT_TEST_IDS.ITEM_BTN}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};