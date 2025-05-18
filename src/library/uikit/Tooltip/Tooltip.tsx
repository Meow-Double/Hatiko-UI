import styles from './Tooltip.module.css';

interface TooltipProps {
  title: string;
}

export const Tooltip = (props: TooltipProps) => {
  const { title } = props;

  return (
    <div className={styles.tooltip}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
