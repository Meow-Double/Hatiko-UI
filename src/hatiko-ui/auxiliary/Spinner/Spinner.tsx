import clsx from "clsx";

import styles from "./Spinner.module.css";

type SpinnerSizes = "24" | "32" | "48" | "64" | "128";

interface SpinnerProps {
  size?: SpinnerSizes;
}

export const Spinner = ({ size = "32" }: SpinnerProps) => {
  const sizeClass = `size_${size}`;

  return <div className={clsx(styles.spinner, styles[sizeClass])} />;
};
