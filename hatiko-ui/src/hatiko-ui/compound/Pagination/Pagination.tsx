
import { ReactNode } from 'react';
import clsx from 'clsx';

import { PaginationProvider } from './context/PaginationProvider';
import { usePaginationContext } from './context/usePaginationContext';

import styles from './Pagination.module.css';
import { paginationRange } from '@/hatiko-ui/utils/pagination/paginationRange';

interface PaginationCompoundProps {
  children:ReactNode;
  page:number,
  totalPage: number,
  siblings:number
  setPages:(value: number) => void;
  className?:string;
}

export const PaginationCompound = ({ page, setPages, siblings, totalPage, children, className}: PaginationCompoundProps) => {
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
    <ul className={clsx(styles.pagination, className)}>{children}</ul>
  </PaginationProvider>
};


interface PaginationCellsProps{
  className?:string;
}

export const PaginationCells = ({className}: PaginationCellsProps) => {

  const {array, onChangePage, page} = usePaginationContext();

  return array.map((item, index) => (
    <li key={index}>
      <button
            onClick={() => onChangePage(item)}
            disabled={item === page}
            className={clsx(styles.item, { [styles.active]: page === item }, className)}
          >
        {item}
      </button>
    </li>
      ))
}

interface PaginationArrowProps {
    direction:"right" | "left";
    className?:string;
}

export const PaginationArrow = ({direction, className}:PaginationArrowProps) => {
  const {onChangePage} = usePaginationContext();

    const arrowValue = direction === "right" ? "&rsaquo;" : "&lsaquo;";

    return       <li>
      <button className={clsx(styles.item, className)} onClick={() => onChangePage(arrowValue)}>
        {arrowValue === "&lsaquo;" && <>&lsaquo;</>}
        {arrowValue === "&rsaquo;" && <>&rsaquo;</>}
      </button>
    </li>
}

interface PaginationDoubleArrowProps {
    direction:"right" | "left";
    className?:string;
}

export const PaginationDoubleArrow = ({direction, className}: PaginationDoubleArrowProps) => {
    const {onChangePage} = usePaginationContext();

    const arrowValue = direction === "right" ? "&raquo;" : "&laquo;"
    return  <li>
      <button className={clsx(styles.item, className)} onClick={() => onChangePage(arrowValue)}>
        {arrowValue === "&laquo;" && <>&laquo;</>}
        {arrowValue === "&raquo;" && <>&raquo;</>}
      </button>
    </li>
}

PaginationCompound.displayName = "PaginationCompound"
PaginationCells.displayName = "PaginationCells"
PaginationArrow.displayName = "PaginationArrow"
PaginationDoubleArrow.displayName = "PaginationDoubleArrow"