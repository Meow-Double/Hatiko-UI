import { ComponentProps, useId } from 'react';
import clsx from 'clsx';

// import { TickIcon } from '../../icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  className?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  //   const { label, className, getCheckboxState, checked = false, children  } = props;
  //   const [isActive, setIsActive] = useState(checked);
  const { children, className } = props;
  const id = useId();

  //   const onChange = useCallback(() => {
  //     setIsActive(!isActive);

  //     if (getCheckboxState) {
  //       getCheckboxState(!isActive);
  //     }
  //   }, [isActive, getCheckboxState]);

  return (
    <label htmlFor={id} className={clsx(styles.label, className)}>
      {children}
    </label>
  );
};

// Checkbox.Label = ({}) => {
//   return (
//     <>
//       <input
//         onChange={onChange}
//         onKeyDown={onChange}
//         id={id}
//         type='checkbox'
//         className={styles.input}
//         checked={checked}
//         {...otherProps}
//       />
//       <span className={styles.checkbox}>{isActive && <TickIcon className={styles.icon} />}</span>
//     </>
//   );
// };

// Checkbox.LabelText = ({ text }: { text: string }) => {
//   return <span>{text}</span>;
// };