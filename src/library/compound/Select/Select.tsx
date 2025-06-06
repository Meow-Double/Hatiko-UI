import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';

import { ArrowDownIcon } from '../../icons';

import { SelectProvider } from './context/SelectProvider';
import { useSelectContext } from './context/useSelectContext';

import styles from './Select.module.css';

export interface SelectProps {
  items: string[];
  classNameMenu?: string;
  classNameShowBar?: string;
  getActiveItem?: (value: string) => void;
}

// export const Select = (props: SelectProps) => {

//   const { items, classNameMenu, classNameShowBar, getActiveItem } = props;

//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState<string>(items[0]);

//   const onSelectItem = (item: string) => {
//     setActiveItem(item);

//     setIsOpen(false);

//     if (getActiveItem) {
//       getActiveItem(item);
//     }
//   };

//   return (
//     <div className={styles.select}>
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
//       >
//         <span>{activeItem}</span>
//         <span>
//           <ArrowDownIcon className={styles.icon} />
//         </span>
//       </button>
//       <ul
//         className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}
//       >
//         {items.map((item) => (
//           <li key={item}>
//             <button
//               onClick={() => onSelectItem(item)}
//               disabled={item === activeItem}
//               className={clsx(styles.btn, styles.option_btn)}
//             >
//               {item}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

interface SelectWraperProps {
  children: ReactNode;
  classNameShowBar?: string;
  classNameMenu?: string;
}

export const SelectWraper = ({ children, classNameShowBar, classNameMenu }: SelectWraperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>();

  const setItem = useCallback((item: string) => {
    setActiveItem(item);
    setIsOpen(false)
  }, []);

  return (
    <SelectProvider values={{ setActiveItem: setItem }}>
      <div className={styles.select}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={clsx(styles.btn, styles.show_btn, classNameShowBar)}
        >
          <span>{activeItem ? activeItem : "active item"}</span>
          <span>
            <ArrowDownIcon className={styles.icon} />
          </span>
        </button>
        <ul className={clsx(styles.menu, classNameMenu, { [styles.active_menu]: isOpen })}>
          {children}
        </ul>
      </div>
    </SelectProvider>
  );
};

interface SelectItemProps {
  children: string;
  className?: string;
}

export const SelectItem = ({ children, className }: SelectItemProps) => {
  const { setActiveItem } = useSelectContext();
  return (
    <li className={clsx(styles.item, className)}>
      <button
        className={clsx(styles.btn, styles.option_btn)}
        onClick={() => setActiveItem(children)}
      >
        {children}
      </button>
    </li>
  );
};