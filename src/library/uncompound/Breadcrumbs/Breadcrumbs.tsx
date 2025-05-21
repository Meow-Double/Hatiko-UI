
import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
    sign?: string
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {

    const {sign = "/"} = props;

  const location = useLocation().pathname;

  const locationArray = location.split("/");

  const lastWord = locationArray[locationArray.length - 1];

  const createLinkByItem = useCallback((item: string) => {
    const donePath = [];

    for(let i = 0; i < locationArray.length - 1; i++){

        if(locationArray[i] === item || donePath?.includes(item)){
            donePath.push(item)
           break;
        }

        donePath.push(locationArray[i])
    }

    return donePath.join("/")
  }, [locationArray])


  return (
    <ul className={styles.menu}>
      {locationArray.map((item) => (
        <li key={item} 
        className={clsx(styles.item, {[styles.active]: item === lastWord})}>{
            item === lastWord 
              ? item 
              : <Link to={createLinkByItem(item)}>{item + sign}</Link>
        }</li>
      ))}
    </ul>
  );
};