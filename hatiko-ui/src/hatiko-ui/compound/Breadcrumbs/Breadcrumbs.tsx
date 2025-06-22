import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { BreadcrumbsProvider } from './context/BreadcrumbsProvider';
import { useBreadcrumbsContext } from './context/useBreadcrumbsContext';

import styles from './Breadcrumbs.module.css';

interface BreadcrumbsCompoundProps {
  children: ReactNode;
  sign?: string;
  className?: string;
}

export const BreadcrumbsCompound = ({
  children,
  sign = '/',
  className
}: BreadcrumbsCompoundProps) => {
  return (
    <BreadcrumbsProvider values={{ sign }}>
      <nav className={className}>
        <ul className={styles.list}>{children}</ul>
      </nav>
    </BreadcrumbsProvider>
  );
};

interface BreadcrumbsItem {
  label: string;
  path: string;
  active?: boolean;
  className?:string;
}

export const BreadcrumbsItem = ({ active = false, label, path, className }: BreadcrumbsItem) => {
  const { sign } = useBreadcrumbsContext();
  return (
    <li className={className}>
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

BreadcrumbsCompound.displayName = 'BreadcrumbsCompound';
BreadcrumbsItem.displayName = 'BreadcrumbsItem';