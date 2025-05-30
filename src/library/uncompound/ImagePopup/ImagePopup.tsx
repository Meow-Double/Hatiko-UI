import { useState } from 'react';
import clsx from 'clsx';

import styles from './ImagePopup.module.css';

type ImageTypes = {
  id: number | string;
  url: string;
};

interface ImagePopupProps {
  images: ImageTypes[];
}

export const ImagePopup = (props: ImagePopupProps) => {
  const { images } = props;
  const [activeImage] = useState<ImageTypes>(images[0]);

  // const onNextImage = () => {
  //   const currentIndexImage = images.findIndex((image) => image === activeImage);

  //   if (images.length - 1 <= currentIndexImage) {
  //     setActiveImage(images[0]);
  //   } else {
  //     setActiveImage(images[currentIndexImage + 1]);
  //   }
  // };

  // const onPrevImage = () => {
  //   const currentIndexImage = images.findIndex((image) => image === activeImage);

  //   if (currentIndexImage <= 0) {
  //     setActiveImage(images[images.length - 1]);
  //   } else {
  //     setActiveImage(images[currentIndexImage - 1]);
  //   }
  // };

  return (
    <div className={styles.overlay}>
      {/* <button onClick={onPrevImage}>prev</button> */}
      <ul className={styles.menu}>
        {images.map((image) => (
          <div className={styles.test}   key={image.id}>
            <li
              className={clsx(styles.item, { [styles.active]: activeImage.id === image.id })}
            >
              <img className={styles.img} src={image.url} alt='picture' />
            </li>
          </div>
        ))}
      </ul>
      {/* <button onClick={onNextImage}>next</button> */}
    </div>
  );
};