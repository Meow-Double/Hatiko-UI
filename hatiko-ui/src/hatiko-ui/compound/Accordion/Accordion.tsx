import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';

import { AccordionProvider } from './context/AccordionProvider';
import { useAccordionContext } from './context/useAccordionContext';

import styles from './Accordion.module.css';

interface AccordionCompoundProps {
  children: ReactNode;
  className?: string;
}

export const AccordionCompound = ({ children, className }: AccordionCompoundProps) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(undefined);

  const accrodionSwitch = useCallback((title: string) => {
    setActiveGroup((activeTitle) => (activeTitle === title ? undefined : title));
  }, []);

  return (
    <AccordionProvider values={{ activeGroup, accrodionSwitch }}>
      <div className={clsx(styles.accordion, className)}>{children}</div>
    </AccordionProvider>
  );
};

interface AccordionGroupProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const AccordionGroup = ({ children, title, className }: AccordionGroupProps) => {
  const { activeGroup, accrodionSwitch } = useAccordionContext();

  return (
    <div className={clsx(styles.group, className)}>
      <button onClick={() => accrodionSwitch(title)} className={styles.btn}>
        {title}
      </button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  className?: string;
}

export const AccordionItem = ({ title, className }: AccordionItemProps) => {
  return <div className={clsx(styles.text, className)}>{title}</div>;
};


AccordionCompound.displayName = "AccordionCompound"
AccordionGroup.displayName = "AccordionGroup"
AccordionItem.displayName = "AccordionItem"