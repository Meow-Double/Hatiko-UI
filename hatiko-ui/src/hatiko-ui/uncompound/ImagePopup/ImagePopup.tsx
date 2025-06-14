
import { useState } from 'react';
import clsx from 'clsx';

import styles from './ImagePopup.module.css';

export interface ImagePopupProps {
  images: string[];
  isOpen:boolean;
  closePopup: () => void;
  classNameOverlay?:string;
  classNameImages?:string;
}

export const IMAGEPOPUP_TEST_IDS = {
  OVERLAY:"imagepopup-overlay",
  IMAGES:"imagepopup-images"
}

export const ImagePopup = (props: ImagePopupProps) => {
  const {images, classNameOverlay, classNameImages, isOpen, closePopup} = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrevImage = (e:React.MouseEvent) => {
      e.stopPropagation();
    if(currentIndex <= 0){
      setCurrentIndex(images.length - 1)
    }else{
      setCurrentIndex(prev => prev - 1)
    }
  }

  const onNextIndex = (e:React.MouseEvent) => {
      e.stopPropagation();
      if(currentIndex >= images.length - 1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(prev => prev + 1)
    }
  }

  const onImageClick = (e:React.MouseEvent) => {
    e.stopPropagation();
  }

  return <div 
    className={clsx(styles.overlay, classNameOverlay, {[styles.active_overlay]: isOpen})} 
    onClick={closePopup}
    data-testid={IMAGEPOPUP_TEST_IDS.OVERLAY}
  >
    <button className={styles.btn} onClick={onPrevImage}>prev</button>
    <div 
      className={clsx(styles.images, classNameImages)} 
      onClick={onImageClick}
      data-testid={IMAGEPOPUP_TEST_IDS.IMAGES}
    >
      {images.map((src, index) => (
        <img 
                className={clsx(styles.img, {[styles.active]: index ===   currentIndex})}
                alt={`slide-${index}`} 
               src={src} 
                key={index} 
              />
            ))}
    </div>
    <button className={styles.btn} onClick={onNextIndex}>next</button>
  </div>
};