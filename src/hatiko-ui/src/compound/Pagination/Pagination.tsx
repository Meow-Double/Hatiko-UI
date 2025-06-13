
import { ReactNode } from 'react';
import clsx from 'clsx';

import { paginationRange } from '@/library/utils/pagination/paginationRange';

import { PaginationProvider } from './context/PaginationProvider';
import { usePaginationContext } from './context/usePaginationContext';

import styles from './Pagination.module.css';

interface PaginationProps {
    page:number,
  totalPage: number,
  siblings:number
  setPages:(value: number) => void;
  children:ReactNode;
}

export const Pagination = ({ page, setPages, siblings, totalPage, children}: PaginationProps) => {
  const array = paginationRange(totalPage, page, siblings);

  const onChangePage = (value: string | number) => {
    if (value === '&laquo;') {
      setPages(1);
    } else if (value === '&lsaquo;' && page > 1) {
      setPages(page - 1);
    } else if (value === '&rsaquo;' && page < totalPage) {
      setPages(page + 1);
    } else if (value === '&raquo;') {
      setPages(totalPage);
    } else if (typeof value === 'number') {
      setPages(value);
    }
  };

  return <PaginationProvider values={{onChangePage, array, page}}>
    <ul className={styles.pagination}>{children}</ul>
  </PaginationProvider>
};


export const PaginationCells = () => {

  const {array, onChangePage, page} = usePaginationContext();

  return array.map((item, index) => (
    <li key={index}>
      <button
            onClick={() => onChangePage(item)}
            disabled={item === page}
            className={clsx(styles.item, { [styles.active]: page === item })}
          >
        {item}
      </button>
    </li>
      ))
}

interface PaginationArrowProps {
    direction:"right" | "left"
}

export const PaginationArrow = ({direction}:PaginationArrowProps) => {
  const {onChangePage} = usePaginationContext();

    const arrowValue = direction === "right" ? "&rsaquo;" : "&lsaquo;";

    return       <li>
      <button className={styles.item} onClick={() => onChangePage(arrowValue)}>
        {arrowValue === "&lsaquo;" && <>&lsaquo;</>}
        {arrowValue === "&rsaquo;" && <>&rsaquo;</>}
      </button>
    </li>
}

interface PaginationDoubleArrowProps {
    direction:"right" | "left"
}

export const PaginationDoubleArrow = ({direction}: PaginationDoubleArrowProps) => {
    const {onChangePage} = usePaginationContext();

    const arrowValue = direction === "right" ? "&raquo;" : "&laquo;"
    return  <li>
      <button className={styles.item} onClick={() => onChangePage(arrowValue)}>
        {arrowValue === "&laquo;" && <>&laquo;</>}
        {arrowValue === "&raquo;" && <>&raquo;</>}
      </button>
    </li>
}

Pagination.displayName = "Pagination"
PaginationCells.displayName = "PaginationCells"
PaginationArrow.displayName = "PaginationArrow"
PaginationDoubleArrow.displayName = "PaginationDoubleArrow"