import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Dropdown.module.css';
import { ArrowDownIcon } from '@/hatiko-ui/icons';

interface DropdownCompoundProps {
  children: ReactNode;
  title: string;
  classNameShowBar?: string;
  classNameMenu?: string;
}

export const DropdownCompound = ({
  classNameMenu,
  classNameShowBar,
  title,
  children
}: DropdownCompoundProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
      >
        <span>{title}</span>
        <span className={clsx(styles.icon_block, { [styles.active_icon]: isOpen })}>
          <ArrowDownIcon className={styles.icon} />
        </span>
      </button>
      <ul className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}>
        {children}
      </ul>
    </div>
  );
};

interface DropdownItemProps {
  path: string;
  text: string;
}

export const DropdownItem = ({ path, text }: DropdownItemProps) => {
  return (
    <li>
      <Link to={path} className={styles.link}>
        {text}
      </Link>
    </li>
  );
};

DropdownCompound.displayName = 'DropdownCompound';
DropdownItem.displayName = 'DropdownItem';