import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Typogarphy.module.css";

type TypographyVariants =
  | "regular_16"
  | "medium_16"
  | "bold_16"
  | "regular_24"
  | "medium_24"
  | "bold_24";

type TypographyTags =
  | "div"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypogarphyProps<Tag extends TypographyTags> = ComponentProps<
  Exclude<Tag, "span">
> & {
  children: ReactNode;
  variant: TypographyVariants;
  tag: Tag;
};

export const Typogarphy = <Tag extends TypographyTags>(
  props: TypogarphyProps<Tag>,
) => {
  const { children, variant, className, tag = "div", ...otherProps } = props;

  const Tag = tag;

  return (
    <Tag
      className={clsx(styles.typography, styles[variant], className)}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};
