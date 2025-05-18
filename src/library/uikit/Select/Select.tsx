import { useState } from 'react';
import clsx from 'clsx';

import { ArrowDownIcon } from '../../icons';

import styles from './Select.module.css';

interface SelectProps {
  items: string[];
  classNameMenu?: string;
  classNameShowBar?: string;
  getActiveItem?: (value: string) => void;
}

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
    <div className={styles.select}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
      >
        <span>{activeItem}</span>
        <span>
          <ArrowDownIcon className={styles.icon} />
        </span>
      </button>
      <ul className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}>
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => onSelectItem(item)}
              disabled={item === activeItem}
              className={clsx(styles.btn, styles.option_btn)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
