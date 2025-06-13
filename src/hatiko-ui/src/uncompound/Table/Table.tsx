import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Table.module.css';

export interface TableProps<T> {
  schema: T;
  className?: string;
}

export const TABLE_TEST_IDS = {
  TABLE: 'table'
};

export const Table = <T extends Record<string, ReactNode[]>>(props: TableProps<T>) => {
  const { schema, className } = props;

  return (
    <table className={clsx(styles.table, className)} data-testid={TABLE_TEST_IDS.TABLE}>
      <tbody>
        {Object.keys(schema).map((obj) => (
          <tr className={styles.row} key={obj}>
            {schema[obj].map((item, index) => (
              <td key={`${item}_${index}`} className={styles.item}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};