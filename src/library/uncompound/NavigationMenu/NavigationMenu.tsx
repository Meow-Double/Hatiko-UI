import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './NavigationMenu.module.css';

type NavigationMenuItem = {
  id: number | string;
  text: string;
  path: string;
};

export interface NavigationMenuProps {
  items: NavigationMenuItem[];
  title: string;
  className?: string;
}

export const NAVIGATIONMENU_TEST_IDS = {
  NAVIGATION: 'navigationMenu',
  TITLE: 'navigationMenu_title'
};

export const NavigationMenu = (props: NavigationMenuProps) => {
  const { items, title, className } = props;

  return (
    <div className={clsx(styles.inner, className)} data-testid={NAVIGATIONMENU_TEST_IDS.NAVIGATION}>
      <span className={styles.title} data-testid={NAVIGATIONMENU_TEST_IDS.TITLE}>{title}</span>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link className={styles.link} to={item.path}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};