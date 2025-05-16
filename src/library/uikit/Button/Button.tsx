import { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx";

import styles from "./Button.module.css";

type ButtonVariants = "primary" | "outline";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant,
    startIcon,
    endIcon,
    loading,
    type = "button",
    className,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      disabled={!!loading}
      className={clsx(styles.btn, styles[variant], className)}
      {...otherProps}
    >
      {startIcon && <span>{startIcon}</span>}
      {!loading && <span>{children}</span>}
      {!!loading && <span>{loading}</span>}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
