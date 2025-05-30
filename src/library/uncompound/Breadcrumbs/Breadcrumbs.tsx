

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


export const Breadcrumbs = (props:BreadcrumbsProps) => {
  const {sign = "/", items, ...otherProps} = props;

  return <nav>
    <ul className={styles.list}>
      {items.map((breadcrumb, index) => <li key={index}>
        <Link to={breadcrumb.path} {...otherProps}>{breadcrumb.label} {sign}</Link>
      </li>)}
    </ul>
  </nav>
}