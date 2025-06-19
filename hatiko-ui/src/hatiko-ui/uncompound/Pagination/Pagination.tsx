

import clsx from 'clsx';

import { paginationRange } from '@/hatiko-ui/utils/pagination/paginationRange';

import styles from './Pagination.module.css';

export interface PaginationProps {
  page:number,
  totalPage: number,
  siblings:number
  setPages:(value: number) => void
}

  export const PAGINATION_TEST_IDS = {
    PAGINATION:"pagination"
  }

export const Pagination = (props: PaginationProps) => {
  const { page, siblings, totalPage, setPages} = props;

  const array = paginationRange(totalPage, page, siblings)


  const onChangePage = (value:string | number) => {
    if(value === "&laquo;"){
      setPages(1);
    } else if(value === "&lsaquo;" && page > 1){
      setPages(page - 1);
    } else if(value === "&rsaquo;" && page < totalPage){
        setPages(page + 1);
    }else if(value === "&raquo;"){
        setPages(totalPage);
    }else if(typeof value === "number"){
      setPages(value)
    }
  }

  return <ul className={styles.pagination} data-testid={PAGINATION_TEST_IDS.PAGINATION}>
    <li>
      <button className={styles.item} onClick={() => onChangePage("&laquo;")}>
        &laquo;
      </button>
    </li>
    <li>
      <button className={styles.item} onClick={() => onChangePage("&lsaquo;")}>
        &lsaquo;
      </button>
    </li>
    {array.map((item, index) => 
      <li key={index}>
        <button 
          onClick={() => onChangePage(item)} 
          disabled={item === page} 
          className={clsx(styles.item, {[styles.active]: page === item})}>
          {item}
        </button>
      </li>)}
    <li>
      <button className={styles.item} onClick={() => onChangePage("&rsaquo;")}>
        &rsaquo;
      </button>
    </li>
    <li>
      <button className={styles.item} onClick={() => onChangePage("&raquo;")}>
        &raquo;
      </button>
    </li>
  </ul>
}