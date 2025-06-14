import { useState } from 'react';
import clsx from 'clsx';

import styles from './Accordion.module.css';

type AccodrionItemType = {
  title: string;
  text: string;
  id: number | string;
};

export interface AccordionProps {
  items: Array<AccodrionItemType>;
  classNameText?: string;
  classNameTitle?: string;
  toggle?: boolean;
}

export const ACCORDION_TEST_IDS = {
  ITEM_TITLE: 'accordion-item_title',
  ITEM_TEXT_WRAPPER: 'accordion-item_text_wrapper'
};

export const Accordion = (props: AccordionProps) => {
  const { items, classNameTitle, classNameText, toggle } = props;

  const [activeItemId, setActiveItemId] = useState<null | AccodrionItemType['id'][]>(null);

  const onToggleItem = (id: AccodrionItemType['id']) => {
    if (activeItemId?.includes(id)) {
      const newIds = activeItemId.filter((itemId) => itemId !== id);
      setActiveItemId(newIds);
    } else {
      setActiveItemId((prev) => (prev?.length ? [...prev, id] : [id]));

      if (toggle && activeItemId && activeItemId?.length >= 1) {
        setActiveItemId([id]);
      }
    }
  };

  return (
    <ul className={styles.menu}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <button
            onClick={() => onToggleItem(item.id)}
            className={clsx(styles.btn, classNameTitle)}
            data-testid={ACCORDION_TEST_IDS.ITEM_TITLE}
          >
            {item.title}
          </button>
          <div
            className={clsx(styles.text_wrapper, classNameText, {
              [styles.active_text]: activeItemId?.includes(item.id)
            })}
            data-testid={ACCORDION_TEST_IDS.ITEM_TEXT_WRAPPER}
          >
            <p className={styles.text}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};