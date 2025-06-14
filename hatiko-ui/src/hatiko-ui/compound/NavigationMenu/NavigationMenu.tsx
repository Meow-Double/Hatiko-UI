import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './NavigationMenu.module.css';

interface NavigationMenuCompoundProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const NavigationMenuCompound = ({
  className,
  title,
  children
}: NavigationMenuCompoundProps) => {
  return (
    <div className={clsx(styles.inner, className)}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
};

interface NavigationMenuItemProps {
  children: string;
  path: string;
  className?: string;
}

export const NavigationMenuItem = ({ children, path, className }: NavigationMenuItemProps) => {
  return (
    <li className={clsx(styles.item, className)}>
      <Link className={styles.link} to={path}>
        {children}
      </Link>
    </li>
  );
};

NavigationMenuCompound.displayName = 'NavigationMenuCompound';
NavigationMenuItem.displayName = 'NavigationMenuItem';