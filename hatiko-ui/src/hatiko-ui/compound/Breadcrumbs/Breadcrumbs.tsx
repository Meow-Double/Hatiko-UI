import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbsProvider } from './context/BreadcrumbsProvider';
import { useBreadcrumbsContext } from './context/useBreadcrumbsContext';

import styles from './Breadcrumbs.module.css';

interface BreadcrumbsCompoundProps {
  children: ReactNode;
  sign?: string;
}

export const BreadcrumbsCompound = ({ children, sign = '/' }: BreadcrumbsCompoundProps) => {
  return (
    <BreadcrumbsProvider values={{ sign }}>
      <nav>
        <ul className={styles.list}>{children}</ul>
      </nav>
    </BreadcrumbsProvider>
  );
};

interface BreadcrumbsItem {
  label: string;
  path: string;
  active?: boolean;
}

export const BreadcrumbsItem = ({ active = false, label, path }: BreadcrumbsItem) => {
  const { sign } = useBreadcrumbsContext();
  return (
    <li>
      {active ? (
        <span className={styles.last_link}>{label}</span>
      ) : (
        <Link className={styles.link} to={path}>
          {label} {sign}
        </Link>
      )}
    </li>
  );
};


BreadcrumbsCompound.displayName = "BreadcrumbsCompound"
BreadcrumbsItem.displayName = "BreadcrumbsItem"