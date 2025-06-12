import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Table.module.css';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return <table className={clsx(styles.table, className)}>{children}</table>;
};

export const TableBody = ({ children, className }: TableProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableRow = ({ children, className }: TableProps) => {
  return <tr className={clsx(styles.row, className)}>{children}</tr>;
};

export const TableData = ({ children, className }: TableProps) => {
  return <td className={clsx(styles.item, className)}>{children}</td>;
};

Table.displayName = 'Table';
TableBody.displayName = 'TableBody';
TableRow.displayName = 'TableRow';
TableData.displayName = 'TableData';