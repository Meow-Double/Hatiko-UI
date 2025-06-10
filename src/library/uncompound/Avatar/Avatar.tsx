import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Avatar.module.css';

export interface AvatarProps extends ComponentProps<'img'> {
  path: string;
}

export const AVATAR_TEST_IDS = {
  AVATAR: 'avatar'
};

export const Avatar = (props: AvatarProps) => {
  const { path, className, ...otherProps } = props;

  return (
    <img
      src={path}
      alt='avatar'
      className={clsx(styles.avatar, className)}
      data-testid={AVATAR_TEST_IDS.AVATAR}
      {...otherProps}
    />
  );
};