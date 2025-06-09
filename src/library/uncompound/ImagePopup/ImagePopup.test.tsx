import { render } from '@testing-library/react';
import { vitest } from 'vitest';

import Image1 from '@/library/storybook/images/image-1.jpg';
import Image2 from '@/library/storybook/images/image-2.jpg';
import Image3 from '@/library/storybook/images/image-3.jpg';

import { ImagePopup, IMAGEPOPUP_TEST_IDS, ImagePopupProps } from './ImagePopup';

import styles from './ImagePopup.module.css';

const imagePopupProps = {
  closePopup: vitest.fn(),
  isOpen: true,
  images: [Image1, Image2, Image3]
} satisfies ImagePopupProps;

describe('ImagePopup', () => {
  test('should has active class on overlay when render component', () => {
    const { getByTestId } = render(<ImagePopup {...imagePopupProps} />);

    const overlay = getByTestId(IMAGEPOPUP_TEST_IDS.OVERLAY);

    expect(overlay).toHaveClass(styles.active_overlay);
  });
});

describe('ImagePopup classNames', () => {
  test('should has classNameOverlay when provided', () => {
    const { getByTestId } = render(
      <ImagePopup {...imagePopupProps} classNameOverlay='image-popup_overlay' />
    );

    const overlay = getByTestId(IMAGEPOPUP_TEST_IDS.OVERLAY);

    expect(overlay).toHaveClass('image-popup_overlay');
  });
  test('should has classNameOverlay when provided', () => {
    const { queryByTestId } = render(<ImagePopup {...imagePopupProps} />);
    const overlay = queryByTestId(IMAGEPOPUP_TEST_IDS.OVERLAY);

    expect(overlay).not.toHaveClass('image-popup_overlay');
  });

  test('should has classNameImages when provided', () => {
    const { getByTestId } = render(
      <ImagePopup {...imagePopupProps} classNameImages='image-popup_images' />
    );

    const images = getByTestId(IMAGEPOPUP_TEST_IDS.IMAGES);

    expect(images).toHaveClass('image-popup_images');
  });
  test('should has classNameImages when provided', () => {
    const { queryByTestId } = render(<ImagePopup {...imagePopupProps} />);
    const images = queryByTestId(IMAGEPOPUP_TEST_IDS.IMAGES);

    expect(images).not.toHaveClass('image-popup_images');
  });
});