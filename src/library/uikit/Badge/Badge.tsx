import clsx from "clsx";

import styles from "./Badge.module.css";

type BageVariants = 'success' | 'error' | 'pending';

interface BadgeProps {
  variant: BageVariants;
  className?: string;
  text?: string;
}

export const Badge = (props: BadgeProps) => {
  const { variant, text, className } = props;

  return <div className={clsx(styles.badge, styles[variant], className)}>{text || variant}</div>;
};
