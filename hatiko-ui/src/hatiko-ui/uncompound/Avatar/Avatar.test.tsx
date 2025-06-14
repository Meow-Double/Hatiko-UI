import { render } from '@testing-library/react';

import ImageAvatar from '@/library/storybook/images/image-1.jpg';

import { Avatar, AVATAR_TEST_IDS, AvatarProps } from './Avatar';

const avatarProps = {
  path: ImageAvatar
} satisfies AvatarProps;

describe('Avatar classNames', () => {
  test('should has className when provided', () => {
    const { getByTestId } = render(<Avatar {...avatarProps} className='avatar_classname' />);

    const avatar = getByTestId(AVATAR_TEST_IDS.AVATAR);

    expect(avatar).toHaveClass('avatar_classname');
  });

  test('should has not className when provided', () => {
    const { queryByTestId } = render(<Avatar {...avatarProps} />);

    const avatar = queryByTestId(AVATAR_TEST_IDS.AVATAR);

    expect(avatar).not.toHaveClass('avatar_classname');
  });
});