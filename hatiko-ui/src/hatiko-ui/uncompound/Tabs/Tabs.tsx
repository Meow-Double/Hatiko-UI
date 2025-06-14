import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import styles from './Tabs.module.css';

export interface TabsProps<T> {
  schema: T;
  className?: string;
  classNameContent?: string;
}

export const TABS_TEST_IDS = {
  TABS: 'tabs',
  CONTENT: 'tabs-content'
};

export const Tabs = <T extends Record<string, ReactNode>>(props: TabsProps<T>) => {
  const { schema, className, classNameContent } = props;

  const [activeContentKey, setActiveContentKey] = useState(Object.keys(schema)[0]);

  const onChangeActiveContent = (key: string) => {
    setActiveContentKey(key);
  };

  return (
    <div className={clsx(styles.inner, className)} data-testid={TABS_TEST_IDS.TABS}>
      <div className={styles.tabs}>
        {Object.keys(schema).map((key) => (
          <button
            onClick={() => onChangeActiveContent(key)}
            key={key}
            className={clsx(styles.header_item, { [styles.active]: activeContentKey === key })}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={clsx(styles.content, classNameContent)} data-testid={TABS_TEST_IDS.CONTENT}>
        {schema[activeContentKey]}
      </div>
    </div>
  );
};