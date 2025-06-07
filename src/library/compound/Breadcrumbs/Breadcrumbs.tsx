import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbsProvider } from './context/BreadcrumbsProvider';
import { useBreadcrumbsContext } from './context/useBreadcrumbsContext';

import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  children: ReactNode;
  sign?: string;
}

export const Breadcrumbs = ({ children, sign = '/' }: BreadcrumbsProps) => {
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

Breadcrumbs.Item = ({ active = false, label, path }: BreadcrumbsItem) => {
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