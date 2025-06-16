

import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';

type BreadcrumbItemType = {
  label: string;
  path: string;
};

export interface BreadcrumbsProps extends ComponentProps<"a"> {
  items:Array<BreadcrumbItemType>,
  sign?: string
}

export const BREADCRUMBS_TEST_IDS = {
  BREADCRUMBS:"breadcrumbs",
  LAST_ITEM:"breadcrumbs-last_item",
  ITEM:"breadcrumbs-item"
}


export const Breadcrumbs = (props:BreadcrumbsProps) => {
  const {sign = "/", items, ...otherProps} = props;

  return <nav data-testid={BREADCRUMBS_TEST_IDS.BREADCRUMBS}>
    <ul className={styles.list}>
      {items.map((breadcrumb, index) => <li key={index}>
        {index === items.length - 1 
          ? <span 
            className={styles.last_link} 
            data-testid={BREADCRUMBS_TEST_IDS.LAST_ITEM}>
            {breadcrumb.label}
          </span>
          : <Link 
            className={styles.link} 
            to={breadcrumb.path}
            data-testid={BREADCRUMBS_TEST_IDS.ITEM} 
            {...otherProps}
            >
            {breadcrumb.label} 
            {sign}
          </Link>}
      </li>)}
    </ul>
  </nav>
}