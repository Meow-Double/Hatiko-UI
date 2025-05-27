
import { useState } from 'react';
import clsx from 'clsx';

import styles from './Pagination.module.css';

interface PaginationProps {
  visibalPageCount: number;
  allPageCount: number;
}


export const Pagination = (props: PaginationProps) => {
    const {allPageCount, visibalPageCount} = props;
    const [activePage, setActivePage] = useState(1);


    const renderPageCount = Math.floor(allPageCount / visibalPageCount);



    const onSetActivePage = (index: number) => {
        setActivePage(index + 1);
    }


    return <div className={styles.pagination}>
      {[...new Array(renderPageCount)].map((_, index) => 
        <button 
                key={index}
                onClick={() => onSetActivePage(index)} 
                className={clsx(styles.btn, {[styles.active]: activePage === index + 1})}
            >
          {index + 1}
        </button>)}
      {/* <span>...</span>
            <button  \
            className={clsx(styles.btn, 
            {[styles.active]: activePage === fullSkipPageCount})}>
                {fullSkipPageCount}
            </button> */}
    </div>
};