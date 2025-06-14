import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Table.module.css';

interface TableCompoundProps {
  children: ReactNode;
  className?: string;
}

export const TableCompound = ({ children, className }: TableCompoundProps) => {
  return <table className={clsx(styles.table, className)}>{children}</table>;
};

export const TableBody = ({ children, className }: TableCompoundProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableRow = ({ children, className }: TableCompoundProps) => {
  return <tr className={clsx(styles.row, className)}>{children}</tr>;
};

export const TableData = ({ children, className }: TableCompoundProps) => {
  return <td className={clsx(styles.item, className)}>{children}</td>;
};

TableCompound.displayName = 'TableCompound';
TableBody.displayName = 'TableBody';
TableRow.displayName = 'TableRow';
TableData.displayName = 'TableData';